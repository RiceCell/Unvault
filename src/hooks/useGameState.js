import { useState, useEffect, useRef } from "react";
import { RULES } from "../game/rules";

export default function useGameState() {
    const [screen, setScreen] = useState("menu");
    const [difficulty, setDifficulty] = useState(null);
    const [platform, setPlatform] = useState(null);
    const [password, setPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [inputShake, setInputShake] = useState(false);
    const [broken, setBroken] = useState(new Set());
    const prevOk = useRef(new Set());

    // platform and difficulty must both exist before looking up rules
    const rules = (platform && difficulty) ? (RULES[`${platform.id}_${difficulty}`] ?? []) : [];
    const results = rules.map(r => ({ ...r, ok: r.check(password) }));
    const okCount = results.filter(r => r.ok).length;
    const allOk = okCount === rules.length && rules.length > 0;
    const pct = rules.length > 0 ? (okCount / rules.length) * 100 : 0;
    const digitSum = (password.match(/\d/g) || []).reduce((s, n) => s + +n, 0);

    // Detect newly-broken rules → shake
    useEffect(() => {
        if (!password) return;
        const nowOk = new Set(results.filter(r => r.ok).map(r => r.id));
        const newBroken = new Set([...prevOk.current].filter(id => !nowOk.has(id)));
        if (newBroken.size > 0) {
            setBroken(newBroken);
            setInputShake(true);
            setTimeout(() => { setBroken(new Set()); setInputShake(false); }, 650);
        }
        prevOk.current = nowOk;
    }, [password]);

    // Force hide password when in difficult mode
    useEffect(() => {
        if (difficulty === "difficult") setShowPw(false);
    }, [difficulty]);

    const doSubmit = () => {
        if (allOk) { setScreen("win"); }
        else { setInputShake(true); setTimeout(() => setInputShake(false), 650); }
    };

    const goBack = () => {
        const flow = ["menu", "difficulty", "target", "game"];
        const idx = flow.indexOf(screen);
        if (idx > 0) {
            setScreen(flow[idx - 1]);
            if (screen === "game") { setPassword(""); prevOk.current = new Set(); }
        }
    };

    const reset = () => {
        setScreen("menu"); setDifficulty(null); setPlatform(null);
        setPassword(""); prevOk.current = new Set();
    };

    return {
        screen, setScreen,
        difficulty, setDifficulty,
        platform, setPlatform,
        password, setPassword,
        showPw, setShowPw,
        inputShake, broken,
        results, okCount, allOk, pct, digitSum,
        doSubmit, goBack, reset,
    };
}