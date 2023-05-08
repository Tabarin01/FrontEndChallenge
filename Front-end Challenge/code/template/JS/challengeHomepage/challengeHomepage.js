//Questa è una funzione che al click del navbar(selezionato tramite jquery) f
// $(document).ready(function(){
//     $(".navbar").click(function(){
//       $('.nav').toggleClass('wide');
//     });
//   });
const menuBtn = document.getElementById("menuIco");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuBtn.addEventListener("click", function() {
  dropdownMenu.classList.toggle("show");
});
