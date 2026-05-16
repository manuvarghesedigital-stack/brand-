const toast = document.querySelector("#toast");
const requestPayout = document.querySelector("#requestPayout");
const changeMethod = document.querySelector("#changeMethod");
const approveButtons = document.querySelectorAll(".ledger-row button");
const resolveButtons = document.querySelectorAll(".exception-list button");

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

requestPayout.addEventListener("click", () => {
  requestPayout.textContent = "Payout Requested";
  showToast("Payout request queued for Friday settlement.");
});

changeMethod.addEventListener("click", () => {
  showToast("Payment method editor would open here.");
});

approveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Approved";
    button.disabled = true;
    showToast("Commission approved for payout.");
  });
});

resolveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Resolved";
    button.disabled = true;
    showToast("Payout exception resolved.");
  });
});
