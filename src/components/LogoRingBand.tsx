import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* Tiles recreated from the ring around public/logo.png, drawn on a 40x40 grid */
const PLUM = "hsl(var(--plum))";
const BLUE = "hsl(var(--cobalt))";
const CORAL = "hsl(var(--accent))";
const PINK = "hsl(var(--pink))";

const tiles = [
  // plum with a blue chevron
  <>
    <rect width="40" height="40" fill={PLUM} />
    <polygon points="0,0 20,22 40,0 40,14 20,36 0,14" fill={BLUE} />
  </>,
  // pink with a white ring
  <>
    <rect width="40" height="40" fill={PINK} />
    <circle cx="20" cy="20" r="11" fill={PINK} stroke="white" strokeWidth="5" />
  </>,
  // blue and white diagonal stripes
  <>
    <rect width="40" height="40" fill="white" />
    <path d="M-10,10 L10,-10 M-10,30 L30,-10 M-10,50 L50,-10 M10,50 L50,10 M30,50 L50,30" stroke={BLUE} strokeWidth="5" />
  </>,
  // plum with blue concentric arcs
  <>
    <rect width="40" height="40" fill={PLUM} />
    <g fill="none" stroke={BLUE} strokeWidth="5">
      <circle cx="0" cy="40" r="34" />
      <circle cx="0" cy="40" r="23" />
      <circle cx="0" cy="40" r="12" />
    </g>
  </>,
  // coral with pink stripes
  <>
    <rect width="40" height="40" fill={CORAL} />
    <path d="M-10,30 L10,50 M-10,10 L30,50 M-10,-10 L50,50 M10,-10 L50,30 M30,-10 L50,10" stroke={PINK} strokeWidth="4" />
  </>,
  // white with pink arcs around a coral quarter
  <>
    <rect width="40" height="40" fill="white" />
    <g fill="none" stroke={PINK} strokeWidth="6">
      <circle cx="40" cy="40" r="32" />
      <circle cx="40" cy="40" r="20" />
    </g>
    <circle cx="40" cy="40" r="9" fill={CORAL} />
  </>,
  // blue with a plum triangle
  <>
    <rect width="40" height="40" fill={BLUE} />
    <polygon points="0,40 20,6 40,40" fill={PLUM} />
  </>,
  // plum with coral arcs
  <>
    <rect width="40" height="40" fill={PLUM} />
    <g fill="none" stroke={CORAL} strokeWidth="5">
      <circle cx="40" cy="0" r="30" />
      <circle cx="40" cy="0" r="18" />
    </g>
    <circle cx="40" cy="0" r="7" fill={PINK} />
  </>,
];

type Point = [number, number];
type Placed = { x: number; y: number; angle: number };

/**
 * A band of logo-ring tiles laid along a cubic Bézier curve, each tile rotated to follow it.
 * `curve` is [start, c1, c2, end, c1, c2, end, ...] in `viewBox` units; the band is drawn at real pixel
 * size so tiles stay square while the curve stretches with its box.
 */
export function LogoRingBand({
  curve,
  viewBox,
  className,
}: {
  curve: Point[];
  viewBox: { x: number; y: number; width: number; height: number };
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [placed, setPlaced] = useState<Placed[]>([]);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) =>
      setSize({ w: entry.contentRect.width, h: entry.contentRect.height })
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const tile = size.w < 640 ? 14 : 18;
  const toPx = ([x, y]: Point) =>
    `${((x - viewBox.x) / viewBox.width) * size.w},${((y - viewBox.y) / viewBox.height) * size.h}`;
  let d = "";
  if (size.w) {
    d = `M${toPx(curve[0])}`;
    for (let i = 1; i + 2 < curve.length; i += 3) {
      d += ` C${toPx(curve[i])} ${toPx(curve[i + 1])} ${toPx(curve[i + 2])}`;
    }
  }

  useLayoutEffect(() => {
    const path = pathRef.current;
    if (!path || !d) return;
    const length = path.getTotalLength();
    const out: Placed[] = [];
    for (let s = tile / 2; s < length + tile / 2; s += tile) {
      const at = Math.min(s, length);
      const p = path.getPointAtLength(at);
      const before = path.getPointAtLength(Math.max(at - 1, 0));
      const after = path.getPointAtLength(Math.min(at + 1, length));
      out.push({ x: p.x, y: p.y, angle: (Math.atan2(after.y - before.y, after.x - before.x) * 180) / Math.PI });
    }
    setPlaced(out);
  }, [d, tile]);

  return (
    <div ref={wrapRef} aria-hidden className={cn("pointer-events-none", className)}>
      <svg width="100%" height="100%" className="overflow-visible">
        <defs>
          {tiles.map((content, i) => (
            <symbol key={i} id={`ams-ring-tile-${i}`} viewBox="0 0 40 40">
              {content}
            </symbol>
          ))}
        </defs>
        <path ref={pathRef} d={d} fill="none" />
        {placed.map((p, i) => (
          <use
            key={i}
            href={`#ams-ring-tile-${i % tiles.length}`}
            x={-tile / 2}
            y={-tile + 2}
            width={tile + 1}
            height={tile}
            transform={`translate(${p.x} ${p.y}) rotate(${p.angle})`}
          />
        ))}
      </svg>
    </div>
  );
}
