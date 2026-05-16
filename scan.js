const modeButtons = document.querySelectorAll("[data-mode]");
const dynamicFields = document.querySelector("#dynamicFields");
const submitConversion = document.querySelector("#submitConversion");
const conversionForm = document.querySelector("#conversionForm");
const formNote = document.querySelector("#formNote");
const copyCoupon = document.querySelector("#copyCoupon");

const modes = {
  visit: {
    button: "Verify Visit",
    note: "Visit verified. Aisha K. will receive attribution after brand approval.",
    fields: [
      ["Name", "Your name"],
      ["Phone", "+91..."],
      ["Table or bill reference", "UB-2841"],
    ],
  },
  lead: {
    button: "Send WhatsApp Inquiry",
    note: "WhatsApp lead captured and attributed to Aisha K.",
    fields: [
      ["Name", "Your name"],
      ["WhatsApp number", "+91..."],
      ["Inquiry", "I want to book a table this weekend"],
    ],
  },
  bill: {
    button: "Submit Bill",
    note: "Bill submitted for offline sale verification.",
    fields: [
      ["Bill number", "UB-2841"],
      ["Bill amount", "₹1,840"],
      ["Staff code", "Optional"],
    ],
  },
};

let activeMode = "visit";

function renderMode(mode) {
  activeMode = mode;
  const config = modes[mode];
  submitConversion.textContent = config.button;
  dynamicFields.innerHTML = config.fields
    .map(
      ([label, placeholder]) => `
        <label>
          ${label}
          <input placeholder="${placeholder}" required />
        </label>
      `,
    )
    .join("");
  formNote.textContent = "";
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modeButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderMode(button.dataset.mode);
  });
});

conversionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = modes[activeMode].note;
  conversionForm.reset();
});

copyCoupon.addEventListener("click", async () => {
  try {
    if (navigator.clipboard) await navigator.clipboard.writeText("URBAN12");
  } catch {
    document.body.dataset.fallbackCoupon = "URBAN12";
  }
  copyCoupon.textContent = "Copied";
});

renderMode(activeMode);
