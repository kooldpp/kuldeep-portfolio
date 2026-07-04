import { useEffect, useRef } from 'react';

/**
 * TextPressure — variable-font headline whose weight/width react to
 * cursor proximity (React Bits style, using Compressa VF).
 */
export default function TextPressure({ text = 'HELLO' }) {
  const wrapRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });
  const chars = text.split('');

  useEffect(() => {
    const onMove = (e) => {
      cursor.current.x = e.clientX;
      cursor.current.y = e.clientY;
    };
    const onTouch = (e) => {
      const t = e.touches[0];
      if (t) {
        cursor.current.x = t.clientX;
        cursor.current.y = t.clientY;
      }
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onTouch, { passive: true });

    // start from the center of the block
    const rect = wrapRef.current.getBoundingClientRect();
    mouse.current.x = rect.left + rect.width / 2;
    mouse.current.y = rect.top + rect.height / 2;
    cursor.current = { ...mouse.current };

    const setSize = () => {
      const { width } = wrapRef.current.getBoundingClientRect();
      const fontSize = Math.max(width / (chars.length / 1.6), 40);
      titleRef.current.style.fontSize = `${fontSize}px`;
    };
    setSize();
    window.addEventListener('resize', setSize);

    const dist = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);
    let raf;

    const tick = () => {
      mouse.current.x += (cursor.current.x - mouse.current.x) / 12;
      mouse.current.y += (cursor.current.y - mouse.current.y) / 12;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;

        spansRef.current.forEach((span) => {
          if (!span) return;
          const r = span.getBoundingClientRect();
          const center = { x: r.x + r.width / 2, y: r.y + r.height / 2 };
          const d = dist(mouse.current, center);

          const attr = (base, max) => {
            const v = max - Math.abs((max * d) / maxDist);
            return Math.max(base, v + base);
          };

          const wght = Math.floor(attr(100, 800));
          const wdth = Math.floor(attr(60, 90));
          const ital = (attr(0, 1)).toFixed(2);
          span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${ital}`;
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('resize', setSize);
    };
  }, [chars.length]);

  return (
    <div ref={wrapRef} className="pressure-wrap" data-hover>
      <h2 ref={titleRef} className="pressure-title" aria-label={text}>
        {chars.map((c, i) => (
          <span key={i} ref={(el) => (spansRef.current[i] = el)} aria-hidden="true">
            {c}
          </span>
        ))}
      </h2>
    </div>
  );
}
