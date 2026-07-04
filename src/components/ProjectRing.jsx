import { useEffect, useRef } from 'react';

/**
 * ProjectRing — Infinite-Menu-style 3D carousel. Drag to spin,
 * momentum keeps it turning, idles with a slow auto-rotate.
 */
export default function ProjectRing({ items }) {
  const stageRef = useRef(null);
  const ringRef = useRef(null);

  const state = useRef({
    angle: 0,
    velocity: 0.12, // idle auto-spin (deg/frame)
    dragging: false,
    lastX: 0,
  });

  useEffect(() => {
    const stage = stageRef.current;
    const ring = ringRef.current;
    const s = state.current;
    let raf;

    const tick = () => {
      if (!s.dragging) {
        s.angle += s.velocity;
        // ease momentum back down to the idle spin speed
        s.velocity += (0.12 - s.velocity) * 0.02;
      }
      ring.style.transform = `rotateY(${s.angle}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const down = (e) => {
      s.dragging = true;
      s.lastX = e.clientX;
      stage.setPointerCapture(e.pointerId);
    };
    const move = (e) => {
      if (!s.dragging) return;
      const dx = e.clientX - s.lastX;
      s.lastX = e.clientX;
      s.angle += dx * 0.35;
      s.velocity = dx * 0.35;
    };
    const up = () => {
      s.dragging = false;
    };

    stage.addEventListener('pointerdown', down);
    stage.addEventListener('pointermove', move);
    stage.addEventListener('pointerup', up);
    stage.addEventListener('pointercancel', up);

    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener('pointerdown', down);
      stage.removeEventListener('pointermove', move);
      stage.removeEventListener('pointerup', up);
      stage.removeEventListener('pointercancel', up);
    };
  }, []);

  const step = 360 / items.length;
  const radius = Math.round(220 / Math.tan(Math.PI / items.length)) / 1.15;

  return (
    <>
      <div ref={stageRef} className="ring-stage" data-hover>
        <div ref={ringRef} className="ring">
          {items.map((item, i) => (
            <div
              key={i}
              className="ring-card"
              style={{
                transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
              }}
            >
              <img src={item.img} alt={item.label} draggable="false" />
              <div className="ring-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <p className="ring-hint">
        <b>⟲</b> DRAG TO SPIN THE GALLERY
      </p>
    </>
  );
}
