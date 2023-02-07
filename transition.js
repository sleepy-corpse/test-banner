const newBackground = document.querySelector('.ad__new-background');
const adContainer = document.querySelector('.ad__container');
const newAdContainer = document.querySelector('.ad__container-new');
setTimeout(() => {
  newBackground.classList.add('active');
  newAdContainer.classList.add('active');
  adContainer.classList.add('removed');
}, 4000);
