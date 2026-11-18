const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Switch to light mode";
  } else {
    themeButton.textContent = "Switch to dark mode";
  }
});
