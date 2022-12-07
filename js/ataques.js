const ataquesUsuario = async (ev) => {
  return new Promise(async (resolve, reject) => {
    let attack = { ...game.pokemonUsuario.attacks[ev.target.getAttribute('data-attack-id')] };

    let crit = false;

    if (attack.crit) {
      const indicador = Math.ceil(Math.random() * attack.crit);
      if (attack.crit === indicador) {
        attack.danio = attack.danio * 1.5;
        crit = true;
      }
    }

    if (
      (attack.type === 'Fire' && game.pokemonRival.type === 'Grass') ||
      (attack.type === 'Water' && game.pokemonRival.type === 'Rock') ||
      (attack.type === 'Grass' && game.pokemonRival.type === 'Water')
    ) {
      crit = true;
      attack.danio = attack.danio * 1.5;
      console.log(attack.danio);
    }

    animacionAtaqueUsuario(attack);
    game.pokemonRival.recibirDanio(game.pokemonRival, attack);

    if (!crit) {
      await game.menu.comentariosMenu(
        `${game.pokemonUsuario.name} uso ${attack.name} e hizo daño por ${attack.danio} hp!`
      );
    } else {
      await game.menu.comentariosMenu(
        `${game.pokemonUsuario.name} uso ${attack.name} y logro un ataque CRITICO por ${attack.danio} hp!`,
        3000
      );
    }

    if (game.pokemonRival.health <= 0) {
      game.pokemonRivalArr.shift();

      if (game.pokemonRivalArr.length === 0 && game.pokemonRival.trainer === 'Bonnie') {
        return game.screen.drawMasterWonScreen();
      }

      if (game.pokemonRivalArr.length === 0) return game.screen.pantallaGanador();
      document.querySelector('.screen').insertAdjacentHTML('afterbegin', "<div class='overlay-fade-in'></div>");

      game.pokemonRival = game.pokemonRivalArr[0];
      game.drawNextTrainerScreen();
      return;
    }

    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

const opponentAttacks = async () => {
  if (game.opponentBag[0].quantity > 0 && game.pokemonRival.healthPercent < 50) {
    if (Math.ceil(Math.random() * 2) === 2) {
      await game.pokemonRival.restoreHealth(game.pokemonRival, game.opponentBag);
      game.menu.drawDefaultMenu(game.pokemonUsuario);
      return;
    }
  }

  const randomNum = Math.floor(Math.random() * game.pokemonRival.attacks.length);
  let attack = { ...game.pokemonRival.attacks[randomNum] };

  attack.danio = Math.floor(attack.danio * (game.pokemonRival.level / 100 + 1));

  let crit = false;

  if (attack.crit) {
    if (attack.crit === Math.ceil(Math.random() * attack.crit)) {
      attack.danio = Math.floor(attack.danio * 1.3);
      crit = true;
    }
  }

  game.pokemonUsuario.recibirDanio(game.pokemonUsuario, attack);

  animacionAtaqueRival(attack);

  if (!crit) {
    await game.menu.comentariosMenu(
      `${game.pokemonRival.name} uso ${attack.name} e hizo daño por ${attack.danio} hp!`
    );
  } else {
    await game.menu.comentariosMenu(
      `${game.pokemonRival.name} uso ${attack.name} e hizo un daño CRITICO por ${attack.danio} hp!`,
      3000
    );
  }

  if (game.pokemonUsuario.health > 0) return game.menu.drawDefaultMenu(game.pokemonUsuario);

  setTimeout(() => {
    game.screen.drawLostScreen();
  }, 500);
};