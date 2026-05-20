import {
  AlertTriangle,
  BarChart3,
  Boxes,
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  ContactRound,
  Factory,
  FileCheck2,
  IndianRupee,
  Landmark,
  PackageCheck,
  PackageOpen,
  ShieldCheck,
  Target,
  Truck,
  WalletCards,
} from "lucide-react";

export const textileCategories = [
  {
    name: "Yarn",
    slug: "yarn",
    items: ["Cotton combed yarn 40s", "Polyester filament yarn", "Viscose yarn"],
  },
  {
    name: "Fabric",
    slug: "fabric",
    items: ["Greige cotton fabric", "Dyed woven fabric", "Knitted jersey fabric"],
  },
  {
    name: "Dyes and chemicals",
    slug: "dyes-chemicals",
    items: ["Reactive dyes", "Softener", "Fixing agent"],
  },
  {
    name: "Packaging",
    slug: "packaging",
    items: ["Poly bags", "Corrugated cartons", "Barcode labels"],
  },
  {
    name: "Processing services",
    slug: "processing-services",
    items: ["Dyeing", "Printing", "Compacting"],
  },
];

export const textileSuppliers = [
  {
    id: "supplier-1",
    name: "Surat Tex Yarns",
    location: "Surat, Gujarat",
    verified: true,
    rating: 4.7,
    qualityScore: 92,
    onTimeDelivery: 89,
    responseHours: 5,
    categories: ["Yarn", "Fabric"],
  },
  {
    id: "supplier-2",
    name: "Tiruppur Knit Source",
    location: "Tiruppur, Tamil Nadu",
    verified: true,
    rating: 4.5,
    qualityScore: 88,
    onTimeDelivery: 93,
    responseHours: 7,
    categories: ["Fabric", "Processing services"],
  },
  {
    id: "supplier-3",
    name: "Ahmedabad ColorChem",
    location: "Ahmedabad, Gujarat",
    verified: false,
    rating: 4.1,
    qualityScore: 81,
    onTimeDelivery: 84,
    responseHours: 12,
    categories: ["Dyes and chemicals"],
  },
];

export const activeRfqs = [
  {
    id: "rfq-tx-1042",
    title: "Cotton combed yarn 40s",
    buyer: "Kaveri Garments",
    category: "Yarn",
    quantity: "8,000 kg",
    delivery: "Erode, Tamil Nadu",
    deadline: "Today, 6:00 PM",
    status: "Live bidding",
    bids: 4,
    invited: 7,
    bestLandedCost: "₹238/kg",
  },
  {
    id: "rfq-tx-1043",
    title: "Reactive dyes for cotton fabric",
    buyer: "Rangoli Processors",
    category: "Dyes and chemicals",
    quantity: "1,200 kg",
    delivery: "Surat, Gujarat",
    deadline: "Tomorrow, 2:00 PM",
    status: "Supplier invited",
    bids: 2,
    invited: 5,
    bestLandedCost: "₹412/kg",
  },
  {
    id: "rfq-tx-1044",
    title: "Corrugated cartons for exports",
    buyer: "Threadline Exports",
    category: "Packaging",
    quantity: "25,000 units",
    delivery: "Ludhiana, Punjab",
    deadline: "May 23, 5:00 PM",
    status: "Draft",
    bids: 0,
    invited: 0,
    bestLandedCost: "-",
  },
];

export const bidComparison = [
  {
    supplier: "Surat Tex Yarns",
    verified: true,
    landedCost: 1904000,
    pricePerUnit: 238,
    freight: 36000,
    taxes: 0,
    deliveryDays: 8,
    paymentTerms: "30 days credit",
    rating: 4.7,
    qualityScore: 92,
    onTimeDelivery: 89,
    distanceKm: 1240,
    recommendationScore: 91,
  },
  {
    supplier: "Tiruppur Knit Source",
    verified: true,
    landedCost: 1976000,
    pricePerUnit: 247,
    freight: 28000,
    taxes: 0,
    deliveryDays: 5,
    paymentTerms: "15 days credit",
    rating: 4.5,
    qualityScore: 88,
    onTimeDelivery: 93,
    distanceKm: 60,
    recommendationScore: 88,
  },
  {
    supplier: "Coimbatore Yarn House",
    verified: true,
    landedCost: 1936000,
    pricePerUnit: 242,
    freight: 18000,
    taxes: 0,
    deliveryDays: 11,
    paymentTerms: "Advance 20%, balance on dispatch",
    rating: 4.2,
    qualityScore: 84,
    onTimeDelivery: 78,
    distanceKm: 92,
    recommendationScore: 80,
  },
];

export const purchaseOrderTimeline = [
  { status: "Issued", date: "May 20, 2026", note: "PO generated from winning bid" },
  { status: "Accepted", date: "Pending", note: "Supplier acceptance required" },
  { status: "Processing", date: "Pending", note: "Production or stock allocation" },
  { status: "Shipped", date: "Pending", note: "Dispatch proof can be uploaded" },
  { status: "Delivered", date: "Pending", note: "Buyer confirms receipt" },
];

export const metrics = [
  { label: "Spend This Month", value: "₹1.24 Cr", change: "18% vs Apr '26", icon: WalletCards },
  { label: "Active RFQs", value: "28", change: "12% vs Apr '26", icon: ClipboardCheck },
  { label: "Cost Savings", value: "₹18.7 L", change: "15% vs Apr '26", icon: IndianRupee },
  { label: "On-time Delivery", value: "92.4%", change: "6.3 pp vs Apr '26", icon: Truck },
  { label: "Working Capital", value: "₹2.31 Cr", change: "22% vs Apr '26", icon: Landmark },
];

export const buyerAnalytics = [
  { label: "Procurement value", value: "₹48.2L", change: "14% vs Apr '26", icon: IndianRupee },
  { label: "Estimated savings", value: "₹3.6L", change: "8% vs Apr '26", icon: BarChart3 },
  { label: "Avg quote response", value: "7.4h", change: "1.6h faster", icon: FileCheck2 },
  { label: "Pending deliveries", value: "11", change: "3 fewer", icon: PackageCheck },
  { label: "Open invoices", value: "₹9.8L", change: "5% vs Apr '26", icon: ClipboardList },
];

export const inventoryMetrics = [
  { label: "Inventory Value", value: "₹2.86 Cr", change: "14% vs Apr '26", icon: Boxes },
  { label: "Stock Coverage", value: "38 Days", change: "6 days vs Apr '26", icon: CalendarDays },
  { label: "Stockout Risk", value: "8 Items", change: "2 fewer", icon: AlertTriangle },
  { label: "Forecast Accuracy", value: "87%", change: "5% vs Apr '26", icon: Target },
  { label: "Dead Stock", value: "₹18.4 L", change: "8% lower", icon: PackageOpen },
];

export const orderMetrics = [
  { label: "Active POs", value: "186", change: "12% vs last month", icon: ClipboardCheck },
  { label: "In-Transit Orders", value: "64", change: "18% vs last month", icon: Truck },
  { label: "Delayed Shipments", value: "12", change: "8% lower", icon: AlertTriangle },
  { label: "Avg Delivery Lead Time", value: "18.6 Days", change: "6.3% faster", icon: CalendarDays },
  { label: "Open Order Value", value: "₹18.72 Cr", change: "15% vs last month", icon: WalletCards },
];

export const supplierNetwork = [
  ["Shakti Textiles Pvt. Ltd.", "Surat, Gujarat", "Yarn, Fabric, Grey Fabric", "4.8", "96%", "-6%", "Low"],
  ["Vardhman Yarns", "Ludhiana, Punjab", "Yarn, Dyed Yarn", "4.6", "94%", "-3%", "Low"],
  ["KPR Mills", "Coimbatore, TN", "Yarn, Grey Fabric", "4.5", "93%", "-2%", "Low"],
  ["Nitin Spinners", "Tiruppur, Tamil Nadu", "Yarn, Knitted Fabric", "4.3", "90%", "+1%", "Medium"],
  ["Shree Ram Textiles", "Ahmedabad, Gujarat", "Yarn, Fabric", "4.2", "88%", "+2%", "Medium"],
];

export const orderRows = [
  ["PO-2405-1027", "Cotton Yarn Mills", "Cotton Yarn 30s", "25,000 Kgs", "₹18,00,000", "In-Transit", "On Track"],
  ["PO-2405-1028", "DyeWell Industries", "Reactive Dyes", "18,000 Kgs", "₹11,88,000", "Dispatched", "On Track"],
  ["PO-2405-1029", "Shakti Fabrics", "Grey Fabric 44\"", "12,500 Mtrs", "₹37,82,000", "PO Raised", "At Risk"],
  ["PO-2405-1030", "KPR Mills", "Polyester Yarn 75D", "8,000 Kgs", "₹18,50,000", "Confirmed", "On Track"],
  ["PO-2405-1031", "Vardhman Yarns", "Cotton Yarn 20s", "25,600 Kgs", "₹20,56,000", "In-Transit", "Delayed"],
];

export const inventoryRows = [
  ["Cotton Yarn 30s", "25,000 Kgs", "8,000 Kgs", "5,000 Kgs", "30", "Low", "₹58.63 L"],
  ["Cotton Yarn 20s", "18,000 Kgs", "6,000 Kgs", "0 Kgs", "25", "Low", "₹42.84 L"],
  ["Grey Fabric 44\"", "12,500 Mtrs", "5,000 Mtrs", "2,500 Mtrs", "40", "Low", "₹9.00 L"],
  ["Reactive Dyes", "2,000 Kgs", "1,200 Kgs", "500 Kgs", "44", "Low", "₹8.60 L"],
  ["Packaging Cartons", "50,000 Pcs", "20,000 Pcs", "10,000 Pcs", "42", "Medium", "₹6.25 L"],
];

export const financeMetrics = [
  { label: "Payable Days", value: "32 Days", change: "4 vs last month", icon: CalendarDays },
  { label: "Cash Unlocked", value: "₹18.6 Cr", change: "18% vs Apr '26", icon: WalletCards },
  { label: "Financed Invoices", value: "₹7.42 Cr", change: "22% vs Apr '26", icon: ClipboardCheck },
  { label: "Credit Utilization", value: "62%", sublabel: "of ₹12 Cr limit", icon: Landmark },
  { label: "Available Credit", value: "₹4.56 Cr", change: "8% vs Apr '26", icon: IndianRupee },
];

export const complianceMetrics = [
  { label: "Compliance Score", value: "91 / 100", change: "8 pts vs Apr '26", icon: ShieldCheck },
  { label: "Expiring Documents", value: "12", change: "2 fewer", icon: CalendarDays },
  { label: "GST-ready Vendors", value: "94%", change: "5% vs Apr '26", icon: FileCheck2 },
  { label: "Audits Passed", value: "8 / 10", change: "1 more", icon: ClipboardCheck },
  { label: "Non-compliant Vendors", value: "5", change: "2 fewer", icon: AlertTriangle },
];

export const quickActions = [
  { label: "Create RFQ", href: "/buyer/rfqs/new", icon: ClipboardList, tone: "from-blue-600 to-blue-500" },
  { label: "Compare Bids", href: "/buyer/rfqs/rfq-tx-1042/compare", icon: BarChart3, tone: "from-teal-600 to-cyan-500" },
  { label: "Invite Supplier", href: "/buyer/suppliers", icon: ContactRound, tone: "from-violet-600 to-violet-500" },
  { label: "Apply for SCF", href: "/finance", icon: Landmark, tone: "from-emerald-600 to-emerald-500" },
];

export const aiRecommendations = [
  {
    label: "Alternate Supplier",
    body: "For Cotton Yarn 30s, two alternate suppliers show 5-8% lower pricing with acceptable quality scores.",
    cta: "View suppliers",
  },
  {
    label: "Bundle Buy Opportunity",
    body: "Combine Cotton Yarn 20s and 30s RFQs to save up to ₹2.4L through volume leverage.",
    cta: "Explore bundle",
  },
  {
    label: "Market Insight",
    body: "Cotton prices are rising in Gujarat. Consider buying the next seven days of planned demand.",
    cta: "View price trends",
  },
];

export const alertItems = [
  { title: "Cotton yarn price up 4%", body: "Average price increased across key textile hubs in the last 7 days.", tone: "red" as const, action: "View details" },
  { title: "Single-supplier risk detected", body: "Three critical materials are currently sourced from one supplier.", tone: "amber" as const, action: "Review now" },
  { title: "Payment due tomorrow", body: "Two invoices worth ₹3,85,300 are due tomorrow.", tone: "blue" as const, action: "View invoices" },
];

export const mapPins = [
  { city: "Ludhiana", value: 16, x: 168, y: 64 },
  { city: "Ahmedabad", value: 18, x: 132, y: 150 },
  { city: "Surat", value: 32, x: 148, y: 192 },
  { city: "Tiruppur", value: 36, x: 198, y: 252 },
  { city: "Coimbatore", value: 24, x: 176, y: 280 },
];

export const marketIntelPins = [
  { city: "Ludhiana", x: 168, y: 64, meta: "₹176/Kg", delta: { value: "-2.1%", tone: "down" as const } },
  { city: "Ahmedabad", x: 132, y: 150, meta: "₹172/Kg", delta: { value: "-1.4%", tone: "down" as const } },
  { city: "Surat", x: 148, y: 192, meta: "₹168/Kg", delta: { value: "-3.2%", tone: "down" as const } },
  { city: "Tiruppur", x: 198, y: 252, meta: "₹170/Kg", delta: { value: "-2.6%", tone: "down" as const } },
  { city: "Coimbatore", x: 176, y: 280, meta: "₹166/Kg", delta: { value: "-3.8%", tone: "down" as const } },
];

export const shipmentStops = [
  { label: "Surat", sub: "Gujarat", x: 72, y: 80, status: "done" as const },
  { label: "Bengaluru Hub", sub: "In-Transit", x: 220, y: 130, status: "active" as const },
  { label: "Coimbatore WH", sub: "ETA 21 May", x: 320, y: 160, status: "pending" as const },
];

export const adminQueue = [
  {
    supplier: "Ahmedabad ColorChem",
    docs: "GST, PAN, ISO certificate",
    categories: "Reactive dyes, softeners",
    status: "Pending review",
  },
  {
    supplier: "Ludhiana PackWorks",
    docs: "GST, PAN, bank proof",
    categories: "Cartons, labels",
    status: "Document mismatch",
  },
  {
    supplier: "Bhiwandi Logistics Hub",
    docs: "GST, PAN, fleet documents",
    categories: "Transport, warehousing",
    status: "Pending review",
  },
];

export const roleCards = [
  {
    href: "/buyer",
    title: "Buyer workspace",
    description: "Create textile RFQs, compare live bids, issue POs, and track procurement spend.",
    icon: Factory,
  },
  {
    href: "/supplier",
    title: "Supplier workspace",
    description: "Complete verification, respond to invited RFQs, manage orders, and upload invoices.",
    icon: PackageCheck,
  },
  {
    href: "/admin",
    title: "Admin operations",
    description: "Verify suppliers, curate invite lists, create RFQs for buyers, and monitor platform risk.",
    icon: ShieldCheck,
  },
];
