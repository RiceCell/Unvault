import { useState } from "react";
import { Eye, EyeOff, Lock, Unlock } from "lucide-react";

export default function FisbokUI({
    password, setPassword,
    showPw, setShowPw,
    inputShake, allOk,
    onSubmit, brokenCount, difficulty
}) {
    const [activeField, setActiveField] = useState(null);

    return (
        <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", backgroundColor: "#f0f2f5", minHeight: "500px", padding: "0" }}>

            {/* Facebook-style top nav */}
            <div style={{ backgroundColor: "#1877f2", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "56px", boxShadow: "0 2px 4px rgba(0,0,0,.2)" }}>
                <span style={{ color: "white", fontSize: "24px", fontWeight: "900", letterSpacing: "-1px" }}>fisbok</span>
                <div style={{ display: "flex", gap: "8px" }}>
                    {["🔍", "🏠", "👥", "📺", "🛒"].map(ic => (
                        <div key={ic} style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", cursor: "pointer" }}>{ic}</div>
                    ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>👤</div>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>▼</div>
                </div>
            </div>

            {/* Page body */}
            <div style={{ display: "flex", gap: "16px", padding: "20px", maxWidth: "900px", margin: "0 auto" }}>

                {/* LEFT: Settings sidebar */}
                <div style={{ width: "280px", flexShrink: 0 }}>
                    <div style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 1px 2px rgba(0,0,0,.1)", padding: "8px 0", marginBottom: "8px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 12px" }}>
                            <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#1877f2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>🐟</div>
                            <div>
                                <div style={{ fontWeight: "700", fontSize: "15px", color: "#050505" }}>Fisbok User</div>
                                <div style={{ fontSize: "13px", color: "#65676b" }}>See your profile</div>
                            </div>
                        </div>
                        <hr style={{ border: "none", borderTop: "1px solid #e4e6eb", margin: "8px 0" }} />
                        {["Settings & privacy", "Help & support", "Display & accessibility", "Log out"].map((item, i) => (
                            <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 12px", cursor: "pointer", borderRadius: "8px", margin: "0 4px", backgroundColor: i === 0 ? "#e7f3ff" : "transparent" }}>
                                <span style={{ fontSize: "13px", color: i === 0 ? "#1877f2" : "#050505", fontWeight: i === 0 ? "600" : "400" }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Password change form */}
                <div style={{ flex: 1 }}>

                    {/* Breadcrumb */}
                    <div style={{ fontSize: "13px", color: "#65676b", marginBottom: "12px" }}>
                        <span style={{ color: "#1877f2", cursor: "pointer" }}>Settings</span>
                        <span style={{ margin: "0 6px" }}>›</span>
                        <span style={{ color: "#1877f2", cursor: "pointer" }}>Security and Login</span>
                        <span style={{ margin: "0 6px" }}>›</span>
                        <span>Change Password</span>
                    </div>

                    <div style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 1px 2px rgba(0,0,0,.1)", overflow: "hidden" }}>

                        {/* Section header */}
                        <div style={{ padding: "16px 20px", borderBottom: "1px solid #e4e6eb" }}>
                            <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#050505" }}>Change password</h2>
                            <p style={{ margin: "4px 0 0", fontSize: "14px", color: "#65676b" }}>
                                We recommend using a strong password that you don't use anywhere else.
                            </p>
                        </div>

                        <div style={{ padding: "20px" }}>

                            {/* Current password */}
                            <div style={{ marginBottom: "16px" }}>
                                <label style={{ display: "block", fontSize: "15px", fontWeight: "600", color: "#050505", marginBottom: "6px" }}>
                                    Current password
                                </label>
                                <div style={{ position: "relative" }}>
                                    <input
                                        type={showPw ? "text" : "password"}
                                        disabled
                                        placeholder="••••••••••••"
                                        style={{ width: "100%", padding: "11px 14px", fontSize: "15px", border: "1px solid #ccd0d5", borderRadius: "6px", backgroundColor: "#f5f6f7", color: "#bbb", boxSizing: "border-box", cursor: "not-allowed" }}
                                    />
                                </div>
                                <div style={{ marginTop: "6px" }}>
                                    <span style={{ fontSize: "13px", color: "#1877f2", cursor: "pointer", fontWeight: "600" }}>Forgotten your password?</span>
                                </div>
                            </div>

                            {/* New password — THE real input */}
                            <div style={{ marginBottom: "16px" }}>
                                <label style={{ display: "block", fontSize: "15px", fontWeight: "600", color: "#050505", marginBottom: "6px" }}>
                                    New password
                                </label>
                                <div
                                    className={inputShake ? "u-shake" : ""}
                                    style={{
                                        display: "flex", alignItems: "center",
                                        border: `2px solid ${allOk ? "#42b72a" : activeField === "new" ? "#1877f2" : "#ccd0d5"}`,
                                        borderRadius: "6px",
                                        backgroundColor: allOk ? "#f6fff4" : "white",
                                        transition: "border-color .2s, background-color .2s",
                                        boxShadow: activeField === "new" ? "0 0 0 2px rgba(24,119,242,.2)" : allOk ? "0 0 0 2px rgba(66,183,42,.2)" : "none",
                                    }}
                                >
                                    <input
                                        type={showPw ? "text" : "password"}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        onFocus={() => setActiveField("new")}
                                        onBlur={() => setActiveField(null)}
                                        placeholder="New password"
                                        style={{ flex: 1, padding: "11px 14px", fontSize: "15px", border: "none", outline: "none", backgroundColor: "transparent", borderRadius: "6px", color: "#050505" }}
                                    />
                                    {difficulty !== "difficult" && (
                                        <button onClick={() => setShowPw(!showPw)} style={{ padding: "0 12px", background: "none", border: "none", cursor: "pointer", color: "#65676b", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap" }}>
                                            {showPw ? "Hide" : "Show"}
                                        </button>
                                    )}
                                </div>

                                {/* Facebook-style password strength bar */}
                                <div style={{ marginTop: "8px" }}>
                                    <div style={{ display: "flex", gap: "4px", marginBottom: "4px" }}>
                                        {[1, 2, 3, 4].map(i => {
                                            const strength = Math.min(4, Math.floor(password.length / 4));
                                            return (
                                                <div key={i} style={{ flex: 1, height: "4px", borderRadius: "2px", backgroundColor: i <= strength ? (strength <= 1 ? "#f02849" : strength <= 2 ? "#f5a623" : strength <= 3 ? "#1877f2" : "#42b72a") : "#e4e6eb", transition: "background-color .3s" }} />
                                            );
                                        })}
                                    </div>

                                </div>
                            </div>

                            {/* Confirm password */}
                            <div style={{ marginBottom: "24px" }}>
                                <label style={{ display: "block", fontSize: "15px", fontWeight: "600", color: "#050505", marginBottom: "6px" }}>
                                    Confirm new password
                                </label>
                                <input
                                    type={showPw ? "text" : "password"}
                                    disabled
                                    placeholder="Re-enter new password"
                                    style={{ width: "100%", padding: "11px 14px", fontSize: "15px", border: "1px solid #e4e6eb", borderRadius: "6px", backgroundColor: "#f5f6f7", color: "#bbb", boxSizing: "border-box", cursor: "not-allowed" }}
                                />
                            </div>

                            {/* Error message */}
                            {!allOk && password.length > 0 && (
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", backgroundColor: "#fff0f0", border: "1px solid #ffd7d7", borderRadius: "6px", marginBottom: "16px" }}>
                                    <span style={{ color: "#f02849", fontSize: "18px" }}>⚠</span>
                                    <span style={{ fontSize: "13px", color: "#f02849", fontWeight: "600" }}>
                                        {brokenCount} rule{brokenCount !== 1 ? "s" : ""} not yet satisfied.
                                    </span>
                                </div>
                            )}

                            {/* Buttons */}
                            <div style={{ display: "flex", gap: "8px" }}>
                                <button style={{ padding: "10px 16px", fontSize: "15px", fontWeight: "600", backgroundColor: "transparent", color: "#1877f2", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                                    Cancel
                                </button>
                                <button
                                    onClick={onSubmit}
                                    style={{
                                        padding: "10px 20px", fontSize: "15px", fontWeight: "700",
                                        backgroundColor: allOk ? "#42b72a" : "#1877f2",
                                        color: "white", border: "none", borderRadius: "6px", cursor: "pointer",
                                        display: "flex", alignItems: "center", gap: "8px",
                                        transition: "background-color .2s",
                                        boxShadow: allOk ? "0 2px 6px rgba(66,183,42,.4)" : "0 2px 6px rgba(24,119,242,.4)"
                                    }}
                                >
                                    {allOk ? <Unlock size={16} /> : <Lock size={16} />}
                                    {allOk ? "Save changes" : "Save changes"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer note */}
                    <div style={{ marginTop: "12px", padding: "12px 16px", backgroundColor: "#e7f3ff", borderRadius: "8px", border: "1px solid #b8d4f7" }}>
                        <p style={{ margin: 0, fontSize: "13px", color: "#1877f2" }}>
                            🔒 <strong>Vault condition active.</strong> Your password must satisfy all rules on the right before it can be saved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}