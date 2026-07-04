import { useEffect, useRef, useState } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#01';

/**
 * DecryptedText — scrambles into place when it scrolls into view.
 */
export default function DecryptedText({ text, speed = 28 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(text);
  const [done, setDone] = useState(false);
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    let interval;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played.current) return;
        played.current = true;
        let frame = 0;
        const totalFrames = text.length * 2 + 8;
        interval = setInterval(() => {
          frame++;
          const resolved = Math.floor((frame / totalFrames) * text.length);
          const out = text
            .split('')
            .map((ch, i) => {
              if (ch === ' ') return ' ';
              if (i < resolved) return ch;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('');
          setDisplay(out);
          if (frame >= totalFrames) {
            clearInterval(interval);
            setDisplay(text);
            setDone(true);
          }
        }, speed);
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearInterval(interval);
    };
  }, [text, speed]);

  return (
    <span ref={ref} className={`decrypt ${done ? '' : 'scrambling'}`}>
      {display}
    </span>
  );
}
