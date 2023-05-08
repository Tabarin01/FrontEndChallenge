const title = document.querySelector('#title');
const subtitle = document.querySelector('#subtitle');

// Animation with anime.js
const textAnimation = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1500,
});
textAnimation
  .add({
    targets: title,
    translateY: [-50, 0],
    opacity: [0, 1],
    delay: 500,
  })
  .add({
    targets: subtitle,
    translateY: [50, 0],
    opacity: [0, 1],
  });
