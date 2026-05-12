import { Unlock, RotateCcw } from "lucide-react";
import { Badge } from "../shared/UIComponents";
import { DIFF_META } from "../game/rules";

export default function WinScreen({ platform, password, difficulty, okCount, onReset }) {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", backgroundColor: "#f4f1ea" }}>
            <div className="u-fadeup" style={{ maxWidth: "540px", width: "100%", textAlign: "center" }}>

                {/* Stamp */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <div className="u-stamp" style={{ width: "120px", height: "120px", borderRadius: "50%", backgroundColor: "#10b981", border: "5px solid #1a1a1a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "8px 8px 0 #1a1a1a" }}>
                        <Unlock size={46} color="white" />
                    </div>
                </div>

                <h1 style={{ fontSize: "clamp(2rem,8vw,3.5rem)", fontWeight: "900", letterSpacing: "0.2em", color: "#10b981", margin: 0 }}>VAULT OPENED</h1>
                <p style={{ fontSize: "16px", fontWeight: "bold", color: "#1a1a1a", marginTop: "4px", marginBottom: "0" }}>
                    S<sub>accept</sub> STATE REACHED
                </p>
                <p style={{ fontSize: "12px", color: "#888", marginTop: "4px", marginBottom: "1.5rem" }}>
                    All {okCount} rules satisfied · {difficulty?.toUpperCase()} mode
                </p>

                {/* Result card */}
                <div style={{ padding: "1.5rem", border: "3px solid #1a1a1a", backgroundColor: "white", textAlign: "left", boxShadow: "6px 6px 0 #aaa9a2", marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px dashed #ccc" }}>
                        <span style={{ fontSize: "2.5rem" }}>{platform.emoji}</span>
                        <div>
                            <div style={{ fontWeight: "900", fontSize: "18px", color: "#1a1a1a" }}>{platform.name}</div>
                            <div style={{ fontSize: "12px", color: "#888" }}>Account compromised — {difficulty} difficulty</div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: "#f4f1ea", border: "2px solid #1a1a1a", padding: "12px" }}>
                        <div style={{ fontSize: "10px", fontWeight: "bold", letterSpacing: "0.15em", color: "#888", marginBottom: "6px" }}>ACCEPTED PASSWORD</div>
                        <div style={{ fontWeight: "900", fontSize: "16px", wordBreak: "break-all", fontFamily: "'Courier New', monospace", color: "#2563eb" }}>
                            {password}
                        </div>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
                        <Badge bg="#10b981" color="white">✓ All rules satisfied</Badge>
                        <Badge bg="#2563eb" color="white">✓ FSM: Saccept</Badge>
                        <Badge bg={DIFF_META[difficulty].color} color="white">{difficulty?.toUpperCase()}</Badge>
                    </div>
                </div>

                <button
                    onClick={onReset}
                    className="u-hover"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 36px", fontWeight: "900", fontSize: "14px", letterSpacing: "0.18em", border: "3px solid #1a1a1a", cursor: "pointer", backgroundColor: "#1a1a1a", color: "#f4f1ea", boxShadow: "5px 5px 0 #888780" }}
                >
                    <RotateCcw size={16} /> PLAY AGAIN
                </button>
            </div>
        </div>
    );
}