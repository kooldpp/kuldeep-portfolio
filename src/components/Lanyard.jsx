import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

/**
 * Lanyard — draggable hanging ID badge with a springy strap.
 * Grab the card, throw it around, it swings back on a spring.
 */
export default function Lanyard({ photo, name, role }) {
  // raw drag target — springs chase these
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // bouncy spring follows the drag values (also produces the release swing)
  const x = useSpring(dragX, { stiffness: 170, damping: 10, mass: 0.9 });
  const y = useSpring(dragY, { stiffness: 170, damping: 10, mass: 0.9 });

  // card tilts as it swings sideways
  const rotate = useTransform(x, [-260, 260], [-38, 38]);

  // strap: quadratic curve from the anchor down to the card clip
  const endX = useTransform(x, (v) => 160 + v);
  const endY = useTransform(y, (v) => 214 + v);
  const ctrlX = useTransform(x, (v) => 160 + v * 0.35);
  const ctrlY = useTransform(y, (v) => 120 + v * 0.4);
  const strapPath = useMotionTemplate`M 160 -40 Q ${ctrlX} ${ctrlY} ${endX} ${endY}`;

  const grab = useRef(null);

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    grab.current = {
      px: e.clientX,
      py: e.clientY,
      ox: dragX.get(),
      oy: dragY.get(),
    };
  };

  const onPointerMove = (e) => {
    if (!grab.current) return;
    dragX.set(grab.current.ox + (e.clientX - grab.current.px));
    dragY.set(grab.current.oy + (e.clientY - grab.current.py));
  };

  const onPointerUp = () => {
    grab.current = null;
    // let go → spring snaps it back and it swings
    dragX.set(0);
    dragY.set(0);
  };

  return (
    <div className="lanyard-wrap">
      <svg className="lanyard-svg" viewBox="0 0 320 640" fill="none" aria-hidden="true">
        <motion.path
          d={strapPath}
          stroke="#1c1c20"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <motion.path
          d={strapPath}
          stroke="#ff2d9a"
          strokeWidth="2"
          strokeDasharray="2 10"
          opacity="0.7"
        />
      </svg>

      <motion.div
        className="badge"
        data-hover
        style={{ x, y, rotate }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        whileTap={{ scale: 1.04 }}
      >
        <div className="badge-clip" />
        <div className="badge-head">
          <span>DATA·LAB</span>
          <i />
          <span>ACCESS PASS</span>
        </div>
        <div className="badge-photo">
          <img src={photo} alt={name} draggable="false" />
        </div>
        <div className="badge-name">{name}</div>
        <div className="badge-role">{role}</div>
        <div className="badge-foot">
          <span>
            ID-2026-KH
            <br />
            TEZPUR·ASSAM·IN
          </span>
          <div className="badge-barcode" />
        </div>
        <div className="badge-hint">
          <b>⇢</b> DRAG &amp; SWING THE BADGE
        </div>
      </motion.div>
    </div>
  );
}
