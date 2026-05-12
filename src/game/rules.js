export const RULES = {

    // FB
    fisbok_easy: [
        { id: "e1", desc: "Password must be at least 6 characters.", check: p => p.length >= 6 },
        { id: "e2", desc: "Password must contain at least one number.", check: p => /\d/.test(p) },
        { id: "e3", desc: "Password must contain at least one uppercase letter.", check: p => /[A-Z]/.test(p) },
        { id: "e4", desc: "Password must start with an uppercase letter and end with a number.", check: p => /^[A-Z].*\d$/.test(p) },
        { id: "e5", desc: "Password must not contain the sequence 'abc'.", check: p => !/abc/i.test(p) },
    ],
    fisbok_average: [
        { id: "a1", desc: "Password must be at least 8 characters.", check: p => p.length >= 8 },
        { id: "a2", desc: "Password must contain at least one number.", check: p => /\d/.test(p) },
        { id: "a3", desc: "Password must contain both UPPERCASE and lowercase letters.", check: p => /[A-Z]/.test(p) && /[a-z]/.test(p) },
        { id: "a4", desc: "Password must include a special character: ! @ # $ % ^ & *", check: p => /[!@#$%^&*]/.test(p) },
        { id: "a5", desc: "The sum of all digits must equal exactly 10.", check: p => { const d = p.match(/\d/g); return d ? d.reduce((s, n) => s + +n, 0) === 10 : false; } },
        { id: "a6", desc: "Password must contain a color name (e.g., red, blue, pink).", check: p => /red|blue|green|yellow|pink|black|white|orange|purple/i.test(p) },
        { id: "a7", desc: "Password must contain at least three vowels (a, e, i, o, u).", check: p => (p.match(/[aeiou]/gi) || []).length >= 3 },
        { id: "a8", desc: "Password must have an even number of characters.", check: p => p.length % 2 === 0 },
        { id: "a9", desc: "The password must contain the substring 'fsm' in lowercase.", check: p => /fsm/.test(p) },
        { id: "a10", desc: "Every digit in the password must be followed by a letter.", check: p => !/\d(?!\D)/.test(p) },
    ],
    fisbok_difficult: [
        { id: "d1", desc: "Password must be at least 14 characters.", check: p => p.length >= 14 },
        { id: "d2", desc: "Password must contain UPPERCASE and lowercase letters.", check: p => /[A-Z]/.test(p) && /[a-z]/.test(p) },
        { id: "d3", desc: "Password must contain at least one number.", check: p => /\d/.test(p) },
        { id: "d4", desc: "Password must include a special character: ! @ # $ % ^ & *", check: p => /[!@#$%^&*]/.test(p) },
        { id: "d5", desc: "The sum of all digits must equal exactly 25.", check: p => { const d = p.match(/\d/g); return d ? d.reduce((s, n) => s + +n, 0) === 25 : false; } },
        { id: "d6", desc: "Password must contain a month of the year.", check: p => /january|february|march|april|may|june|july|august|september|october|november|december/i.test(p) },
        { id: "d7", desc: "Password must contain a Roman numeral: I, V, X, L, C, D, or M.", check: p => /[IVXLCDM]/.test(p) },
        { id: "d8", desc: "Password must include a chemical element symbol (e.g., Au, Fe, Na).", check: p => /Au|Fe|Cu|Ag|Na|Ca|Mg|Al|Si/.test(p) },
        { id: "d9", desc: "Password must include a country: France, Japan, Brazil, etc.", check: p => /france|japan|brazil|india|egypt|peru|cuba|chad|mali|laos/i.test(p) },
        { id: "d10", desc: "Password must contain a valid leap year between 1000 and 2024.", check: p => { const years = p.match(/\d{4}/g); return years ? years.some(y => { const year = parseInt(y); return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); }) : false; } },
        { id: "d11", desc: "The first and last characters must be the same (case-sensitive).", check: p => p.length > 1 && p[0] === p[p.length - 1] },
        { id: "d12", desc: "At least 30% of the password must be numbers.", check: p => { const digits = (p.match(/\d/g) || []).length; return digits / p.length >= 0.3; } },
        { id: "d13", desc: "Includes a 'dead end': a special character surrounded by the same number (e.g., 5!5).", check: p => /(\d)[!@#$%^&*]\1/.test(p) },
        { id: "d14", desc: "The total count of Roman numerals must be a prime number (2, 3, 5...).", check: p => { const count = (p.match(/[IVXLCDM]/g) || []).length; if (count < 2) return false; for (let i = 2; i <= Math.sqrt(count); i++) if (count % i === 0) return false; return true; } },
        { id: "d15", desc: "Password must contain the word 'vault'.", check: p => /vault/i.test(p) },
    ],

    // ── INSTAGRAHAM ─────────────────────────────────────────────────
    instagraham_easy: [],
    instagraham_average: [],
    instagraham_difficult: [],

    // ── TWEETR ──────────────────────────────────────────────────────
    tweetr_easy: [],
    tweetr_average: [],
    tweetr_difficult: [],

    // ── SNAPCAT ─────────────────────────────────────────────────────
    snapcat_easy: [],
    snapcat_average: [],
    snapcat_difficult: [],

    // ── TIKTACK ─────────────────────────────────────────────────────
    tiktack_easy: [],
    tiktack_average: [],
    tiktack_difficult: [],

    // ── LINKEDOUT ───────────────────────────────────────────────────
    linkedout_easy: [],
    linkedout_average: [],
    linkedout_difficult: [],

    // ── PINIT ───────────────────────────────────────────────────────
    pinit_easy: [],
    pinit_average: [],
    pinit_difficult: [],

    // ── REDTALK ─────────────────────────────────────────────────────
    redtalk_easy: [],
    redtalk_average: [],
    redtalk_difficult: [],

    // ── YOOTOOB ─────────────────────────────────────────────────────
    yootoob_easy: [],
    yootoob_average: [],
    yootoob_difficult: [],

    // ── WAZZAPP ─────────────────────────────────────────────────────
    wazzapp_easy: [],
    wazzapp_average: [],
    wazzapp_difficult: [],

    // ── DISCORK ─────────────────────────────────────────────────────
    discork_easy: [],
    discork_average: [],
    discork_difficult: [],

    // ── SPOTIFY ────────────────────────────────────────────────────
    spottify_easy: [
        { id: "se1", desc: "Password must be at least 6 characters.", check: p => p.length >= 6 },
        { id: "se2", desc: "Password must contain a musical note.", check: p => /[A-G]/.test(p) },
        { id: "se3", desc: "Password must contain at least one digit to represent the 'tempo'.", check: p => /\d/.test(p) },
        { id: "se4", desc: "Password must include the sharp or flat symbol.", check: p => /[#b]/.test(p) },
        { id: "se5", desc: "Password must end with a '🎵' or '🎧' emoji.", check: p => /🎵|🎧$/.test(p) },
    ],
    spottify_average: [
        { id: "sa1", desc: "Password must be at least 10 characters.", check: p => p.length >= 10 },
        { id: "sa2", desc: "Must contain a Top 5 Spotify artist name (Swift, Weeknd, Bunny, Bieber, or Drake).", check: p => /Swift|Weeknd|Bunny|Bieber|Drake/i.test(p) },
        { id: "sa3", desc: "Must contain a valid musical chord (e.g., Am, Cmaj, Dmin).", check: p => /([A-G][#b]?(min|maj|m)?)/.test(p) },
        { id: "sa4", desc: "The sum of all numbers must equal the beats in a standard 4/4 bar (exactly 4).", check: p => (p.match(/\d/g) || []).reduce((s, n) => s + +n, 0) === 4 },
        { id: "sa5", desc: "Must contain the word 'Remix' or 'Live'.", check: p => /Remix|Live/i.test(p) },
        { id: "sa6", desc: "At least one word must be in ALL CAPS to represent 'VOLUME'.", check: p => /[A-Z]{2,}/.test(p) },
        { id: "sa7", desc: "No two identical characters can be next to each other (Discordant).", check: p => !/(.)\1/.test(p) },
        { id: "sa8", desc: "Must contain a 'volume' level between 1 and 11.", check: p => { const n = p.match(/\d+/g); return n ? n.some(num => num >= 1 && num <= 11) : false; } },
        { id: "sa9", desc: "Must contain at least one lowercase 'z' for every 'S' (The SZA rule).", check: p => (p.match(/z/g) || []).length >= (p.match(/S/g) || []).length },
        { id: "sa10", desc: "Must start with 'Play' and end with 'Stop'.", check: p => /^Play.*Stop$/i.test(p) },
    ],
    spottify_difficult: [
        { id: "sd1", desc: "Password must be exactly 22 characters (The '22' Taylor's Version).", check: p => p.length === 22 },
        { id: "sd2", desc: "Must contain the name of a Grammy 'Album of the Year' winner.", check: p => /21|25/i.test(p) },
        { id: "sd3", desc: "Must contain a BPM (Beats Per Minute) value between 120 and 140.", check: p => { const n = p.match(/\d+/g); return n ? n.some(num => num >= 120 && num <= 140) : false; } },
        { id: "sd4", desc: "Must include a 'Duet': two special characters touching each other.", check: p => /[!@#$%^&*]{2}/.test(p) },
        { id: "sd5", desc: "The password must be a 'Palindrome' of its numbers.", check: p => { const d = p.match(/\d/g); return d ? d.join('') === [...d].reverse().join('') : false; } },
        { id: "sd6", desc: "Must include a legendary band member: Lennon, McCartney, Jagger, or Mercury.", check: p => /Lennon|McCartney|Jagger|Mercury/i.test(p) },
        { id: "sd7", desc: "The first character must be the 'Key' (A-G) and the last character must be a digit.", check: p => /^[A-G].*\d$/.test(p) },
        { id: "sd8", desc: "Must contain the hex code for 'Spotify Green' (#1DB954).", check: p => /1DB954/i.test(p) },
        { id: "sd9", desc: "Must contain a 'Trill': alternating letters like 'AbAb'.", check: p => /([a-zA-Z])([a-zA-Z])\1\2/.test(p) },
        { id: "sd10", desc: "Must contain at least 4 different Roman numerals (The 'Symphony' rule).", check: p => new Set((p.match(/[IVXLCDM]/g) || [])).size >= 4 },
        { id: "sd11", desc: "The sum of all digits must be a multiple of 7 (The 'Circle of Fifths' variant).", check: p => { const d = p.match(/\d/g); return d ? d.reduce((a, b) => +a + +b, 0) % 7 === 0 : false; } },
        { id: "sd12", desc: "Must contain the name of an instrument: Guitar, Piano, or Drums.", check: p => /Guitar|Piano|Drums/i.test(p) },
        { id: "sd13", desc: "Must contain a 'Silence' period: three underscores in a row (___).", check: p => /___/.test(p) },
        { id: "sd14", desc: "The password must 'fade in': starts with a single character followed by a space.", check: p => /^. /.test(p) },
        { id: "sd15", desc: "Password must contain a streaming quality.", check: p => /320kbps|128kbps/i.test(p) },
    ],
};

export const DIFF_META = {
    easy: {
        label: "EASY",
        color: "#10b981",
        desc: "5 rules — the setup.",
        sub: "S₀ → ... → S₅"
    },
    average: {
        label: "AVERAGE",
        color: "#f59e0b",
        desc: "10 rules — the logic.",
        sub: "S₀ → ... → S₁₀"
    },
    difficult: {
        label: "DIFFICULT",
        color: "#dc2626",
        desc: "15 rules — the nightmare.",
        sub: "S₀ → ... → S₁₅"
    },
};