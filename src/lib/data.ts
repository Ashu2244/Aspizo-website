export const company = {
  name: "Aspizo IT Solutions",
  tagline:
    "AI software + field teams for Indian highways — surveys, cameras, and security.",
  product: "Aspizo Traffic Analyzer",
  email: "support@aspizo.com",
  phone: "+91 XXXXX XXXXX",
  location: "Pan-India",
  useCase: "Highway corridor survey — Rongagorah to Baithalangso (Assam)",
  experienceYears: "10+",
  experienceNote:
    "More than 10 years of hands-on experience in highway surveys, CCTV deployment, and security systems across India.",
};

export const fieldServices = [
  {
    title: "On-site field surveys",
    description:
      "Our teams go on-site for highway corridor surveys — traffic studies, dashcam drives, chainage mapping, and data collection in real field conditions.",
    icon: "Map" as const,
  },
  {
    title: "Camera installation",
    description:
      "End-to-end IP/CCTV camera installation on highway stretches — pole mounting, OFC networking, DVR/NVR setup, and RTSP feed commissioning for TMC and ATCC.",
    icon: "Camera" as const,
  },
  {
    title: "Highway security systems",
    description:
      "Surveillance and security solutions for highway corridors, toll plazas, and project sites — monitoring infrastructure built by teams who know the field.",
    icon: "Shield" as const,
  },
  {
    title: "Software + field delivery",
    description:
      "We don't just sell software — we deploy, configure, and support systems on the ground. Field experience informs every product we build.",
    icon: "Target" as const,
  },
];

export const products = [
  {
    id: "highway-incident-management",
    name: "Highway Incident Management",
    subtitle: "AID & Camera Management System",
    href: "/highway-incident-management",
    tagline: "300 cameras. Zero manual watching. Instant incident alerts.",
    description:
      "Centralized AI-powered automatic incident detection over existing IP cameras — 24/7 RTSP ingestion, vehicle tracking, and TMC control room with chainage alerts.",
    image: "/hero-highway-incident.png",
    cta: "Explore Incident Management",
    highlights: [
      "300 RTSP feeds",
      "Auto AID 24/7",
      "TMC dashboard",
      "KM chainage alerts",
    ],
  },
  {
    id: "vision",
    name: "Aspizo Vision",
    subtitle: "AI Road Defect Survey Reports",
    href: "/vision",
    tagline: "Dashcam surveys → NHAI-ready defect reports.",
    description:
      "Turn highway dashcam videos into a single NHAI-format Excel report with defect photos, chainage, and video links — faster than manual logging.",
    image: "/hero-road-vision.png",
    cta: "Explore Aspizo Vision",
    highlights: [
      "NHAI-style Excel",
      "Chainage km+mmm",
      "Annotated defect photos",
      "LHS / RHS coverage",
    ],
  },
  {
    id: "traffic-analyzer",
    name: "Aspizo Traffic Analyzer",
    subtitle: "Automated ATCC from DVR Video",
    href: "/traffic-analyzer",
    tagline: "DVR / CCTV → Aspizo-ready vehicle count CSV.",
    description:
      "Detect, classify, and count vehicles across 14 IRC classes from highway DVR footage — with live ATCC preview and dual-lane support.",
    image: "/hero-highway-analyzer.png",
    cta: "Explore Traffic Analyzer",
    highlights: [
      "14 Vehicle Classes",
      "Aspizo CSV",
      "Live ATCC Preview",
      "DVR Ready",
    ],
  },
] as const;

export const product = {
  version: "1.0.0 (beta)",
  releaseDate: "August 2025",
  fileSize: "~450 MB",
  fileName: "Aspizo-Traffic-Analyzer-v1.0.zip",
  sha256: "Placeholder — update when ZIP is uploaded",
  enginePort: 8765,
  uiPort: 3000,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/highway-incident-management", label: "Incident Mgmt" },
  { href: "/vision", label: "Aspizo Vision" },
  { href: "/traffic-analyzer", label: "Traffic Analyzer" },
  { href: "/download", label: "Download" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const incidentHowItWorks = [
  {
    step: 1,
    title: "Ingest 300 feeds",
    description:
      "Connect existing IP cameras over highway OFC — RTSP/ONVIF streams ingested centrally with no new field hardware.",
  },
  {
    step: 2,
    title: "AI track & detect",
    description:
      "YOLO + ByteTrack tracks vehicles at 5–10 FPS. Stationary vehicles in active lanes >15–20s trigger incidents. ROI masks ignore legal parking.",
  },
  {
    step: 3,
    title: "TMC alert & evidence",
    description:
      "Dashboard siren, live feed popup at exact chainage (e.g. KM 142.4), auto snapshot + 5s clip, PTZ control, and incident log.",
  },
];

export const incidentBenefits = [
  {
    title: "No manual watching",
    description:
      "Replace 300-screen operator fatigue with 100% automated 24/7 background monitoring on existing cameras.",
    icon: "Monitor" as const,
  },
  {
    title: "Sub-second response",
    description:
      "WebRTC gateway delivers <300ms live feeds. Audio siren + camera popup the moment an incident is confirmed.",
    icon: "Bell" as const,
  },
  {
    title: "Audit-ready evidence",
    description:
      "Every event tagged with timestamp, event ID, KM marker, high-res snapshot, and 5-second video clip.",
    icon: "Camera" as const,
  },
];

export const incidentTmcFeatures = [
  {
    title: "Instant alarm",
    description:
      "Audio siren and popup of the specific camera feed with exact chainage location when an incident occurs.",
    icon: "Bell" as const,
  },
  {
    title: "Auto evidence",
    description:
      "High-res snapshot and 5-second clip captured automatically — tagged with timestamp, event ID, and KM marker.",
    icon: "Camera" as const,
  },
  {
    title: "ONVIF PTZ control",
    description:
      "Operators pan, tilt, and zoom into incident scenes directly from the browser dashboard.",
    icon: "Scan" as const,
  },
  {
    title: "300 km status map",
    description:
      "Linear corridor strip: Green = Normal, Red = Active Incident, Grey = Offline Camera.",
    icon: "Map" as const,
  },
  {
    title: "Health diagnostics",
    description:
      "All 300 cameras pinged every 30 seconds — network drops and camera failures flagged immediately.",
    icon: "Wifi" as const,
  },
  {
    title: "Smart ROI masking",
    description:
      "Ignores vehicles in rest stops, dhabas, and designated parking bays to eliminate false alarms.",
    icon: "Target" as const,
  },
];

export const incidentTechStack = [
  { layer: "AI Engine", tech: "Python, NVIDIA DeepStream, TensorRT, YOLO, ByteTrack, OpenCV, Supervision" },
  { layer: "Streaming", tech: "MediaMTX / go2rtc — WebRTC/WHEP, <300ms latency" },
  { layer: "Backend", tech: "FastAPI, PostgreSQL (incident logs), Redis (real-time alerts)" },
  { layer: "Dashboard", tech: "React.js + Tailwind CSS — TMC control room UI" },
  { layer: "Compute", tech: "On-prem GPU server — Dual RTX 4090 / NVIDIA L4 in control room" },
];

export const incidentFaqs = [
  {
    question: "Do we need new cameras in the field?",
    answer:
      "No. The system uses your existing 300 IP cameras (1 per km) over the highway OFC network. Software-only deployment in the central control room.",
  },
  {
    question: "How are false alarms reduced?",
    answer:
      "Smart lane ROI masking excludes legal rest stops, dhabas, and designated parking bays. Only stationary vehicles in active traffic lanes or shoulders trigger alerts.",
  },
  {
    question: "What latency for live feeds?",
    answer:
      "WebRTC media gateway (MediaMTX/go2rtc) delivers sub-300ms live video to browser dashboards — suitable for real-time TMC response.",
  },
  {
    question: "What happens when an incident is detected?",
    answer:
      "Dashboard audio alarm, camera feed popup at chainage (e.g. KM 142.4), auto snapshot + 5s clip saved with event ID, and entry in PostgreSQL incident log.",
  },
  {
    question: "Can operators control cameras?",
    answer:
      "Yes — ONVIF PTZ control from the browser to zoom into incident scenes without leaving the dashboard.",
  },
  {
    question: "How is camera health monitored?",
    answer:
      "All 300 cameras are pinged every 30 seconds. Offline or network-drop cameras appear grey on the 300 km linear status map.",
  },
];

export const visionHowItWorks = [
  {
    step: 1,
    title: "Survey drive",
    description:
      "Capture LHS/RHS dashcam videos for the highway stretch; share project KML and survey details.",
  },
  {
    step: 2,
    title: "AI detection",
    description:
      "Aspizo Vision extracts frames, runs multi-model defect detection, filters noise, and attaches location/chainage.",
  },
  {
    step: 3,
    title: "NHAI Excel delivery",
    description:
      "One combined report (Survey Form, Summary, Defects Log, Video Links) plus annotated images with clickable links.",
  },
];

export const visionBenefits = [
  {
    title: "Less manual effort",
    description:
      "No frame-by-frame defect logging for every clip — AI finds pavement and roadside defects from survey drives.",
    icon: "Clock" as const,
  },
  {
    title: "One report per cycle",
    description:
      "40–50 videos merge into a single NHAI-style Excel deliverable your team can QA before client handover.",
    icon: "FileSpreadsheet" as const,
  },
  {
    title: "Audit trail",
    description:
      "Photo + timestamp + chainage (km+mmm) for each defect — audit-ready for NHAI and consultant workflows.",
    icon: "Target" as const,
  },
];

export const visionDefects = [
  "Cracking",
  "Potholes",
  "Faded Pavement Marking",
  "Rutting",
  "Damaged Kerb",
  "Faded Kerb Painting",
  "Damaged / faded crash barriers (MBCB, CC)",
  "Shoulder vegetation",
  "Damaged / unauthorized signboards",
  "Unauthorized hoardings",
  "Non-functional highway lights",
  "General encroachments",
];

export const visionFaqs = [
  {
    question: "Does this count vehicles?",
    answer:
      "No. Vehicle counting is Aspizo Traffic Analyzer. Aspizo Vision finds road defects from dashcam survey videos.",
  },
  {
    question: "What inputs are needed?",
    answer:
      "Dashcam MP4s, project KML (corridor/chainage), and survey form fields (project name, NH, side, etc.).",
  },
  {
    question: "How is chainage calculated?",
    answer:
      "Defect GPS (or survey time along the corridor) is mapped to the project KML to produce km+mmm chainage.",
  },
  {
    question: "Can the client edit detections?",
    answer:
      "Yes — delivery includes Excel for human QA (remove false positives, adjust severity) before final submission.",
  },
  {
    question: "Night videos?",
    answer:
      "Day footage works best; night accuracy depends on lighting and camera quality.",
  },
  {
    question: "How do we share a demo with a client?",
    answer:
      "Pre-run Colab notebook → Save a copy in Drive → Share as Viewer. Share the _DRIVE.xlsx Excel with clickable defect images. Ask the client not to press Run.",
  },
];

export const stats = [
  "14 Vehicle Classes",
  "Aspizo CSV",
  "Live ATCC Preview",
  "DVR Ready",
];

export const benefits = [
  {
    title: "Save Time",
    description:
      "Automate 80%+ of manual data entry. Load videos, run Auto Detect, and export CSV — no frame-by-frame clicking.",
    icon: "Clock" as const,
  },
  {
    title: "Accurate Classification",
    description:
      "14 IRC vehicle classes with custom YOLO classifier trained on real survey data (~76% accuracy, improving with training).",
    icon: "Target" as const,
  },
  {
    title: "Export Ready CSV",
    description:
      "One-click export matching Aspizo survey formats — date, time, lane, direction, class, speed, axles, spacing.",
    icon: "FileSpreadsheet" as const,
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Load Videos",
    description:
      "Set survey date, lane directions, and point to your DVR/CCTV video folder. Uni+ filenames parsed automatically.",
  },
  {
    step: 2,
    title: "Auto Detect",
    description:
      "AI detects, tracks, and counts vehicles crossing your count line with live ATCC-style preview and bounding boxes.",
  },
  {
    step: 3,
    title: "Export CSV",
    description:
      "Download Aspizo-compatible CSV ready for your survey workflow. Stop anytime — partial counts are saved.",
  },
];

export const features = [
  {
    title: "Auto Detect",
    description:
      "AI tracks every vehicle crossing your count line — no manual clicking.",
    icon: "Scan" as const,
  },
  {
    title: "Aspizo CSV Export",
    description:
      "One-click export matching professional survey formats.",
    icon: "Download" as const,
  },
  {
    title: "Live Preview",
    description:
      "Watch counts update in real time with ATCC-style overlay.",
    icon: "Monitor" as const,
  },
  {
    title: "DVR Smart Clock",
    description:
      "Reads Uni+ DVR timestamps automatically from filenames.",
    icon: "Clock" as const,
  },
  {
    title: "Dual Lane Mode",
    description:
      "Separate counts for both directions with configurable lane names.",
    icon: "GitBranch" as const,
  },
  {
    title: "Stop & Save",
    description:
      "Stop processing anytime — partial survey CSV is preserved.",
    icon: "Save" as const,
  },
  {
    title: "AI Learning",
    description:
      "Review misclassified vehicles and retrain the classifier on your site data.",
    icon: "Brain" as const,
  },
  {
    title: "Batch Processing",
    description:
      "Process a full day of survey videos from a folder in one run.",
    icon: "FolderOpen" as const,
  },
];

export const vehicleClasses = [
  { id: 1, name: "Cycle" },
  { id: 2, name: "Bike" },
  { id: 3, name: "3 Wheeler" },
  { id: 4, name: "Tractor" },
  { id: 5, name: "Tractor with trolley" },
  { id: 6, name: "Small commercial vehicle" },
  { id: 7, name: "Passenger car" },
  { id: 8, name: "DCM / Mini bus / LCV" },
  { id: 9, name: "2-axle truck / Bus" },
  { id: 10, name: "3-axle truck / Bus" },
  { id: 11, name: "4-axle to 6-axle truck" },
  { id: 12, name: "More than 6-axle truck" },
  { id: 13, name: "Hand cart / Bull cart" },
  { id: 14, name: "Construction vehicle" },
];

export const faqs = [
  {
    question: "Which video formats are supported?",
    answer:
      "MP4, AVI, MKV, MOV, ASF, DAV — typical DVR exports from highway CCTV systems.",
  },
  {
    question: "Do I need internet?",
    answer:
      "No — Aspizo Traffic Analyzer runs fully offline after download. All processing happens on your Windows PC.",
  },
  {
    question: "Does it replace Aspizo?",
    answer:
      "No — it automates video analysis and produces CSV compatible with Aspizo workflows. You still use Aspizo for reporting and analysis.",
  },
  {
    question: "Night videos?",
    answer:
      "Detection is harder at night; day footage works best. Night mode helps tuning, but validate counts against manual checks.",
  },
  {
    question: "Can I train the AI on my site?",
    answer:
      "Yes — review misclassified vehicles in the queue and retrain the custom Aspizo classifier. GPU training supported via included Colab notebook.",
  },
  {
    question: "GPU required?",
    answer:
      "No — CPU works fine. NVIDIA GPU with CUDA is recommended for faster auto-detect on long survey days.",
  },
];

export const systemRequirements = {
  minimum: [
    "Windows 10/11 (64-bit)",
    "8 GB RAM",
    "5 GB free disk (videos + models separate)",
    "Python 3.10+ (bundled in installer)",
  ],
  recommended: [
    "16 GB RAM",
    "NVIDIA GPU with CUDA (faster auto-detect)",
    "SSD for video storage",
  ],
};

export const downloadIncludes = [
  "Detection engine (Python + YOLO)",
  "Survey data entry UI",
  "AI classifier (pre-trained)",
  "Sample config + user guide",
];

export const installSteps = [
  "Extract ZIP to C:\\Aspizo\\ (no spaces in path recommended)",
  "Double-click START-ASPIZO.bat",
  "Browser opens → fill Survey ID, Date, paste video folder path",
  "Click Run Auto Detect",
];

export const docsSections = [
  {
    title: "Installation",
    content:
      "Download the ZIP from the Download page, extract to C:\\Aspizo\\, and run START-ASPIZO.bat. Wait 1–2 minutes on first launch while the UI compiles. Engine runs at http://127.0.0.1:8765 and UI at http://localhost:3000.",
  },
  {
    title: "First Survey Setup",
    content:
      "Enter Survey ID, survey date, and lane direction labels (e.g. Left/Right or Up/Down). Set buffer seconds if your DVR clock differs from actual survey start time.",
  },
  {
    title: "Video Folder Path",
    content:
      "Paste the full path to your DVR video folder. Supports Uni+ DVR filenames like Uni+ DVR_ch4_main_20241229150000_20241229160000.mp4. Formats: MP4, AVI, MKV, MOV, ASF, DAV.",
  },
  {
    title: "Auto Detect Settings",
    content:
      "Choose speed mode: Fast, Balanced, or Accurate. Draw or auto-place the count line on video. Enable dual-lane mode for bidirectional surveys. Use Flip Direction if vehicle flow appears inverted.",
  },
  {
    title: "CSV Export",
    content:
      "After processing (or stopping mid-run), export CSV with all detected vehicles. Fields include Date, Time, Lane, Direction, Vehicle Class, Speed (km/h), Axles, and Spacing (m). Compatible with Aspizo workflow.",
  },
  {
    title: "Troubleshooting",
    content:
      "Engine not running? Check START-ASPIZO.bat console for errors. 0 detections at night? Try day footage first or adjust count line placement. Blank Excel? Ensure CSV opened with UTF-8 encoding.",
  },
];
