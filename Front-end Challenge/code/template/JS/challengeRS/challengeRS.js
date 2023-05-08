// Seleziona l'elemento body e l'elemento .card .container
const body = document.querySelector("body");
const cardContainer = document.querySelector(".card .container");

// Crea un oggetto MediaQueryList con la query corrispondente alle tue esigenze
const mediaQueryList = window.matchMedia("(min-width: 650px)");

// Definisci la funzione di callback da chiamare quando la query corrisponde o non corrisponde
const handleMediaQueryChange = (mediaQueryList) => {
  if (mediaQueryList.matches) {
    // Applica le regole CSS per schermi larghi
    body.style.alignItems = "center";
    body.style.backgroundColor = "var(--White)";
    cardContainer.style.flexDirection = "row";
  } else {
    // Applica le regole CSS per schermi stretti
    body.style.alignItems = "flex-start";
    body.style.backgroundColor = "transparent";
    cardContainer.style.flexDirection = "column";
  }
};

// Aggiungi un listener per monitorare le modifiche alla query corrispondente
mediaQueryList.addListener(handleMediaQueryChange);

// Chiama la funzione di callback una volta all'inizio per applicare le regole CSS iniziali
handleMediaQueryChange(mediaQueryList);
