const toast = document.querySelector("#toast");
const saveSettings = document.querySelector("#saveSettings");
const integrationButtons = document.querySelectorAll(".integration-list button");
const testWhatsApp = document.querySelector("#testWhatsApp");
const copyApiKey = document.querySelector("#copyApiKey");

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

saveSettings.addEventListener("click", () => {
  saveSettings.textContent = "Saved";
  showToast("Workspace settings saved.");
});

integrationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = button.textContent.includes("Connect") ? "Connected" : "Updated";
    showToast("Integration status updated.");
  });
});

testWhatsApp.addEventListener("click", () => {
  showToast("WhatsApp tracking link tested successfully.");
});

copyApiKey.addEventListener("click", async () => {
  try {
    if (navigator.clipboard) await navigator.clipboard.writeText("pipplr_live_urbanbrew_demo");
  } catch {
    document.body.dataset.fallbackApiKey = "pipplr_live_urbanbrew_demo";
  }
  copyApiKey.textContent = "Copied";
  showToast("API key copied.");
});
