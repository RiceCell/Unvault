import { useState } from "react";
import { Lock, Unlock } from "lucide-react";

export default function SpottifyUI({
    password, setPassword,
    showPw, setShowPw,
    inputShake, allOk,
    onSubmit, brokenCount, difficulty
}) {
    const [activeField, setActiveField] = useState(false);

    const GREEN = "#1DB954";
    const DARK = "#121212";
    const CARD = "#282828";
    const SUB = "#b3b3b3";

    const navItems = ["Home", "Search", "Your Library"];
    const sideItems = ["Create Playlist", "Liked Songs", "Your Episodes"];

    return (
        <div style={{
            fontFamily: "'Circular', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            backgroundColor: DARK, minHeight: "560px", color: "white",
        }}>

            {/* ── Top nav ── */}
            <div style={{
                backgroundColor: "#000", padding: "14px 24px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
                {/* Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "28px" }}>🎵</span>
                    <span style={{ fontSize: "20px", fontWeight: "900", letterSpacing: "-0.5px", color: GREEN }}>
                        Spottify
                    </span>
                </div>

                {/* Nav links */}
                <div style={{ display: "flex", gap: "24px" }}>
                    {navItems.map((item, i) => (
                        <span key={item} style={{
                            fontSize: "14px", fontWeight: "700", cursor: "pointer",
                            color: i === 0 ? "white" : SUB,
                            borderBottom: i === 0 ? `2px solid ${GREEN}` : "none",
                            paddingBottom: "2px",
                        }}>{item}</span>
                    ))}
                </div>

                {/* User pill */}
                <div style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    backgroundColor: "#333", borderRadius: "20px",
                    padding: "4px 12px 4px 4px", cursor: "pointer",
                }}>
                    <div style={{
                        width: "28px", height: "28px", borderRadius: "50%",
                        backgroundColor: GREEN, display: "flex", alignItems: "center",
                        justifyContent: "center", fontSize: "14px",
                    }}>🎧</div>
                    <span style={{ fontSize: "13px", fontWeight: "700" }}>SpottifyUser</span>
                    <span style={{ fontSize: "10px", color: SUB }}>▼</span>
                </div>
            </div>

            {/* ── Body ── */}
            <div style={{ display: "flex", minHeight: "500px" }}>

                {/* LEFT sidebar */}
                <div style={{
                    width: "220px", flexShrink: 0, backgroundColor: "#000",
                    padding: "20px 12px", display: "flex", flexDirection: "column", gap: "24px",
                }}>
                    <div>
                        {["⊞  Account", "🎵  Subscription", "🔒  Privacy", "🔔  Notifications"].map((item, i) => (
                            <div key={item} style={{
                                padding: "10px 12px", borderRadius: "6px", fontSize: "13px",
                                fontWeight: i === 0 ? "700" : "400", cursor: "pointer",
                                backgroundColor: i === 0 ? CARD : "transparent",
                                color: i === 0 ? "white" : SUB,
                                marginBottom: "2px",
                            }}>{item}</div>
                        ))}
                    </div>

                    <div>
                        <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: SUB, padding: "0 12px 10px" }}>YOUR LIBRARY</div>
                        {sideItems.map(item => (
                            <div key={item} style={{ padding: "10px 12px", fontSize: "13px", color: SUB, cursor: "pointer", borderRadius: "6px" }}>{item}</div>
                        ))}
                    </div>

                    {/* Now playing stub */}
                    <div style={{ marginTop: "auto", backgroundColor: CARD, borderRadius: "8px", padding: "12px" }}>
                        <div style={{ fontSize: "11px", color: SUB, marginBottom: "6px" }}>NOW PLAYING</div>
                        <div style={{ fontSize: "13px", fontWeight: "700" }}>🔐 Batang Ina</div>
                        <div style={{ fontSize: "11px", color: SUB }}>Babyjean</div>
                        <div style={{ marginTop: "10px", height: "3px", backgroundColor: "#444", borderRadius: "2px", overflow: "hidden" }}>
                            <div style={{ width: "40%", height: "100%", backgroundColor: GREEN, borderRadius: "2px" }} />
                        </div>
                    </div>
                </div>

                {/* RIGHT: main content */}
                <div style={{ flex: 1, background: `linear-gradient(180deg, #1a3a28 0%, ${DARK} 340px)`, padding: "32px 40px", overflowY: "auto" }}>

                    {/* Page header */}
                    <div style={{ marginBottom: "32px" }}>
                        <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", color: GREEN, marginBottom: "6px" }}>
                            ACCOUNT › SECURITY
                        </div>
                        <h2 style={{ margin: 0, fontSize: "32px", fontWeight: "900", letterSpacing: "-0.5px" }}>
                            Change Password
                        </h2>
                        <p style={{ margin: "8px 0 0", fontSize: "14px", color: SUB }}>
                            Keep your account safe — choose a password as strong as your playlist.
                        </p>
                    </div>

                    {/* Form card */}
                    <div style={{
                        backgroundColor: CARD, borderRadius: "12px", padding: "28px",
                        maxWidth: "480px",
                    }}>

                        {/* Current password */}
                        <div style={{ marginBottom: "20px" }}>
                            <label style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", color: SUB, marginBottom: "8px" }}>
                                CURRENT PASSWORD
                            </label>
                            <input
                                type="password" disabled placeholder="••••••••••••"
                                style={{
                                    width: "100%", padding: "12px 16px", fontSize: "14px",
                                    backgroundColor: "#333", border: "1px solid #444",
                                    borderRadius: "6px", color: "#666", boxSizing: "border-box",
                                    cursor: "not-allowed",
                                }}
                            />
                        </div>

                        {/* New password */}
                        <div style={{ marginBottom: "20px" }}>
                            <label style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", color: SUB, marginBottom: "8px" }}>
                                NEW PASSWORD <span style={{ color: GREEN }}>★</span>
                            </label>
                            <div
                                className={inputShake ? "u-shake" : ""}
                                style={{
                                    display: "flex", alignItems: "center",
                                    backgroundColor: activeField ? "#3a3a3a" : "#333",
                                    border: `2px solid ${allOk ? GREEN : activeField ? "white" : "#444"}`,
                                    borderRadius: "6px",
                                    transition: "border-color .2s, background-color .2s",
                                    boxShadow: allOk ? `0 0 0 3px rgba(29,185,84,.2)` : "none",
                                }}
                            >
                                <input
                                    type={showPw ? "text" : "password"}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    onFocus={() => setActiveField(true)}
                                    onBlur={() => setActiveField(false)}
                                    placeholder="New password"
                                    style={{
                                        flex: 1, padding: "12px 16px", fontSize: "14px",
                                        background: "none", border: "none", outline: "none",
                                        color: "white",
                                    }}
                                />
                                {difficulty !== "difficult" && (
                                    <button
                                        onClick={() => setShowPw(!showPw)}
                                        style={{
                                            padding: "0 14px", background: "none", border: "none",
                                            cursor: "pointer", color: SUB, fontSize: "12px",
                                            fontWeight: "700", letterSpacing: "0.05em", whiteSpace: "nowrap",
                                        }}
                                    >
                                        {showPw ? "HIDE" : "SHOW"}
                                    </button>
                                )}
                            </div>

                            {/* Green equalizer-style strength bars */}
                            <div style={{ display: "flex", gap: "3px", marginTop: "10px" }}>
                                {Array(8).fill(0).map((_, i) => {
                                    const filled = Math.min(8, Math.floor(password.length / 2));
                                    return (
                                        <div key={i} style={{
                                            flex: 1, height: "3px", borderRadius: "2px",
                                            backgroundColor: i < filled ? GREEN : "#444",
                                            transition: "background-color .2s",
                                        }} />
                                    );
                                })}
                            </div>


                        </div>

                        {/* Confirm */}
                        <div style={{ marginBottom: "28px" }}>
                            <label style={{ display: "block", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", color: SUB, marginBottom: "8px" }}>
                                CONFIRM NEW PASSWORD
                            </label>
                            <input
                                type="password" disabled placeholder="Re-enter new password"
                                style={{
                                    width: "100%", padding: "12px 16px", fontSize: "14px",
                                    backgroundColor: "#333", border: "1px solid #444",
                                    borderRadius: "6px", color: "#555", boxSizing: "border-box",
                                    cursor: "not-allowed",
                                }}
                            />
                        </div>

                        {/* Error */}
                        {!allOk && password.length > 0 && (
                            <div style={{
                                display: "flex", alignItems: "center", gap: "10px",
                                padding: "10px 14px", backgroundColor: "rgba(240,40,73,.15)",
                                border: "1px solid rgba(240,40,73,.4)", borderRadius: "6px", marginBottom: "20px",
                            }}>
                                <span style={{ color: "#f02849", fontSize: "16px" }}>⚠</span>
                                <span style={{ fontSize: "13px", color: "#f02849", fontWeight: "600" }}>
                                    {brokenCount} rule{brokenCount !== 1 ? "s" : ""} not yet satisfied.
                                </span>
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            onClick={onSubmit}
                            style={{
                                width: "100%", padding: "14px", fontSize: "14px", fontWeight: "700",
                                letterSpacing: "0.08em", border: "none", borderRadius: "50px",
                                cursor: "pointer", display: "flex", alignItems: "center",
                                justifyContent: "center", gap: "10px",
                                backgroundColor: allOk ? GREEN : "#535353",
                                color: allOk ? "black" : "#b3b3b3",
                                transition: "background-color .25s, color .25s",
                                boxShadow: allOk ? `0 4px 20px rgba(29,185,84,.4)` : "none",
                            }}
                        >
                            {allOk ? <Unlock size={16} /> : <Lock size={16} />}
                            {allOk ? "SAVE CHANGES" : "SAVE CHANGES"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}