import Icons from './utils/Icons';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
  }
}
new Main();

import lottie from 'lottie-web';

// Chemin vers votre fichier JSON d'animation Lottie
const animationPath = '../assets/lottie/logo.json'; // Assurez-vous que ce chemin est correct

// Récuperer le contenuer HTML du lottie et l'assigner a une variable
let element = document.querySelector('.lottie-container');

// Charger et jouer l'animation
lottie.loadAnimation({
  container: element, // Le conteneur HTML
  renderer: 'svg', // Le type de rendu (SVG, Canvas, HTML)
  loop: true, // Si l'animation doit boucler
  autoplay: true, // Si l'animation doit jouer automatiquement
  path: animationPath, // Chemin vers le fichier JSON
});
