const settingsMenu = document.querySelector(".settings-menu");
const profile = document.querySelector(".nav-img");
const select = document.querySelector(".select");
const option = document.querySelector(".options");
function settingsToggle() {
  settingsMenu.classList.toggle("settings-menu-height");
}

document.addEventListener("keydown", function (e) {
  if (
    e.key == "Escape" &&
    settingsMenu.classList.contains("settings-menu-height")
  ) {
    settingsMenu.classList.remove("settings-menu-height");
  }
});

window.addEventListener("click", function (e) {
  if (!settingsMenu.contains(e.target) && !profile.contains(e.target)) {
    settingsMenu.classList.remove("settings-menu-height");
  }
});

select.addEventListener("click", function () {
  if (option.style.display === "none") {
    option.style.display = "block";
  } else {
    option.style.display = "none";
  }
});
option.addEventListener("click", function (e) {
  option.style.display = "none";
  if (e.target == document.getElementById("op1")) {
    document.getElementById("select-p").textContent =
      document.getElementById("op1").textContent;
  } else {
    document.getElementById("select-p").textContent =
      document.getElementById("op2").textContent;
  }
});
