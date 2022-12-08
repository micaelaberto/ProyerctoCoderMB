class PlayerStats {
  constructor() {
    this.playerStats = playerStatsBox;
    this.playerStatsTarget = document.querySelector('.player--stats-box');
    this.playerStatsTarget.innerHTML = playerStatsBox;
  }

  usuarioStats() {
    game.sonidoBajo.pause();
    game.sonidoBajo.volume = 0.05;

    document.querySelector('.player--pokemon-name').innerHTML = game.pokemonUsuario.nombre;
    document.querySelector('.player--pokemon-health').innerHTML = game.pokemonUsuario.health;
    document.querySelector('.player--pokemon-level').innerHTML = game.pokemonUsuario.level;
    document.querySelector('.player--pokemon-max-health').innerHTML = game.pokemonUsuario.maxHealth;

    const healthBar = document.querySelector('.player--pokemon-health-bar');
    healthBar.style.width = `${game.pokemonUsuario.healthPercent}px`;
    healthBar.setAttribute('aria-valuenow', game.pokemonUsuario.healthPercent);

    if (game.pokemonUsuario.healthPercent > 50) {
      healthBar.style.background = `#25b527`;
    } else if (game.pokemonUsuario.healthPercent > 25) {
      healthBar.style.background = `#dad30c`;
    } else {
      game.sonidoBajo.loop = true;
      game.sonidoBajo.play();
      healthBar.style.background = `#e03c3c`;
    }
  }

  usuarioVacio() {
    this.playerStatsTarget.innerHTML = '';
  }
}

const playerStatsBox = `
<div class="player--stats-wrapper">
  <p class="player--pokemon-name"></p>
  <p class="player--pokemon-health"></p>
  <p class="player--pokemon-level"></p>
  <p class="player--pokemon-health-bar" role="progressbar"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="80"></p>
  <p class="player--pokemon-max-health"></p>
</div>
`;

class OponenteEstadisticas {
  constructor() {
    this.OponenteEstadisticas = boxEstadisticasRival;
    this.opponentStatsTarget = document.querySelector('.opponent--stats-box');
    this.opponentStatsTarget.innerHTML = boxEstadisticasRival;
  }

  statsOponente() {
    document.querySelector('.opponent--pokemon-name').innerHTML = game.pokemonRival.nombre;
    document.querySelector('.opponent--pokemon-level').innerHTML = game.pokemonRival.level;

    const healthBar = document.querySelector('.opponent--pokemon-health-bar');
    healthBar.style.width = `${game.pokemonRival.healthPercent}px`;
    healthBar.setAttribute('aria-valuenow', game.pokemonRival.healthPercent);

    if (game.pokemonRival.healthPercent > 50) {
      healthBar.style.background = `#25b527`;
    } else if (game.pokemonRival.healthPercent > 25) {
      healthBar.style.background = `#dad30c`;
    } else {
      healthBar.style.background = `#e03c3c`;
    }
  }
}

const boxEstadisticasRival = `
  <div class="opponent--stats-wrapper">
    <p class="opponent--pokemon-name"></p>
    <p class="opponent--pokemon-level"></p>
    <p class="opponent--pokemon-health-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="80"></p>
  </div>

`;