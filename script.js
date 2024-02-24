const settingsMenu = document.querySelector(".settings-menu");
const profile = document.querySelector(".nav-img");
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
