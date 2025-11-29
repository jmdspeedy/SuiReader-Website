

import { Scan, History, Wallet, FileText, Smartphone, Moon, Bell, PieChart, ShieldCheck, Wifi, Database } from './components/Icons';

// --- Global Settings ---
export const APP_NAME = "SuiReader";
export const LOGO_URL = "https://i.imgur.com/Kbq6MvQ.png";
export const LOGO_ALT = "SuiReader Logo";

// --- Navigation ---
export const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Dev Log', href: '#dev-log' },
];

export const NAV_CONTENT = {
  downloadBtn: "Download App",
  mobileDownloadBtn: "Download for Android",
};

// --- Hero Section ---
export const HERO_CONTENT = {
  badge: "Available now on Google Play",
  title: (
    <>
      Check and manage your <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-suica-green to-emerald-600">
        Suica Balance
      </span>{" "}
      in seconds.
    </>
  ),
  description: "Your essential companion for navigating life in Japan. Instantly read Suica, ICOCA, PASMO, and Kitaca cards. Enjoy a completely ad-free core experience designed for efficiency.",
  googlePlayBtn: "Get on Google Play (FREE!)",
  learnMoreBtn: "Learn more",
  features: ["Ad-Free Core", "Works Offline", "Card Management"],
  mockup: {
    time: "12:30",
    cardName: "Suica",
    balance: "¥ 1,250",
    historyTitle: "History",
    transactions: [
      { date: '2025-01-25', from: 'Narita', to: 'Shibuya', cost: 300, bal: 1250 },
      { date: '2025-01-24', from: 'Tokyo', to: 'Daiba', cost: 300, bal: 1550 },
      { date: '2025-01-23', from: 'Ikebukuro', to: 'Ueno', cost: 300, bal: 1850 },
      { date: '2025-01-22', from: 'Akihabara', to: 'Tokyo', cost: 300, bal: 2150 },
    ]
  }
};

// --- Features Section ---
export const FEATURES_CONTENT = {
  title: (
    <>
      Everything you need for <br className="md:hidden" /> travel in Japan.
    </>
  ),
  description: "SuiReader combines powerful NFC technology with a clean, interruption-free interface.",
  premiumLabel: "Premium"
};

export const FEATURES = [
  {
    title: 'Instant NFC Scan',
    description: 'Quickly check your balance and history just by tapping your card. Supports Suica, PASMO, ICOCA, Kitaca, and more.',
    icon: <Scan className="w-6 h-6 text-suica-green" />,
  },
  {
    title: 'Ad-Free Experience',
    description: 'Enjoy a clean, intuitive interface without any disruptive ads in the core app experience. We prioritize your efficiency.',
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
  },
  {
    title: 'Balance Reminders',
    description: 'Set up daily or weekly notifications to remind you to check your card balance so you are never caught short at the gate.',
    icon: <Bell className="w-6 h-6 text-amber-500" />,
  },
  {
    title: 'Digital Wallet',
    description: 'Add multiple cards, rename them, and customize backgrounds. Unlock permanently by watching a few short videos!',
    icon: <Wallet className="w-6 h-6 text-purple-500" />,
    isPremium: true,
  },
  {
    title: 'Spending Visualization',
    description: 'Get a clear overview of your spending habits with easy-to-understand charts and graphs to track your travel expenses.',
    icon: <PieChart className="w-6 h-6 text-blue-500" />,
    isPremium: true,
  },
  {
    title: 'PDF Export',
    description: 'Download transaction history by date range or number of entries. Perfect for expense tracking and record-keeping.',
    icon: <FileText className="w-6 h-6 text-red-500" />,
    isPremium: true,
  },
];

// --- How It Works Section ---
export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "Under the Hood",
  mainTitle: (
    <>
      Powered by robust <br/> NFC technology.
    </>
  ),
  description: "SuiReader utilizes the Android NFC API to communicate directly with the Felica chip inside major Japanese transit cards (Suica, Pasmo, Icoca, etc). We use the JIS 6319-4 standard to securely read unencrypted balance and history blocks.",
  steps: [
    {
      title: "1. Detect",
      description: "App listens for NfcF tags when active.",
      icon: <Wifi className="w-5 h-5" />,
      colorClass: "blue"
    },
    {
      title: "2. Read Blocks",
      description: "Sends raw commands to fetch the latest 20 transactions.",
      icon: <Database className="w-5 h-5" />,
      colorClass: "purple"
    },
    {
      title: "3. Parse & Display",
      description: "Hex data is converted into readable stations and amounts.",
      icon: <Smartphone className="w-5 h-5" />,
      colorClass: "green"
    }
  ],
  techSpecsTitle: "Technical Specifications",
  codeSnippet: (
    <code>
      <span className="text-purple-400">val</span> nfcAdapter = NfcAdapter.getDefaultAdapter(context)<br/>
      nfcAdapter?.enableReaderMode(activity, callback, ...)<br/>
      <span className="text-gray-500">// Processing raw bytes...</span>
    </code>
  )
};

export const TECH_SPECS = [
  { label: 'Protocol', value: 'NfcF (JIS 6319-4)' },
  { label: 'Architecture', value: 'MVVM + Repository' },
  { label: 'UI Framework', value: 'Jetpack Compose / Material 3' },
  { label: 'Required Permission', value: 'android.permission.NFC' },
];

// --- Dev Log Section ---
export const DEV_LOG_CONTENT = {
  title: "Dev Log",
  description: "Follow my journey building SuiReader."
};

export const DEV_LOGS = [
  { number: "026", date: "Nov 28, 2025", title: "Digital Real Estate", content: "The official app website is built and finished. This page you are looking at now serves as the app display hub, showcasing features through 3D visuals and providing access to downloads." },
  { number: "025", date: "Nov 25, 2025", title: "Web Origins", content: "Decided to build a dedicated website for the app. Started the project using React, Three.js and Tailwind CSS to create a high-quality landing page that matches the app's aesthetic." },
  { number: "024", date: "Nov 19, 2025", title: "The Final Countdown", content: "Got 12 closed testers on Google Play! Now the app just need 14 days of continuous testing to satisfy Play Store requirements before the official public release." },
  { number: "023", date: "Nov 18, 2025", title: "Vibes Check: Passed", content: "Navigation bar is now transparent in light mode and dark in night mode. This enhances visual consistency across the OS." },
  { number: "022", date: "Nov 15, 2025", title: "Using the Whole Screen", content: "Edge-to-edge display enabled; the app looks great behind the status bars. (Did this only because Android API 35 forced me to.)" },
  { number: "021", date: "Nov 14, 2025", title: "Time Travel Unlocked", content: "Jump straight to specific dates with the new week selector dialog. Quickly navigate past transaction history without endless scrolling, making data retrieval significantly faster." },
  { number: "020", date: "Nov 14, 2025", title: "Cutting Corners (Literally)", content: "Bar charts now feature rounded corners for a modern aesthetic. Softens the UI visualization, aligning with Material Design 3 principles for a friendlier user experience." },
  { number: "019", date: "Nov 13, 2025", title: "Swipe Right on Data", content: "Swipe through 52 weeks of history with our new pagination. Implemented a horizontal pager that dynamically loads weekly data, improving performance and navigation speed." },
  { number: "018", date: "Nov 13, 2025", title: "The Numbers Don't Lie", content: "New cards display usage counts and total top-up amounts clearly. Summarizes weekly activities at a glance, providing immediate financial insights without needing deep analysis." },
  { number: "017", date: "Nov 13, 2025", title: "Charts, Charts, Charts!", content: "Visual learners rejoice: added bar and pie charts for spending habits. Breaks down transport versus retail spending, helping users better understand their monthly budget allocation." },
  { number: "016", date: "Nov 12, 2025", title: "Is This Thing On?", content: "Added a clear warning icon for when NFC is disabled. Proactively alerts users to system settings issues, reducing confusion when scans fail to initiate." },
  { number: "015", date: "Nov 12, 2025", title: "Shameless Self-Promotion", content: "Added Privacy Policy and a hint that the developer is looking for work." },
  { number: "014", date: "Nov 11, 2025", title: "Playing Nice with Android", content: "Safer, cleaner PDF exports using Android's native MediaStore API. Ensures compatibility with Android 11+ scoped storage rules, preventing file access errors during export." },
  { number: "013", date: "Nov 09, 2025", title: "Free Stuff for Ads", content: "Unlock Premium features permanently by watching a few rewarded ads. giving more users access to advanced tools." },
  { number: "012", date: "Nov 07, 2025", title: "Direct Line to Management", content: "Replaced buggy dialogs with a direct email feedback button. Streamlines the support process, allowing users to attach logs and screenshots directly via their email client." },
  { number: "011", date: "Nov 05, 2025", title: "Squashing Bugs", content: "Report glitches instantly with the new in-app bug reporting form. Captures device info automatically, helping the dev team reproduce and fix crashes much faster." },
  { number: "010", date: "Nov 05, 2025", title: "Secret Knock", content: "Tap version number 10 times to unlock secret debug settings. Gives advanced users access to raw NFC logs and raw data inspection for troubleshooting." },
  { number: "009", date: "Nov 05, 2025", title: "Credit Where It's Due", content: "Added a list crediting all open-source libraries used in the app. Acknowledges community contributions and fulfills license requirements for third-party software dependencies." },
  { number: "008", date: "Nov 05, 2025", title: "Who Made This?", content: "New About screen in Settings displaying credits and app info. Centralizes application metadata and provides easy access to the privacy policy and terms of service." },
  { number: "007", date: "Nov 05, 2025", title: "Smooth Like Butter", content: "Silky smooth Material Design motion transitions added to all screens. Utilizes shared element transitions to make navigating between list views and details feel organic." },
  { number: "006", date: "Nov 05, 2025", title: "Smarter Pop-ups", content: "Premium pop-ups are now context-aware for Wallet and Export features. Targets specific user actions with relevant upsells, improving conversion rates while minimizing annoyance." },
  { number: "005", date: "Oct 30, 2025", title: "Digital Hoarder?", content: "Save multiple Suica cards locally to keep history forever. Allows tracking of separate commuter and personal cards within a single unified interface." },
  { number: "004", date: "Oct 29, 2025", title: "Don't Forget!", content: "Set daily or weekly reminders to scan your card balance. Helps commuters avoid the embarrassment of insufficient funds at the ticket gate during rush hour." },
  { number: "003", date: "Oct 26, 2025", title: "Expense Reports Made Easy", content: "Export your full transaction history as a PDF download. Creates documents suitable for company reimbursement claims and personal records." },
  { number: "002", date: "Oct 25, 2025", title: "Going Global & Going Dark", content: "Added Japanese, Chinese support, and a sleek system-wide Dark Mode. Broadens accessibility for international users and reduces eye strain during night-time usage." },
  { number: "001", date: "Oct 19, 2025", title: "Hello World", content: "Started and wrote the first line of code for 'SuiReader' project. Initialized the Git repository and set up the basic Android build configuration." },
];

// --- Download CTA Section ---
export const CTA_CONTENT = {
  title: "Start tracking your travel today.",
  description: "Download SuiReader for Android and take control of your Japanese IC cards. Simple, ad-free, and secure.",
  googlePlayBtn: "Google Play",
  apkBtn: "Direct Download",
  donateBtn: "Donate"
};

// --- Footer ---
export const FOOTER_CONTENT = {
  copyright: `© ${new Date().getFullYear()} SuiReader App. All rights reserved.`,
  links: [
    { label: "Privacy Policy", href: "https://sites.google.com/view/suireader-privacy" },
    { label: "Contact", href: "mailto:suireaderapp@gmail.com" },
  ]
};

// --- Voxel Scene ---
export const VOXEL_CONTENT = {
  title: (
    <>
      Travel Smart. <br/> Travel Free.
    </>
  ),
  description: "Experience Japan with ease"
};