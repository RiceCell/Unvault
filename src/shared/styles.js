export const btnStyle = (bg, color, border) => ({
    width: "240px", padding: "14px 0", fontWeight: "900", fontSize: "14px",
    letterSpacing: "0.2em", backgroundColor: bg, color, border, cursor: "pointer",
    boxShadow: "4px 4px 0 #aaa9a2"
});

export const headStyle = {
    fontSize: "clamp(1.6rem,5vw,2.4rem)", fontWeight: "900",
    letterSpacing: "0.18em", color: "#1a1a1a", margin: "0 0 4px"
};

export const subStyle = { fontSize: "12px", color: "#888", margin: 0 };

export const labelStyle = {
    display: "block", fontSize: "12px", fontWeight: "bold",
    letterSpacing: "0.06em", color: "#1a1a1a", marginBottom: "5px"
};

export const GLOBAL_STYLES = `
  @keyframes shake {
    0%,100%{ transform:translateX(0) }
    18%{ transform:translateX(-10px) }
    36%{ transform:translateX(10px) }
    54%{ transform:translateX(-6px) }
    72%{ transform:translateX(6px) }
    90%{ transform:translateX(-2px) }
  }
  @keyframes fadeUp {
    from{ opacity:0; transform:translateY(18px) }
    to{   opacity:1; transform:translateY(0)   }
  }
  @keyframes pulseGreen {
    0%{ box-shadow:0 0 0 0 rgba(16,185,129,.5) }
    60%{ box-shadow:0 0 0 10px rgba(16,185,129,0) }
    100%{ box-shadow:none }
  }
  @keyframes stamp {
    0%{ opacity:0; transform:scale(1.5) rotate(-12deg) }
    65%{ transform:scale(0.92) rotate(3deg); opacity:1 }
    100%{ transform:scale(1) rotate(0deg); opacity:1 }
  }
  @keyframes ticker {
    from{ transform:translateX(0) }
    to{ transform:translateX(-50%) }
  }
  .u-shake    { animation: shake 0.65s ease }
  .u-fadeup   { animation: fadeUp 0.38s ease both }
  .u-satisfied{ animation: pulseGreen 0.75s ease }
  .u-stamp    { animation: stamp 0.5s cubic-bezier(.22,1,.36,1) forwards }
  .u-hover    { transition: transform .14s ease, box-shadow .14s ease }
  .u-hover:hover{ transform:translateY(-2px); box-shadow:5px 5px 0 #1a1a1a }
  .u-hover:active{ transform:translateY(1px); box-shadow:2px 2px 0 #1a1a1a }
  .u-ticker   { animation: ticker 22s linear infinite }
  .u-bar      { transition: width .45s ease }
  .u-rule-in  { animation: fadeUp 0.3s ease both }
  input:focus { outline: none }
`;