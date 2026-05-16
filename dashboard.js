const campaignDialog = document.querySelector("#campaignDialog");
const approveButtons = document.querySelectorAll(".creator-row button");
const searchDashboard = document.querySelector("#searchDashboard");
const exportReport = document.querySelector("#exportReport");
const dateRange = document.querySelector("#dateRange");
const generateBatch = document.querySelector("#generateBatch");
const approvePayouts = document.querySelector("#approvePayouts");
const reviewExceptions = document.querySelector("#reviewExceptions");
const campaignOptions = document.querySelectorAll(".campaign-options button");
const dialogNote = document.querySelector(".dialog-note");
const toast = document.querySelector("#toast");

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

approveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Approved";
    button.disabled = true;
    showToast("Creator approved for this campaign.");
  });
});

searchDashboard.addEventListener("click", () => {
  showToast("Search panel opened. Full search would connect to campaign data.");
});

exportReport.addEventListener("click", () => {
  showToast("Performance report prepared for export.");
});

dateRange.addEventListener("click", () => {
  dateRange.textContent = dateRange.textContent === "This week" ? "This month" : "This week";
  showToast(`Date range changed to ${dateRange.textContent.toLowerCase()}.`);
});

generateBatch.addEventListener("click", () => {
  generateBatch.textContent = "Batch Generated";
  showToast("Creator QR, coupon, UTM, and WhatsApp assets generated.");
});

approvePayouts.addEventListener("click", () => {
  approvePayouts.textContent = "Payouts Approved";
  showToast("Creator payouts approved for settlement.");
});

reviewExceptions.addEventListener("click", () => {
  showToast("No payout exceptions found in this prototype.");
});

campaignOptions.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    dialogNote.textContent = `${button.textContent} selected. Campaign draft is ready.`;
  });
});
