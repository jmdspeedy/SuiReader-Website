
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
  { number: "025", date: "Apr 20, 2025", title: "Test Entry - Localization", content: "Stress testing the carousel component with additional card entries. Implemented Japanese and English toggle." },
  { number: "024", date: "Apr 18, 2025", title: "Test Entry - Haptic Feedback", content: "Added subtle vibration patterns when scanning cards successfully to improve accessibility." },
  { number: "023", date: "Apr 16, 2025", title: "Test Entry - Cloud Sync", content: "Prototyping optional cloud backup for transaction history so users don't lose data on uninstall." },
  { number: "022", date: "Apr 14, 2025", title: "Test Entry - Battery Opt", content: "Reduced background polling frequency to save battery life on older Android devices." },
  { number: "021", date: "Apr 12, 2025", title: "Test Entry - Widgets", content: "Created a home screen widget that shows the last scanned balance without opening the app." },
  { number: "020", date: "Apr 10, 2025", title: "Test Entry - Wear OS", content: "Investigation into a companion app for Galaxy Watch and Pixel Watch. Early stages." },
  { number: "019", date: "Apr 08, 2025", title: "Test Entry - Tablet Layout", content: "Optimized the history view for large screens using a master-detail flow." },
  { number: "018", date: "Apr 06, 2025", title: "Test Entry - Animations", content: "Refined the transition between the card scanner and the history detail view." },
  { number: "017", date: "Apr 04, 2025", title: "Test Entry - Networking", content: "Refactored the network layer to handle poor connectivity better when fetching station names." },
  { number: "016", date: "Apr 02, 2025", title: "Test Entry - Security", content: "Conducted an internal security audit to ensure no personal data is logged unnecessarily." },
  { number: "015", date: "Mar 30, 2025", title: "Test Entry - Dependencies", content: "Updated all Gradle dependencies to their latest stable versions. Fixed build warnings." },
  { number: "014", date: "Mar 28, 2025", title: "Test Entry - CI/CD", content: "Set up GitHub Actions to automatically build and sign the APK for beta testers." },
  { number: "013", date: "Mar 26, 2025", title: "Test Entry - Splitting", content: "Implemented code splitting to reduce the initial download size of the application." },
  { number: "012", date: "Mar 24, 2025", title: "Test Entry - Image Opt", content: "Compressed static assets and converted card backgrounds to WebP format." },
  { number: "011", date: "Mar 22, 2025", title: "Test Entry - Analytics", content: "Integrated anonymous usage statistics to track which card types are most popular." },
  { number: "010", date: "Mar 20, 2025", title: "Test Entry - Crash Reports", content: "Added Firebase Crashlytics to monitor stability in the wild." },
  { number: "009", date: "Mar 18, 2025", title: "Test Entry - Deep Links", content: "Supported deep linking to open specific wallet cards directly from notifications." },
  { number: "008", date: "Mar 16, 2025", title: "Test Entry - Notifications", content: "Configured local push notifications for daily balance reminders." },
  { number: "007", date: "Mar 14, 2025", title: "Test Entry - Onboarding", content: "Polished the onboarding slider with new Lottie animations explaining NFC usage." },
  { number: "006", date: "Mar 12, 2025", title: "Test Entry - Icons", content: "Redesigned the application icon to match the new Android 14 adaptive icon standards." },
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
