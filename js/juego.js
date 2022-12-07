class Game {
  constructor() {
    this.device = new Device();
    this.screen = new Screen();
    this.pokemonRivalArr;
    this.playerBag;
    this.opponentBag;
    this.sound;
    this.audioLevel = 0.2;
    this.battleSound = new Audio('./sounds/battle_trainer.mp3');
    this.sonidoBajo = new Audio('./sounds/lowhp.wav');
  }

  pantallaNegra() {
    this.screen.pantallaNegra();
  }

  pantallaBienvenida() {
    this.screen.pantallaBienvenida();
  }

  pantallaIntro() {
    this.screen.pantallaIntro();
  }

  pantallaBatalla() {
    this.opponentTrainer = 'Bonnie';
    this.screen.pantallaBatalla();
    this.menu = new Menu();
    this.pokemonUsuario.drawPokemon();
    this.pokemonRival = this.pokemonRivalArr[0];
    this.pokemonRival.pokemonOponente();

    this.menu.valorMenuDef(this.pokemonUsuario);
    this.playerStats = new PlayerStats();
    this.oponenteEstadisticas = new OponenteEstadisticas();
    this.playerStats.usuarioStats(this.pokemonUsuario);
    this.oponenteEstadisticas.statsOponente(this.pokemonRival);
  }

  pantallaProxEntrenador() {
    this.screen.pantallaProxEntrenador();
  }

  pantallaEleccionDificultad() {
    this.screen.pantallaEleccionDificultad();
  }

  pantallaEleccionPokemon() {
    this.screen.pantallaEleccionPokemon();
  }
}