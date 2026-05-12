import { Lock } from "lucide-react";
import { btnStyle } from "../shared/styles";
import FSMBackground from "../shared/FSMBackground";

export default function MenuScreen({ onPlay }) {
    return (
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f4f1ea", position: "relative", overflow: "hidden" }}>
            <FSMBackground />

            <div className="u-fadeup" style={{ textAlign: "center", maxWidth: "520px", width: "100%", padding: "2rem", position: "relative", zIndex: 1 }}>

                {/* Icon */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <div style={{ width: "96px", height: "96px", borderRadius: "50%", backgroundColor: "#1a1a1a", border: "4px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "6px 6px 0 #aaa9a2" }}>
                        <Lock size={42} color="#f4f1ea" />
                    </div>
                </div>

                {/* Title */}
                <h1 style={{ fontSize: "clamp(3rem,10vw,5.5rem)", fontWeight: "900", letterSpacing: "0.35em", color: "#1a1a1a", margin: 0, lineHeight: 1 }}>UNVAULT</h1>
                <p style={{ fontSize: "13px", letterSpacing: "0.2em", color: "#888", marginTop: "6px", marginBottom: "4px" }}>[ THE PASSCODE GAME ]</p>
                <p style={{ fontSize: "12px", color: "#aaa", marginBottom: "3rem" }}>A finite state machine simulator in disguise.</p>

                {/* Buttons */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                    <button onClick={onPlay} className="u-hover" style={btnStyle("#1a1a1a", "#f4f1ea", "4px solid #1a1a1a")}>
                        ▶&nbsp;&nbsp;PLAY
                    </button>
                    <button className="u-hover" style={btnStyle("transparent", "#1a1a1a", "2px solid #1a1a1a")}>
                        ⚙&nbsp;&nbsp;SETTINGS
                    </button>
                    <button className="u-hover" style={btnStyle("transparent", "#1a1a1a", "2px solid #1a1a1a")}>
                        ?&nbsp;&nbsp;TUTORIAL
                    </button>
                </div>

                <p style={{ fontSize: "11px", color: "#bbb", marginTop: "3rem" }}>
                    Satisfy every rule. Reach S<sub>accept</sub>. Break the vault.
                </p>
            </div>
        </div>
    );
}