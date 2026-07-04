import { useEffect, useRef } from 'react';

/**
 * MagnetLines — grid of small lines that rotate to point at the cursor
 * (React Bits style).
 */
export default function MagnetLines({ rows = 9, columns = 16 }) {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    const items = grid.querySelectorAll('span');

    const onMove = (e) => {
      const px = e.clientX;
      const py = e.clientY;
      items.forEach((item) => {
        const r = item.getBoundingClientRect();
        const cx = r.x + r.width / 2;
        const cy = r.y + r.height / 2;
        const rot = (Math.acos((px - cx) / Math.hypot(px - cx, py - cy)) * 180) / Math.PI;
        item.style.setProperty('--rot', `${py > cy ? rot : -rot}deg`);
      });
    };

    window.addEventListener('pointermove', onMove);
    // initial pose so it doesn't look flat before first move
    if (items.length) {
      const mid = items[Math.floor(items.length / 2)].getBoundingClientRect();
      onMove({ clientX: mid.x, clientY: mid.y });
    }
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  const total = rows * columns;

  return (
    <section className="magnet-section">
      <div
        ref={gridRef}
        className="magnet-grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, 44px)`,
          gridTemplateRows: `repeat(${rows}, 44px)`,
        }}
        aria-hidden="true"
      >
        {Array.from({ length: total }, (_, i) => (
          <span key={i} />
        ))}
      </div>
      <p className="magnet-caption">// MAGNETIC FIELD — MOVE YOUR CURSOR //</p>
    </section>
  );
}
