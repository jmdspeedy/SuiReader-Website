
import { Scan, Wallet, FileText, Smartphone, Bell, PieChart, ShieldCheck, Wifi, Database } from 'lucide-react';

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
      { date: '2025-01-25', from: 'Shinjuku', to: 'Shibuya', cost: 300, bal: 1250 },
      { date: '2025-01-24', from: 'Tokyo', to: 'Shinagawa', cost: 300, bal: 1550 },
      { date: '2025-01-23', from: 'Ikebukuro', to: 'Ueno', cost: 300, bal: 1850 },
      { date: '2025-01-22', from: 'Akihabara', to: 'Tokyo', cost: 300, bal: 2150 },
    ]
  }
};

// --- Features Section ---
export const FEATURES_CONTENT = {
  title: (
    <>
      Everything you need for <br className="md:hidden" /> seamless travel.
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
  { number: "005", date: "Mar 12, 2025", title: "Official Launch", content: "SuiReader is now live on the Google Play Store! Thank you to all beta testers for your feedback." },
  { number: "004", date: "Mar 01, 2025", title: "Premium Features", content: "Launched optional premium tier including data export and custom wallet themes." },
  { number: "003", date: "Feb 15, 2025", title: "Material 3 Migration", content: "Full UI overhaul to align with the latest Android Material You design guidelines." },
  { number: "002", date: "Jan 28, 2025", title: "Beta Release", content: "Released the first public beta to a small group of users for stability testing." },
  { number: "001", date: "Jan 10, 2025", title: "Initial Commit", content: "Started the project. Set up the Android Studio environment and NFC reader logic." },
];

// --- Download CTA Section ---
export const CTA_CONTENT = {
  title: "Start tracking your travel today.",
  description: "Download SuiReader for Android and take control of your Japanese IC cards. Simple, ad-free, and secure.",
  googlePlayBtn: "Google Play",
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