import { useEffect, useRef } from "react";

export default function FSMBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animFrame;

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };

        const resizeObserver = new ResizeObserver(() => resize());
        if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);
        resize();

        // ── FIXED 5-POINT LAYOUT ──
        // Coordinates are set to frame the menu without overlapping center text
        const states = [
            { x: 0.10, y: 0.15, r: 35, label: "S₀" }, // Upper Left
            { x: 0.90, y: 0.15, r: 35, label: "S₁" }, // Upper Right
            { x: 0.50, y: 0.50, r: 40, label: "S₂" }, // Middle (Behind title/logo)
            { x: 0.10, y: 0.85, r: 35, label: "S₃" }, // Lower Left
            { x: 0.90, y: 0.85, r: 35, label: "S₄" }, // Lower Right
        ];

        // ── EDGES ──
        const edges = [
            { from: 0, to: 1 }, // Top edge
            { from: 1, to: 2 }, // Top-right to center
            { from: 2, to: 3 }, // Center to bottom-left
            { from: 3, to: 4 }, // Bottom edge
            { from: 4, to: 0 }  // Back to start
        ];

        const particles = edges.map((e, i) => ({
            edge: e,
            t: (i / edges.length),
            speed: 0.0012 + Math.random() * 0.0005,
        }));

        // ── LOW OPACITY STYLING ──
        const COLOR = "rgba(100, 100, 90, 0.12)";
        const ARROW_COL = "rgba(80, 80, 72, 0.25)";
        const CIRCLE_COL = "rgba(80, 80, 72, 0.04)";
        const LABEL_COL = "rgba(80, 80, 72, 0.18)";

        const abs = (s) => ({
            x: s.x * canvas.width,
            y: s.y * canvas.height,
            r: s.r,
        });

        const arrowHead = (tx, ty, dx, dy, size = 8) => {
            const angle = Math.atan2(dy, dx);
            ctx.beginPath();
            ctx.moveTo(tx, ty);
            ctx.lineTo(tx - size * Math.cos(angle - Math.PI / 6), ty - size * Math.sin(angle - Math.PI / 6));
            ctx.lineTo(tx - size * Math.cos(angle + Math.PI / 6), ty - size * Math.sin(angle + Math.PI / 6));
            ctx.closePath();
            ctx.fillStyle = ARROW_COL;
            ctx.fill();
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            edges.forEach(e => {
                const a = abs(states[e.from]);
                const b = abs(states[e.to]);
                const dx = b.x - a.x, dy = b.y - a.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const nx = dx / dist, ny = dy / dist;
                const sx = a.x + nx * a.r, sy = a.y + ny * a.r;
                const ex = b.x - nx * b.r, ey = b.y - ny * b.r;

                ctx.beginPath();
                ctx.moveTo(sx, sy);
                ctx.lineTo(ex, ey);
                ctx.strokeStyle = COLOR;
                ctx.lineWidth = 1;
                ctx.setLineDash([5, 5]);
                ctx.stroke();
                ctx.setLineDash([]);
                arrowHead(ex, ey, nx, ny);
            });

            states.forEach(s => {
                const { x, y, r } = abs(s);
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fillStyle = CIRCLE_COL;
                ctx.fill();
                ctx.strokeStyle = COLOR;
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.fillStyle = LABEL_COL;
                ctx.font = `bold ${r * 0.5}px 'Courier New'`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(s.label, x, y);
            });

            particles.forEach(p => {
                p.t += p.speed;
                if (p.t > 1) p.t = 0;
                const a = abs(states[p.edge.from]);
                const b = abs(states[p.edge.to]);
                const dx = b.x - a.x, dy = b.y - a.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const nx = dx / dist, ny = dy / dist;
                const sx = a.x + nx * a.r, sy = a.y + ny * a.r;
                const ex = b.x - nx * b.r, ey = b.y - ny * b.r;
                const px = sx + (ex - sx) * p.t, py = sy + (ey - sy) * p.t;

                const grad = ctx.createRadialGradient(px, py, 0, px, py, 6);
                grad.addColorStop(0, "rgba(80,80,72,0.2)");
                grad.addColorStop(1, "rgba(80,80,72,0)");
                ctx.beginPath();
                ctx.arc(px, py, 6, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(px, py, 2, 0, Math.PI * 2);
                ctx.fillStyle = ARROW_COL;
                ctx.fill();
            });

            animFrame = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animFrame);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
            }}
        />
    );
}