//Assegnazione variabili
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById("generate-btn");
const url = "https://api.adviceslip.com/advice";

async function generateAdvice() {
  /*utilizzare le funzioni async per:
chiamate API;
Caricamento di file o immagini;
Operazioni di I/O;
Animazioni o transizioni;
Calcolo intensivo;

in poche parole servono per eseguire operazioni 'pesanti' in background
rendendo il sito fluido
*/
  const res = await fetch(url); // effettua la chiamata http con la funzione fetch()
  const {
    slip: { id, advice }, // destruttura di JS per estrarre l'oggetto annidato slip
    // qui vengono estratti i valori id e advide e assegnati alle rispettive variabili
  } = await res.json(); // estrae i dati JSON dalla risposta 'res' dell'API
  //la funzione json() restituisce una promise che viene risola con i dati JSON della risposta

  adviceId.innerText = id; //assegnazione del valore di slip alle variabili HTML
  adviceText.innerText = advice;
}

generateAdvice(); // richiamo della funzione

adviceBtn.addEventListener("click", generateAdvice); //associazione della funzione al button
