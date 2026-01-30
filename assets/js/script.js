console.log("JS is loaded!");

let portrait = window.innerWidth <= 640;
const burger = document.getElementsByClassName("nav__mobile-burger")[0];
if (window.innerWidth < 640) {
  burger.classList.add("showing");
  mobileNavToggle("off");
  // burger.style.display = 'none'; // Hide element in landscape mode
} else {
  burger.classList.remove("showing");
  mobileNavToggle("on");
}
function burgerState() {
  if (portrait && window.innerWidth >= 640) {
    portrait = false;
    console.log("was portrait, now portrait =", portrait);
    mobileNavToggle("on");
    burger.classList.remove("showing");
    // burger.style.display = 'none'; // Hide element in landscape mode
  } else if (!portrait && window.innerWidth <= 640) {
    portrait = true;
    console.log("was landscape, now portrait =", portrait);
    mobileNavToggle("off");
    burger.classList.add("showing");
    // burger.style.display = 'absolute'; // Set element to absolute in portrait mode
    // burger.style.display = 'block'; // Show element in portrait mode
  }
}

// Throttle function to limit how often function is called
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan),
      );
    }
  };
}

const throttledBurgerState = throttle(burgerState, 100);
window.addEventListener("resize", throttledBurgerState);

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
