import { useState } from "react";
import { BackBtn } from "../shared/UIComponents";
import { headStyle, subStyle } from "../shared/styles";
import { PLATFORMS } from "../platforms/platforms";

export default function TargetScreen({ onSelect, onBack }) {
    const [selected, setSelected] = useState(null);

    const handleClick = (p) => {
        setSelected(p);
        setTimeout(() => onSelect(p), 620); // wait for bar to finish, then go
    };

    return (
        <div style={{ minHeight: "100vh", padding: "2rem", backgroundColor: "#f4f1ea", position: "relative", overflow: "hidden" }}>

            {/* ── Horizontal bar that shoots left & right ── */}
            {selected && (
                <div style={{
                    position: "fixed", inset: 0, zIndex: 50,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    pointerEvents: "none",
                }}>
                    <div style={{
                        backgroundColor: selected.color,
                        width: "100vw",
                        height: "72px",
                        transform: "scaleX(1)",
                        transformOrigin: "center",
                        animation: "barExpand 0.5s cubic-bezier(.7,0,.2,1) forwards",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gap: "14px",
                    }}>
                        <style>{`
              @keyframes barExpand {
                from { clip-path: inset(0 50% 0 50%); }
                to   { clip-path: inset(0 0% 0 0%); }
              }
            `}</style>
                        <span style={{ fontSize: "1.8rem" }}>{selected.emoji}</span>
                        <span style={{
                            fontSize: "15px", fontWeight: "900", letterSpacing: "0.25em",
                            color: "white", fontFamily: "'Courier New', monospace", whiteSpace: "nowrap",
                        }}>
                            ACCESSING {selected.name.toUpperCase()}…
                        </span>
                    </div>
                </div>
            )}

            {/* ── Normal grid ── */}
            <div className="u-fadeup" style={{ maxWidth: "960px", margin: "0 auto" }}>
                <BackBtn onClick={onBack} />
                <h2 style={headStyle}>SELECT TARGET</h2>
                <p style={subStyle}>Which account are you breaking into?</p>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
                    gap: "12px", marginTop: "1.5rem"
                }}>
                    {PLATFORMS.map(p => (
                        <button
                            key={p.id}
                            onClick={() => handleClick(p)}
                            className="u-hover"
                            style={{
                                padding: "1.1rem", backgroundColor: "white",
                                border: "2px solid #1a1a1a", cursor: "pointer",
                                textAlign: "left", boxShadow: "4px 4px 0 #ccc9c0",
                                opacity: selected && selected.id !== p.id ? 0.3 : 1,
                                transition: "opacity 0.25s ease",
                            }}
                        >
                            <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{p.emoji}</div>
                            <div style={{ fontWeight: "900", fontSize: "14px", color: "#1a1a1a" }}>{p.name}</div>
                            <div style={{ fontSize: "11px", color: "#888", marginTop: "3px", lineHeight: "1.4" }}>{p.tagline}</div>
                            <div style={{ marginTop: "10px", height: "3px", backgroundColor: p.color, borderRadius: "2px" }} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}