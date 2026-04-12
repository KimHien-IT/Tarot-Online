// File: cards.js
// Chứa dữ liệu 78 lá bài Tarot và code vẽ SVG nghệ thuật

const CARDS = [
    // --- 22 LÁ ẨN CHÍNH (MAJOR ARCANA) ---
    { 
        id: "fool",
        name: "0 · The Fool", 
        meaning: "Khởi đầu mới, tinh thần tự do, ngây thơ, tin tưởng vào vũ trụ.",
        // Code vẽ SVG nghệ thuật cho The Fool
        svg: `<svg viewBox="0 0 260 430" xmlns="http://www.w3.org/2000/svg">
                <rect width="260" height="430" rx="16" fill="#0a0812"/>
                <defs>
                    <radialGradient id="gradFool" cx="50%" cy="40%" r="50%">
                        <stop offset="0%" stop-color="#2a2040" />
                        <stop offset="100%" stop-color="#0a0812" />
                    </radialGradient>
                </defs>
                <rect width="260" height="430" rx="16" fill="url(#gradFool)"/>
                
                <circle cx="130" cy="160" r="50" stroke="#e8cc7a" stroke-width="1" fill="none" opacity="0.8"/>
                <path d="M130 110 Q150 130 130 160 Q110 130 130 110 Z" fill="#fff" opacity="0.9"/>
                <path d="M130 110 Q170 140 130 160 Q90 140 130 110 Z" fill="#fff" opacity="0.6"/>
                
                <path d="M30 350 Q80 300 130 350 Q180 400 230 350" stroke="#c9a84c" stroke-width="1.5" fill="none"/>
                <circle cx="210" cy="320" r="10" fill="#c9a84c" opacity="0.7"/> <path d="M0 0 L60 0 A60 60 0 0 1 0 60 Z" fill="#e8cc7a" opacity="0.5"/>
                
                <text x="130" y="405" fill="#c9a84c" font-family="Cinzel" text-anchor="middle" font-size="16" letter-spacing="2">THE FOOL</text>
              </svg>`
    },
    { 
        id: "magician",
        name: "I · The Magician", 
        meaning: "Sức mạnh ý chí, tài năng, tháo vát, biến ý tưởng thành hiện thực.",
        // Code vẽ SVG nghệ thuật cho The Magician
        svg: `<svg viewBox="0 0 260 430" xmlns="http://www.w3.org/2000/svg">
                <rect width="260" height="430" rx="16" fill="#0d0a14"/>
                
                <path d="M100 100 A25 25 0 1 1 160 100 A25 25 0 1 1 100 100" stroke="#fff" stroke-width="1.5" fill="none" opacity="0.9">
                    <animate attributeName="stroke-dasharray" from="0 500" to="500 0" dur="3s" repeatCount="indefinite" />
                </path>
                
                <rect x="60" y="220" width="140" height="100" rx="8" stroke="#c9a84c" stroke-width="1" fill="#1a1526"/>
                <g transform="translate(85, 255)" stroke="#e8cc7a" stroke-width="1.2" fill="none">
                    <line x1="0" y1="-15" x2="0" y2="15"/> <path d="M25 -10 A10 10 0 0 1 45 -10 L45 10 L25 10 Z" fill="#e8cc7a"/> <path d="M65 -15 L65 15 M55 0 H75" stroke="#fff"/> <circle cx="100" cy="0" r="12" fill="#c9a84c"/> </g>
                
                <path d="M130 180 L130 80" stroke="#fff" stroke-width="2" marker-end="url(#arrow)"/>
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#fff"/></marker></defs>
                
                <text x="130" y="405" fill="#c9a84c" font-family="Cinzel" text-anchor="middle" font-size="16" letter-spacing="2">THE MAGICIAN</text>
              </svg>`
    },
    { 
        id: "sun",
        name: "XIX · The Sun", 
        meaning: "Niềm vu, thành công, rạng rỡ, sức sống dồi dào, sự rõ ràng.",
        // Code vẽ SVG nghệ thuật cho The Sun
        svg: `<svg viewBox="0 0 260 430" xmlns="http://www.w3.org/2000/svg">
                <rect width="260" height="430" rx="16" fill="#1a100a"/>
                <defs>
                    <radialGradient id="gradSun" cx="50%" cy="40%" r="50%">
                        <stop offset="0%" stop-color="#ffcc33" />
                        <stop offset="60%" stop-color="#cc9900" />
                        <stop offset="100%" stop-color="#1a100a" />
                    </radialGradient>
                </defs>
                <rect width="260" height="430" rx="16" fill="url(#gradSun)" opacity="0.8"/>
                
                <circle cx="130" cy="160" r="60" fill="#ffcc33"/>
                <circle cx="130" cy="160" r="50" fill="#cc9900"/>
                
                <g stroke="#ffcc33" stroke-width="2">
                    <line x1="130" y1="80" x2="130" y2="20"/>
                    <line x1="130" y1="240" x2="130" y2="300"/>
                    <line x1="50" y1="160" x2="0" y2="160"/>
                    <line x1="210" y1="160" x2="260" y2="160"/>
                    <line x1="80" y1="110" x2="40" y2="70"/>
                    <line x1="180" y1="110" x2="220" y2="70"/>
                    <line x1="80" y1="210" x2="40" y2="250"/>
                    <line x1="180" y1="210" x2="220" y2="250"/>
                </g>
                
                <g transform="translate(130, 330)" fill="#cc9900">
                    <circle r="15"/>
                    <ellipse rx="5" ry="15" transform="rotate(0) translate(0,-20)"/>
                    <ellipse rx="5" ry="15" transform="rotate(45) translate(0,-20)"/>
                    <ellipse rx="5" ry="15" transform="rotate(90) translate(0,-20)"/>
                    <ellipse rx="5" ry="15" transform="rotate(135) translate(0,-20)"/>
                    <ellipse rx="5" ry="15" transform="rotate(180) translate(0,-20)"/>
                    <ellipse rx="5" ry="15" transform="rotate(225) translate(0,-20)"/>
                    <ellipse rx="5" ry="15" transform="rotate(270) translate(0,-20)"/>
                    <ellipse rx="5" ry="15" transform="rotate(315) translate(0,-20)"/>
                </g>
                
                <text x="130" y="405" fill="#e8cc7a" font-family="Cinzel" text-anchor="middle" font-size="16" letter-spacing="2">THE SUN</text>
              </svg>`
    },

    // --- CÁC BỘ ẨN PHỤ (MINOR ARCANA) - VÍ DỤ ---
    { 
        id: "ace_wands",
        name: "Ace of Wands", 
        meaning: "Nguồn năng lượng mới, cảm hứng, sáng tạo, cơ hội phát triển.",
        // Code vẽ SVG nghệ thuật cho Ace of Wands
        svg: `<svg viewBox="0 0 260 430" xmlns="http://www.w3.org/2000/svg">
                <rect width="260" height="430" rx="16" fill="#1a0a05"/>
                
                <path d="M130 80 L130 320" stroke="#e05818" stroke-width="8" stroke-linecap="round"/>
                <path d="M130 80 L130 320" stroke="#ff8844" stroke-width="3" stroke-linecap="round" stroke-dasharray="10 5"/>
                
                <path d="M130 80 Q150 100 130 130 Q110 100 130 80 Z" fill="#ff8844" opacity="0.8"/>
                <g fill="#c9a84c">
                    <ellipse rx="4" ry="8" transform="translate(140, 150) rotate(30)"/>
                    <ellipse rx="4" ry="8" transform="translate(120, 180) rotate(-30)"/>
                    <ellipse rx="4" ry="8" transform="translate(145, 220) rotate(45)"/>
                </g>
                
                <text x="130" y="405" fill="#c9a84c" font-family="Cinzel" text-anchor="middle" font-size="16" letter-spacing="1">ACE OF WANDS</text>
              </svg>`
    },
    { 
        id: "ace_cups",
        name: "Ace of Cups", 
        meaning: "Tình yêu mới, cảm xúc dâng trào, trực giác khai mở, hạnh phúc.",
        // Code vẽ SVG nghệ thuật cho Ace of Cups
        svg: `<svg viewBox="0 0 260 430" xmlns="http://www.w3.org/2000/svg">
                <rect width="260" height="430" rx="16" fill="#030c1a"/>
                
                <path d="M100 150 A30 30 0 0 1 160 150 L155 230 L105 230 Z" fill="#c9a84c"/>
                <rect x="110" y="230" width="40" height="10" fill="#e8cc7a"/>
                <ellipse cx="130" cy="245" rx="30" ry="10" fill="#c9a84c"/>
                
                <path d="M130 150 Q160 100 130 50 Q100 100 130 150 Z" fill="#55aaff" opacity="0.6"/>
                <g stroke="#fff" stroke-width="1" opacity="0.8">
                    <path d="M110 160 Q80 190 110 220" fill="none"/>
                    <path d="M150 160 Q180 190 150 220" fill="none"/>
                </g>
                
                <text x="130" y="405" fill="#c9a84c" font-family="Cinzel" text-anchor="middle" font-size="16" letter-spacing="1">ACE OF CUPS</text>
              </svg>`
    },
    
    // --- BẠN CẦN THÊM TIẾP 73 LÁ CÒN LẠI VÀO ĐÂY ---
    // Gợi ý ID: 'sw01', 'pe01', 'fool', 'magician', v.v.
];
