// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

document.addEventListener("DOMContentLoaded", () => {
  // Fade in when the page loads
  document.body.classList.add("fade-in");
});

// Function to handle fade-out on link click
function handleLinkClick(event) {
  event.preventDefault(); // Prevent the default link behavior
  const targetUrl = this.getAttribute("href");

  // Add the fade-out class to start the transition
  document.body.classList.add("fade-out");

  // After the transition duration, navigate to the new page
  setTimeout(() => {
    window.location.href = targetUrl;
  }, 500); // Duration should match the CSS transition duration
}

// Attach the click event to all internal links
document
  .querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]')
  .forEach((link) => {
    link.addEventListener("click", handleLinkClick);
  });
