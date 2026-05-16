const toast = document.querySelector("#toast");
const startCourse = document.querySelector("#startCourse");
const lessonButtons = document.querySelectorAll(".lesson-list button");
const playbookButtons = document.querySelectorAll(".playbook-list button");
const progressValue = document.querySelector("#progressValue");
const progressBar = document.querySelector("#progressBar");

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

startCourse.addEventListener("click", () => {
  startCourse.textContent = "Course Started";
  progressValue.textContent = "57%";
  progressBar.style.width = "57%";
  showToast("Next academy lesson started.");
});

lessonButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = button.textContent === "Unlock" ? "Unlocked" : "Opened";
    showToast("Lesson opened.");
  });
});

playbookButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast(`${button.textContent} opened.`);
  });
});
