export const PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF9F7"/>
          <stop offset="50%" stop-color="#FCFAF8"/>
          <stop offset="100%" stop-color="#FFF6F8"/>
        </linearGradient>
        <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#C89B3C" stop-opacity="0.08"/>
          <stop offset="100%" stop-color="#C89B3C" stop-opacity="0.02"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#g)"/>
      <rect width="400" height="400" fill="url(#g2)"/>
      <circle cx="200" cy="160" r="60" fill="#C89B3C" opacity="0.06"/>
      <circle cx="160" cy="140" r="30" fill="#D6537A" opacity="0.04"/>
      <circle cx="240" cy="180" r="40" fill="#184D36" opacity="0.03"/>
      <circle cx="200" cy="160" r="24" fill="#C89B3C" opacity="0.08"/>
      <text x="200" y="260" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#C89B3C" font-weight="600" letter-spacing="2">COMING SOON</text>
      <line x1="160" y1="272" x2="240" y2="272" stroke="#C89B3C" stroke-opacity="0.15" stroke-width="1"/>
    </svg>`
  );
