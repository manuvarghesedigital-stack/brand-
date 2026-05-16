const cityData = {
  Bangalore: { creators: "186", campaigns: "42", niches: "food, fitness, fashion" },
  Kochi: { creators: "124", campaigns: "31", niches: "cafes, study abroad, travel" },
  Calicut: { creators: "92", campaigns: "18", niches: "campus, food, events" },
  Thrissur: { creators: "88", campaigns: "16", niches: "retail, clinics, fashion" },
  Hyderabad: { creators: "146", campaigns: "37", niches: "gyms, edtech, apps" },
  London: { creators: "104", campaigns: "29", niches: "travel, student, fashion" },
  Berlin: { creators: "76", campaigns: "22", niches: "events, food, creators" },
  Dublin: { creators: "68", campaigns: "19", niches: "student, tours, cafes" },
};

const themeToggle = document.querySelector("#themeToggle");
const cityButtons = document.querySelectorAll(".city-pin");
const cityName = document.querySelector("#cityName");
const cityCreators = document.querySelector("#cityCreators");
const cityCampaigns = document.querySelector("#cityCampaigns");
const cityNiches = document.querySelector("#cityNiches");
const modal = document.querySelector("#signupModal");
const modalTitle = document.querySelector("#modalTitle");
const modalCopy = document.querySelector("#modalCopy");
const modalSubmit = document.querySelector("#modalSubmit");
const formNote = document.querySelector("#formNote");
const signupForm = document.querySelector(".signup-form");

const modalContent = {
  creator: {
    title: "Join as a Creator",
    copy: "Create a profile, discover local campaigns, and earn from tracked sales, leads, visits, and referrals.",
    submit: "Create creator profile",
    note: "Creator request captured. In a live build, this would create an onboarding lead.",
  },
  brand: {
    title: "Join as a Brand",
    copy: "Launch city-wise creator campaigns, generate QR and coupon tracking, approve creators, and manage payouts.",
    submit: "Create brand workspace",
    note: "Brand request captured. In a live build, this would start workspace setup.",
  },
  demo: {
    title: "Book a Pipplr Demo",
    copy: "See how Pipplr tracks QR scans, coupons, WhatsApp leads, creator performance, and offline attribution.",
    submit: "Request demo",
    note: "Demo request captured. In a live build, this would notify the sales team.",
  },
};

const savedTheme = localStorage.getItem("pipplr-theme");
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("pipplr-theme", nextTheme);
});

cityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const city = button.dataset.city;
    const data = cityData[city];

    cityButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    cityName.textContent = city;
    cityCreators.textContent = data.creators;
    cityCampaigns.textContent = data.campaigns;
    cityNiches.textContent = data.niches;
  });
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const content = modalContent[button.dataset.action];
    modalTitle.textContent = content.title;
    modalCopy.textContent = content.copy;
    modalSubmit.textContent = content.submit;
    signupForm.dataset.action = button.dataset.action;
    formNote.textContent = "";
    modal.hidden = false;
    modal.querySelector("input").focus();
  });
});

document.querySelector("[data-close-modal]").addEventListener("click", () => {
  modal.hidden = true;
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.hidden = true;
  }
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = modalContent[signupForm.dataset.action].note;
  signupForm.reset();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    modal.hidden = true;
  }
});
