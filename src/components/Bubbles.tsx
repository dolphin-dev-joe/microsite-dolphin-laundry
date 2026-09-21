// Gelembung sabun dekoratif di latar belakang (murni CSS, tanpa JS interaktif).
const bubbles = [
  { left: "8%", size: 46, duration: 22, delay: 0 },
  { left: "20%", size: 28, duration: 18, delay: 4 },
  { left: "35%", size: 62, duration: 26, delay: 8 },
  { left: "52%", size: 34, duration: 20, delay: 2 },
  { left: "68%", size: 50, duration: 24, delay: 6 },
  { left: "82%", size: 24, duration: 16, delay: 10 },
  { left: "92%", size: 40, duration: 28, delay: 3 },
];

export function Bubbles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
