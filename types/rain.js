function PresentRain() {
  const container = document.getElementById('rain-container');
  console.log("Found rain container");

  for (let i = 0; i < 80; i++) {
      const rainParticle = document.createElement('div');
      rainParticle.className = 'rain-particle';

      rainParticle.style.left = Math.random() * -35 + 'vw';
      rainParticle.style.animationDelay = Math.random() * 1 + 's';

      container.appendChild(rainParticle);
  }  
};