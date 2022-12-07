const game = new Game();

// • Render • //
game.pantallaNegra();

document.querySelector('.start-btn-overlay').addEventListener('click', (ev) => {
  document.querySelector('.black--screen').remove();
  document.querySelector('.welcome-introduction').remove();
  document.querySelector('.pointer-arrow').remove();
  game.pantallaIntro();
  document.querySelector('.start-btn-overlay').remove();
  document.querySelector('.container').classList.add('big-device');
  document.querySelector('.power-btn').style.fill = '#26c426';

  setTimeout(() => {
    game.pantallaBienvenida();
  }, 2500);
});