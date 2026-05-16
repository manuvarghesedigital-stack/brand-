const exportReport = document.querySelector("#exportReport");
const rangeSelect = document.querySelector("#rangeSelect");
const citySelect = document.querySelector("#citySelect");
const toggleChart = document.querySelector("#toggleChart");
const barChart = document.querySelector("#barChart");
const clicksMetric = document.querySelector("#clicksMetric");
const leadsMetric = document.querySelector("#leadsMetric");
const conversionsMetric = document.querySelector("#conversionsMetric");
const roiMetric = document.querySelector("#roiMetric");
const toast = document.querySelector("#toast");

const ranges = {
  "This week": ["48.2K", "12.6K", "3,842", "5.3x"],
  "This month": ["186K", "44.9K", "14,208", "5.8x"],
  "Last 90 days": ["512K", "131K", "42,600", "4.9x"],
};

let revenueMode = false;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

function updateMetrics() {
  const values = ranges[rangeSelect.value];
  clicksMetric.textContent = values[0];
  leadsMetric.textContent = values[1];
  conversionsMetric.textContent = values[2];
  roiMetric.textContent = values[3];
  showToast(`${rangeSelect.value} report loaded for ${citySelect.value}.`);
}

exportReport.addEventListener("click", () => {
  exportReport.textContent = "Report Ready";
  showToast("Analytics report prepared for export.");
});

rangeSelect.addEventListener("change", updateMetrics);
citySelect.addEventListener("change", updateMetrics);

toggleChart.addEventListener("click", () => {
  revenueMode = !revenueMode;
  toggleChart.textContent = revenueMode ? "Show conversions" : "Show revenue";
  const heights = revenueMode ? ["72%", "88%", "67%", "54%", "79%"] : ["88%", "74%", "81%", "56%", "69%"];
  [...barChart.children].forEach((bar, index) => {
    bar.style.setProperty("--h", heights[index]);
  });
  showToast(revenueMode ? "Revenue view enabled." : "Conversion view enabled.");
});
