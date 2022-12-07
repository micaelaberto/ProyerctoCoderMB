class MenuEvents {
  constructor() {}

  defaultMenuEvents() {
    const btns = document.querySelectorAll('.btn');
    if (btns.length !== 0) {
      const sound = new Audio('./sounds/menu.wav');
      sound.volume = 0.1;
      btns.forEach((button) => {
        button.addEventListener('click', (ev) => {
          if (ev.target.closest('div').classList.contains('btn--fight')) {
            game.menu.drawFightMenu(game.pokemonUsuario);
          } else if (ev.target.closest('div').classList.contains('btn--bag')) {
            game.menu.drawBagMenu(game.pokemonUsuario);
          } else if (ev.target.closest('div').classList.contains('btn--run')) {
            game.screen.drawFadeInScreen();
            const runawaySound = new Audio('./sounds/runaway.mp3');
            runawaySound.volume = 0.2;
            game.battleSound.pause();
            runawaySound.play();
            setTimeout(() => {
              game.drawWelcomeScreen();
            }, 1500);
          }
        });
      });
      btns.forEach((button) => {
        button.addEventListener('mouseenter', (ev) => {
          sound.play();
        });
      });
    }
  }

  fightMenuEvents() {
    const btns = document.querySelectorAll('.btn--attack');
    if (btns.length !== 0) {
      const sound = new Audio('./sounds/menu.wav');
      sound.volume = 0.1;
      btns.forEach((button) => {
        button.addEventListener('mouseover', (ev) => {
          if (ev.target.getAttribute('data-attack-type') === 'button')
            return (document.querySelector('.attack--info').innerHTML = `Vuelve atrás!`);
          document.querySelector('.attack--info').innerHTML = `
          Tipo: </br>
            ${ev.target.getAttribute('data-attack-type')}
          `;
        });

        button.addEventListener('click', async (ev) => {
          if (ev.target.getAttribute('data-attack-type') === 'button')
            return game.menu.drawDefaultMenu(game.pokemonUsuario);
          await ataquesUsuario(ev);
          await opponentAttacks();
        });
      });

      btns.forEach((button) => {
        button.addEventListener('mouseenter', (ev) => {
          sound.play();
        });
      });
    }
  }

  bagMenuEvents() {
    const btns = document.querySelectorAll('.btn--attack');
    if (btns.length !== 0) {
      const sound = new Audio('./sounds/menu.wav');
      sound.volume = 0.1;
      btns.forEach((button) => {
        button.addEventListener('mouseover', (ev) => {
          if (ev.target.getAttribute('data-attack-type') === 'button')
            return (document.querySelector('.attack--info').innerHTML = `Vuelve atrás!`);
          document.querySelector('.attack--info').innerHTML = `
            ${ev.target.getAttribute('data-item-info')}
          `;
        });

        button.addEventListener('click', async (ev) => {
          if (ev.target.getAttribute('data-attack-type') === 'button')
            return game.menu.drawDefaultMenu(game.pokemonUsuario);
          await game.pokemonUsuario.restoreHealth(game.pokemonUsuario, game.playerBag);
          opponentAttacks();
        });
      });

      btns.forEach((button) => {
        button.addEventListener('mouseenter', (ev) => {
          sound.play();
        });
      });
    }
  }
}