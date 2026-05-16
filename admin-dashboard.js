const toast = document.querySelector("#toast");
const auditList = document.querySelector("#auditList");
const actionButtons = document.querySelectorAll(".review-list button, .conversion-list button, .payout-list button");

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

function addAudit(message) {
  const item = document.createElement("div");
  item.textContent = message;
  auditList.prepend(item);
}

actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.textContent;
    const parentText = button.closest("div").textContent.replace(/\s+/g, " ").trim();

    if (action === "Approve") {
      button.textContent = "Approved";
      button.disabled = true;
      showToast("Item approved.");
      addAudit(`Approved: ${parentText}`);
    }

    if (action === "Flag") {
      button.textContent = "Flagged";
      button.disabled = true;
      showToast("Item flagged for manual review.");
      addAudit(`Flagged: ${parentText}`);
    }

    if (action === "Verify") {
      button.textContent = "Verified";
      button.disabled = true;
      showToast("Conversion verified.");
      addAudit(`Verified conversion: ${parentText}`);
    }

    if (action === "Resolve") {
      button.textContent = "Resolved";
      button.disabled = true;
      showToast("Payout exception resolved.");
      addAudit(`Resolved payout exception: ${parentText}`);
    }
  });
});
