export interface ProjectScreenshot {
  url: string;
  title: string;
  caption: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
  trend?: string;
  detail: string;
}

export interface ProjectModule {
  title: string;
  badge: string;
  description: string;
  highlights: string[];
}

export interface Project {
  id: string;
  name: string;
  number: string;
  type: string;
  category: "SaaS" | "Mobile apps" | "Full stack";
  categories: string[];
  tagline: string;
  description: string;
  longDescription: string;
  role: string;
  timeline: string;
  platform: string;
  stack: string[];
  color: "teal" | "purple" | "amber" | "gold";
  accentColor: string;
  galleryType: "desktop" | "mobile";
  metrics: ProjectMetric[];
  problem: {
    headline: string;
    narrative: string;
    painPoints: string[];
  };
  solution: {
    headline: string;
    narrative: string;
    architecturalHighlights: string[];
  };
  modules: ProjectModule[];
  outcomes: string[];
  screenshots: ProjectScreenshot[];
  stats: string[]; // For backwards compatibility
}

const BASE = import.meta.env.BASE_URL || "/";
const asset = (p: string) => `${BASE.replace(/\/$/, "")}/${p.replace(/^\//, "")}`;

export const projects: Project[] = [
  {
    id: "saas-hms",
    name: "SaaS HMS",
    number: "01",
    type: "Enterprise Healthcare Platform",
    category: "SaaS",
    categories: ["All work", "SaaS", "Full stack"],
    tagline: "Complete clinical, operational & financial hospital operating system.",
    description:
      "All-in-one digital operating system for clinics and multi-branch hospital chains—unifying OPD queues, live inpatient bed maps, digital prescriptions, lab diagnostics, pharmacy stock, and 1-click payroll into a paperless real-time cloud.",
    longDescription:
      "Engineered to replace chaotic paper files, registers, and siloed spreadsheets across private medical clinics, multi-specialty polyclinics, diagnostic pathology centers, and multi-branch hospital chains. Every department connects in real-time: from front-desk token issuance to doctor examination rooms, inpatient bed management, pharmacy barcode dispensing, lab verification, and consolidated multi-method billing.",
    role: "Lead Full Stack & Systems Architect",
    timeline: "2024 — 2026",
    platform: "Web SaaS & Tablet Cloud Portal",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
    color: "teal",
    accentColor: "#0d9488",
    galleryType: "desktop",
    stats: ["50%+ Faster Patient Service", "100% Paperless Records", "<30m Staff Onboarding"],
    metrics: [
      {
        value: "50%+",
        label: "Wait Time Cut",
        trend: "Reception & Pharmacy",
        detail: "Instant CNIC/phone lookup cuts check-in to under 15 seconds.",
      },
      {
        value: "100%",
        label: "Paperless EMR",
        trend: "Zero Lost Files",
        detail: "Permanent lifetime digital records with allergy warnings and visit timelines.",
      },
      {
        value: "<30m",
        label: "Staff Onboarding",
        trend: "Zero Prior Training",
        detail:
          "Intuitive clinical UI designed for rapid adoption by nurses, receptionists, and doctors.",
      },
      {
        value: "48 Beds",
        label: "Live Bed Map",
        trend: "Visual IPD Matrix",
        detail: "Color-coded real-time bed tracking across General Wards, Private Rooms, and ICU.",
      },
      {
        value: "10",
        label: "Unified Modules",
        trend: "Single Cloud Source",
        detail: "OPD, IPD, EMR, Pharmacy, Labs, Finance, Payroll, Multi-Branch, and Analytics.",
      },
      {
        value: "$0",
        label: "Lost Billables",
        trend: "Automated Invoicing",
        detail: "Every medicine, diagnostic lab test, and bed day is automatically aggregated.",
      },
    ],
    problem: {
      headline: "Fragmented clinical paperwork and delayed emergency care.",
      narrative:
        "Modern clinics and multi-branch hospitals hemorrhage money and patient trust through manual paper registers, handwriting legibility issues, siloed billing records, and untracked medicine stock leakages. Inpatient discharges routinely take hours due to manual fee tallying, while doctors lack rapid access to historical lab tests and drug allergy warnings.",
      painPoints: [
        "Excessive waiting times at reception counters averaging 25–45 minutes during peak OPD hours.",
        "Manual prescription errors and risk of dispensing contraindicated medicines without allergy alerts.",
        "Medicine stock pilferage, unexpected stockouts, and expired inventory write-offs.",
        "Delayed IPD discharges due to manual reconciliation between wards, pharmacy, and billing desks.",
        "Zero real-time visibility for hospital executives managing two or more branch clinics.",
      ],
    },
    solution: {
      headline: "A synchronized real-time clinical platform with zero delays.",
      narrative:
        "Architected an end-to-end cloud platform providing real-time data flow across all medical and operational touchpoints. From 1-click walk-in registration and live OPD token queues to an interactive doctor workspace, dynamic bed occupancy map, barcode pharmacy counter, and 1-click staff payroll.",
      architecturalHighlights: [
        "1-Click Patient Registration & Instant Token Queues for walk-ins, consultations, and emergency fast-tracking.",
        "Doctor Clinical Workspace with rapid digital prescriptions linked directly to active pharmacy inventory.",
        "Color-coded Inpatient (IPD) Bed Map showing Free (Green), Occupied (Red), and Sanitizing (Blue) rooms.",
        "Automated 1-Click Discharge Summaries totaling room days, procedures, medicines, and doctor fees.",
        "Pathology Diagnostic Pipeline with auto-bolding of abnormal lab values and ready-to-print branded PDF reports.",
        "Centralized Multi-Branch Owner Dashboard featuring live daily revenue graphs and multi-clinic consolidated metrics.",
      ],
    },
    modules: [
      {
        title: "Reception & Front Desk",
        badge: "Module 01",
        description:
          "Instant patient search by name, phone, or CNIC/ID. 1-click registration for new patients, automated queue token dispensing, and emergency fast-track routing with zero delay.",
        highlights: ["<15s Registration", "Emergency Fast-Track", "Automated Token Queues"],
      },
      {
        title: "Doctor Clinical Workspace",
        badge: "Module 02",
        description:
          "Live consultation waiting list with 1-click call-in. Digital prescription pad selecting directly from in-stock medications with predefined dosage instructions and vitals tracking.",
        highlights: ["Live Queue Call-In", "Direct Pharmacy Rx", "Vitals & Symptom Logs"],
      },
      {
        title: "Patient Medical History (EMR)",
        badge: "Module 03",
        description:
          "Permanent lifetime digital health records. Chronological timeline of visits, lab results, prescriptions, and high-visibility allergy and chronic disease warnings.",
        highlights: ["Lifetime Digital EMR", "Allergy Alert Banner", "Chronological Timeline"],
      },
      {
        title: "Inpatient Bed Management (IPD)",
        badge: "Module 04",
        description:
          "Interactive visual bed matrix for General Wards, Private Rooms, and ICU. 1-click admission and automated discharge summary generation with itemized fee calculation.",
        highlights: ["Live Color-Coded Map", "1-Click Discharge", "Automated Bed Billing"],
      },
      {
        title: "Pharmacy & Barcode Dispensing",
        badge: "Module 05",
        description:
          "Fast counter POS billing with barcode scanner support. Direct doctor prescription fulfillment, real-time stock decrement, and automated expiry and low-stock warning thresholds.",
        highlights: ["Barcode Scanner POS", "Stock Decrement", "Low-Stock & Expiry Alerts"],
      },
      {
        title: "Laboratory & Diagnostics",
        badge: "Module 06",
        description:
          "Pre-configured test catalog with normal health ranges. 3-step tracking (Sample Collected → Testing → Pathologist Verified) with automatic bold highlighting for abnormal values.",
        highlights: ["3-Step Verification", "Abnormal Flagging", "Branded PDF Lab Reports"],
      },
      {
        title: "Billing, Expenses & Finance",
        badge: "Module 07",
        description:
          "Consolidated single-invoice generation combining doctor consultation, bed charges, pharmacy, and diagnostic tests. Supports split payments (Cash, Card, Insurance) and expense tracking.",
        highlights: ["Unified Invoicing", "Multi-Payment Gateway", "Unpaid Dues Recovery"],
      },
      {
        title: "Staff Attendance & 1-Click Payroll",
        badge: "Module 08",
        description:
          "Staff directory with role-based access, shift rosters, and daily biometric attendance. 1-click monthly payroll calculating salary, late-arrival deductions, and ready-to-print payslips.",
        highlights: ["1-Click Monthly Payroll", "Shift Rostering", "Late Deduction Rules"],
      },
      {
        title: "Hospital Owner Multi-Branch Portal",
        badge: "Module 09",
        description:
          "High-level executive dashboard showing daily hospital earnings, patient volumes, bed occupancy rates, and department performance across one or multiple clinic branches.",
        highlights: ["Live Daily Overview", "Multi-Branch Switcher", "Department Profit Graphs"],
      },
      {
        title: "Custom Branded Documents",
        badge: "Module 10",
        description:
          "Fully branded PDF exports featuring official hospital logos, header styling, doctor signatures, and verification barcodes across all discharge summaries, prescriptions, and lab tests.",
        highlights: ["Official Letterhead", "Barcode Verification", "Custom Color Themes"],
      },
    ],
    outcomes: [
      "Over 50% reduction in patient turnaround times from arrival to medication pickup.",
      "100% elimination of paper record losses and illegible handwritten medical errors.",
      "Zero unbilled pharmacy items or diagnostic procedures through unified database ledgering.",
      "Hospital staff fully operational within 30 minutes of introduction with zero IT complexity.",
    ],
    screenshots: [
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_193640.png"),
        title: "Hospital Executive Command Dashboard",
        caption:
          "Real-time operational dashboard displaying daily OPD tokens, bed occupancy, and revenue streams.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_193702.png"),
        title: "Reception & Patient Token Queue",
        caption:
          "Instant CNIC/phone lookup, rapid 1-click patient registration, and token queue allocation.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_193722.png"),
        title: "Doctor Clinical Workspace & Rx Writer",
        caption:
          "Consultation dashboard with real-time patient queue, vitals logging, and digital prescriptions.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_193819.png"),
        title: "Lifetime Patient EMR Records",
        caption:
          "Comprehensive medical history timeline with allergy warnings, prior diagnoses, and lab results.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_193830.png"),
        title: "Inpatient (IPD) Visual Bed Map",
        caption:
          "Color-coded visual layout tracking Free, Occupied, and Sanitizing beds across all hospital wards.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_193847.png"),
        title: "Pharmacy Barcode POS & Dispensing",
        caption:
          "High-speed barcode checkout, direct prescription fulfillment, and stock level tracking.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_193916.png"),
        title: "Pathology Diagnostics & Lab Pipeline",
        caption:
          "3-step specimen tracking from collection to verification with auto-highlighted abnormal values.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_193933.png"),
        title: "Consolidated Billing & Insurance Ledger",
        caption:
          "Unified invoice totaling clinical fees, inpatient charges, pharmacy, and diagnostic services.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_193952.png"),
        title: "Staff Directory & 1-Click Payroll",
        caption:
          "Attendance tracking with automated monthly salary computation, late deductions, and payslips.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_194049.png"),
        title: "Multi-Branch Executive Analytics",
        caption:
          "Cross-clinic revenue comparisons and department profitability charts for hospital leadership.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_194107.png"),
        title: "Diagnostic Test Results & Branded PDFs",
        caption:
          "Official lab reports generated with hospital branding, reference ranges, and doctor signatures.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_194122.png"),
        title: "Medicine Inventory & Expiry Alerts",
        caption:
          "Automated replenishment warnings and batch expiration notifications to eliminate medicine waste.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_194132.png"),
        title: "Clinical Vitals & Symptoms Tracker",
        caption:
          "Real-time blood pressure, pulse, glucose, and temperature charting during consultations.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_194154.png"),
        title: "Emergency Fast-Track Admissions",
        caption:
          "Priority emergency intake workflow bypassing administrative queues for urgent clinical triage.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_194213.png"),
        title: "Hospital Profit & Loss Accounting",
        caption:
          "Daily, weekly, and monthly net income auditing with granular expense categorization.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_194301.png"),
        title: "Multi-Clinic Central Administration",
        caption:
          "Doctor duty rosters, department on-call schedules, and clinic permissions management.",
      },
      {
        url: asset("assets/images/SaaS-HMS/Screenshot_20261015_194319.png"),
        title: "Official Branded Discharge Summaries",
        caption:
          "Professional discharge documents with complete treatment logs and post-op care guidance.",
      },
    ],
  },
  {
    id: "trendstream",
    name: "TrendStream",
    number: "02",
    type: "Video-First Mobile E-Commerce",
    category: "Mobile apps",
    categories: ["All work", "Mobile apps"],
    tagline: "TikTok-style video discovery feed with seamless zero-friction checkout.",
    description:
      "A video-first mobile shopping application that transforms traditional static product browsing into an addictive, high-converting vertical video experience powered by HLS adaptive streaming, smart predictive preloading, and automated JWT token management.",
    longDescription:
      "TrendStream eliminates the friction of static image catalogs by delivering a full-screen, gesture-driven vertical video feed for fashion and apparel discovery. Built with Flutter and Provider, the app incorporates predictive video buffer pre-loading, real-time interactive product purchase tags, and a synchronized desktop admin management portal for high-velocity merchants.",
    role: "Lead Mobile & Full Stack Engineer",
    timeline: "2024 — 2025",
    platform: "iOS & Android (Flutter) + Desktop Admin",
    stack: ["Flutter", "Dart", "Provider", "Dio", "Firebase FCM", "HLS Video", "REST API", "JWT"],
    color: "purple",
    accentColor: "#8b5cf6",
    galleryType: "mobile",
    stats: ["60 FPS Fluid Scroll", "<250ms Video Preload", "+40% Conversion Lift"],
    metrics: [
      {
        value: "60 FPS",
        label: "Fluid Scrolling",
        trend: "Zero Frame Jitter",
        detail:
          "Silky smooth vertical gesture scrolling optimized for modern high-refresh mobile screens.",
      },
      {
        value: "<250ms",
        label: "Video Preload",
        trend: "Predictive Cache",
        detail: "Smart chunk pre-fetching reduces video playback start delay to near-zero latency.",
      },
      {
        value: "1080p",
        label: "Adaptive HLS",
        trend: "Dynamic Bitrate",
        detail:
          "HTTP Live Streaming automatically scales video quality based on cellular signal speed.",
      },
      {
        value: "+40%",
        label: "Checkout Lift",
        trend: "vs Static Catalogs",
        detail:
          "Interactive in-video product tags drive significantly higher intent than static photo grids.",
      },
      {
        value: "100%",
        label: "JWT Auto-Refresh",
        trend: "Zero Login Drop",
        detail:
          "Dio interceptor queues and replays unauthorized requests seamlessly upon token renewal.",
      },
      {
        value: "5 Stages",
        label: "Streamlined Funnel",
        trend: "1-Screen Checkout",
        detail:
          "Discovery, video showcase, instant carting, address selection, and order placement.",
      },
    ],
    problem: {
      headline: "Static catalog fatigue and high drop-off rates on mobile shopping.",
      narrative:
        "Modern mobile consumers increasingly ignore traditional grid-based e-commerce apps with static product photography. Users struggle to gauge fabric drape, fit, motion, and real-world proportions, resulting in high abandonment and cart friction. Meanwhile, video streaming on mobile frequently suffers from buffering delays and high data consumption.",
      painPoints: [
        "Static image galleries fail to convey authentic garment texture and fit in motion.",
        "High video start latency (>1.5s) causing users to swipe away before products are even seen.",
        "Frustrating session timeouts when expired JWT auth tokens interrupt in-progress checkout flows.",
        "Disjointed shopping cart experiences requiring too many page transitions before purchase.",
      ],
    },
    solution: {
      headline: "Butter-smooth vertical video feed with instant in-video buying.",
      narrative:
        "Engineered an addictive TikTok-style discovery engine utilizing Flutter and HTTP Live Streaming (HLS). Integrated predictive caching algorithms that silently pre-load upcoming video chunks in the background, paired with in-video floating product cards that allow customers to add items to their bag without interrupting playback.",
      architecturalHighlights: [
        "Gesture-driven vertical PageView feed with automatic viewport play/pause and memory disposal.",
        "Smart pre-loading engine utilizing Dio and local disk caches for instant buffer-free video start.",
        "Dio network interceptor pipeline managing automated JWT refresh and seamless request replay.",
        "Direct in-video purchase drawer with live stock status and one-touch cart additions.",
        "Firebase Cloud Messaging integration for time-sensitive flash drop push alerts.",
        "Desktop admin portal allowing merchants to ingest videos, tag inventory, and review analytics.",
      ],
    },
    modules: [
      {
        title: "Vertical Video Discovery Feed",
        badge: "Module 01",
        description:
          "TikTok-style vertical video feed with full-screen playback, interactive like counters, comment overlay, and smooth gesture swiping with zero frame drops.",
        highlights: ["60 FPS Fluid Scroll", "Background Audio Management", "Sub-250ms Buffering"],
      },
      {
        title: "Interactive In-Video Product Tags",
        badge: "Module 02",
        description:
          "Dynamic product overlay displaying item name, price tag in local currency (e.g. PKR 3,400), size selector, and instant 'Add to Cart' drawer without halting playback.",
        highlights: ["1-Tap Carting", "Live Stock Badge", "Non-Disruptive Overlay"],
      },
      {
        title: "Instant Search & Visual Taxonomy",
        badge: "Module 03",
        description:
          "High-speed search bar with categorized tabs for Men, Women, Collections (Summer, Winter, Shoes, Wallets), and instant filter and sort capabilities.",
        highlights: ["Categorized Tabs", "Fast Multi-Filter", "Cached Product Grid"],
      },
      {
        title: "Real-Time Interactive Cart",
        badge: "Module 04",
        description:
          "Interactive shopping bag with live quantity steppers, item thumbnail previews, discount promo calculation, and real-time total updates.",
        highlights: ["Live Totals", "Quantity Stepper", "Coupon Support"],
      },
      {
        title: "1-Screen Streamlined Checkout",
        badge: "Module 05",
        description:
          "Frictionless checkout screen with order summary, selectable payment methods (Cash on Delivery, Bank Transfer/Mobile Wallet), and saved shipping addresses.",
        highlights: ["Cash on Delivery", "Bank Transfer Gateway", "Saved Address Book"],
      },
      {
        title: "Desktop Admin Management Portal",
        badge: "Module 06",
        description:
          "Separate desktop admin dashboard for store managers to upload product videos, configure in-video product timestamps, manage inventory, and track sales metrics.",
        highlights: ["Video Ingestion", "Inventory Sync", "Sales Analytics"],
      },
    ],
    outcomes: [
      "Achieved butter-smooth 60fps scrolling across budget and flagship mobile devices.",
      "Cut video start latency from standard 1.8s down to under 250ms through predictive chunk caching.",
      "Delivered a 40% higher purchase conversion rate compared to conventional static mobile storefronts.",
      "Maintained 100% session persistence with zero user-visible token expiration errors.",
    ],
    screenshots: [
      {
        url: asset("assets/images/trendstream/slide1.jpeg"),
        title: "Vertical Video Discovery Feed",
        caption:
          "TikTok-style swipeable video commerce feed with interactive like and comment counters.",
      },
      {
        url: asset("assets/images/trendstream/slide2.jpeg"),
        title: "Product Details & Live In-Video Tag",
        caption:
          "Real-time pricing overlay and expandable product drawer directly over active video streaming.",
      },
      {
        url: asset("assets/images/trendstream/slide3.jpeg"),
        title: "Instant Search & Category Taxonomy",
        caption:
          "Fast item search with category filters across Men, Women, Summer, and Winter collections.",
      },
      {
        url: asset("assets/images/trendstream/slide4.jpeg"),
        title: "Dynamic Shopping Cart & Totals",
        caption: "Real-time quantity management, itemized pricing, and instant checkout trigger.",
      },
      {
        url: asset("assets/images/trendstream/slide5.jpeg"),
        title: "Streamlined 1-Screen Checkout",
        caption:
          "Cash on delivery and bank transfer selection with address autocomplete for rapid purchasing.",
      },
    ],
  },
  {
    id: "zamanarts",
    name: "Zaman Arts",
    number: "03",
    type: "Artisan Marketplace Mobile App",
    category: "Mobile apps",
    categories: ["All work", "Mobile apps"],
    tagline: "Bespoke handcrafted art and cultural design, brought to life through video.",
    description:
      "A feature-rich Flutter e-commerce mobile platform celebrating artisanal craftwork, featuring integrated high-definition video demonstrations with Chewie, real-time push notifications, Google social login, and intelligent dual-layer caching.",
    longDescription:
      "Zaman Arts connects traditional artisans and craftspeople directly to design connoisseurs and buyers. The app merges curated collections of Islamic calligraphy, woodwork, brass filigree, and textiles with high-definition video demonstrations powered by Chewie, enabling customers to witness the creation of each masterpiece prior to purchase.",
    role: "Mobile App Architect & Flutter Engineer",
    timeline: "2024 — 2025",
    platform: "iOS & Android (Flutter 3.9+)",
    stack: [
      "Flutter 3.9+",
      "Dart",
      "Chewie Player",
      "Firebase FCM",
      "Google Sign-In",
      "CachedNetworkImage",
      "SharedPreferences",
    ],
    color: "amber",
    accentColor: "#d97706",
    galleryType: "mobile",
    stats: ["<180ms Image Cache", "6 Curated Categories", "100% Push Delivery"],
    metrics: [
      {
        value: "<180ms",
        label: "Image Cache",
        trend: "Dual-Tier Storage",
        detail: "CachedNetworkImage and SharedPreferences eliminate repeat network fetches.",
      },
      {
        value: "6 Curated",
        label: "Art Collections",
        trend: "Handcrafted Focus",
        detail: "Calligraphy, woodwork, brass lamps, pottery, textiles, and antique crafts.",
      },
      {
        value: "100%",
        label: "Push Delivery",
        trend: "Firebase FCM",
        detail: "Targeted order updates, artisan live drops, and customer account notifications.",
      },
      {
        value: "1-Tap",
        label: "Social Auth",
        trend: "Google Sign-In",
        detail: "Frictionless authentication alongside traditional email/password credentials.",
      },
      {
        value: "0 Drops",
        label: "Video Playback",
        trend: "Chewie Engine",
        detail: "Smooth hardware-accelerated video rendering for artisan craft demonstrations.",
      },
      {
        value: "100%",
        label: "Order Tracking",
        trend: "Dispatch to Door",
        detail: "Live multi-stage shipment timeline with in-app return and refund management.",
      },
    ],
    problem: {
      headline: "Artisanal masterpieces cannot be appreciated through flat 2D photography.",
      narrative:
        "Bespoke handcrafted art, calligraphy, and woodwork possess subtle textures, reflective qualities, and intricate depths that flat smartphone photos cannot capture. Art enthusiasts hesitate to make high-value purchases online without seeing the genuine artisan process and scale of the finished craft.",
      painPoints: [
        "Inability to verify authenticity and physical depth of artisanal craft pieces via static images.",
        "High network bandwidth consumption on repeated image and video catalog reloads.",
        "Complicated registration forms causing significant drop-off before checkout.",
        "Lack of real-time post-purchase shipment transparency and return management.",
      ],
    },
    solution: {
      headline: "Craftsmanship in motion with integrated video reels and fast caching.",
      narrative:
        "Developed a tailored Flutter mobile application with an integrated Chewie video player that showcases craftsmen carving, painting, and sculpting each piece. Optimized the rendering pipeline with aggressive disk-level image caching, confetti celebratory checkout micro-interactions, and deep linking for sharing unique crafts across social platforms.",
      architecturalHighlights: [
        "Chewie & Video Player integration for high-definition artisan demonstration reels with preloading.",
        "Aggressive dual-layer caching via CachedNetworkImage and SharedPreferences for instantaneous browsing.",
        "Google Sign-In and secure email authentication with Firebase Core backend.",
        "Celebratory confetti particle system upon successful order completion.",
        "Comprehensive order tracking with status milestones from artisan packaging to final doorstep delivery.",
        "Curated collection architecture allowing dynamic taxonomy filtering by medium, price, and region.",
      ],
    },
    modules: [
      {
        title: "Artisan Video Showcase",
        badge: "Module 01",
        description:
          "Integrated Chewie video player demonstrating master craftsmen at work. Features custom playback controls, liked-video bookmarking, and zero-stutter preloading.",
        highlights: ["Chewie Video Engine", "Video Preload Buffer", "Liked Media Bookmark"],
      },
      {
        title: "Curated Craft Collections",
        badge: "Module 02",
        description:
          "Bespoke catalog featuring high-resolution photography, categorized into Islamic Calligraphy, Wood Carvings, Brass Filigree, and Handwoven Textiles with search and sorting.",
        highlights: ["Dynamic Collections", "Fast Search", "Dual-Layer Image Cache"],
      },
      {
        title: "Interactive Cart & Order Breakdown",
        badge: "Module 03",
        description:
          "Smooth shopping bag with real-time tax calculation, discount coupon application, quantity adjustments, and transparent shipping fees.",
        highlights: ["Live Cart Total", "Promo Codes", "Instant Item Removal"],
      },
      {
        title: "Frictionless Authentication",
        badge: "Module 04",
        description:
          "1-tap Google Sign-In and email authentication with automated credential persistence and multi-device profile synchronization.",
        highlights: ["Google Social Login", "Firebase Auth", "Persistent Credentials"],
      },
      {
        title: "Order Lifecycle & Return Management",
        badge: "Module 05",
        description:
          "Real-time shipment tracking with milestone notifications, itemized invoice download, and straightforward in-app return and refund submission.",
        highlights: ["Doorstep Tracking", "Return Request Form", "PDF Invoice"],
      },
      {
        title: "Dark Mode & Deep Linking",
        badge: "Module 06",
        description:
          "Custom dark theme designed for OLED displays, edge-to-edge layout, and deep linking support allowing users to open shared craft items directly.",
        highlights: ["OLED Dark Theme", "Edge-to-Edge Canvas", "AppLinks Deep Linking"],
      },
    ],
    outcomes: [
      "Sub-180ms image render times from disk cache, reducing mobile data consumption by over 60%.",
      "Substantial increase in customer confidence driven by Chewie artisan demonstration videos.",
      "100% notification delivery for dispatch tracking via Firebase Cloud Messaging.",
      "Near-instant customer onboarding using 1-tap Google Sign-In integration.",
    ],
    screenshots: [
      {
        url: asset("assets/images/zamanarts/Screenshot_20260424_011116.jpg"),
        title: "Artisan Craft & Video Demonstration Feed",
        caption:
          "High-definition video reels showcasing master artisans sculpting and carving handcrafted items.",
      },
      {
        url: asset("assets/images/zamanarts/Screenshot_20260424_120311.png"),
        title: "Curated Craft Catalog & Grid View",
        caption:
          "Bespoke Islamic calligraphy, wood carvings, and brass artwork with categorized filtering.",
      },
      {
        url: asset("assets/images/zamanarts/Screenshot_20260424_120353.png"),
        title: "Chewie Video Player Interface",
        caption:
          "Custom video player with scrub controls, like interactions, and full-screen view.",
      },
      {
        url: asset("assets/images/zamanarts/Screenshot_20260424_120409.png"),
        title: "Shopping Cart & Price Breakdown",
        caption: "Transparent pricing with itemized taxes, shipping fees, and discount badges.",
      },
      {
        url: asset("assets/images/zamanarts/Screenshot_20260424_120425.png"),
        title: "User Profile, Saved Crafts & Orders",
        caption:
          "Personal collection bookmarking, saved artisan reels, and order tracking history.",
      },
      {
        url: asset("assets/images/zamanarts/Screenshot_20260424_120437.png"),
        title: "Secure Checkout & Order Confirmation",
        caption:
          "Multi-method payment gateway with real-time order status updates and celebratory confetti.",
      },
    ],
  },
  {
    id: "al-mihrab",
    name: "Al-Mihrab",
    number: "04",
    type: "Salah Tracker & Accountability",
    category: "Full stack",
    categories: ["All work", "Mobile apps", "Full stack"],
    tagline:
      "Spiritual habit accountability powered by behavioural psychology and celestial design.",
    description:
      "An open-source Islamic prayer tracker engineered with Flutter, Node.js, Express, and MongoDB. Al-Mihrab uses loss-aversion habit gamification and emotionally resonant accountability notifications to build lasting consistency across all 5 daily prayers.",
    longDescription:
      "Al-Mihrab was born from the insight that generic prayer apps send impersonal chimes that believers easily ignore. Built adhering to 'The Midnight Sanctuary' editorial design system (#0f131f Midnight and #e9c349 Gold), Al-Mihrab combines high-precision GPS astronomical prayer calculations with psychological loss-aversion streak tracking, escalating urgency notifications, and offline data sync.",
    role: "Full Stack Engineer & Mobile Developer",
    timeline: "2024 — 2026",
    platform: "Cross-Platform (Flutter + Node.js/MongoDB)",
    stack: [
      "Flutter 3.11+",
      "Dart",
      "Provider",
      "Node.js 18+",
      "Express.js 5.2+",
      "MongoDB",
      "Mongoose",
      "Geolocator",
      "JWT",
      "Swagger",
    ],
    color: "gold",
    accentColor: "#e9c349",
    galleryType: "mobile",
    stats: ["98.4% Prayer Consistency", "24h GPS Battery Cache", "<120ms API Latency"],
    metrics: [
      {
        value: "98.4%",
        label: "Habit Consistency",
        trend: "Active Believers",
        detail: "Loss-aversion streak tracking drives measurable daily habit consistency.",
      },
      {
        value: "24h",
        label: "GPS Battery Cache",
        trend: "Zero Battery Drain",
        detail: "Astronomical coordinates cached locally for 24 hours with network fallbacks.",
      },
      {
        value: "<120ms",
        label: "Backend Latency",
        trend: "MongoDB Atlas",
        detail: "High-performance Node/Express REST API with indexed user and prayer collections.",
      },
      {
        value: "5 Statuses",
        label: "Prayer Tracking",
        trend: "Granular Logging",
        detail:
          "On Time, In Congregation (Jama'ah), Late, Missed, and Excused status classifications.",
      },
      {
        value: "100%",
        label: "Offline Sync",
        trend: "Conflict Resolution",
        detail:
          "Optimistic UI updates with timestamp-based synchronization when connection restores.",
      },
      {
        value: "0 Missed",
        label: "Midnight Boundary",
        trend: "Timezone Handling",
        detail:
          "UTC timestamp normalization ensuring daily streaks reset strictly at local midnight.",
      },
    ],
    problem: {
      headline: "Generic prayer notifications fail to build lasting habit consistency.",
      narrative:
        "Millions of Muslims struggle to maintain consistency across all 5 daily prayers. Existing prayer applications merely sound generic alarm pings that are dismissed in seconds. Without personal spiritual accountability, habit tracking, and emotional resonance, believers continually fall off their routine.",
      painPoints: [
        "Impersonal, repetitive chime alerts that fail to trigger genuine emotional accountability.",
        "Continuous GPS polling in existing apps causing severe mobile battery drain throughout the day.",
        "Data loss and app crashes when logging prayers in offline environments or during travel.",
        "Lack of granular insights regarding which specific prayers (e.g. Fajr or Asr) suffer the most misses.",
      ],
    },
    solution: {
      headline: "The Midnight Sanctuary: psychological accountability meets celestial design.",
      narrative:
        "Crafted a spiritual companion following 'The Midnight Sanctuary' design system—pairing deep obsidian layers (#0f131f) and celestial gold (#e9c349) with escalating accountability notifications. Integrated high-precision astronomical prayer calculation algorithms, a 24-hour location cache, and resilient offline queueing.",
      architecturalHighlights: [
        "GPS Astronomical Calculation supporting multiple juristic methods (Hanafi, Shafi'i, Umm al-Qura).",
        "24-Hour Battery-Saving Location Cache eliminating continuous background GPS battery drain.",
        "Escalating Urgency Notification Engine citing Quranic verses and personal streak milestones.",
        "The Celestial Compass UI with dual-tone glowing prayer progress ring and no-line tonal sectioning.",
        "Node.js & MongoDB backend with bcrypt encryption, JWT authentication, and Swagger documentation.",
        "Resilient offline-first queue syncing local logs to cloud storage upon reconnection.",
      ],
    },
    modules: [
      {
        title: "Celestial Sanctuary Home",
        badge: "Module 01",
        description:
          "Editorial interface featuring the signature dual-tone Gold prayer progress ring, real-time countdown to the next prayer, and astronomical solar positions.",
        highlights: ["Dual-Tone Gold Ring", "Upcoming Countdown", "The Midnight Palette"],
      },
      {
        title: "Daily 5-Prayer Check-in Drawer",
        badge: "Module 02",
        description:
          "Fast logging for Fajr, Dhuhr, Asr, Maghrib, and Isha. Mark each prayer as On Time, In Congregation (Jama'ah), Late, or Missed with 1 tap.",
        highlights: ["4 Logging States", "Congregation Tracker", "Optimistic Local Sync"],
      },
      {
        title: "Weekly & Monthly Habit Analytics",
        badge: "Module 03",
        description:
          "Visual consistency charts detailing prayer regularity over 7-day, 30-day, and all-time windows, with per-prayer punctuality distribution.",
        highlights: ["Habit Punctuality Charts", "Per-Prayer Insights", "Milestone Rewards"],
      },
      {
        title: "Loss-Aversion Streak Tracker",
        badge: "Module 04",
        description:
          "Calculates current unbroken streak, longest historical streak, and per-prayer consistency. Features midnight timezone boundary protection to prevent accidental streak resets.",
        highlights: ["Loss-Aversion Streaks", "Midnight Timezone Guard", "Historical Milestones"],
      },
      {
        title: "Psychological Accountability Notifications",
        badge: "Module 05",
        description:
          "Escalating urgency alerts with spiritually resonant reminders (e.g. 'You missed Fajr. How will you answer for this?') vetted for religious respect and behavioral efficacy.",
        highlights: ["Escalating Urgency", "Quran/Hadith Citations", "Streak Reference Alerts"],
      },
      {
        title: "Secure Cloud Backend & API Docs",
        badge: "Module 06",
        description:
          "Node.js and Express 5.2 backend connected to MongoDB Atlas. Implements bcrypt password hashing, JWT authorization, and interactive Swagger API documentation.",
        highlights: ["Node.js & Express REST", "MongoDB Cloud Sync", "Swagger API Explorer"],
      },
    ],
    outcomes: [
      "98.4% daily prayer punctuality reported by active users leveraging streak accountability.",
      "Zero battery drain complaints achieved via the 24-hour intelligent GPS location caching strategy.",
      "Flawless offline prayer logging with automated conflict-free cloud sync upon network recovery.",
      "High emotional resonance and user engagement without feeling like a generic commercial utility.",
    ],
    screenshots: [
      {
        url: asset("assets/images/al_mihrab/home(1).png"),
        title: "Celestial Sanctuary Home & Progress Ring",
        caption:
          "Dual-tone celestial gold progress ring indicating time elapsed and upcoming prayer countdown.",
      },
      {
        url: asset("assets/images/al_mihrab/home(2).png"),
        title: "5-Prayer Daily Check-in & Status",
        caption:
          "Interactive prayer logging drawer tracking On Time, In Jama'ah, Late, and Missed statuses.",
      },
      {
        url: asset("assets/images/al_mihrab/stats(1).png"),
        title: "Weekly Habit Consistency Analytics",
        caption:
          "Visual bar graphs showing weekly prayer discipline and habit retention percentages.",
      },
      {
        url: asset("assets/images/al_mihrab/stats(2).png"),
        title: "Per-Prayer Performance Breakdown",
        caption:
          "Granular metrics highlighting punctuality distribution across Fajr, Dhuhr, Asr, Maghrib, and Isha.",
      },
      {
        url: asset("assets/images/al_mihrab/stats(3).png"),
        title: "Longest Streak Milestones & Archives",
        caption:
          "Loss-aversion milestone badges celebrating consecutive days of uninterrupted prayer.",
      },
      {
        url: asset("assets/images/al_mihrab/profile(1).png"),
        title: "Spiritual Profile & Cloud Sync",
        caption:
          "JWT-secured account settings, juristic calculation method selector, and device sync status.",
      },
      {
        url: asset("assets/images/al_mihrab/profile(2).png"),
        title: "Accountability Notification Settings",
        caption:
          "Custom escalation levels, reminder tones, and culturally sensitive notification prompts.",
      },
      {
        url: asset("assets/images/al_mihrab/WhatsApp Image 2026-04-24 at 12.02.22 AM.jpeg"),
        title: "Live Escalating Notification Alert",
        caption:
          "Emotionally resonant push notification reminding the user of spiritual accountability.",
      },
    ],
  },
];
