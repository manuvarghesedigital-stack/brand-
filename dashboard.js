const newCampaign = document.querySelector("#newCampaign");
const campaignDialog = document.querySelector("#campaignDialog");
const approveButtons = document.querySelectorAll(".creator-row button");

newCampaign.addEventListener("click", () => {
  campaignDialog.showModal();
});

approveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Approved";
    button.disabled = true;
  });
});
