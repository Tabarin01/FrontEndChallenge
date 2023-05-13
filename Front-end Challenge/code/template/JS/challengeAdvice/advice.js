const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById("generate-btn");
const url = "https://api.adviceslip.com/advice";

async function generateAdvice() {
  const res = await fetch(url);
  const {
    slip: { id, advice },
  } = await res.json();
  adviceId.innerText = id;
  adviceText.innerText = advice;
}
generateAdvice();

adviceBtn.addEventListener("click", generateAdvice);
