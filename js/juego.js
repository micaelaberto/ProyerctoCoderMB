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
    this.lowHpSound = new Audio('./sounds/lowhp.wav');
  }

  drawBlackScreen() {
    this.screen.drawBlackScreen();
  }

  drawWelcomeScreen() {
    this.screen.drawWelcomeScreen();
  }

  drawIntroScreen() {
    this.screen.drawIntroScreen();
  }

  drawBattleScreen() {
    this.opponentTrainer = 'Bonnie';
    this.screen.drawBattleScreen();
    this.menu = new Menu();
    this.pokemonUsuario.drawPokemon();
    this.pokemonRival = this.pokemonRivalArr[0];
    this.pokemonRival.drawOpponentPokemon();

    this.menu.drawDefaultMenu(this.pokemonUsuario);
    this.playerStats = new PlayerStats();
    this.opponentStats = new OpponentStats();
    this.playerStats.drawPlayerStats(this.pokemonUsuario);
    this.opponentStats.drawOpponentStats(this.pokemonRival);
  }

  drawNextTrainerScreen() {
    this.screen.drawNextTrainerScreen();
  }

  drawChooseDifficultyScreen() {
    this.screen.drawChooseDifficultyScreen();
  }

  drawChoosePokemonScreen() {
    this.screen.drawChoosePokemonScreen();
  }
}