
const farmingTips = [
  "Test your soil before applying fertilizer to avoid nutrient imbalance.",
  "Rotate crops every season to naturally break pest cycles and preserve soil nutrients.",
  "Avoid overwatering — most root diseases and fungi thrive in waterlogged soil.",
  "Monitor lower leaves weekly for early signs of pests or fungal spots.",
  "Use certified, disease-resistant seeds to ensure higher germination rates.",
  "Mulch around vegetable plants to retain soil moisture and suppress weeds.",
  "Spray bio-pesticides during late evening to protect helpful pollinating bees.",
  "Maintain proper spacing between plants for good sunlight and air circulation.",
  "Add organic compost to improve soil aeration and long-term fertility.",
  "Keep simple field records to track seasonal rainfall and yield performance."
];

const agriNews = [
  { title: "Monsoon expected to be normal this year, reports IMD", source: "Weather Dept.", time: "2h ago", icon: "fa-cloud-rain" },
  { title: "Govt increases MSP for major Rabi crops by 5-7%", source: "Agri Ministry", time: "5h ago", icon: "fa-money-bill-trend-up" },
  { title: "New heat-tolerant wheat variety released for farm trials", source: "ICAR Institute", time: "1d ago", icon: "fa-wheat-awn" },
  { title: "Digital soil health cards now accessible via smartphone app", source: "Krishi News", time: "2d ago", icon: "fa-microchip" }
];

const smartNotifications = [
  { text: "High humidity warning: Tomato blight risk increased this week.", priority: "High" },
  { text: "Wheat market prices trending up — consider holding stock for 5 days.", priority: "Medium" },
  { text: "Optimal window: Apply nitrogen top-dressing to Rice fields now.", priority: "Medium" },
  { text: "PM-KISAN scheme e-KYC deadline approaching for next installment.", priority: "Low" }
];

const diseaseDatabase = {
  "Early Blight": {
    confidence: 92,
    severity: "Moderate",
    symptoms: "Dark concentric rings on older leaves, yellow halo around spots.",
    cause: "Fungus Alternaria solani, triggered by warm, humid weather.",
    prevention: "Practice crop rotation, remove old crop debris, use drip irrigation.",
    pesticide: "Chlorothalonil or Mancozeb fungicide spray.",
    organic: "Neem oil spray (2%) or copper-based bio-fungicide.",
    recovery: "10 to 14 days with proper treatment."
  },
  "Late Blight": {
    confidence: 88,
    severity: "Severe",
    symptoms: "Water-soaked dark lesions, white fungal growth on leaf undersides.",
    cause: "Oomycete Phytophthora infestans during cool, moist periods.",
    prevention: "Plant resistant varieties, ensure wide spacing and good field drainage.",
    pesticide: "Metalaxyl + Mancozeb combination spray.",
    organic: "Copper hydroxide spray; remove and safely burn infected plants.",
    recovery: "14 to 21 days; requires immediate intervention."
  },
  "Rust": {
    confidence: 90,
    severity: "Moderate",
    symptoms: "Small, reddish-brown or orange powdery pustules on leaves.",
    cause: "Puccinia fungal species spread by wind and moisture.",
    prevention: "Timely sowing, avoid dense planting, use resistant seeds.",
    pesticide: "Propiconazole or Tebuconazole systemic spray.",
    organic: "Dusting with sulfur powder or spraying neem extract.",
    recovery: "7 to 12 days after fungicide application."
  },
  "Powdery Mildew": {
    confidence: 94,
    severity: "Mild",
    symptoms: "White powdery coating on leaf surfaces, leaf curling and stunting.",
    cause: "Fungal spores thriving in dry days with cool, humid nights.",
    prevention: "Ensure good airflow, avoid excess nitrogen fertilizer.",
    pesticide: "Sulfur 80% WP or Myclobutanil spray.",
    organic: "Diluted milk spray (1:9 ratio) or potassium bicarbonate.",
    recovery: "7 to 10 days."
  },
  "Leaf Spot": {
    confidence: 87,
    severity: "Mild",
    symptoms: "Circular brown or black spots with yellow halos scattered on leaves.",
    cause: "Bacterial or fungal pathogens splashed by rain or overhead watering.",
    prevention: "Field sanitation, avoid wetting foliage during irrigation.",
    pesticide: "Copper oxychloride or Carbendazim spray.",
    organic: "Garlic-chili extract spray or neem oil emulsion.",
    recovery: "7 to 14 days."
  },
  "Wilt": {
    confidence: 85,
    severity: "Severe",
    symptoms: "Sudden drooping and yellowing of leaves, browning of inner stem.",
    cause: "Soil-borne Fusarium or Verticillium fungi blocking water channels.",
    prevention: "Deep summer plowing, soil solarization, 3-year crop rotation.",
    pesticide: "Soil drenching with Carbendazim or Thiophanate-methyl.",
    organic: "Soil enrichment with Trichoderma viride bio-control agent.",
    recovery: "Slow recovery; severely wilted plants should be removed."
  }
};

const cropGuides = {
  Rice: { season: "Kharif (Jun-Nov)", soil: "Clayey / Alluvial", water: "High (flooded)", temp: "20-37°C", duration: "120-150 days", diseases: "Blast, Bacterial Blight", fert: "Urea, DAP, MOP", yield: "4-6 t/ha", icon: "fa-bowl-rice" },
  Wheat: { season: "Rabi (Nov-Apr)", soil: "Loamy / Clay Loam", water: "Moderate", temp: "10-25°C", duration: "120-150 days", diseases: "Rust, Powdery Mildew", fert: "Urea, DAP, Zinc", yield: "4-5 t/ha", icon: "fa-wheat-awn" },
  Tomato: { season: "All year round", soil: "Well-drained Loamy", water: "Moderate, regular", temp: "20-27°C", duration: "90-120 days", diseases: "Early & Late Blight", fert: "NPK 19:19:19, Calcium", yield: "25-40 t/ha", icon: "fa-apple-whole" },
  Cotton: { season: "Kharif (Apr-Oct)", soil: "Black cotton soil", water: "Moderate", temp: "21-30°C", duration: "160-200 days", diseases: "Wilt, Leaf Curl, Boll Rot", fert: "Urea, DAP, Boron", yield: "1.5-2.5 t/ha", icon: "fa-seedling" },
  Maize: { season: "Kharif & Rabi", soil: "Well-drained Loamy", water: "Moderate", temp: "21-30°C", duration: "90-110 days", diseases: "Leaf Blight, Stalk Rot", fert: "Urea, Potash, Zinc", yield: "5-8 t/ha", icon: "fa-corn" },
  Potato: { season: "Rabi (Oct-Feb)", soil: "Sandy Loam", water: "Frequent light", temp: "15-25°C", duration: "90-120 days", diseases: "Late Blight, Scab", fert: "NPK, Potash rich", yield: "20-35 t/ha", icon: "fa-potato" },
  Sugarcane: { season: "Feb-Mar / Oct", soil: "Deep Loamy", water: "Very High", temp: "20-35°C", duration: "12-18 months", diseases: "Red Rot, Smut, Wilt", fert: "Urea, SSP, MOP", yield: "70-100 t/ha", icon: "fa-candy-cane" }
};

const weatherForecast = [
  { day: "Mon", icon: "fa-sun", temp: "31°C", rain: "5%" },
  { day: "Tue", icon: "fa-cloud-sun", temp: "29°C", rain: "20%" },
  { day: "Wed", icon: "fa-cloud-rain", temp: "26°C", rain: "70%" },
  { day: "Thu", icon: "fa-cloud-showers-heavy", temp: "24°C", rain: "85%" },
  { day: "Fri", icon: "fa-cloud-sun", temp: "28°C", rain: "30%" }
];

const weatherAdvisories = [
  { text: "Delay pesticide or leaf fertilizer spraying — expected rain on Wed/Thu will wash chemicals off.", priority: "High" },
  { text: "Increase irrigation slightly early in the week due to high temperatures and low rain probability.", priority: "Medium" },
  { text: "Provide physical support to young vegetable seedlings before heavy winds and showers on Thursday.", priority: "High" },
  { text: "Avoid harvesting mature crops on Wednesday; plan harvesting for sunny conditions on Friday.", priority: "Medium" }
];

const marketPrices = {
  Wheat: { today: 2250, yesterday: 2199, weekly: [2180, 2200, 2190, 2210, 2225, 2240, 2250], action: "Hold Crop", reason: "Prices rising steadily due to high domestic demand; expected to peak next week." },
  Rice: { today: 3100, yesterday: 3066, weekly: [3020, 3040, 3055, 3070, 3080, 3090, 3100], action: "Hold Crop", reason: "Strong upward trend supported by government export inquiries." },
  Tomato: { today: 1800, yesterday: 1875, weekly: [2000, 1980, 1950, 1900, 1870, 1840, 1800], action: "Sell Now", reason: "Declining trend as fresh harvests arrive in markets; sell before further drop." },
  Cotton: { today: 6500, yesterday: 6448, weekly: [6400, 6420, 6450, 6460, 6480, 6490, 6500], action: "Monitor Prices", reason: "Market is stable with slight gains; watch textile mill procurement." },
  Maize: { today: 2050, yesterday: 2040, weekly: [2010, 2020, 2015, 2030, 2035, 2045, 2050], action: "Monitor Prices", reason: "Sideways price movement; no immediate action required." },
  Potato: { today: 1200, yesterday: 1230, weekly: [1300, 1280, 1260, 1250, 1230, 1215, 1200], action: "Sell Now", reason: "Falling prices due to excess cold storage releases." }
};

const marketMandis = [
  { mandi: "Azadpur Mandi, Delhi", crop: "Wheat", price: 2260, change: "+1.2%", up: true },
  { mandi: "Ludhiana Mandi, Punjab", crop: "Wheat", price: 2240, change: "+0.9%", up: true },
  { mandi: "Nashik APMC, Maharashtra", crop: "Tomato", price: 1780, change: "-3.8%", up: false },
  { mandi: "Guntur Market, AP", crop: "Cotton", price: 6520, change: "+0.6%", up: true },
  { mandi: "Agra Mandi, UP", crop: "Potato", price: 1180, change: "-2.1%", up: false },
  { mandi: "Karnal Mandi, Haryana", crop: "Rice", price: 3120, change: "+1.4%", up: true }
];

const governmentSchemes = [
  { name: "PM-KISAN Samman Nidhi", state: "All India", crop: "All Crops", category: "All Farmers", description: "Direct income support of ₹6,000/year to all landholding farmer families.", eligibility: "All small & marginal farmer families having cultivable land.", benefits: "₹6,000 per year in 3 equal installments directly to bank account.", docs: "Aadhaar Card, Bank Passbook, Land Records.", lastDate: "31 Mar 2026" },
  { name: "PM Fasal Bima Yojana (PMFBY)", state: "All India", crop: "All Crops", category: "All Farmers", description: "Comprehensive crop insurance covering yield losses from natural calamities.", eligibility: "Farmers growing notified crops in notified insurance areas.", benefits: "Low premium (1.5% to 5%), full sum insured paid for crop failure.", docs: "Aadhaar, Land Records, Sowing Certificate.", lastDate: "15 Apr 2026" },
  { name: "Kisan Credit Card (KCC)", state: "All India", crop: "All Crops", category: "Small", description: "Affordable credit support for crop production and agricultural needs.", eligibility: "All farmers, tenant farmers, and sharecroppers.", benefits: "Loans up to ₹3 lakh at 4% interest rate with prompt repayment subsidy.", docs: "Aadhaar, Land Documents, Passport Photo.", lastDate: "Ongoing" },
  { name: "Punjab Crop Diversification Scheme", state: "Punjab", crop: "Rice", category: "Small", description: "Incentives to shift from water-intensive paddy to alternative crops.", eligibility: "Punjab farmers replacing paddy with cotton, maize, or pulses.", benefits: "₹17,500/ha cash assistance plus high-quality seed support.", docs: "Land Record, Aadhaar, Bank Account Details.", lastDate: "30 Jun 2026" },
  { name: "Maharashtra Cotton Subsidy", state: "Maharashtra", crop: "Cotton", category: "Marginal", description: "Subsidy on certified cotton seeds and micro-irrigation systems.", eligibility: "Registered cotton growers residing in Maharashtra.", benefits: "50% subsidy on seeds and up to 80% on drip irrigation installation.", docs: "7/12 Land Extract, Aadhaar, Bank Details.", lastDate: "20 May 2026" },
  { name: "UP Solar Pump Yojana", state: "Uttar Pradesh", crop: "All Crops", category: "All Farmers", description: "Subsidized standalone solar irrigation pumps for farmers.", eligibility: "UP farmers owning agricultural land without electric connection.", benefits: "Up to 70% government subsidy on solar pump installation.", docs: "Aadhaar, Khatauni Land Record, Photo.", lastDate: "10 Jul 2026" },
  { name: "Karnataka Raitha Siri", state: "Karnataka", crop: "All Crops", category: "Marginal", description: "Financial support for millet cultivation and sustainable farming.", eligibility: "Farmers cultivating nutritious millets in Karnataka.", benefits: "₹10,000 per hectare incentive directly to bank account.", docs: "Land RTC, Aadhaar, Bank Passbook.", lastDate: "31 Aug 2026" },
  { name: "Soil Health Card Scheme", state: "All India", crop: "All Crops", category: "All Farmers", description: "Free laboratory soil testing and nutrient recommendations.", eligibility: "All farmers across India.", benefits: "Free soil analysis report every 2 years with custom fertilizer plan.", docs: "Aadhaar, Land Survey Number.", lastDate: "Ongoing" }
];

const farmingCalendar = {
  Rice: { "Jun": "Nursery bed preparation and sowing of seeds", "Jul": "Transplanting seedlings to flooded fields", "Aug": "Weeding and application of nitrogen top-dressing", "Sep": "Water level management and pest monitoring", "Oct": "Grain filling stage; stop irrigation late month", "Nov": "Harvesting, threshing, and sun drying" },
  Wheat: { "Nov": "Field plowing, seed treatment, and sowing", "Dec": "First crown root initiation irrigation and fertilizer", "Jan": "Weed control and second light irrigation", "Feb": "Flowering stage care and nutrient top-dressing", "Mar": "Grain maturity and moisture management", "Apr": "Harvesting and storage preparation" },
  Tomato: { "Oct": "Nursery bed raising under shade net", "Nov": "Transplanting to main field with proper spacing", "Dec": "Staking plants and applying organic mulch", "Jan": "Regular irrigation and leaf blight monitoring", "Feb": "Flowering, fruiting, and calcium spray", "Mar": "Continuous picking of ripe tomatoes" },
  Cotton: { "Apr": "Deep summer plowing and seed bed preparation", "May": "Sowing of certified Bt cotton seeds", "Jun": "Thinning extra seedlings and weeding", "Jul": "Pest monitoring for bollworms and sucking pests", "Aug": "Boll formation and foliar nutrient spray", "Sep": "First picking of clean cotton bolls", "Oct": "Second and final harvest picking" },
  Maize: { "Jun": "Land preparation and sowing with onset of monsoon", "Jul": "Inter-cultivation, weeding, and earthing up", "Aug": "Tasseling stage irrigation and pest control", "Sep": "Cob development and grain hardening", "Oct": "Harvesting mature cobs and drying", "Nov": "Stalk clearing and field preparation for winter" }
};

function navigateTo(pageId) {
  const allPages = document.querySelectorAll('.page-section');
  allPages.forEach(page => page.classList.remove('active'));

  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }

  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (link.getAttribute('data-target') === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  document.getElementById('navLinks').classList.remove('show');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (pageId === 'market') {
    updateMarketInsights();
  }

  if (pageId === 'credits') {
    setTimeout(initCreditsAnimations, 120);
  }
}

function toggleMobileMenu() {
  const navList = document.getElementById('navLinks');
  navList.classList.toggle('show');
}

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const themeBtn = document.getElementById('themeBtn');

  if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'light');
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    body.setAttribute('data-theme', 'dark');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }

  if (document.getElementById('market').classList.contains('active')) {
    updateMarketInsights();
  }
}

window.addEventListener('scroll', () => {
  const backBtn = document.getElementById('backToTop');
  if (window.scrollY > 350) {
    backBtn.style.display = 'block';
  } else {
    backBtn.style.display = 'none';
  }
});

function refreshFarmingTip() {
  const tipContainer = document.getElementById('homeTipText');
  const randomTip = farmingTips[Math.floor(Math.random() * farmingTips.length)];
  tipContainer.textContent = randomTip;
}

function renderHomeNotifications() {
  const container = document.getElementById('homeNotifications');
  container.innerHTML = smartNotifications.map(item => {
    const badgeColor = item.priority === 'High' ? '#c62828' : item.priority === 'Medium' ? '#f57f17' : '#2e7d32';
    return `
      <div class="notification-item">
        <i class="fas fa-triangle-exclamation"></i>
        <div>
          <p>${item.text}</p>
          <small style="color: ${badgeColor}; font-weight: 600;">Priority: ${item.priority}</small>
        </div>
      </div>
    `;
  }).join('');
}

function renderHomeNews() {
  const container = document.getElementById('homeNewsList');
  container.innerHTML = agriNews.map(news => `
    <div class="card news-card">
      <div class="news-icon"><i class="fas ${news.icon}"></i></div>
      <div>
        <h3 style="font-size: 1rem; margin-bottom: 4px;">${news.title}</h3>
        <small color="var(--text-muted)"><i class="fas fa-newspaper"></i> ${news.source} · ${news.time}</small>
      </div>
    </div>
  `).join('');
}

function previewUploadedImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const previewElement = document.getElementById('previewImage');
    previewElement.src = e.target.result;
    previewElement.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function runDiseaseAnalysis() {
  const previewElement = document.getElementById('previewImage');
  const resultContainer = document.getElementById('diseaseAnalysisResult');

  if (previewElement.style.display === 'none' || !previewElement.src) {
    resultContainer.innerHTML = '<div class="result-box" style="border-color: #c62828;"><b style="color: #c62828;">⚠ Please select and upload a leaf image first.</b></div>';
    return;
  }

  resultContainer.innerHTML = '<p style="color: var(--text-muted);"><i class="fas fa-spinner fa-spin"></i> AI analyzing leaf symptoms and cell structures...</p>';

  setTimeout(() => {
    const diseaseNames = Object.keys(diseaseDatabase);
    const randomDisease = diseaseNames[Math.floor(Math.random() * diseaseNames.length)];
    const data = diseaseDatabase[randomDisease];

    const badgeClass = data.severity === 'Severe' ? 'badge-red' : data.severity === 'Moderate' ? 'badge-yellow' : 'badge-green';

    resultContainer.innerHTML = `
      <div class="result-box">
        <h4><i class="fas fa-virus"></i> Diagnosis: ${randomDisease}</h4>
        <div class="result-row"><span>AI Confidence</span><span><b>${data.confidence}%</b></span></div>
        <div class="progress-bar"><div class="progress-fill" style="width: 0;" id="diseaseConfidenceBar"></div></div>
        <div class="result-row" style="margin-top: 8px;"><span>Severity</span><span class="badge ${badgeClass}">${data.severity}</span></div>
        <div class="result-row"><span>Symptoms</span><span style="text-align: right; max-width: 65%;">${data.symptoms}</span></div>
        <div class="result-row"><span>Root Cause</span><span style="text-align: right; max-width: 65%;">${data.cause}</span></div>
        <div class="result-row"><span>Prevention Plan</span><span style="text-align: right; max-width: 65%;">${data.prevention}</span></div>
        <div class="result-row"><span>Suggested Pesticide</span><span style="text-align: right; max-width: 65%;"><b>${data.pesticide}</b></span></div>
        <div class="result-row"><span>Organic Treatment</span><span style="text-align: right; max-width: 65%;">${data.organic}</span></div>
        <div class="result-row"><span>Expected Recovery</span><span>${data.recovery}</span></div>
      </div>
    `;

    setTimeout(() => {
      const bar = document.getElementById('diseaseConfidenceBar');
      if (bar) bar.style.width = data.confidence + '%';
    }, 100);
  }, 1200);
}

function renderDiseaseLibrary() {
  const container = document.getElementById('diseaseLibraryGrid');
  container.innerHTML = Object.entries(diseaseDatabase).map(([name, info]) => {
    const badgeClass = info.severity === 'Severe' ? 'badge-red' : info.severity === 'Moderate' ? 'badge-yellow' : 'badge-green';
    return `
      <div class="card">
        <h3><i class="fas fa-leaf"></i> ${name}</h3>
        <span class="badge ${badgeClass}">${info.severity} Risk</span>
        <p style="margin-top: 10px; font-size: 0.88rem;"><b>Symptoms:</b> ${info.symptoms}</p>
        <p style="margin-top: 6px; font-size: 0.88rem;"><b>Organic Fix:</b> ${info.organic}</p>
      </div>
    `;
  }).join('');
}

function renderWeatherPage() {
  const forecastContainer = document.getElementById('weatherForecastCards');
  forecastContainer.innerHTML = weatherForecast.map(item => `
    <div class="forecast-item">
      <b>${item.day}</b>
      <i class="fas ${item.icon}"></i>
      <div style="font-size: 1.2rem; font-weight: 600;">${item.temp}</div>
      <small><i class="fas fa-umbrella"></i> ${item.rain}</small>
    </div>
  `).join('');

  const adviceContainer = document.getElementById('weatherAdviceList');
  adviceContainer.innerHTML = weatherAdvisories.map(advice => {
    const badgeColor = advice.priority === 'High' ? '#c62828' : '#f57f17';
    return `
      <div class="notification-item">
        <i class="fas fa-cloud-bolt"></i>
        <div>
          <p>${advice.text}</p>
          <small style="color: ${badgeColor}; font-weight: 600;">Priority: ${advice.priority} · AI Confidence: ${80 + Math.floor(Math.random() * 15)}%</small>
        </div>
      </div>
    `;
  }).join('');
}

function generateFertilizerPlan() {
  const crop = document.getElementById('fertCrop').value;
  const soil = document.getElementById('fertSoil').value;
  const nitrogen = parseFloat(document.getElementById('fertN').value) || 0;
  const phosphorus = parseFloat(document.getElementById('fertP').value) || 0;
  const potassium = parseFloat(document.getElementById('fertK').value) || 0;
  const soilPH = parseFloat(document.getElementById('fertPH').value) || 7.0;

  let recommendations = [];
  let organicAlternatives = [];
  let soilHealthNotes = [];

  if (nitrogen < 50) {
    recommendations.push("Urea (46% N)");
    organicAlternatives.push("Aged Cow Manure / Vermicompost");
    soilHealthNotes.push("Nitrogen is deficient.");
  }
  if (phosphorus < 25) {
    recommendations.push("DAP / Single Super Phosphate (SSP)");
    organicAlternatives.push("Bone Meal / Rock Phosphate");
    soilHealthNotes.push("Phosphorus is below optimal levels.");
  }
  if (potassium < 40) {
    recommendations.push("Muriate of Potash (MOP)");
    organicAlternatives.push("Wood Ash / Banana Peel Compost");
    soilHealthNotes.push("Potassium supplementation required.");
  }
  if (recommendations.length === 0) {
    recommendations.push("Balanced NPK 10:26:26 (Maintenance dose)");
    organicAlternatives.push("General Farmyard Compost");
    soilHealthNotes.push("Soil nutrient balance is good.");
  }

  let phAdvice = "Optimal soil pH for crop growth.";
  if (soilPH < 6.0) {
    phAdvice = "Soil is acidic — apply agricultural lime to raise pH.";
  } else if (soilPH > 7.5) {
    phAdvice = "Soil is alkaline — apply gypsum and organic mulch to lower pH.";
  }

  const scoreN = Math.min(nitrogen, 60) / 60 * 35;
  const scoreP = Math.min(phosphorus, 40) / 40 * 25;
  const scoreK = Math.min(potassium, 60) / 60 * 25;
  const scorePH = (soilPH >= 6.0 && soilPH <= 7.5) ? 15 : 5;
  const totalHealthScore = Math.min(100, Math.round(scoreN + scoreP + scoreK + scorePH));

  const resultContainer = document.getElementById('fertilizerResultBox');
  resultContainer.innerHTML = `
    <div class="result-box">
      <h4><i class="fas fa-flask"></i> Plan for ${crop} in ${soil} Soil</h4>
      <div class="result-row"><span>Recommended Fertilizer</span><span style="text-align: right; max-width: 55%;"><b>${recommendations.join(", ")}</b></span></div>
      <div class="result-row"><span>Organic Alternative</span><span style="text-align: right; max-width: 55%;">${organicAlternatives.join(", ")}</span></div>
      <div class="result-row"><span>Estimated Quantity</span><span>${80 + Math.floor(Math.random() * 40)} kg/ha (in split doses)</span></div>
      <div class="result-row"><span>Application Method</span><span style="text-align: right; max-width: 55%;">Basal dose + 2 top-dressing splits</span></div>
      <div class="result-row"><span>Best Timing</span><span>Early morning, before light irrigation</span></div>
      <div class="result-row"><span>pH Recommendation</span><span style="text-align: right; max-width: 55%;">${phAdvice}</span></div>
      
      <h4 style="margin-top: 16px;"><i class="fas fa-heart-pulse"></i> Soil Health Summary</h4>
      <div class="progress-bar"><div class="progress-fill" style="width: 0;" id="soilHealthBar"></div></div>
      <p style="margin-top: 8px; font-size: 0.88rem;"><b>Health Score: ${totalHealthScore}/100</b> — ${totalHealthScore > 75 ? 'Excellent soil condition.' : totalHealthScore > 50 ? 'Moderate condition; follow nutrient plan.' : 'Needs significant organic enrichment.'} ${soilHealthNotes.join(" ")}</p>
    </div>
  `;

  setTimeout(() => {
    const bar = document.getElementById('soilHealthBar');
    if (bar) bar.style.width = totalHealthScore + '%';
  }, 100);
}

function updateMarketInsights() {
  const selectedCrop = document.getElementById('marketCropSelect').value;
  const marketInfo = marketPrices[selectedCrop] || marketPrices.Wheat;

  const priceChange = ((marketInfo.today - marketInfo.yesterday) / marketInfo.yesterday * 100).toFixed(1);
  const isRising = marketInfo.today >= marketInfo.yesterday;
  const badgeClass = marketInfo.action === 'Sell Now' ? 'badge-red' : marketInfo.action === 'Hold Crop' ? 'badge-green' : 'badge-yellow';

  const insightContainer = document.getElementById('marketInsightCard');
  insightContainer.innerHTML = `
    <h3><i class="fas fa-robot"></i> AI Market Advice: ${selectedCrop}</h3>
    <div class="result-row"><span>Today's Mandi Price</span><span><b>₹${marketInfo.today} / quintal</b></span></div>
    <div class="result-row"><span>Yesterday's Price</span><span>₹${marketInfo.yesterday} / quintal</span></div>
    <div class="result-row"><span>Daily Price Change</span><span class="badge ${isRising ? 'badge-green' : 'badge-red'}">${isRising ? '↑' : '↓'} ${Math.abs(priceChange)}%</span></div>
    <div class="result-row"><span>7-Day Trend</span><span>${isRising ? 'Upward 📈' : 'Downward 📉'}</span></div>
    <div class="result-row"><span>AI Suggested Action</span><span class="badge ${badgeClass}">${marketInfo.action}</span></div>
    <div class="result-row"><span>AI Confidence</span><span><b>${82 + Math.floor(Math.random() * 12)}%</b></span></div>
    <p style="margin-top: 12px; font-size: 0.88rem; color: var(--text-muted);"><b>Market Analysis:</b> ${marketInfo.reason}</p>
  `;

  drawPriceTrendChart(marketInfo.weekly);

  const mandiContainer = document.getElementById('mandiTableBody');
  mandiContainer.innerHTML = marketMandis.map(m => `
    <tr>
      <td>${m.mandi}</td>
      <td>${m.crop}</td>
      <td>₹${m.price}</td>
      <td><span class="badge ${m.up ? 'badge-green' : 'badge-red'}">${m.change}</span></td>
    </tr>
  `).join('');
}

function drawPriceTrendChart(priceData) {
  const canvas = document.getElementById('priceTrendCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const padding = 45;

  ctx.clearRect(0, 0, width, height);

  const computedStyles = getComputedStyle(document.body);
  const primaryColor = computedStyles.getPropertyValue('--primary').trim() || '#2e7d32';
  const mutedColor = computedStyles.getPropertyValue('--text-muted').trim() || '#6b7c6e';
  const borderColor = computedStyles.getPropertyValue('--border-color').trim() || '#e2e9e2';

  const minPrice = Math.min(...priceData) * 0.98;
  const maxPrice = Math.max(...priceData) * 1.02;
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padding + (height - 2 * padding) * i / 4;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - 15, y);
    ctx.stroke();

    ctx.fillStyle = mutedColor;
    ctx.font = '11px Poppins';
    ctx.textAlign = 'right';
    const labelValue = Math.round(maxPrice - (maxPrice - minPrice) * i / 4);
    ctx.fillText('₹' + labelValue, padding - 8, y + 4);
  }

  const getX = (index) => padding + (width - padding - 25) * index / (priceData.length - 1);
  const getY = (value) => padding + (height - 2 * padding) * (1 - (value - minPrice) / (maxPrice - minPrice));

  const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
  gradient.addColorStop(0, primaryColor + '66');
  gradient.addColorStop(1, primaryColor + '00');

  ctx.beginPath();
  ctx.moveTo(getX(0), getY(priceData[0]));
  priceData.forEach((val, idx) => ctx.lineTo(getX(idx), getY(val)));
  ctx.lineTo(getX(priceData.length - 1), height - padding);
  ctx.lineTo(getX(0), height - padding);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(getX(0), getY(priceData[0]));
  priceData.forEach((val, idx) => ctx.lineTo(getX(idx), getY(val)));
  ctx.strokeStyle = primaryColor;
  ctx.lineWidth = 3;
  ctx.stroke();

  priceData.forEach((val, idx) => {
    ctx.beginPath();
    ctx.arc(getX(idx), getY(val), 5, 0, Math.PI * 2);
    ctx.fillStyle = primaryColor;
    ctx.fill();

    ctx.fillStyle = mutedColor;
    ctx.font = '11px Poppins';
    ctx.textAlign = 'center';
    ctx.fillText(daysOfWeek[idx], getX(idx), height - padding + 18);
  });
}

function filterGovernmentSchemes() {
  const searchQuery = document.getElementById('schemeSearchInput').value.toLowerCase();
  const selectedState = document.getElementById('schemeStateSelect').value;
  const selectedCrop = document.getElementById('schemeCropSelect').value;
  const selectedCategory = document.getElementById('schemeCategorySelect').value;

  const filteredSchemes = governmentSchemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchQuery) || scheme.description.toLowerCase().includes(searchQuery);
    const matchesState = (selectedState === 'All' || scheme.state === selectedState || scheme.state === 'All India');
    const matchesCrop = (selectedCrop === 'All' || scheme.crop === selectedCrop || scheme.crop === 'All Crops');
    const matchesCategory = (selectedCategory === 'All' || scheme.category === selectedCategory || scheme.category === 'All Farmers');

    return matchesSearch && matchesState && matchesCrop && matchesCategory;
  });

  const schemesContainer = document.getElementById('schemesGridContainer');
  if (filteredSchemes.length === 0) {
    schemesContainer.innerHTML = '<p style="color: var(--text-muted); grid-column: 1 / -1;">No schemes match your selected criteria. Try adjusting filters.</p>';
    return;
  }

  schemesContainer.innerHTML = filteredSchemes.map(scheme => `
    <div class="card">
      <h3><i class="fas fa-landmark"></i> ${scheme.name}</h3>
      <div style="margin: 8px 0;">
        <span class="badge badge-blue">${scheme.state}</span>
        <span class="badge badge-green">${scheme.crop}</span>
        <span class="badge badge-yellow">${scheme.category}</span>
      </div>
      <p style="margin: 10px 0; font-size: 0.9rem;">${scheme.description}</p>
      <div class="result-row"><span>Eligibility</span><span style="text-align: right; max-width: 60%;">${scheme.eligibility}</span></div>
      <div class="result-row"><span>Key Benefits</span><span style="text-align: right; max-width: 60%;"><b>${scheme.benefits}</b></span></div>
      <div class="result-row"><span>Required Docs</span><span style="text-align: right; max-width: 60%;">${scheme.docs}</span></div>
      <div class="result-row"><span>Last Date</span><span><b>${scheme.lastDate}</b></span></div>
      <button class="btn btn-green" style="width: 100%; margin-top: 14px;" onclick="alert('Application form submission would connect to state portal backend.')">Apply Now</button>
    </div>
  `).join('');
}

function searchCropGuides() {
  const query = document.getElementById('cropSearchInput').value.toLowerCase();
  const cropListContainer = document.getElementById('cropGuidesGrid');

  const matchingCrops = Object.entries(cropGuides).filter(([cropName]) => cropName.toLowerCase().includes(query));

  if (matchingCrops.length === 0) {
    cropListContainer.innerHTML = '<p style="color: var(--text-muted); grid-column: 1 / -1;">No crop guides found for this search term.</p>';
    return;
  }

  cropListContainer.innerHTML = matchingCrops.map(([name, info]) => `
    <div class="card">
      <h3><i class="fas ${info.icon}"></i> ${name} Guide</h3>
      <div class="result-row"><span>Growing Season</span><span>${info.season}</span></div>
      <div class="result-row"><span>Suitable Soil</span><span>${info.soil}</span></div>
      <div class="result-row"><span>Water Requirement</span><span>${info.water}</span></div>
      <div class="result-row"><span>Temperature Range</span><span>${info.temp}</span></div>
      <div class="result-row"><span>Crop Duration</span><span>${info.duration}</span></div>
      <div class="result-row"><span>Common Diseases</span><span style="text-align: right; max-width: 55%;">${info.diseases}</span></div>
      <div class="result-row"><span>Recommended Fertilizer</span><span style="text-align: right; max-width: 55%;">${info.fert}</span></div>
      <div class="result-row"><span>Expected Yield</span><span><b>${info.yield}</b></span></div>
    </div>
  `).join('');
}

function updateFarmingCalendar() {
  const selectedCrop = document.getElementById('calendarCropSelect').value;
  const calendarSchedule = farmingCalendar[selectedCrop] || farmingCalendar.Rice;
  const calendarContainer = document.getElementById('calendarMonthsGrid');

  calendarContainer.innerHTML = Object.entries(calendarSchedule).map(([month, activity]) => `
    <div class="card">
      <h3><i class="fas fa-calendar-check"></i> ${month}</h3>
      <p style="font-size: 0.92rem; margin-top: 8px;">${activity}</p>
    </div>
  `).join('');
}

function handleContactSubmit(event) {
  event.preventDefault();
  let isValid = true;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');

  // Helper to display errors
  const setError = (elementId, message) => {
    document.getElementById(elementId).textContent = message;
    if (message) isValid = false;
  };

  setError('errName', !nameInput.value.trim() ? 'Please enter your full name.' : '');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setError('errEmail', !emailRegex.test(emailInput.value.trim()) ? 'Please enter a valid email address.' : '');
  setError('errSubject', !subjectInput.value.trim() ? 'Please enter a subject.' : '');
  setError('errMessage', !messageInput.value.trim() ? 'Please write your message.' : '');

  if (isValid) {
    const successContainer = document.getElementById('contactSuccessBox');
    successContainer.innerHTML = '<div class="result-box" style="margin-top: 16px; border-color: var(--primary);"><b style="color: var(--primary);"><i class="fas fa-check-circle"></i> Message sent successfully! Our agricultural support team will reply within 24 hours.</b></div>';
    document.getElementById('contactForm').reset();
  }

  return false;
}

function generateAIAdvisoryReport() {
  const crop = document.getElementById('decisionCrop').value;
  const state = document.getElementById('decisionState').value;
  const season = document.getElementById('decisionSeason').value;
  const concern = document.getElementById('decisionConcern').value;

  const cropInfo = cropGuides[crop] || cropGuides.Rice;
  const marketInfo = marketPrices[crop] || marketPrices.Wheat;
  const matchingScheme = governmentSchemes.find(s => s.crop === crop || s.state === state) || governmentSchemes[0];

  const healthScore = 65 + Math.floor(Math.random() * 30);
  const riskLevels = ["Low", "Moderate", "High"];
  const diseaseRisk = riskLevels[Math.floor(Math.random() * 3)];
  const riskBadge = diseaseRisk === 'High' ? 'badge-red' : diseaseRisk === 'Moderate' ? 'badge-yellow' : 'badge-green';
  const overallConfidence = 80 + Math.floor(Math.random() * 18);

  const weatherTip = weatherAdvisories[Math.floor(Math.random() * weatherAdvisories.length)].text;
  const seasonalAdvice = `During ${season}, ${crop} grows best in ${cropInfo.temp}. Ensure ${cropInfo.water.toLowerCase()} and check for ${cropInfo.diseases.split(',')[0]}.`;

  const reportContainer = document.getElementById('aiDecisionReportBox');
  reportContainer.innerHTML = '<p style="color: var(--text-muted);"><i class="fas fa-spinner fa-spin"></i> Combining weather models, soil data, and market algorithms...</p>';

  setTimeout(() => {
    reportContainer.innerHTML = `
      <div class="result-box">
        <h4><i class="fas fa-clipboard-check"></i> Complete Advisory: ${crop} in ${state}</h4>
        <div class="result-row"><span>Primary Concern</span><span><span class="badge badge-blue">${concern}</span></span></div>
        <div class="result-row"><span>🌱 Crop Health Score</span><span><b>${healthScore}/100</b></span></div>
        <div class="progress-bar"><div class="progress-fill" style="width: 0;" id="decisionHealthBar"></div></div>
        <div class="result-row" style="margin-top: 8px;"><span>🦠 Disease Risk</span><span class="badge ${riskBadge}">${diseaseRisk}</span></div>
        <div class="result-row"><span>☁ Weather Advisory</span><span style="text-align: right; max-width: 60%;">${weatherTip}</span></div>
        <div class="result-row"><span>🧪 Fertilizer Plan</span><span style="text-align: right; max-width: 60%;">Apply ${cropInfo.fert} in split doses.</span></div>
        <div class="result-row"><span>📈 Market Strategy</span><span><span class="badge ${marketInfo.action === 'Sell Now' ? 'badge-red' : 'badge-green'}">${marketInfo.action}</span></span></div>
        <div class="result-row"><span>🏛 Best Govt Scheme</span><span style="text-align: right; max-width: 60%;">${matchingScheme.name}</span></div>
        <div class="result-row"><span>🗓 Seasonal Guidance</span><span style="text-align: right; max-width: 60%;">${seasonalAdvice}</span></div>
        <div class="result-row"><span>🤖 Overall AI Confidence</span><span><b>${overallConfidence}%</b></span></div>
        <p style="margin-top: 14px; font-size: 0.88rem; color: var(--text-muted);"><b>Action Summary:</b> ${diseaseRisk === 'High' ? 'Immediate vigilance required to prevent leaf blight.' : 'Crop progress is satisfactory; maintain regular irrigation schedule.'}</p>
      </div>
    `;

    setTimeout(() => {
      const bar = document.getElementById('decisionHealthBar');
      if (bar) bar.style.width = healthScore + '%';
    }, 100);
  }, 1300);
}

function initCreditsAnimations() {
  const animatedCards = document.querySelectorAll('.team-card[data-animate]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger the fade-in for a nice cascade effect
          setTimeout(() => entry.target.classList.add('visible'), index * 90);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animatedCards.forEach(card => observer.observe(card));
  } else {
    animatedCards.forEach(card => card.classList.add('visible'));
  }
}

window.addEventListener('DOMContentLoaded', () => {
  refreshFarmingTip();
  renderHomeNotifications();
  renderHomeNews();
  renderDiseaseLibrary();
  renderWeatherPage();
  filterGovernmentSchemes();
  searchCropGuides();
  updateFarmingCalendar();
  updateMarketInsights();
  initCreditsAnimations();
});
