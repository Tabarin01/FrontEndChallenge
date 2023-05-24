const navItems = document.querySelectorAll(".nav-items");
const lNav = document.getElementById("l-Nav");
const openBtn = document.getElementById("open-btn");
const menu = document.getElementById("menu");

function animateMenu() {
  // Interchange open and close icons
  if (menu.className === "fas fa-bars") {
    menu.setAttribute("class", "fas fa-times");
  } else {
    menu.setAttribute("class", "fas fa-bars");
  }
  // menu.setAttribute("class", menu.className === "fas fa-bars" ? "fas fa-times" : menu.className) ternary

  // Toggle background
  lNav.classList.toggle("change");

  // Body toggle
  document.body.classList.toggle("fixed");

  // Toggle navigation items
  navItems.forEach((item) => {
    item.classList.toggle("show");
  });
}

openBtn.addEventListener("click", animateMenu);
