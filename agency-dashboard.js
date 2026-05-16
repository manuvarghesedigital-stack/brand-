const toast = document.querySelector("#toast");
const inviteBrand = document.querySelector("#inviteBrand");
const autoMatch = document.querySelector("#autoMatch");
const openButtons = document.querySelectorAll(".brand-row button");
const inviteButtons = document.querySelectorAll(".recruit-list button");

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

inviteBrand.addEventListener("click", () => {
  inviteBrand.textContent = "Invite Sent";
  showToast("Brand invitation prepared.");
});

autoMatch.addEventListener("click", () => {
  autoMatch.textContent = "Matched";
  showToast("AI-style creator matching simulated for all open briefs.");
});

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast("Brand workspace preview would open here.");
  });
});

inviteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Batch Invited";
    button.disabled = true;
    showToast("Creator invite batch sent.");
  });
});
