/*
  Theme toggle for Mohamed Salem Bio Page.

  What this script does:
  1. Watches for clicks on the theme button.
  2. Adds or removes the "dos_theme" class on the <body>.
  3. Changes the button text depending on the active theme.
  4. Occasionally makes the Obi-Wan ASCII art slide in and out.
*/

const themeToggleButton = document.getElementById("theme_toggle_button");
const obiWanContainer = document.getElementById("obi_wan_container");

let obiWanTimerId = null;

/*
  showObiWanOnce()
  Makes the Obi-Wan ASCII art appear briefly from the left side.
*/
function showObiWanOnce() {
  if (!document.body.classList.contains("dos_theme")) {
    return;
  }

  if (obiWanContainer.classList.contains("obi_wan_visible")) {
    return;
  }

  obiWanContainer.classList.add("obi_wan_visible");

  window.setTimeout(function () {
    obiWanContainer.classList.remove("obi_wan_visible");
  }, 5200);
}

/*
  startObiWanAppearances()
  Starts occasional Obi-Wan appearances while DOS theme is active.
*/
function startObiWanAppearances() {
  stopObiWanAppearances();

  showObiWanOnce();

  obiWanTimerId = window.setInterval(function () {
    showObiWanOnce();
  }, 18000);
}

/*
  stopObiWanAppearances()
  Stops the repeated Obi-Wan appearances.
*/
function stopObiWanAppearances() {
  if (obiWanTimerId !== null) {
    window.clearInterval(obiWanTimerId);
    obiWanTimerId = null;
  }

  obiWanContainer.classList.remove("obi_wan_visible");
}

/*
  toggleTheme()
  Switches between the normal theme and the DOS-style theme.
*/
function toggleTheme() {
  const isDosThemeActive = document.body.classList.toggle("dos_theme");

  if (isDosThemeActive) {
    themeToggleButton.textContent = "Switch back to normal theme";
    startObiWanAppearances();
  } else {
    themeToggleButton.textContent = "Switch to my preferred theme";
    stopObiWanAppearances();
  }
}

themeToggleButton.addEventListener("click", function (event) {
    event.preventDefault();
    toggleTheme();
});