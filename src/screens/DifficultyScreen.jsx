import { ChevronRight } from "lucide-react";
import { BackBtn } from "../shared/UIComponents";
import { headStyle, subStyle } from "../shared/styles";
import { DIFF_META } from "../game/rules";

export default function DifficultyScreen({ onSelect, onBack }) {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", backgroundColor: "#f4f1ea" }}>
            <div className="u-fadeup" style={{ maxWidth: "520px", width: "100%" }}>
                <BackBtn onClick={onBack} />
                <h2 style={headStyle}>SELECT DIFFICULTY</h2>
                <p style={subStyle}>Choose how deep the vault goes.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "1.5rem" }}>
                    {Object.entries(DIFF_META).map(([id, meta]) => (
                        <button
                            key={id}
                            onClick={() => onSelect(id)}
                            className="u-hover"
                            style={{
                                display: "flex", alignItems: "center", justifyContent: "space-between",
                                padding: "1.25rem 1.5rem", backgroundColor: "white",
                                border: "3px solid #1a1a1a", cursor: "pointer",
                                textAlign: "left", width: "100%", boxShadow: "4px 4px 0 #ccc9c0"
                            }}
                        >
                            <div>
                                <div style={{ fontSize: "16px", fontWeight: "900", letterSpacing: "0.15em", color: meta.color }}>{meta.label}</div>
                                <div style={{ fontSize: "13px", fontWeight: "bold", color: "#1a1a1a", marginTop: "2px" }}>{meta.desc}</div>
                                <div style={{ fontSize: "11px", color: "#888", marginTop: "4px" }}>{meta.sub}</div>
                            </div>
                            <ChevronRight size={22} color="#1a1a1a" style={{ flexShrink: 0 }} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}