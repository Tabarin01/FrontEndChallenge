//Dichiarazione variabili - correlate alle classi HTML
const navLinks = document.querySelectorAll(".nav-links li");
const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overflow = document.querySelector(".overflow");
const mobileLinks = document.querySelectorAll(".mobile-links li");

//funzione al click dell'immagine del menu-button
menuBtn.addEventListener("click", () => {
  const icon = document.querySelector(".mobile-menu-btn img");
  menuBtn.classList.toggle("active-btn");
  mobileMenu.classList.toggle("active-menu");
  overflow.classList.toggle("active-menu");
  if (menuBtn.classList.contains("active-btn")) {
    icon.src = "./images/icon-close-menu.svg";
  } else {
    icon.src = "./images/icon-menu.svg";
  }
});
/*
°°menuBtn.addEventListener("click", () => { ... }); Qui viene aggiunto un listener per l'evento "click" sul pulsante del menu (menuBtn). Quando il pulsante viene cliccato, viene eseguita una funzione anonima.

°°const icon = document.querySelector(".mobile-menu-btn img"); Qui viene selezionato l'elemento immagine all'interno del pulsante del menu. La variabile icon verrà utilizzata per modificare l'immagine in base allo stato del menu.

°°menuBtn.classList.toggle("active-btn"); Questa riga applica o rimuove la classe CSS "active-btn" al pulsante del menu. La classe "active-btn" potrebbe essere utilizzata per applicare uno stile speciale al pulsante quando è attivo.

°°mobileMenu.classList.toggle("active-menu"); Questa riga applica o rimuove la classe CSS "active-menu" all'elemento mobileMenu. La classe "active-menu" potrebbe essere utilizzata per mostrare o nascondere il menu mobile.

°°overflow.classList.toggle("active-menu"); Questa riga applica o rimuove la classe CSS "active-menu" all'elemento overflow. La classe "active-menu" potrebbe essere utilizzata per impedire lo scrolling della pagina principale quando il menu mobile è attivo.

°°if (menuBtn.classList.contains("active-btn")) { ... } Questa condizione verifica se il pulsante del menu ha la classe "active-btn". Se la possiede, significa che il menu è attivo, quindi l'immagine dell'icona viene impostata su "./images/icon-close-menu.svg".

°°else { ... } Se il pulsante del menu non ha la classe "active-btn" (il menu non è attivo), l'immagine dell'icona viene impostata su "./images/icon-menu.svg".*/

navLinks.forEach((link) => {
  const subMenu = link.querySelector(".sub-menu");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("active-menu");
  });
});
mobileLinks.forEach((link) => {
  const subMenu = link.querySelector(".mobile-sub");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("active-menu");
  });
});
