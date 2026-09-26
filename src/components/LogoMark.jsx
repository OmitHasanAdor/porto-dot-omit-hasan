export default function LogoMark({ size = 40, className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Omit Hasan Ador logo"
    >
      <defs>
        <radialGradient id="oa-bg" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#1c2735" />
          <stop offset="100%" stopColor="#141b26" />
        </radialGradient>
        <linearGradient id="oa-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2fd9d0">
            <animate
              attributeName="stop-color"
              values="#2fd9d0;#6fc6f0;#2fd9d0"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#6fc6f0">
            <animate
              attributeName="stop-color"
              values="#6fc6f0;#2fd9d0;#6fc6f0"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>

      <circle cx="60" cy="60" r="50" fill="url(#oa-bg)" stroke="#ffffff14" strokeWidth="1" />

      <g style={{ transformOrigin: "60px 60px" }}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 60 60"
          to="360 60 60"
          dur="6s"
          repeatCount="indefinite"
        />
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="url(#oa-ring)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray="70 270"
        />
      </g>

      <g transform="translate(60,60) scale(0.72) translate(-62,-64)">
        <path
          d="M33 39 A19 19 0 1 0 33.01 39 Z M33 47 A11 11 0 1 0 33.01 47 Z"
          fill="#f7f8fa"
          fillRule="evenodd"
        />
        <path d="M78 14 L54 90 L68 90 Z" fill="#6fc6f0" />
        <path d="M78 14 L102 90 L88 90 Z" fill="#6fc6f0" />
        <path d="M70.3 59 L85.7 59 L84 67 L72 67 Z" fill="#6fc6f0" />
      </g>
    </svg>
  );
}
