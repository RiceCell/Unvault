import { Check, X } from "lucide-react";

export default function RuleCard({ index, desc, satisfied, shaking, isNew }) {
    return (
        <div
            className={[
                "u-rule-in",
                shaking ? "u-shake" : "",
                satisfied ? "u-satisfied" : "",
                isNew ? "u-rule-pop" : "",
            ].join(" ")}
            style={{
                padding: "10px 12px",
                border: `2px solid ${satisfied ? "#10b981" : shaking ? "#dc2626" : "#1a1a1a"}`,
                backgroundColor: satisfied ? "#f0fff8" : shaking ? "#fff5f5" : "white",
                transition: "border-color .25s ease, background-color .25s ease",
            }}
        >
            <style>{`
        @keyframes rulePop {
          0%   { opacity: 0; transform: translateY(-8px) scale(0.96); }
          60%  { transform: translateY(2px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .u-rule-pop { animation: rulePop 0.38s cubic-bezier(.34,1.56,.64,1) both; }
      `}</style>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <div style={{
                    width: "22px", height: "22px", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: `2px solid ${satisfied ? "#10b981" : shaking ? "#dc2626" : "#1a1a1a"}`,
                    backgroundColor: satisfied ? "#10b981" : shaking ? "#dc2626" : "transparent",
                    color: satisfied || shaking ? "white" : "#1a1a1a",
                    fontSize: "10px", fontWeight: "900", marginTop: "1px",
                }}>
                    {satisfied ? <Check size={12} /> : shaking ? <X size={12} /> : index}
                </div>
                <p style={{
                    fontSize: "11px", lineHeight: "1.55",
                    color: satisfied ? "#065f46" : shaking ? "#dc2626" : "#1a1a1a",
                    margin: 0, fontFamily: "'Courier New', monospace",
                }}>
                    {desc}
                </p>
            </div>
        </div>
    );
}