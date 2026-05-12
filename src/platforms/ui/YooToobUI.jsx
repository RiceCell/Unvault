import { useState } from "react";
import { Lock, Unlock } from "lucide-react";

const RED = "#ff0000";
const DARK = "#0f0f0f";
const SUB = "#606060";
const BORDER = "#e5e5e5";
const BG = "#f9f9f9";

const NAV_ITEMS = [
    { icon: "🏠", label: "Home" },
    { icon: "▶", label: "Shorts" },
    { icon: "📺", label: "Subscriptions" },
    { icon: "📁", label: "Library" },
    { icon: "🕐", label: "History" },
];

const SETTINGS_SECTIONS = [
    { label: "Account", active: true },
    { label: "Notifications" },
    { label: "Playback and performance" },
    { label: "Privacy" },
    { label: "Connected apps" },
    { label: "Billing and payments" },
    { label: "Advanced settings" },
];

export default function YooToobUI({
    password, setPassword,
    showPw, setShowPw,
    inputShake, allOk,
    onSubmit, brokenCount, difficulty
}) {
    const [focused, setFocused] = useState(false);

    const strength = Math.min(10, password.length);
    const strengthColor =
        strength === 0 ? BORDER :
            strength <= 3 ? "#ff4e45" :
                strength <= 6 ? "#ffa500" :
                    "#2ba640";

    return (
        <div style={{ fontFamily: "'Roboto', Arial, sans-serif", backgroundColor: "white", minHeight: "560px", color: DARK, fontSize: "14px" }}>

            {/* ── Top navigation bar ── */}
            <div style={{ height: "56px", borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", padding: "0 16px", gap: "8px", backgroundColor: "white", position: "sticky", top: 0, zIndex: 10 }}>

                {/* Left: hamburger + logo */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", width: "240px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", cursor: "pointer", padding: "8px" }}>
                        {[0, 1, 2].map(i => <div key={i} style={{ width: "18px", height: "2px", backgroundColor: DARK }} />)}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                        <div style={{ backgroundColor: RED, borderRadius: "6px", width: "32px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid white", marginLeft: "2px" }} />
                        </div>
                        <span style={{ fontSize: "18px", fontWeight: "700", letterSpacing: "-0.3px", marginLeft: "4px" }}>YooToob</span>
                    </div>
                </div>

                {/* Center: search */}
                <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", maxWidth: "540px", width: "100%" }}>
                        <div style={{ flex: 1, display: "flex", alignItems: "center", border: `1px solid ${BORDER}`, borderRight: "none", borderRadius: "20px 0 0 20px", padding: "0 16px", height: "36px" }}>
                            <input placeholder="Search" disabled style={{ border: "none", outline: "none", fontSize: "14px", color: SUB, width: "100%", backgroundColor: "transparent", cursor: "not-allowed" }} />
                        </div>
                        <div style={{ backgroundColor: BG, border: `1px solid ${BORDER}`, borderLeft: "1px solid #ccc", borderRadius: "0 20px 20px 0", width: "56px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            🔍
                        </div>
                    </div>
                </div>

                {/* Right: icons + avatar */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "240px", justifyContent: "flex-end" }}>
                    {["🎬", "🔔"].map(ic => (
                        <div key={ic} style={{ width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", cursor: "pointer" }}>{ic}</div>
                    ))}
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: RED, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "700", color: "white", cursor: "pointer" }}>Y</div>
                </div>
            </div>

            {/* ── Body ── */}
            <div style={{ display: "flex" }}>

                {/* LEFT: narrow icon nav */}
                <div style={{ width: "72px", flexShrink: 0, padding: "12px 0", borderRight: `1px solid ${BORDER}` }}>
                    {NAV_ITEMS.map((item, i) => (
                        <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", padding: "14px 0", cursor: "pointer", backgroundColor: i === 0 ? BG : "transparent", borderRadius: "10px", margin: "0 4px" }}>
                            <span style={{ fontSize: "20px" }}>{item.icon}</span>
                            <span style={{ fontSize: "9px", fontWeight: i === 0 ? "700" : "400", color: i === 0 ? DARK : SUB }}>{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* MAIN: settings area */}
                <div style={{ flex: 1, padding: "24px 32px", backgroundColor: "white" }}>

                    {/* Page title */}
                    <h2 style={{ margin: "0 0 24px", fontSize: "22px", fontWeight: "400", color: DARK }}>Settings</h2>

                    <div style={{ display: "flex", gap: "32px" }}>

                        {/* Settings sidebar */}
                        <div style={{ width: "220px", flexShrink: 0 }}>
                            {SETTINGS_SECTIONS.map(s => (
                                <div key={s.label} style={{
                                    padding: "10px 16px", borderRadius: "10px", cursor: "pointer", fontSize: "14px",
                                    backgroundColor: s.active ? "#f2f2f2" : "transparent",
                                    color: s.active ? DARK : SUB,
                                    fontWeight: s.active ? "500" : "400",
                                    borderLeft: s.active ? `3px solid ${RED}` : "3px solid transparent",
                                    marginBottom: "2px",
                                    transition: "background-color .1s",
                                }}>
                                    {s.label}
                                </div>
                            ))}
                        </div>

                        {/* Account → Security → Password */}
                        <div style={{ flex: 1, maxWidth: "520px" }}>

                            {/* Breadcrumb */}
                            <div style={{ fontSize: "12px", color: SUB, marginBottom: "20px", display: "flex", alignItems: "center", gap: "4px" }}>
                                <span style={{ color: DARK, cursor: "pointer" }}>Account</span>
                                <span>›</span>
                                <span style={{ color: DARK, cursor: "pointer" }}>Sign-in & security</span>
                                <span>›</span>
                                <span>Change password</span>
                            </div>

                            <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: "20px", marginBottom: "24px" }}>
                                <h3 style={{ margin: "0 0 4px", fontSize: "16px", fontWeight: "500" }}>Change your YooToob password</h3>
                                <p style={{ margin: 0, fontSize: "13px", color: SUB }}>
                                    Choose a strong password and don't reuse it for other accounts.
                                </p>
                            </div>

                            {/* Current password */}
                            <div style={{ marginBottom: "20px" }}>
                                <label style={{ display: "block", fontSize: "12px", fontWeight: "500", color: SUB, marginBottom: "6px", letterSpacing: "0.01em" }}>
                                    Current password
                                </label>
                                <input
                                    type="password" disabled placeholder="••••••••••"
                                    style={{
                                        width: "100%", padding: "10px 14px", fontSize: "14px",
                                        border: `1px solid ${BORDER}`, borderRadius: "4px",
                                        backgroundColor: BG, color: "#bbb",
                                        boxSizing: "border-box", cursor: "not-allowed", outline: "none",
                                    }}
                                />
                                <div style={{ marginTop: "6px" }}>
                                    <span style={{ fontSize: "13px", color: RED, cursor: "pointer", fontWeight: "500" }}>Forgot password?</span>
                                </div>
                            </div>

                            {/* New password — live input */}
                            <div style={{ marginBottom: "20px" }}>
                                <label style={{ display: "block", fontSize: "12px", fontWeight: "500", color: SUB, marginBottom: "6px" }}>
                                    New password
                                </label>
                                <div
                                    className={inputShake ? "u-shake" : ""}
                                    style={{
                                        display: "flex", alignItems: "center",
                                        border: `2px solid ${allOk ? "#2ba640" : focused ? RED : BORDER}`,
                                        borderRadius: "4px",
                                        backgroundColor: allOk ? "#f0fff3" : "white",
                                        transition: "border-color .2s, background-color .2s",
                                    }}
                                >
                                    <input
                                        type={showPw ? "text" : "password"}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        onFocus={() => setFocused(true)}
                                        onBlur={() => setFocused(false)}
                                        placeholder="New password"
                                        style={{
                                            flex: 1, padding: "10px 14px", fontSize: "14px",
                                            border: "none", outline: "none",
                                            backgroundColor: "transparent", color: DARK,
                                        }}
                                    />
                                    {difficulty !== "difficult" && (
                                        <button
                                            onClick={() => setShowPw(!showPw)}
                                            style={{
                                                padding: "0 14px", background: "none", border: "none",
                                                cursor: "pointer", color: SUB, fontSize: "13px",
                                                fontWeight: "500", whiteSpace: "nowrap",
                                            }}
                                        >
                                            {showPw ? "Hide" : "Show"}
                                        </button>
                                    )}
                                </div>

                                {/* Strength meter */}
                                <div style={{ marginTop: "8px" }}>
                                    <div style={{ display: "flex", gap: "3px", marginBottom: "4px" }}>
                                        {Array(10).fill(0).map((_, i) => (
                                            <div key={i} style={{
                                                flex: 1, height: "3px", borderRadius: "2px",
                                                backgroundColor: i < strength ? strengthColor : BORDER,
                                                transition: "background-color .2s",
                                            }} />
                                        ))}
                                    </div>
                                    {password.length > 0 && (
                                        <span style={{ fontSize: "11px", color: strengthColor, fontWeight: "500" }}>
                                            {strength <= 3 ? "Weak" : strength <= 6 ? "Fair" : "Strong"}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Confirm password */}
                            <div style={{ marginBottom: "24px" }}>
                                <label style={{ display: "block", fontSize: "12px", fontWeight: "500", color: SUB, marginBottom: "6px" }}>
                                    Confirm new password
                                </label>
                                <input
                                    type="password" disabled placeholder="Confirm your new password"
                                    style={{
                                        width: "100%", padding: "10px 14px", fontSize: "14px",
                                        border: `1px solid ${BORDER}`, borderRadius: "4px",
                                        backgroundColor: BG, color: "#bbb",
                                        boxSizing: "border-box", cursor: "not-allowed", outline: "none",
                                    }}
                                />
                            </div>

                            {/* Error banner */}
                            {!allOk && password.length > 0 && (
                                <div style={{
                                    display: "flex", alignItems: "center", gap: "10px",
                                    padding: "10px 14px", backgroundColor: "#fff5f5",
                                    border: `1px solid #ffc0c0`, borderRadius: "4px",
                                    marginBottom: "20px",
                                }}>
                                    <span style={{ color: RED, fontSize: "16px" }}>⚠</span>
                                    <span style={{ fontSize: "13px", color: "#cc0000" }}>
                                        {brokenCount} rule{brokenCount !== 1 ? "s" : ""} not yet satisfied.
                                    </span>
                                </div>
                            )}

                            {/* Action buttons */}
                            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                                <button style={{ padding: "10px 24px", fontSize: "14px", fontWeight: "500", backgroundColor: "transparent", color: DARK, border: "none", borderRadius: "18px", cursor: "pointer" }}>
                                    Cancel
                                </button>
                                <button
                                    onClick={onSubmit}
                                    style={{
                                        padding: "10px 24px", fontSize: "14px", fontWeight: "500",
                                        backgroundColor: allOk ? "#2ba640" : RED,
                                        color: "white", border: "none", borderRadius: "18px",
                                        cursor: "pointer", display: "flex", alignItems: "center", gap: "8px",
                                        transition: "background-color .2s, box-shadow .2s",
                                        boxShadow: allOk ? "0 2px 8px rgba(43,166,64,.4)" : "0 2px 8px rgba(255,0,0,.3)",
                                    }}
                                >
                                    {allOk ? <Unlock size={15} /> : <Lock size={15} />}
                                    {allOk ? "Save changes" : "Save changes"}
                                </button>
                            </div>

                            {/* Vault hint */}
                            <div style={{ marginTop: "20px", padding: "12px 16px", backgroundColor: "#fff5f5", borderRadius: "8px", border: `1px solid #ffd0d0` }}>
                                <p style={{ margin: 0, fontSize: "12px", color: "#cc0000" }}>
                                    🔒 <strong>Vault condition active.</strong> Your password must satisfy all rules on the right before it can be saved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}