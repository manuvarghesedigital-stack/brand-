const steps = document.querySelectorAll(".wizard-step");
const indicators = document.querySelectorAll("[data-step-indicator]");
const nextButton = document.querySelector("#nextButton");
const backButton = document.querySelector("#backButton");
const formNote = document.querySelector("#formNote");
const choiceButtons = document.querySelectorAll("[data-choice]");
const reviewCard = document.querySelector("#reviewCard");
const campaignForm = document.querySelector("#campaignForm");

let currentStep = 1;
const state = {
  objective: "Store visits",
};

function renderStep() {
  steps.forEach((step) => step.classList.toggle("active", Number(step.dataset.step) === currentStep));
  indicators.forEach((item) => item.classList.toggle("active", Number(item.dataset.stepIndicator) === currentStep));
  backButton.style.visibility = currentStep === 1 ? "hidden" : "visible";
  nextButton.textContent = currentStep === 5 ? "Publish Campaign" : "Next";
  formNote.textContent = "";
  if (currentStep === 5) renderReview();
}

function renderReview() {
  const formData = new FormData(campaignForm);
  const tracking = [...document.querySelectorAll("[data-track]:checked")].map((item) => item.dataset.track).join(", ");
  reviewCard.innerHTML = `
    <div><span>Objective</span><strong>${state.objective}</strong></div>
    <div><span>City</span><strong>${formData.get("city") || "Kochi"}</strong></div>
    <div><span>Niche</span><strong>${formData.get("niche") || "Food creators"}</strong></div>
    <div><span>Payout</span><strong>${formData.get("commission") || "12% per redeemed bill"} + ${formData.get("bonus") || "₹50 per visit"}</strong></div>
    <div><span>Budget</span><strong>${formData.get("budget") || "₹1,00,000"}</strong></div>
    <div><span>Tracking</span><strong>${tracking}</strong></div>
  `;
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.dataset.choice;
    state[group] = button.dataset.value;
    document.querySelectorAll(`[data-choice="${group}"]`).forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

nextButton.addEventListener("click", () => {
  if (currentStep < 5) {
    currentStep += 1;
    renderStep();
    return;
  }
  formNote.textContent = "Campaign published. Opening campaign detail...";
  window.setTimeout(() => {
    window.location.href = "campaign-detail.html";
  }, 600);
});

backButton.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep -= 1;
    renderStep();
  }
});

document.querySelector('[data-value="Store visits"]').classList.add("active");
renderStep();
