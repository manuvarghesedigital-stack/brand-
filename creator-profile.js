const toast = document.querySelector("#toast");
const inviteCreator = document.querySelector("#inviteCreator");
const copyProfile = document.querySelector("#copyProfile");
const messageCreator = document.querySelector("#messageCreator");
const socialButtons = document.querySelectorAll(".social-list button");

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

async function copyText(text, message) {
  try {
    if (navigator.clipboard) await navigator.clipboard.writeText(text);
  } catch {
    document.body.dataset.fallbackCopy = text;
  }
  showToast(message);
}

inviteCreator.addEventListener("click", () => {
  inviteCreator.textContent = "Invited";
  showToast("Creator invited to UrbanBrew Weekend Pass.");
});

copyProfile.addEventListener("click", () => {
  copyText("https://pipplr.com/creator/aisha-kochi", "Creator profile link copied.");
});

messageCreator.addEventListener("click", () => {
  showToast("Message composer would open here.");
});

socialButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast(`${button.textContent} opened.`);
  });
});
