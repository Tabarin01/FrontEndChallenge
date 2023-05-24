const title = document.querySelector('#titolo');
const subtitle = document.querySelector('#sottotitolo');
// assegno a due variabili il relativo elemento

// Animazione con l'oggetto anime.js
const textAnimation = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1000,
});
textAnimation
    .add({
        targets: title,
        translateY: [-50, 0],
        opacity: [0, 1],
        delay: 100,
    })
    .add({
        targets: subtitle,
        translateY: [50, 0],
        opacity: [0, 1],
    });