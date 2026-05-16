const cityButtons = document.querySelectorAll("[data-city]");
const selectedCity = document.querySelector("#selectedCity");
const selectedSummary = document.querySelector("#selectedSummary");
const metricCreators = document.querySelector("#metricCreators");
const metricCampaigns = document.querySelector("#metricCampaigns");
const metricRevenue = document.querySelector("#metricRevenue");
const metricHealth = document.querySelector("#metricHealth");
const nicheList = document.querySelector("#nicheList");
const campaignList = document.querySelector("#campaignList");
const nanoCreators = document.querySelector("#nanoCreators");
const campusCreators = document.querySelector("#campusCreators");
const salesPartners = document.querySelector("#salesPartners");
const launchCity = document.querySelector("#launchCity");
const recruitCreators = document.querySelector("#recruitCreators");
const toast = document.querySelector("#toast");
const citySelect = document.querySelector("#citySelect");

const cities = {
  Kochi: {
    creators: "124",
    campaigns: "31",
    revenue: "₹3.1L",
    health: "High",
    summary: "Cafe, study abroad, food, and campus campaigns are strongest here.",
    niches: ["Food creators", "Campus ambassadors", "Study abroad pages"],
    campaignsNext: ["Cafe weekend pass", "Study abroad leads", "Local food trail"],
    supply: ["84", "26", "14"],
  },
  Bangalore: {
    creators: "186",
    campaigns: "42",
    revenue: "₹4.8L",
    health: "High",
    summary: "Fashion, fitness, cafes, and campus creators create strong demand loops.",
    niches: ["Fashion creators", "Fitness creators", "Student creators"],
    campaignsNext: ["Fashion launch", "Gym memberships", "Cafe referrals"],
    supply: ["122", "44", "20"],
  },
  Hyderabad: {
    creators: "146",
    campaigns: "37",
    revenue: "₹3.7L",
    health: "Medium",
    summary: "Fitness, edtech, and app install campaigns are performing well.",
    niches: ["Fitness creators", "Edtech communities", "Sales partners"],
    campaignsNext: ["Gym membership push", "App install sprint", "Coaching leads"],
    supply: ["96", "28", "22"],
  },
  London: {
    creators: "104",
    campaigns: "29",
    revenue: "£3.8K",
    health: "Medium",
    summary: "Student, travel, and study abroad campaigns need more creator supply.",
    niches: ["Student creators", "Travel creators", "Fashion creators"],
    campaignsNext: ["Study abroad consults", "Travel tours", "Student events"],
    supply: ["66", "31", "7"],
  },
  Berlin: {
    creators: "76",
    campaigns: "22",
    revenue: "€3.1K",
    health: "Growing",
    summary: "Events, food, and creator-led local discovery are early but promising.",
    niches: ["Event creators", "Food creators", "Local guides"],
    campaignsNext: ["Event signups", "Cafe discovery", "Weekend tours"],
    supply: ["52", "18", "6"],
  },
  Dublin: {
    creators: "68",
    campaigns: "19",
    revenue: "€2.6K",
    health: "Growing",
    summary: "Travel, student, and cafe campaigns need marketplace depth.",
    niches: ["Travel creators", "Student creators", "Food creators"],
    campaignsNext: ["Travel bookings", "Cafe offers", "Campus events"],
    supply: ["41", "21", "6"],
  },
  Calicut: {
    creators: "92",
    campaigns: "18",
    revenue: "₹1.6L",
    health: "Medium",
    summary: "Campus, food, and local retail campaigns are the strongest wedge.",
    niches: ["Campus creators", "Food bloggers", "Retail promoters"],
    campaignsNext: ["Campus events", "Food trail", "Retail coupons"],
    supply: ["61", "24", "7"],
  },
  Thrissur: {
    creators: "88",
    campaigns: "16",
    revenue: "₹1.4L",
    health: "Medium",
    summary: "Retail, clinics, and fashion campaigns have good local conversion potential.",
    niches: ["Retail creators", "Fashion creators", "Clinic referrers"],
    campaignsNext: ["Fashion drop", "Clinic appointment leads", "Retail referrals"],
    supply: ["54", "22", "12"],
  },
};

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

function renderCity(city) {
  const data = cities[city];
  selectedCity.textContent = city;
  selectedSummary.textContent = data.summary;
  metricCreators.textContent = data.creators;
  metricCampaigns.textContent = data.campaigns;
  metricRevenue.textContent = data.revenue;
  metricHealth.textContent = data.health;
  nanoCreators.textContent = data.supply[0];
  campusCreators.textContent = data.supply[1];
  salesPartners.textContent = data.supply[2];
  nicheList.innerHTML = data.niches.map((item) => `<div><strong>${item}</strong><span>High campaign fit</span></div>`).join("");
  campaignList.innerHTML = data.campaignsNext.map((item) => `<div><strong>${item}</strong><span>Recommended next launch</span></div>`).join("");
}

cityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cityButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    citySelect.value = button.dataset.city;
    renderCity(button.dataset.city);
  });
});

citySelect.addEventListener("change", () => {
  cityButtons.forEach((item) => item.classList.toggle("active", item.dataset.city === citySelect.value));
  renderCity(citySelect.value);
});

launchCity.addEventListener("click", () => {
  showToast(`${selectedCity.textContent} launch plan created.`);
});

recruitCreators.addEventListener("click", () => {
  recruitCreators.textContent = "Recruiting";
  showToast(`Creator recruiting started in ${selectedCity.textContent}.`);
});

renderCity("Kochi");
