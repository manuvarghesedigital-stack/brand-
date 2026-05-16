const discoverCampaign = document.querySelector("#discoverCampaign");
const campaignDialog = document.querySelector("#campaignDialog");
const applyButtons = document.querySelectorAll(".campaign-row button");
const copyButton = document.querySelector(".copy-code");
const shareProfile = document.querySelector("#shareProfile");
const dialogOptions = document.querySelectorAll(".dialog-options button");
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

discoverCampaign.addEventListener("click", () => {
  campaignDialog.showModal();
});

applyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Applied";
    button.disabled = true;
    showToast("Campaign application sent.");
  });
});

copyButton.addEventListener("click", async () => {
  const link = "https://pipplr.com/r/aisha-kochi-24";
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(link);
    }
  } catch {
    copyButton.dataset.fallbackLink = link;
  }
  copyButton.textContent = "Copied";
  showToast("Creator tracking link copied.");
});

shareProfile.addEventListener("click", async () => {
  const link = "https://pipplr.com/creator/aisha-kochi";
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(link);
    }
  } catch {
    shareProfile.dataset.fallbackLink = link;
  }
  showToast("Profile share link ready.");
});

dialogOptions.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    dialogNote.textContent = `${button.textContent} selected. Matching campaigns are ready.`;
  });
});
