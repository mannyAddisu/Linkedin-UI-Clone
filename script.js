const settingsMenu = document.querySelector(".settings-menu");
const profile = document.querySelector(".nav-img");
const select = document.querySelector(".select");
const option = document.querySelector(".options");
const seeMoreButtons = document.querySelectorAll(".see-more");
const closeBtn = document.getElementById("messages-close");

function settingsToggle() {
  settingsMenu.classList.toggle("hidden");
}

document.addEventListener("keydown", function (e) {
  if (
    e.key == "Escape" &&
    settingsMenu.classList.contains("settings-menu-height")
  ) {
    settingsMenu.classList.remove("settings-menu-height");
  }
  if (e.key == "Escape" && option.style.display == "block") {
    option.style.display = "none";
  }
});

window.addEventListener("click", function (e) {
  if (!settingsMenu.contains(e.target) && !profile.contains(e.target)) {
    settingsMenu.classList.remove("hidden");
  }
  if (!select.contains(e.target) && !option.contains(e.target)) {
    option.style.display = "none";
  }
});

select.addEventListener("click", function () {
  // it could not function on single click when the page loads initially because
  //the element ( or "option" in this case).style returns the inline style set -
  //in the option class html not the style we set(compute) in the css file
  // so I can set the display: none inline in the html file to fix the issue which I did for simplicity or use "window.getComputedStyle()"
  //**if (window.getComputedStyle(option).getPropertyValue("display") === "none") **//
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

seeMoreButtons.forEach(function (seeMore) {
  seeMore.addEventListener("click", function () {
    const feedSub = seeMore.closest(".feed-sub");
    const text = feedSub.querySelector(".post-text");

    text.classList.toggle("text-cut");
    if (
      seeMore.textContent == "See less" &&
      feedSub.style.flexDirection == "column"
    ) {
      seeMore.textContent = "See more";
      feedSub.style.flexDirection = "row";
    } else {
      feedSub.style.flexDirection = "column";
      seeMore.textContent = "See less";
    }
  });
});

closeBtn.addEventListener("click", function () {
  if (document.querySelector(".messages-container").style.display == "none") {
    document.querySelector(".messages-container").style.display = "block";
  } else {
    document.querySelector(".messages-container").style.display = "none";
  }
});
