fetch('assets/backgrounds/hero.svg')
  .then((response) => response.blob())
  .then((source) => {
    const png = new Blob([source], { type: 'image/png' });
    const imageUrl = URL.createObjectURL(png);
    const hero = document.querySelector('.bg-hero');
    if (hero) {
      hero.style.backgroundImage = `linear-gradient(90deg, rgba(4,5,16,.14), rgba(4,5,16,.02) 46%, rgba(4,5,16,.1)), url("${imageUrl}")`;
      hero.style.backgroundSize = '100% 100%';
      hero.style.backgroundPosition = 'center';
    }
  })
  .catch(() => {});
