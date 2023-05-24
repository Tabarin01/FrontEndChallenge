let button = document.getElementById("read");
let not = document.getElementById("num");

// button.addEventListener("click", () => {
//   document.querySelectorAll(".single-box").forEach((e) => { for every element of .single-box
//     console.log(e);  see every element
//   });
// });
button.addEventListener("click", () => {
  document.querySelectorAll(".single-box").forEach((e) => {
    e.classList.remove("unseen");
    // console.log(e.classList);
  });
  document.querySelectorAll(".dot").forEach((e) => {
    e.classList.remove("dot");
  });
  not.remove();
  //   document.getElementById("num").innerText = "0";
});
