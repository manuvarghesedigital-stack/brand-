const toast = document.querySelector("#toast");
const publishCampaign = document.querySelector("#publishCampaign");
const copyCampaignLink = document.querySelector("#copyCampaignLink");
const downloadAssets = document.querySelector("#downloadAssets");
const refreshAssets = document.querySelector("#refreshAssets");
const copyButtons = document.querySelectorAll("[data-copy]");
const viewButtons = document.querySelectorAll(".creator-row button");
const verifyButtons = document.querySelectorAll(".conversion-list button");

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

async function copyText(text, successMessage) {
  try {
    if (navigator.clipboard) await navigator.clipboard.writeText(text);
  } catch {
    document.body.dataset.fallbackCopy = text;
  }
  showToast(successMessage);
}

publishCampaign.addEventListener("click", () => {
  publishCampaign.textContent = "Published";
  showToast("Campaign published and visible to matched creators.");
});

copyCampaignLink.addEventListener("click", () => {
  copyText("https://pipplr.com/c/urbanbrew-weekend-pass", "Campaign link copied.");
});

downloadAssets.addEventListener("click", () => {
  downloadAssets.textContent = "Assets Ready";
  showToast("Creator asset pack prepared.");
});

refreshAssets.addEventListener("click", () => {
  showToast("Attribution assets refreshed.");
});

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    copyText(button.dataset.copy, "Tracking asset copied.");
    button.textContent = "Copied";
  });
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast("Creator performance drawer would open here.");
  });
});

verifyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Verified";
    button.disabled = true;
    showToast("Conversion verified for payout.");
  });
});
