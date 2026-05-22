// Translation dictionaries for Karigar UI chrome.
// EN is the source of truth. HI / OR / ML translations cover the most-visible
// navigation, header, hero, role cards, and common buttons. Domain copy (demo
// data, dense procurement text) remains English and should be reviewed by a
// native speaker before any of these become user-facing.

export const LANGUAGES = ["en", "hi", "or", "ml"] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<Language, { native: string; english: string; short: string }> = {
  en: { native: "English", english: "English", short: "EN" },
  hi: { native: "हिन्दी", english: "Hindi", short: "हि" },
  or: { native: "ଓଡ଼ିଆ", english: "Odia", short: "ଓଡ଼" },
  ml: { native: "മലയാളം", english: "Malayalam", short: "മല" },
};

export type Dictionary = {
  brand: {
    name: string;
    tagline: string;
    bharatLine: string;
    msmeBuilt: string;
  };
  nav: {
    dashboard: string;
    rfqs: string;
    suppliers: string;
    orders: string;
    inventory: string;
    analytics: string;
    finance: string;
    compliance: string;
    settings: string;
    verification: string;
    invitedRfqs: string;
    catalog: string;
    supplierReview: string;
    createRfq: string;
    financeQueue: string;
    home: string;
    buyer: string;
    supplier: string;
    admin: string;
  };
  header: {
    search: string;
    notifications: string;
    languageLabel: string;
  };
  home: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: {
      suppliers: string;
      savings: string;
      otif: string;
    };
    rolesTitle: string;
    roles: {
      buyerTitle: string;
      buyerBody: string;
      supplierTitle: string;
      supplierBody: string;
      adminTitle: string;
      adminBody: string;
    };
    whyTitle: string;
    whyEyebrow: string;
    whyLead: string;
    features: {
      workflowTitle: string;
      workflowBody: string;
      closedBidTitle: string;
      closedBidBody: string;
      financeTitle: string;
      financeBody: string;
      verifiedTitle: string;
      verifiedBody: string;
      priceTitle: string;
      priceBody: string;
      aiTitle: string;
      aiBody: string;
    };
    footer: string;
  };
  common: {
    viewAll: string;
    openWorkspace: string;
    adminOps: string;
    export: string;
    learnMore: string;
    inrNotice: string;
  };
};

const en: Dictionary = {
  brand: {
    name: "Karigar",
    tagline: "Made for Bharat",
    bharatLine: "Growing Bharat. Powering Procurement.",
    msmeBuilt: "Built for Indian MSMEs",
  },
  nav: {
    dashboard: "Dashboard",
    rfqs: "RFQs",
    suppliers: "Suppliers",
    orders: "Orders",
    inventory: "Inventory",
    analytics: "Analytics",
    finance: "Finance",
    compliance: "Compliance",
    settings: "Settings",
    verification: "Verification",
    invitedRfqs: "Invited RFQs",
    catalog: "Catalog",
    supplierReview: "Supplier review",
    createRfq: "Create buyer RFQ",
    financeQueue: "Finance queue",
    home: "Home",
    buyer: "Buyer",
    supplier: "Supplier",
    admin: "Admin",
  },
  header: {
    search: "Search RFQs, suppliers, materials…",
    notifications: "Notifications",
    languageLabel: "Language",
  },
  home: {
    eyebrow: "Built for Indian MSMEs",
    headlinePart1: "The procurement OS",
    headlinePart2: "for every Indian MSME.",
    subtitle:
      "Run RFQs, compare bids, issue purchase orders, track delivery, and close the books — all in one workspace. Launching first across textile clusters in Surat, Tiruppur, and Coimbatore.",
    primaryCta: "Open buyer workspace",
    secondaryCta: "Admin operations",
    stats: {
      suppliers: "Verified suppliers",
      savings: "YTD savings",
      otif: "On-time delivery",
    },
    rolesTitle: "Pick your workspace",
    roles: {
      buyerTitle: "Buyer workspace",
      buyerBody:
        "Create RFQs, compare live bids, issue purchase orders, and track procurement spend across categories.",
      supplierTitle: "Supplier workspace",
      supplierBody:
        "Complete verification, respond to invited RFQs, manage orders, and upload invoices for fast payments.",
      adminTitle: "Admin operations",
      adminBody:
        "Verify suppliers, curate invite lists, create RFQs on behalf of buyers, and monitor platform risk.",
    },
    whyEyebrow: "Why Karigar",
    whyTitle: "Procurement designed for how Indian MSMEs actually work",
    whyLead:
      "Every flow — from inviting a vendor to releasing a final invoice — is a clean server-side workflow with a full audit trail. Live today for textile clusters, designed to extend to every industry next.",
    features: {
      workflowTitle: "Workflow-first",
      workflowBody:
        "RFQ, bid, PO, order, invoice, and payment transitions are modelled as server-side workflows.",
      closedBidTitle: "Closed bidding",
      closedBidBody:
        "Suppliers only see RFQs they're invited to and never see competing bids. Buyers compare live, by line item.",
      financeTitle: "Finance-ready",
      financeBody:
        "The data model captures everything future invoice discounting, purchase finance, and risk scoring need.",
      verifiedTitle: "Verified suppliers",
      verifiedBody:
        "GST, PAN, ISO, and category-specific checks before a supplier ever lands in a buyer's shortlist.",
      priceTitle: "Live price intelligence",
      priceBody:
        "Cluster-level price benchmarks per category. Launching with cotton, polyester, and dyes — your category next.",
      aiTitle: "AI-assisted recommendations",
      aiBody:
        "Shortlist nudges, negotiation insights, and replenishment hints throughout the procurement loop.",
    },
    footer: "Karigar · Built for Bharat",
  },
  common: {
    viewAll: "View all",
    openWorkspace: "Open workspace",
    adminOps: "Admin operations",
    export: "Export",
    learnMore: "Learn more",
    inrNotice: "All amounts in INR · Demo data as of 20 May 2026",
  },
};

const hi: Dictionary = {
  brand: {
    name: "करीगर",
    tagline: "भारत के लिए बना",
    bharatLine: "बढ़ता भारत। सशक्त खरीद।",
    msmeBuilt: "भारतीय एमएसएमई के लिए बनाया गया",
  },
  nav: {
    dashboard: "डैशबोर्ड",
    rfqs: "आरएफक्यू",
    suppliers: "आपूर्तिकर्ता",
    orders: "ऑर्डर",
    inventory: "स्टॉक",
    analytics: "विश्लेषण",
    finance: "वित्त",
    compliance: "अनुपालन",
    settings: "सेटिंग्स",
    verification: "सत्यापन",
    invitedRfqs: "आमंत्रित आरएफक्यू",
    catalog: "कैटलॉग",
    supplierReview: "आपूर्तिकर्ता समीक्षा",
    createRfq: "नया आरएफक्यू",
    financeQueue: "वित्त कतार",
    home: "होम",
    buyer: "खरीदार",
    supplier: "आपूर्तिकर्ता",
    admin: "एडमिन",
  },
  header: {
    search: "आरएफक्यू, आपूर्तिकर्ता, सामग्री खोजें…",
    notifications: "सूचनाएँ",
    languageLabel: "भाषा",
  },
  home: {
    eyebrow: "भारतीय एमएसएमई के लिए",
    headlinePart1: "खरीद का",
    headlinePart2: "एक नया तरीका।",
    subtitle:
      "आरएफक्यू बनाएं, बोलियों की तुलना करें, परचेज़ ऑर्डर जारी करें, डिलीवरी ट्रैक करें — सब एक जगह। सूरत, तिरुपुर और कोयंबटूर के टेक्सटाइल क्लस्टर से शुरुआत।",
    primaryCta: "खरीदार वर्कस्पेस खोलें",
    secondaryCta: "एडमिन ऑपरेशन",
    stats: {
      suppliers: "सत्यापित आपूर्तिकर्ता",
      savings: "वर्ष की बचत",
      otif: "समय पर डिलीवरी",
    },
    rolesTitle: "अपना वर्कस्पेस चुनें",
    roles: {
      buyerTitle: "खरीदार वर्कस्पेस",
      buyerBody:
        "आरएफक्यू बनाएं, लाइव बोलियों की तुलना करें, पीओ जारी करें और हर श्रेणी में खर्च ट्रैक करें।",
      supplierTitle: "आपूर्तिकर्ता वर्कस्पेस",
      supplierBody:
        "सत्यापन पूरा करें, आमंत्रित आरएफक्यू का जवाब दें, ऑर्डर प्रबंधित करें और तेज़ भुगतान के लिए चालान अपलोड करें।",
      adminTitle: "एडमिन ऑपरेशन",
      adminBody:
        "आपूर्तिकर्ताओं को सत्यापित करें, आमंत्रण सूचियाँ तैयार करें, आरएफक्यू बनाएं और प्लेटफ़ॉर्म जोखिम पर नज़र रखें।",
    },
    whyEyebrow: "क्यों करीगर",
    whyTitle: "भारतीय एमएसएमई के लिए बनी खरीद प्रणाली",
    whyLead:
      "विक्रेता आमंत्रण से लेकर अंतिम चालान तक — हर प्रक्रिया एक स्पष्ट वर्कफ़्लो है, पूरे ऑडिट ट्रेल के साथ। आज टेक्सटाइल के लिए, कल हर उद्योग के लिए।",
    features: {
      workflowTitle: "वर्कफ़्लो-केंद्रित",
      workflowBody:
        "आरएफक्यू, बोली, पीओ, ऑर्डर, चालान और भुगतान — सब सर्वर-साइड वर्कफ़्लो के रूप में।",
      closedBidTitle: "बंद बोली",
      closedBidBody:
        "आपूर्तिकर्ता केवल आमंत्रित आरएफक्यू देखते हैं, प्रतिस्पर्धी बोलियाँ नहीं। खरीदार लाइव तुलना करते हैं।",
      financeTitle: "वित्त-तैयार",
      financeBody:
        "डेटा मॉडल चालान डिस्काउंटिंग, खरीद वित्त और जोखिम स्कोरिंग के लिए तैयार है।",
      verifiedTitle: "सत्यापित आपूर्तिकर्ता",
      verifiedBody:
        "जीएसटी, पैन, आईएसओ और श्रेणी-विशेष जांच — शॉर्टलिस्ट से पहले।",
      priceTitle: "लाइव कीमत बुद्धि",
      priceBody:
        "क्लस्टर-स्तर कीमत बेंचमार्क। कॉटन, पॉलिएस्टर और डाई से शुरुआत — आपकी श्रेणी अगली।",
      aiTitle: "एआई-सहायता",
      aiBody:
        "शॉर्टलिस्ट सुझाव, मोल-भाव अंतर्दृष्टि और स्टॉक भरने के संकेत।",
    },
    footer: "करीगर · भारत के लिए बना",
  },
  common: {
    viewAll: "सभी देखें",
    openWorkspace: "वर्कस्पेस खोलें",
    adminOps: "एडमिन ऑपरेशन",
    export: "एक्सपोर्ट",
    learnMore: "और जानें",
    inrNotice: "सभी राशि भारतीय रुपये में · डेमो डेटा 20 मई 2026",
  },
};

const or: Dictionary = {
  brand: {
    name: "କରିଗର",
    tagline: "ଭାରତ ପାଇଁ ତିଆରି",
    bharatLine: "ବଢ଼ୁଥିବା ଭାରତ। ସଶକ୍ତ କ୍ରୟ।",
    msmeBuilt: "ଭାରତୀୟ ଏମଏସଏମଇ ପାଇଁ ତିଆରି",
  },
  nav: {
    dashboard: "ଡ୍ୟାସବୋର୍ଡ",
    rfqs: "ଆରଏଫକ୍ୟୁ",
    suppliers: "ଯୋଗାଣକାରୀ",
    orders: "ଅର୍ଡର",
    inventory: "ଷ୍ଟକ୍",
    analytics: "ବିଶ୍ଳେଷଣ",
    finance: "ଅର୍ଥ",
    compliance: "ଅନୁପାଳନ",
    settings: "ସେଟିଂସ୍",
    verification: "ଯାଞ୍ଚ",
    invitedRfqs: "ଆମନ୍ତ୍ରିତ ଆରଏଫକ୍ୟୁ",
    catalog: "କ୍ୟାଟାଲଗ୍",
    supplierReview: "ଯୋଗାଣକାରୀ ସମୀକ୍ଷା",
    createRfq: "ନୂଆ ଆରଏଫକ୍ୟୁ",
    financeQueue: "ଅର୍ଥ କ୍ୟୁ",
    home: "ହୋମ୍",
    buyer: "କ୍ରେତା",
    supplier: "ଯୋଗାଣକାରୀ",
    admin: "ଆଡମିନ୍",
  },
  header: {
    search: "ଆରଏଫକ୍ୟୁ, ଯୋଗାଣକାରୀ, ସାମଗ୍ରୀ ଖୋଜନ୍ତୁ…",
    notifications: "ସୂଚନା",
    languageLabel: "ଭାଷା",
  },
  home: {
    eyebrow: "ଭାରତୀୟ ଏମଏସଏମଇ ପାଇଁ",
    headlinePart1: "କ୍ରୟର",
    headlinePart2: "ଏକ ନୂଆ ଉପାୟ।",
    subtitle:
      "ଆରଏଫକ୍ୟୁ ତିଆରି କରନ୍ତୁ, ବିଡ୍ ତୁଳନା କରନ୍ତୁ, ପର୍ଚେଜ୍ ଅର୍ଡର ଜାରି କରନ୍ତୁ, ଡେଲିଭରୀ ଟ୍ରାକ୍ କରନ୍ତୁ — ସବୁ ଗୋଟିଏ ସ୍ଥାନରୁ। ସୁରଟ, ତିରୁପୁର ଓ କୋଏମ୍ବାଟୁରର ବସ୍ତ୍ର କ୍ଲଷ୍ଟରରୁ ଆରମ୍ଭ।",
    primaryCta: "କ୍ରେତା ୱର୍କସ୍ପେସ୍ ଖୋଲନ୍ତୁ",
    secondaryCta: "ଆଡମିନ୍ ଅପରେସନ୍",
    stats: {
      suppliers: "ଯାଞ୍ଚିତ ଯୋଗାଣକାରୀ",
      savings: "ବର୍ଷର ସଞ୍ଚୟ",
      otif: "ସମୟରେ ଡେଲିଭରୀ",
    },
    rolesTitle: "ଆପଣଙ୍କ ୱର୍କସ୍ପେସ୍ ବାଛନ୍ତୁ",
    roles: {
      buyerTitle: "କ୍ରେତା ୱର୍କସ୍ପେସ୍",
      buyerBody:
        "ଆରଏଫକ୍ୟୁ ତିଆରି କରନ୍ତୁ, ଲାଇଭ୍ ବିଡ୍ ତୁଳନା କରନ୍ତୁ, ପିଓ ଜାରି କରନ୍ତୁ ଓ ସବୁ ବର୍ଗରେ ଖର୍ଚ୍ଚ ଟ୍ରାକ୍ କରନ୍ତୁ।",
      supplierTitle: "ଯୋଗାଣକାରୀ ୱର୍କସ୍ପେସ୍",
      supplierBody:
        "ଯାଞ୍ଚ ସମ୍ପୂର୍ଣ୍ଣ କରନ୍ତୁ, ଆମନ୍ତ୍ରିତ ଆରଏଫକ୍ୟୁର ଉତ୍ତର ଦିଅନ୍ତୁ, ଅର୍ଡର ପରିଚାଳନା କରନ୍ତୁ ଓ ଶୀଘ୍ର ଭୁଗତାନ ପାଇଁ ଚାଲାନ ଅପଲୋଡ୍ କରନ୍ତୁ।",
      adminTitle: "ଆଡମିନ୍ ଅପରେସନ୍",
      adminBody:
        "ଯୋଗାଣକାରୀଙ୍କୁ ଯାଞ୍ଚ କରନ୍ତୁ, ଆମନ୍ତ୍ରଣ ତାଲିକା ତିଆରି କରନ୍ତୁ, କ୍ରେତାଙ୍କ ପାଇଁ ଆରଏଫକ୍ୟୁ ତିଆରି କରନ୍ତୁ ଓ ପ୍ଲାଟଫର୍ମ ରିସ୍କ ଉପରେ ନଜର ରଖନ୍ତୁ।",
    },
    whyEyebrow: "କାହିଁକି କରିଗର",
    whyTitle: "ଭାରତୀୟ ଏମଏସଏମଇ ପାଇଁ ତିଆରି କ୍ରୟ ସିଷ୍ଟମ୍",
    whyLead:
      "ବିକ୍ରେତା ଆମନ୍ତ୍ରଣରୁ ଆରମ୍ଭ କରି ଶେଷ ଚାଲାନ ପର୍ଯ୍ୟନ୍ତ — ପ୍ରତ୍ୟେକ ପ୍ରକ୍ରିୟା ଏକ ସ୍ପଷ୍ଟ ୱର୍କଫ୍ଲୋ। ଆଜି ବସ୍ତ୍ର ପାଇଁ, ଆସନ୍ତାକାଲି ସମସ୍ତ ଶିଳ୍ପ ପାଇଁ।",
    features: {
      workflowTitle: "ୱର୍କଫ୍ଲୋ-କେନ୍ଦ୍ରିତ",
      workflowBody:
        "ଆରଏଫକ୍ୟୁ, ବିଡ୍, ପିଓ, ଅର୍ଡର, ଚାଲାନ ଓ ଭୁଗତାନ — ସବୁ ସର୍ଭର-ସାଇଡ ୱର୍କଫ୍ଲୋ ଭାବେ।",
      closedBidTitle: "ବନ୍ଦ ବିଡ୍",
      closedBidBody:
        "ଯୋଗାଣକାରୀ କେବଳ ଆମନ୍ତ୍ରିତ ଆରଏଫକ୍ୟୁ ଦେଖନ୍ତି, ପ୍ରତିଯୋଗୀ ବିଡ୍ ନୁହେଁ। କ୍ରେତା ଲାଇଭ୍ ତୁଳନା କରନ୍ତି।",
      financeTitle: "ଅର୍ଥ-ପ୍ରସ୍ତୁତ",
      financeBody:
        "ଡାଟା ମଡେଲ ଚାଲାନ ଡିସ୍କାଉଣ୍ଟିଂ, ପର୍ଚେଜ୍ ଫାଇନାନ୍ସ ଏବଂ ରିସ୍କ ସ୍କୋରିଂ ପାଇଁ ପ୍ରସ୍ତୁତ।",
      verifiedTitle: "ଯାଞ୍ଚିତ ଯୋଗାଣକାରୀ",
      verifiedBody:
        "ଜିଏସଟି, ପାନ, ଆଇଏସଓ ଓ ବର୍ଗ-ବିଶେଷ ଯାଞ୍ଚ — ସର୍ଟଲିଷ୍ଟ ପୂର୍ବରୁ।",
      priceTitle: "ଲାଇଭ୍ ମୂଲ୍ୟ ତଥ୍ୟ",
      priceBody:
        "କ୍ଲଷ୍ଟର-ସ୍ତରୀୟ ମୂଲ୍ୟ ବେଞ୍ଚମାର୍କ। କୋଟନ୍, ପଲିଷ୍ଟର ଓ ରଙ୍ଗରୁ ଆରମ୍ଭ — ଆପଣଙ୍କ ବର୍ଗ ପରବର୍ତ୍ତୀ।",
      aiTitle: "ଏଆଇ-ସହାୟତା",
      aiBody:
        "ସର୍ଟଲିଷ୍ଟ ସୁପାରିଶ, ବାର୍ଗେନ୍ ଅନ୍ତର୍ଦୃଷ୍ଟି ଓ ଷ୍ଟକ୍ ପୁନଃପୂରଣ ସଙ୍କେତ।",
    },
    footer: "କରିଗର · ଭାରତ ପାଇଁ ତିଆରି",
  },
  common: {
    viewAll: "ସମସ୍ତ ଦେଖନ୍ତୁ",
    openWorkspace: "ୱର୍କସ୍ପେସ୍ ଖୋଲନ୍ତୁ",
    adminOps: "ଆଡମିନ୍ ଅପରେସନ୍",
    export: "ଏକ୍ସପୋର୍ଟ",
    learnMore: "ଅଧିକ ଜାଣନ୍ତୁ",
    inrNotice: "ସମସ୍ତ ରାଶି ଭାରତୀୟ ଟଙ୍କାରେ · ଡେମୋ ଡାଟା 20 ମଇ 2026",
  },
};

const ml: Dictionary = {
  brand: {
    name: "കരിഗർ",
    tagline: "ഭാരതത്തിനായി",
    bharatLine: "വളരുന്ന ഭാരതം. ശക്തമായ വാങ്ങൽ.",
    msmeBuilt: "ഇന്ത്യൻ MSME-കൾക്കായി",
  },
  nav: {
    dashboard: "ഡാഷ്ബോർഡ്",
    rfqs: "ആർഎഫ്ക്യു",
    suppliers: "വിതരണക്കാർ",
    orders: "ഓർഡറുകൾ",
    inventory: "സ്റ്റോക്ക്",
    analytics: "വിശകലനം",
    finance: "ധനകാര്യം",
    compliance: "അനുസരണം",
    settings: "ക്രമീകരണങ്ങൾ",
    verification: "പരിശോധന",
    invitedRfqs: "ക്ഷണിച്ച ആർഎഫ്ക്യു",
    catalog: "കാറ്റലോഗ്",
    supplierReview: "വിതരണക്കാർ പരിശോധന",
    createRfq: "ആർഎഫ്ക്യു സൃഷ്ടിക്കുക",
    financeQueue: "ധനകാര്യ ക്യൂ",
    home: "ഹോം",
    buyer: "വാങ്ങുന്നയാൾ",
    supplier: "വിതരണക്കാരൻ",
    admin: "അഡ്മിൻ",
  },
  header: {
    search: "ആർഎഫ്ക്യു, വിതരണക്കാർ, വസ്തുക്കൾ തിരയുക…",
    notifications: "അറിയിപ്പുകൾ",
    languageLabel: "ഭാഷ",
  },
  home: {
    eyebrow: "ഇന്ത്യൻ MSME-കൾക്കായി",
    headlinePart1: "വാങ്ങലിന്റെ",
    headlinePart2: "ഒരു പുതിയ വഴി.",
    subtitle:
      "ആർഎഫ്ക്യു സൃഷ്ടിക്കുക, ബിഡുകൾ താരതമ്യം ചെയ്യുക, പർച്ചേസ് ഓർഡർ നൽകുക, ഡെലിവറി ട്രാക്ക് ചെയ്യുക — എല്ലാം ഒരൊറ്റ ഇടത്തിൽ. സൂറത്ത്, തിരുപ്പൂർ, കോയമ്പത്തൂർ ടെക്സ്റ്റൈൽ ക്ലസ്റ്ററുകളിൽ ആരംഭിക്കുന്നു.",
    primaryCta: "വാങ്ങുന്നയാളുടെ വർക്ക്സ്പേസ് തുറക്കുക",
    secondaryCta: "അഡ്മിൻ ഓപ്പറേഷൻസ്",
    stats: {
      suppliers: "പരിശോധിച്ച വിതരണക്കാർ",
      savings: "വർഷത്തെ ലാഭം",
      otif: "സമയത്ത് ഡെലിവറി",
    },
    rolesTitle: "നിങ്ങളുടെ വർക്ക്സ്പേസ് തിരഞ്ഞെടുക്കുക",
    roles: {
      buyerTitle: "വാങ്ങുന്നയാളുടെ വർക്ക്സ്പേസ്",
      buyerBody:
        "ആർഎഫ്ക്യു സൃഷ്ടിക്കുക, തത്സമയ ബിഡുകൾ താരതമ്യം ചെയ്യുക, പിഒ നൽകുക, എല്ലാ വിഭാഗങ്ങളിലെയും ചെലവ് ട്രാക്ക് ചെയ്യുക.",
      supplierTitle: "വിതരണക്കാരന്റെ വർക്ക്സ്പേസ്",
      supplierBody:
        "പരിശോധന പൂർത്തിയാക്കുക, ക്ഷണിച്ച ആർഎഫ്ക്യുവിന് മറുപടി നൽകുക, ഓർഡറുകൾ കൈകാര്യം ചെയ്യുക, വേഗത്തിലുള്ള പണത്തിനായി ഇൻവോയ്സുകൾ അപ്‌ലോഡ് ചെയ്യുക.",
      adminTitle: "അഡ്മിൻ ഓപ്പറേഷൻസ്",
      adminBody:
        "വിതരണക്കാരെ പരിശോധിക്കുക, ക്ഷണ ലിസ്റ്റുകൾ തയ്യാറാക്കുക, വാങ്ങുന്നയാൾക്കായി ആർഎഫ്ക്യു സൃഷ്ടിക്കുക, പ്ലാറ്റ്ഫോം റിസ്ക് നിരീക്ഷിക്കുക.",
    },
    whyEyebrow: "എന്തുകൊണ്ട് കരിഗർ",
    whyTitle: "ഇന്ത്യൻ MSME-കൾക്കായി രൂപകൽപ്പന ചെയ്ത വാങ്ങൽ സിസ്റ്റം",
    whyLead:
      "വിതരണക്കാരെ ക്ഷണിക്കുന്നതു മുതൽ അവസാന ഇൻവോയ്സ് വരെ — ഓരോ പ്രക്രിയയും വ്യക്തമായ വർക്ക്ഫ്ലോ ആണ്. ഇന്ന് ടെക്സ്റ്റൈൽസിനായി, നാളെ എല്ലാ വ്യവസായങ്ങൾക്കും.",
    features: {
      workflowTitle: "വർക്ക്ഫ്ലോ-കേന്ദ്രീകൃതം",
      workflowBody:
        "ആർഎഫ്ക്യു, ബിഡ്, പിഒ, ഓർഡർ, ഇൻവോയ്സ്, പേയ്മെന്റ് — എല്ലാം സെർവർ-സൈഡ് വർക്ക്ഫ്ലോകളായി.",
      closedBidTitle: "ക്ലോസ്ഡ് ബിഡിംഗ്",
      closedBidBody:
        "വിതരണക്കാർ ക്ഷണിച്ച ആർഎഫ്ക്യു മാത്രം കാണുന്നു, എതിരാളികളുടെ ബിഡുകൾ കാണുന്നില്ല. വാങ്ങുന്നയാൾ തത്സമയം താരതമ്യം ചെയ്യുന്നു.",
      financeTitle: "ധനകാര്യ-സജ്ജം",
      financeBody:
        "ഡാറ്റ മോഡൽ ഇൻവോയ്സ് ഡിസ്കൗണ്ടിംഗ്, പർച്ചേസ് ഫിനാൻസ്, റിസ്ക് സ്കോറിംഗ് എന്നിവയ്ക്ക് സജ്ജമാണ്.",
      verifiedTitle: "പരിശോധിച്ച വിതരണക്കാർ",
      verifiedBody:
        "GST, PAN, ISO, വിഭാഗം-നിർദിഷ്ട പരിശോധനകൾ — ഷോർട്ട്‌ലിസ്റ്റിന് മുമ്പ്.",
      priceTitle: "തത്സമയ വില വിവരം",
      priceBody:
        "ക്ലസ്റ്റർ-തല വില ബെഞ്ച്മാർക്കുകൾ. കോട്ടൺ, പോളിയസ്റ്റർ, ഡൈകൾ കൊണ്ട് ആരംഭം — നിങ്ങളുടെ വിഭാഗം അടുത്തത്.",
      aiTitle: "AI-സഹായം",
      aiBody:
        "ഷോർട്ട്‌ലിസ്റ്റ് നിർദ്ദേശങ്ങൾ, ചർച്ച ഉൾക്കാഴ്ചകൾ, സ്റ്റോക്ക് നിറവ് സൂചനകൾ.",
    },
    footer: "കരിഗർ · ഭാരതത്തിനായി നിർമ്മിച്ചത്",
  },
  common: {
    viewAll: "എല്ലാം കാണുക",
    openWorkspace: "വർക്ക്സ്പേസ് തുറക്കുക",
    adminOps: "അഡ്മിൻ ഓപ്പറേഷൻസ്",
    export: "എക്സ്പോർട്ട്",
    learnMore: "കൂടുതൽ അറിയുക",
    inrNotice: "എല്ലാ തുകകളും INR-ൽ · ഡെമോ ഡാറ്റ 20 മേയ് 2026",
  },
};

export const dictionaries: Record<Language, Dictionary> = { en, hi, or, ml };
