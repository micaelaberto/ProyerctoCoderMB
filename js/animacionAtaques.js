const animacionAtaqueRival = (attack) => {
  const emberSonido = new Audio('./sounds/ember.wav');
  const sonidoRival = new Audio('./sounds/opponent-1.wav');
  sonidoRival.volume = game.audioLevel;
  emberSonido.volume = game.audioLevel;

  return new Promise((resolve, reject) => {
    const pokemonRival = document.querySelector('.pokemonRival');
    const pokemonUsuario = document.querySelector('.pokemonUsuario');

    if (attack.type === 'Normal') {
      pokemonRival.classList.add('rival-ataque');
      pokemonUsuario.classList.add('danio');

      setTimeout(() => {
        emberSonido.play();
      }, 200);

      setTimeout(() => {
        pokemonRival.classList.remove('rival-ataque');
        pokemonUsuario.classList.remove('danio');
        resolve(true);
      }, 2750);
    }

    if (attack.type === 'Animated') {
      pokemonUsuario.classList.add('rival-ataque-animado');
      pokemonUsuario.classList.add('danio');

      setTimeout(() => {
        sonidoRival.play();
      }, 200);

      setTimeout(() => {
        pokemonUsuario.classList.remove('rival-ataque-animado');
        pokemonUsuario.classList.remove('danio');
        sonidoRival.pause();
        resolve(true);
      }, 2000);
    }
  });
};

const animacionAtaqueUsuario = (attack) => {
  const emberSonido = new Audio('./sounds/ember.wav');
  emberSonido.volume = game.audioLevel;
  const fireSonido = new Audio('./sounds/fire.wav');
  fireSonido.volume = game.audioLevel;
  const grassSonido = new Audio('./sounds/grass.wav');
  grassSonido.volume = game.audioLevel;
  const waterSonido = new Audio('./sounds/water.wav');
  waterSonido.volume = game.audioLevel;

  return new Promise((reslove, reject) => {
    const pokemonRival = document.querySelector('.pokemonRival');
    const pokemonUsuario = document.querySelector('.pokemonUsuario');

    if (attack.type === 'Normal') {
      if (attack.image === 'slash.gif') {
        pokemonRival.classList.add('danio');
        pokemonRival.classList.add('slash');
        setTimeout(() => {
          emberSonido.play();
        }, 200);

        setTimeout(() => {
          pokemonRival.classList.remove('danio');
          pokemonRival.classList.remove('slash');
          reslove(true);
        }, 750);

        return;
      }
      pokemonUsuario.classList.add('usuario-ataque');
      pokemonRival.classList.add('danio');

      setTimeout(() => {
        emberSonido.play();
      }, 200);

      setTimeout(() => {
        pokemonUsuario.classList.remove('usuario-ataque');
        pokemonRival.classList.remove('danio');
        reslove(true);
      }, 750);
    }

    if (attack.type === 'Fire') {
      pokemonRival.classList.add('burns');

      setTimeout(() => {
        fireSonido.play();
      }, 200);

      setTimeout(() => {
        pokemonRival.classList.remove('burns');
        reslove(true);
      }, 1750);
    }

    if (attack.type === 'Grass') {
      pokemonRival.classList.add('grass');
      grassSonido.play();
      setTimeout(() => {
        pokemonRival.classList.remove('grass');
        reslove(true);
      }, 2000);
    }

    if (attack.type === 'Water') {
      pokemonRival.classList.add('water');
      waterSonido.play();
      setTimeout(() => {
        pokemonRival.classList.remove('water');
        reslove(true);
      }, 2000);
    }
  });
};

const animacionTackle = () => {
  const pokemonRival = document.querySelector('.pokemonRival img');
  const pokemonUsuario = document.querySelector('.pokemonUsuario img');

  pokemonRival.classList.add('rival-ataques');
  pokemonUsuario.classList.add('danio');

  setTimeout(() => {
    pokemonRival.classList.remove('rival-ataques');
    pokemonUsuario.classList.remove('danio');
  }, 750);
};

const fireAtaque = (target) => {
  if (target === 'player') {
  } else {
    const pokemonRival = document.querySelector('.pokemonRival');
    const pokemonUsuario = document.querySelector('.pokemonUsuario img');

    pokemonUsuario.classList.add('burns');
  }
};