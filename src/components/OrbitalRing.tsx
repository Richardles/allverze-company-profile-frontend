interface OrbitalRingProps {
  size?: number;
  className?: string;
}

export default function OrbitalRing({ size = 480, className = "" }: OrbitalRingProps) {
  const cx = size / 2;
  const cy = size / 2;
  const id = `orb-${size}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-g1`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F1E36" />
          <stop offset="45%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
        <linearGradient id={`${id}-g2`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="55%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#0F1E36" />
        </linearGradient>
        <linearGradient id={`${id}-g3`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-blur`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation={size * 0.022} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`${id}-softglow`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation={size * 0.05} />
        </filter>
      </defs>

      {/* Ambient background glow */}
      <circle cx={cx} cy={cy} r={size * 0.42} fill={`url(#${id}-glow)`} className="glow-pulse" />

      {/* Outer ghost rings */}
      <ellipse cx={cx} cy={cy} rx={size * 0.44} ry={size * 0.44} fill="none"
        stroke="#38BDF8" strokeWidth={size * 0.003} opacity="0.10" />
      <ellipse cx={cx} cy={cy} rx={size * 0.38} ry={size * 0.38} fill="none"
        stroke="#0066FF" strokeWidth={size * 0.002} opacity="0.08" />

      {/* Ring 1 — horizontal orbital, main gradient */}
      <g style={{ transformOrigin: `${cx}px ${cy}px` }}>
        <ellipse cx={cx} cy={cy} rx={size * 0.40} ry={size * 0.155} fill="none"
          stroke={`url(#${id}-g1)`} strokeWidth={size * 0.028}
          strokeLinecap="round" filter={`url(#${id}-blur)`}>
          <animateTransform attributeName="transform" type="rotate"
            from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`}
            dur="14s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Ring 2 — tilted 60°, reverse */}
      <g>
        <ellipse cx={cx} cy={cy} rx={size * 0.40} ry={size * 0.155}
          transform={`rotate(60,${cx},${cy})`}
          fill="none" stroke={`url(#${id}-g2)`} strokeWidth={size * 0.024}
          strokeLinecap="round" filter={`url(#${id}-blur)`} opacity="0.85">
          <animateTransform attributeName="transform" type="rotate"
            from={`60 ${cx} ${cy}`} to={`-300 ${cx} ${cy}`}
            dur="20s" repeatCount="indefinite" additive="replace" />
        </ellipse>
      </g>

      {/* Ring 3 — tilted -60°, slower */}
      <g>
        <ellipse cx={cx} cy={cy} rx={size * 0.40} ry={size * 0.155}
          transform={`rotate(-60,${cx},${cy})`}
          fill="none" stroke={`url(#${id}-g3)`} strokeWidth={size * 0.016}
          strokeLinecap="round" opacity="0.55">
          <animateTransform attributeName="transform" type="rotate"
            from={`-60 ${cx} ${cy}`} to={`300 ${cx} ${cy}`}
            dur="10s" repeatCount="indefinite" additive="replace" />
        </ellipse>
      </g>

      {/* Center core */}
      <circle cx={cx} cy={cy} r={size * 0.045} fill="#38BDF8" opacity="0.2" filter={`url(#${id}-softglow)`} />
      <circle cx={cx} cy={cy} r={size * 0.028} fill="#38BDF8" opacity="0.95" filter={`url(#${id}-blur)`} />
      <circle cx={cx} cy={cy} r={size * 0.014} fill="#FFFFFF" opacity="0.98" />

      {/* Traveling node on ring 1 */}
      <circle r={size * 0.020} fill="#38BDF8" filter={`url(#${id}-blur)`}>
        <animateMotion dur="14s" repeatCount="indefinite">
          <mpath href={`#${id}-path1`} />
        </animateMotion>
      </circle>
      <path
        id={`${id}-path1`}
        d={`M ${cx + size * 0.40},${cy} A ${size * 0.40},${size * 0.155} 0 1 1 ${cx + size * 0.40 - 0.001},${cy}`}
        fill="none" stroke="none"
      />
    </svg>
  );
}
