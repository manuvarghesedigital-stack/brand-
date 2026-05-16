const authTabs = document.querySelectorAll("[data-auth-tab]");
const loginForm = document.querySelector("#loginForm");
const roleStep = document.querySelector("#roleStep");
const roleButtons = document.querySelectorAll("[data-role]");
const onboardingForm = document.querySelector("#onboardingForm");
const dynamicFields = document.querySelector("#dynamicFields");
const roleTitle = document.querySelector("#roleTitle");
const roleEyebrow = document.querySelector("#roleEyebrow");
const finishButton = document.querySelector("#finishButton");
const formNote = document.querySelector("#formNote");

let selectedRole = "";

const roleConfig = {
  brand: {
    title: "Set up your brand workspace",
    eyebrow: "Brand onboarding",
    button: "Enter brand dashboard",
    redirect: "brand-dashboard.html",
    fields: [
      ["Business name", "UrbanBrew Kochi"],
      ["City", "Kochi"],
      ["Campaign goal", "Store visits and coupon redemptions"],
      ["Monthly campaign budget", "₹1,00,000"],
    ],
  },
  creator: {
    title: "Create your creator profile",
    eyebrow: "Creator onboarding",
    button: "Enter creator dashboard",
    redirect: "creator-dashboard.html",
    fields: [
      ["Creator name", "Aisha K."],
      ["City", "Kochi"],
      ["Niche", "Food, campus, lifestyle"],
      ["Instagram handle", "@aisha.eats"],
    ],
  },
  agency: {
    title: "Set up your agency workspace",
    eyebrow: "Agency onboarding",
    button: "Enter agency dashboard",
    redirect: "agency-dashboard.html",
    fields: [
      ["Agency name", "Pioneer Growth"],
      ["Markets managed", "Kochi, Bangalore, London"],
      ["Brands managed", "8"],
      ["Primary service", "Creator-led local growth"],
    ],
  },
};

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    authTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    formNote.textContent = `${tab.textContent} login selected.`;
  });
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loginForm.hidden = true;
  roleStep.hidden = false;
  formNote.textContent = "Account recognized. Choose your Pipplr role.";
});

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRole = button.dataset.role;
    const config = roleConfig[selectedRole];

    roleButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    roleStep.hidden = true;
    onboardingForm.hidden = false;
    roleTitle.textContent = config.title;
    roleEyebrow.textContent = config.eyebrow;
    finishButton.textContent = config.button;
    dynamicFields.innerHTML = config.fields
      .map(
        ([label, value]) => `
          <label>
            ${label}
            <input value="${value}" />
          </label>
        `,
      )
      .join("");
    formNote.textContent = "Complete these details to continue.";
  });
});

onboardingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const config = roleConfig[selectedRole];
  formNote.textContent = "Onboarding complete. Opening your dashboard...";
  window.setTimeout(() => {
    window.location.href = config.redirect;
  }, 500);
});
