import { ArrowLeft, Shield } from "lucide-react";
import RuleCard from "../shared/RuleCard";
import { DIFF_META } from "../game/rules";
import { PLATFORM_UI } from "../platforms/PlatformRegistry";

export default function GameScreen({
    platform, difficulty,
    password, setPassword,
    showPw, setShowPw,
    results, okCount, allOk, pct,
    inputShake, broken, digitSum,
    onSubmit, onBack
}) {
    const total = results.length;
    const diffMeta = DIFF_META[difficulty];

    // ── Chain-aware state position ───────────────────────────────────
    // Only advance the state based on rules that have been revealed.
    // The chain reveals up to (and including) the first unsatisfied rule,
    // so the FSM position = number of satisfied rules BEFORE that first failure.
    const firstFail = results.findIndex(r => !r.ok);
    const visibleCount = firstFail === -1 ? results.length : firstFail + 1;
    const chainOkCount = firstFail === -1 ? results.length : firstFail; // rules cleared in chain
    const chainPct = total > 0 ? (chainOkCount / total) * 100 : 0;

    const stateLabel = allOk ? "Saccept" : `S${chainOkCount}`;

    const PlatformUI = PLATFORM_UI[platform.id];
    const platformProps = {
        password, setPassword,
        showPw, setShowPw,
        inputShake, allOk,
        onSubmit,
        brokenCount: results.filter(r => !r.ok).length,
        difficulty,
    };

    return (
        <div style={{ minHeight: "100vh", padding: "1.25rem", backgroundColor: "#f4f1ea" }}>
            <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

                {/* Top bar */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <button
                        onClick={onBack}
                        style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "bold", letterSpacing: "0.1em", color: "#1a1a1a", background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}
                    >
                        <ArrowLeft size={15} /> EXIT VAULT
                    </button>
                    <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#888", fontWeight: "bold" }}>
                        TARGET: <span style={{ color: platform.color }}>{platform.name.toUpperCase()}</span>
                        &nbsp;·&nbsp;
                        DIFFICULTY: <span style={{ color: diffMeta.color }}>{difficulty.toUpperCase()}</span>
                    </div>
                </div>

                {/* Vault Stability Bar */}
                <div style={{ padding: "1rem 1.25rem", backgroundColor: "white", border: "2px solid #1a1a1a", marginBottom: "1rem", boxShadow: "4px 4px 0 #ccc9c0" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                        <span style={{ fontSize: "11px", fontWeight: "bold", letterSpacing: "0.15em", color: "#888" }}>
                            <Shield size={12} style={{ display: "inline", verticalAlign: "-1px", marginRight: "4px" }} />
                            VAULT STABILITY
                        </span>
                        <span style={{
                            fontSize: "11px", fontWeight: "900", padding: "3px 8px",
                            backgroundColor: allOk ? "#10b981" : "#1a1a1a",
                            color: "#f4f1ea", letterSpacing: "0.1em"
                        }}>
                            {stateLabel}
                        </span>
                    </div>

                    {/* State nodes — driven by chainOkCount */}
                    <div style={{ display: "flex", alignItems: "center", gap: "2px", marginBottom: "8px", overflowX: "auto", paddingBottom: "2px" }}>
                        {Array(total + 1).fill(0).map((_, i) => {
                            const done = i < chainOkCount;
                            const current = i === chainOkCount && !allOk;
                            const accept = i === total;
                            return (
                                <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                                    <div style={{
                                        width: "26px", height: "26px", display: "flex", alignItems: "center",
                                        justifyContent: "center", border: "2px solid #1a1a1a",
                                        fontSize: "9px", fontWeight: "900",
                                        backgroundColor: accept && allOk ? "#10b981" : done ? "#10b981" : current ? "#2563eb" : "#e8e5de",
                                        color: done || current || (accept && allOk) ? "white" : "#888"
                                    }}>
                                        {accept ? "✓" : i}
                                    </div>
                                    {i < total && <div style={{ width: "16px", height: "2px", backgroundColor: i < chainOkCount ? "#10b981" : "#ccc9c0" }} />}
                                </div>
                            );
                        })}
                    </div>

                    {/* Progress fill — driven by chainPct */}
                    <div style={{ height: "8px", border: "2px solid #1a1a1a", backgroundColor: "#e8e5de", overflow: "hidden" }}>
                        <div className="u-bar" style={{ height: "100%", width: `${allOk ? 100 : chainPct}%`, backgroundColor: allOk ? "#10b981" : "#2563eb" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3px" }}>
                        <span style={{ fontSize: "10px", color: "#bbb" }}>S₀</span>
                        <span style={{ fontSize: "10px", color: "#bbb" }}>S<sub>accept</sub></span>
                    </div>
                </div>

                {/* Main layout */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>

                    {/* LEFT: platform UI */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <PlatformUI {...platformProps} />
                    </div>

                    {/* RIGHT: Rule cards — chain unlock */}
                    <div style={{ width: "300px", flexShrink: 0 }}>
                        <div style={{ fontSize: "11px", fontWeight: "bold", letterSpacing: "0.15em", color: "#888", marginBottom: "8px" }}>
                            RULES — {chainOkCount}/{total} SATISFIED
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                            {results.slice(0, visibleCount).map((r, i) => (
                                <RuleCard
                                    key={r.id}
                                    index={i + 1}
                                    desc={r.desc}
                                    satisfied={r.ok}
                                    shaking={broken.has(r.id)}
                                    isNew={i === firstFail}
                                />
                            ))}
                        </div>
                        {allOk && (
                            <div className="u-fadeup" style={{ marginTop: "12px", padding: "12px", backgroundColor: "#10b981", border: "2px solid #1a1a1a", textAlign: "center" }}>
                                <div style={{ fontWeight: "900", letterSpacing: "0.12em", color: "white", fontSize: "13px" }}>ALL RULES MET</div>
                                <div style={{ fontSize: "11px", color: "rgba(255,255,255,.8)", marginTop: "3px" }}>Click UNLOCK VAULT ↙</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}