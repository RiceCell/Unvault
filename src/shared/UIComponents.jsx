import { ArrowLeft } from "lucide-react";

export function BackBtn({ onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                display: "flex", alignItems: "center", gap: "6px",
                fontSize: "12px", fontWeight: "bold", letterSpacing: "0.1em",
                color: "#1a1a1a", background: "none", border: "none",
                cursor: "pointer", marginBottom: "1.5rem", padding: 0
            }}
        >
            <ArrowLeft size={15} /> BACK
        </button>
    );
}

export function Stat({ label, value }) {
    return (
        <span style={{ fontSize: "11px", color: "#888" }}>
            {label}: <strong style={{ color: "#1a1a1a" }}>{value}</strong>
        </span>
    );
}

export function Badge({ bg, color, children }) {
    return (
        <span style={{
            padding: "4px 9px", fontSize: "11px", fontWeight: "bold",
            backgroundColor: bg, color, border: "2px solid #1a1a1a"
        }}>
            {children}
        </span>
    );
}