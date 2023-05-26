// Dichiarazione e associazioni variabili dal documento html
const cardNumber = document.getElementById("number"); //getElementById è un metodo specifico per selezionare un elemento HTML tramite il suo ID univoco
const numberInp = document.getElementById("card_number");

const cardName = document.getElementById("name");
const nameInp = document.getElementById("card_name");

const cardMonth = document.getElementById("month");
const monthInp = document.getElementById("card_month");

const cardYear = document.getElementById("year");
const yearInp = document.getElementById("card_year");

const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card_cvc");

const submitBtn = document.getElementById("submit_btn");

const completed = document.querySelector(".thank"); //querySelector è un metodo più versatile e potente che consente di selezionare elementi HTML utilizzando selettori CSS
const form = document.querySelector("form");
const continueBtn = document.getElementById("continue_btn");

function setCardNumber(e) {
  //prende un evento 'e' come argomento. l'evento e' il keyup richiamato in fondo al codice
  cardNumber.innerText = format(e.target.value); //quindi questo evento e' il target del value ottenuto dal innerText
  //innerHTML: Restituisce o imposta il contenuto HTML di un elemento
  //innerText: Restituisce o imposta il testo visibile di un elemento.
  //appendChild: Aggiunge un nodo figlio all'interno di un altro nodo
}
function setCardName(e) {
  cardName.innerText = e.target.value;
}
function setCardMonth(e) {
  cardMonth.innerText = e.target.value;
}
function setCardYear(e) {
  cardYear.innerText = e.target.value;
}
function setCardCvc(e) {
  cardCvc.innerText = e.target.value;
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$&");
  //L'espressione regolare /d{4}(?=.)/g viene utilizzata per trovare tutti i gruppi di 4 cifre che sono seguiti da un carattere diverso da un a capo nella stringa s
  //La stringa di sostituzione "$&" rappresenta il testo corrispondente all'espressione regolare trovata. In questo caso, viene utilizzato per mantenere inalterato il gruppo di 4 cifre corrispondente.
}

function handleSubmit(e) {
  e.preventDefault();
  if (!nameInp.value) {
    nameInp.classList.add("error"); //aggiunge la classe CSS error
    nameInp.parentElement.classList.add("error_message"); //toglie la classe CSS error_message dopo la correzione dell'errore
  } else {
    nameInp.classList.remove("error");
    nameInp.parentElement.classList.remove("error_message");
  }
  if (!numberInp.value) {
    numberInp.classList.add("error");
    numberInp.parentElement.classList.add("error_message");
  } else {
    numberInp.classList.remove("error");
    numberInp.parentElement.classList.remove("error_message");
  }
  if (!monthInp.value) {
    monthInp.classList.add("error");
    monthInp.parentElement.classList.add("error_message");
  } else {
    monthInp.classList.remove("error");
    monthInp.parentElement.classList.remove("error_message");
  }
  if (!yearInp.value) {
    yearInp.classList.add("error");
    yearInp.parentElement.classList.add("error_message");
  } else {
    yearInp.classList.remove("error");
    yearInp.parentElement.classList.remove("error_message");
  }
  if (!cvcInp.value) {
    cvcInp.classList.add("error");
    cvcInp.parentElement.classList.add("error_message");
  } else {
    cvcInp.classList.remove("error");
    cvcInp.parentElement.classList.remove("error_message");
  }
  if (
    nameInp.value &&
    numberInp.value &&
    monthInp.value &&
    yearInp.value &&
    cvcInp.value &&
    numberInp.value.length == 16
  ) {
    completed.classList.remove("hidden");
    form.classList.add("hidden");
  }
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);
continueBtn.addEventListener("click", () => {
  location.reload();
});
