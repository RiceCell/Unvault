import { Lock, Eye, EyeOff, Unlock } from "lucide-react";
import { Stat } from "../shared/UIComponents";
import { labelStyle } from "../shared/styles";

export default function MockPlatformPage({
    platform, password, setPassword,
    showPw, setShowPw,
    inputShake, allOk, digitSum,
    onSubmit, brokenCount
}) {
    const navItems = ["Profile", "Contact Info", "Username", "Language"];
    const secItems = ["Two-Factor Auth", "Login History", "Change Password", "Active Sessions", "Linked Devices"];

    return (
        <div style={{ border: "3px solid #1a1a1a", backgroundColor: "white", overflow: "hidden", boxShadow: "6px 6px 0 #aaa9a2" }}>

            {/* Platform header */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 16px", backgroundColor: platform.color }}>
                <span style={{ fontSize: "22px" }}>{platform.emoji}</span>
                <span style={{ fontWeight: "900", fontSize: "18px", letterSpacing: "0.1em", color: "white" }}>{platform.name}</span>
                <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
                    {["🔔", "👤", "🌐"].map(ic => (
                        <div key={ic} style={{
                            width: "32px", height: "32px", borderRadius: "50%",
                            border: "2px solid rgba(255,255,255,.5)", backgroundColor: "rgba(255,255,255,.15)",
                            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px"
                        }}>{ic}</div>
                    ))}
                </div>
            </div>

            {/* Tab nav */}
            <div style={{ display: "flex", borderBottom: "2px solid #1a1a1a", backgroundColor: "#faf9f6" }}>
                {["Settings", "Security & Login", "Privacy", "Notifications"].map((tab, i) => (
                    <div key={tab} style={{
                        padding: "9px 14px", fontSize: "12px", fontWeight: "bold",
                        cursor: "pointer", letterSpacing: "0.05em",
                        backgroundColor: i === 1 ? platform.color : "transparent",
                        color: i === 1 ? "white" : "#888",
                        borderRight: "1px solid #ddd"
                    }}>{tab}</div>
                ))}
            </div>

            {/* Content */}
            <div style={{ display: "flex" }}>

                {/* Sidebar nav */}
                <div style={{ width: "176px", flexShrink: 0, borderRight: "2px solid #e8e5de", padding: "16px 0", backgroundColor: "#faf9f6" }}>
                    <div style={{ fontSize: "10px", fontWeight: "bold", letterSpacing: "0.12em", color: "#aaa", padding: "0 14px 8px" }}>ACCOUNT</div>
                    {navItems.map(item => (
                        <div key={item} style={{ padding: "7px 14px", fontSize: "12px", color: "#999", cursor: "pointer" }}>{item}</div>
                    ))}
                    <div style={{ fontSize: "10px", fontWeight: "bold", letterSpacing: "0.12em", color: "#aaa", padding: "16px 14px 8px" }}>SECURITY</div>
                    {secItems.map((item, i) => (
                        <div key={item} style={{
                            padding: "7px 14px", fontSize: "12px", cursor: "pointer",
                            backgroundColor: i === 2 ? platform.bg : "transparent",
                            color: i === 2 ? platform.color : "#999",
                            fontWeight: i === 2 ? "bold" : "normal",
                            borderLeft: i === 2 ? `3px solid ${platform.color}` : "3px solid transparent"
                        }}>{item}</div>
                    ))}
                </div>

                {/* Form area */}
                <div style={{ flex: 1, padding: "1.5rem" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "900", color: "#1a1a1a", margin: "0 0 4px" }}>Change Password</h3>
                    <p style={{ fontSize: "12px", color: "#888", margin: "0 0 1.5rem", lineHeight: "1.6" }}>
                        Your account must satisfy all vault conditions before the new password is accepted.
                    </p>

                    {/* Current password (locked) */}
                    <div style={{ marginBottom: "14px" }}>
                        <label style={labelStyle}>Current Password</label>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 12px", border: "2px solid #e0ddd6", backgroundColor: "#faf9f6" }}>
                            <Lock size={14} color="#bbb" />
                            <span style={{ color: "#bbb", letterSpacing: "0.18em", fontSize: "14px" }}>••••••••••••</span>
                        </div>
                    </div>

                    {/* NEW PASSWORD — main input */}
                    <div style={{ marginBottom: "10px" }}>
                        <label style={labelStyle}>
                            New Password <span style={{ color: platform.color, fontWeight: "900" }}>★</span>
                        </label>
                        <div
                            className={inputShake ? "u-shake" : ""}
                            style={{
                                display: "flex", alignItems: "center",
                                border: `3px solid ${allOk ? "#10b981" : (password.length > 0 ? "#2563eb" : "#1a1a1a")}`,
                                backgroundColor: allOk ? "#f0fff8" : "white",
                                transition: "border-color .3s ease, background-color .3s ease",
                                boxShadow: allOk ? "0 0 0 3px rgba(16,185,129,.15)" : "none"
                            }}
                        >
                            <input
                                type={showPw ? "text" : "password"}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Enter your new password…"
                                style={{
                                    flex: 1, padding: "11px 12px", fontSize: "14px",
                                    border: "none", outline: "none", backgroundColor: "transparent",
                                    fontFamily: "'Courier New', monospace", color: "#1a1a1a",
                                    letterSpacing: showPw ? "0.02em" : "0.18em"
                                }}
                            />
                            <button onClick={() => setShowPw(!showPw)} style={{ padding: "0 12px", background: "none", border: "none", cursor: "pointer", color: "#888" }}>
                                {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
                            </button>
                        </div>

                        {/* Live stats */}
                        <div style={{ display: "flex", gap: "16px", marginTop: "6px" }}>
                            <Stat label="Length" value={password.length} />
                            <Stat label="Digit sum" value={digitSum} />
                            <Stat label="UPPER" value={(password.match(/[A-Z]/g) || []).length} />
                            <Stat label="lower" value={(password.match(/[a-z]/g) || []).length} />
                            <Stat label="Special" value={(password.match(/[!@#$%^&*]/g) || []).length} />
                        </div>
                    </div>

                    {/* Confirm */}
                    <div style={{ marginBottom: "1.5rem" }}>
                        <label style={labelStyle}>Confirm New Password</label>
                        <input
                            type="password" placeholder="Repeat your password…" disabled
                            style={{
                                width: "100%", padding: "9px 12px", border: "2px solid #e0ddd6",
                                backgroundColor: "#faf9f6", color: "#bbb",
                                fontFamily: "'Courier New', monospace", fontSize: "13px",
                                boxSizing: "border-box", cursor: "not-allowed"
                            }}
                        />
                    </div>

                    {/* Submit */}
                    <button
                        onClick={onSubmit}
                        className="u-hover"
                        style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            padding: "12px 28px", fontWeight: "900", fontSize: "13px",
                            letterSpacing: "0.15em", border: "3px solid #1a1a1a", cursor: "pointer",
                            backgroundColor: allOk ? "#10b981" : "#1a1a1a", color: "#f4f1ea",
                            transition: "background-color .3s ease", boxShadow: "4px 4px 0 #888780"
                        }}
                    >
                        {allOk ? <Unlock size={18} /> : <Lock size={18} />}
                        {allOk ? "UNLOCK VAULT" : "SUBMIT PASSWORD"}
                    </button>

                    {!allOk && password.length > 0 && (
                        <p style={{ marginTop: "10px", fontSize: "12px", color: "#dc2626", fontWeight: "bold" }}>
                            ⚠ {brokenCount} rule{brokenCount !== 1 ? "s" : ""} not yet satisfied.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}