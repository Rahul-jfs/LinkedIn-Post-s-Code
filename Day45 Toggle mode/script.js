document.addEventListener("DOMContentLoaded", function () {
  const modeToggleBtn = document.getElementById("mode-toggle");
  let darkMode = false;

  modeToggleBtn.addEventListener("click", function () {
    darkMode = !darkMode;
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  });
});
