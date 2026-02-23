console.log("JS is loaded!");

// darkmode persistent on page change
const darkModeKey = "darkMode";
const toggle = document.getElementsByClassName("switch__input")[0];

// On load: Apply mode based on localStorage
if (localStorage.getItem(darkModeKey) === "enabled") {
  toggle.checked = true;
}

// Update mode on toggle
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    localStorage.setItem(darkModeKey, "enabled");
    document.documentElement.dataset.darkmode = "enabled";
  } else {
    localStorage.setItem(darkModeKey, "disabled");
    document.documentElement.dataset.darkmode = "disabled";
  }
});

// darkmode no transition before js loaded
setTimeout(() => {
  document.body.classList.remove("no-transition");
  document.getElementsByClassName("nav")[0].classList.remove("no-transition");
}, 400); // 400ms delay should be more than enough
