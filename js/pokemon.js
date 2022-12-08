class Pokemon {
  constructor(trainer) {
    this.trainer = trainer;
  }

  recibirDanio(pokemon, attack) {
    pokemon.health = pokemon.health - attack.danio;
    if (pokemon.health <= 0) pokemon.health = 0;
    pokemon.healthPercent = (pokemon.health / pokemon.maxHealth) * 80;
    game.oponenteEstadisticas.statsOponente(game.pokemonRival);
    game.playerStats.usuarioStats(game.pokemonUsuario);
  }

  async restoreHealth(pokemon, bag) {
    return new Promise(async (resolve, reject) => {
      const potion = bag[0];
      if (potion.quantity === 0) {
        await game.menu.comentariosMenu(`Sin pociones`, 2000);
        return game.menu.valorMenuDef(game.pokemonUsuario);
      }

      potion.quantity--;
      pokemon.health = pokemon.health + potion.energy;
      if (pokemon.health >= pokemon.maxHealth) pokemon.health = pokemon.maxHealth;

      const healSound = new Audio('./sounds/heal.wav');
      healSound.volume = 0.2;
      healSound.play();
      pokemon.healthPercent = (pokemon.health / pokemon.maxHealth) * 80;
      game.oponenteEstadisticas.statsOponente();
      game.playerStats.usuarioStats();
      await game.menu.comentariosMenu(
        `${pokemon.trainer} uso pociones y se curo ${potion.energy} hp de ${pokemon.nombre}`
      );
      resolve(true);
    });
  }

  updateStats() {}

  drawPokemon() {
    const screen = document.querySelector('.screen');

    const elementString = `
        <div class="pokemonUsuario" style="width: 100px; height: 100px; left: ${this.x}px; bottom: ${this.y}px;"">  
          <img src="./imagenes/${this.img}" style="width: ${this.width}px;" alt="">
        </div>
`;
    screen.insertAdjacentHTML('beforeend', elementString);
  }

  pokemonOponente() {
    const screen = document.querySelector('.screen');
    const elementString = `
        <div class="pokemonRival" style="width: 100px; height: 100px; left: ${this.x}px; bottom: ${this.y}px;"">  
          <img src="./imagenes/${this.img}" style="width: ${this.width}px;" alt="">
        </div>
`;
    screen.insertAdjacentHTML('beforeend', elementString);
  }
}

class Charmander extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Charmander';
    this.attacks = [
      { nombre: 'Tackle', func: 'attack', danio: 30, type: 'Normal', crit: 2 },
      { nombre: 'Ember', func: 'attack', danio: 40, type: 'Fire', crit: 2, image: 'ember.gif', sound: 'ember.wav' },
      { nombre: 'Scratch', func: 'attack', danio: 30, type: 'Normal', crit: 5, image: 'slash.gif' },
      { nombre: 'Atrás', func: 'button', type: 'Button' },
    ];
    this.type = 'Fire';
    this.health = 120;
    this.maxHealth = 120;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 15;
    this.width = 100;
    this.x = 65;
    this.y = 75;
    this.img = 'charmander_back.webp';
  }
}

class Squirtle extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Squirtle';
    this.attacks = [
      { nombre: 'Tackle', func: 'attack', danio: 30, type: 'Normal', crit: 2 },
      { nombre: 'Scratch', func: 'attack', danio: 30, type: 'Normal', crit: 4, image: 'slash.gif' },
      { nombre: 'Waterball', func: 'attack', danio: 40, type: 'Water', crit: 3, image: 'water.gif' },
      { nombre: 'Atrás', func: 'button', type: 'Button' },
    ];
    this.type = 'Water';
    this.health = 120;
    this.maxHealth = 120;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 15;
    this.width = 100;
    this.x = 65;
    this.y = 75;
    this.img = 'squirtle_back.gif';
  }
}

class Bulbasaur extends Pokemon {
  constructor(trainer) {
    super(trainer);

    this.nombre = 'Bulbasaur';
    this.attacks = [
      { nombre: 'Tackle', func: 'attack', danio: 30, type: 'Normal', crit: 2 },
      { nombre: 'Scratch', func: 'attack', danio: 40, type: 'Normal', crit: 3, image: 'slash.gif' },
      { nombre: 'Seed Bomb', func: 'attack', danio: 40, type: 'Grass', crit: 4, image: 'leaf_attack.gif' },
      { nombre: 'Atrás', func: 'button', type: 'Button' },
    ];
    this.type = 'Grass';
    this.health = 120;
    this.maxHealth = 120;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 15;
    this.width = 80;
    this.x = 95;
    this.y = 65;
    this.img = 'bulbasaur_back.webp';
  }
}

class Jigglypuff extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Jigglypuff';
    this.attacks = [
      { nombre: 'Tackle', danio: 20, type: 'Normal' },
      { nombre: 'Tackle', danio: 30, type: 'Normal' },
      { nombre: 'Pound', danio: 40, type: 'Normal' },
      { nombre: 'Slam', danio: 50, type: 'Normal' },
    ];
    this.type = 'Normal';
    this.health = 100;
    this.maxHealth = 100;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 11;
    this.width = 60;
    this.x = 295;
    this.y = 130;
    this.img = 'jigglypuff.gif';
  }
}

class Rattata extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Rattata';
    this.attacks = [
      { nombre: 'Tackle', danio: 10, type: 'Normal' },
      { nombre: 'Tackle', danio: 20, type: 'Normal' },
      { nombre: 'Bite', danio: 30, type: 'Normal' },
      { nombre: 'Crunch', danio: 40, type: 'Normal' },
    ];
    this.type = 'Normal';
    this.health = 100;
    this.maxHealth = 100;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 10;
    this.width = 50;
    this.x = 299;
    this.y = 138;

    this.img = 'rattata.gif';
  }
}

class Geodude extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Geodude';
    this.attacks = [
      { nombre: 'Sand', danio: 10, type: 'Normal' },
      { nombre: 'Headnut', danio: 20, type: 'Normal' },
      { nombre: 'Tackle', danio: 30, type: 'Normal' },
      { nombre: 'Explosion', danio: 40, type: 'Normal' },
    ];
    this.type = 'Rock';
    this.health = 100;
    this.maxHealth = 100;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 12;
    this.width = 100;
    this.x = 270;
    this.y = 128;
    this.img = 'geodude.gif';
  }
}

class Alakazam extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Alakazam';
    this.attacks = [
      { nombre: 'Kinesis', danio: 10, type: 'Normal', crit: 3 },
      { nombre: 'Disable', danio: 20, type: 'Normal', crit: 3 },
      { nombre: 'Kinesis', danio: 30, type: 'Normal', crit: 3 },
      { nombre: 'Psychic', danio: 40, type: 'Animated', crit: 3 },
    ];
    this.type = 'Psy';
    this.health = 200;
    this.maxHealth = 200;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 20;
    this.width = 100;
    this.x = 280;
    this.y = 168;
    this.img = 'alakazam_front.gif';
  }
}

class Gengar extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Gengar';
    this.attacks = [
      { nombre: 'Curse', danio: 10, type: 'Normal', crit: 3 },
      { nombre: 'Hex', danio: 20, type: 'Normal', crit: 3 },
      { nombre: 'Lick', danio: 30, type: 'Normal', crit: 3 },
      { nombre: 'Pulse', danio: 40, type: 'Animated', crit: 3 },
    ];
    this.type = 'Psy';
    this.health = 200;
    this.maxHealth = 200;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 15;
    this.width = 100;
    this.x = 284;
    this.y = 161;
    this.img = 'gengar.gif';
  }
}

class Aerodactyl extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Aerodactyl';
    this.attacks = [
      { nombre: 'Bite', danio: 10, type: 'Normal', crit: 3 },
      { nombre: 'Slash', danio: 20, type: 'Normal', crit: 3 },
      { nombre: 'Crunch', danio: 30, type: 'Normal', crit: 3 },
      { nombre: 'Psybeam', danio: 40, type: 'Animated', crit: 3 },
    ];
    this.type = 'Normal';
    this.health = 200;
    this.maxHealth = 200;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 20;
    this.width = 200;
    this.x = 220;
    this.y = 215;
    this.img = 'aerodactyl.gif';
  }
}

class Gyarados extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Gyarados';
    this.attacks = [
      { nombre: 'Bite', danio: 10, type: 'Normal', crit: 3 },
      { nombre: 'Slash', danio: 20, type: 'Normal', crit: 3 },
      { nombre: 'Crunch', danio: 30, type: 'Normal', crit: 3 },
      { nombre: 'Aqua Tail', danio: 40, type: 'Animated', crit: 3 },
    ];
    this.type = 'Water';
    this.health = 200;
    this.maxHealth = 200;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 21;
    this.width = 200;
    this.x = 220;
    this.y = 215;
    this.img = 'gyarados.gif';
  }
}

class Poliwrath extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Poliwrath';
    this.attacks = [
      { nombre: 'Bite', danio: 10, type: 'Normal', crit: 3 },
      { nombre: 'Slash', danio: 20, type: 'Normal', crit: 3 },
      { nombre: 'Crunch', danio: 30, type: 'Normal', crit: 3 },
      { nombre: 'Aqua Tail', danio: 40, type: 'Animated', crit: 3 },
    ];
    this.type = 'Water';
    this.health = 200;
    this.maxHealth = 200;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 21;
    this.width = 125;
    this.x = 253;
    this.y = 181;

    this.img = 'poliwrath.gif';
  }
}

class Blastoise extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Blastoise';
    this.attacks = [
      { nombre: 'Tail', danio: 10, type: 'Normal', crit: 3 },
      { nombre: 'Headnut', danio: 20, type: 'Normal', crit: 3 },
      { nombre: 'Bite', danio: 30, type: 'Normal', crit: 3 },
      { nombre: 'Blast', danio: 40, type: 'Animated', crit: 3 },
    ];
    this.type = 'Water';
    this.health = 200;
    this.maxHealth = 200;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 35;
    this.width = 120;
    this.x = 265;
    this.y = 178;

    this.img = 'blastoise.gif';
  }
}

class Venusaur extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Venusaur';
    this.attacks = [
      { nombre: 'Tail', danio: 10, type: 'Normal', crit: 3 },
      { nombre: 'Headnut', danio: 20, type: 'Normal', crit: 3 },
      { nombre: 'Bite', danio: 30, type: 'Normal', crit: 3 },
      { nombre: 'Solar', danio: 40, type: 'Animated', crit: 3 },
    ];
    this.type = 'Grass';
    this.health = 200;
    this.maxHealth = 200;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 30;
    this.width = 120;
    this.x = 265;
    this.y = 178;

    this.img = 'venusaur.gif';
  }
}

class Mewtu extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Mewtu';
    this.attacks = [
      { nombre: 'Tackle', danio: 10, type: 'Normal', crit: 3 },
      { nombre: 'Disable', danio: 20, type: 'Normal', crit: 3 },
      { nombre: 'Swift', danio: 30, type: 'Normal', crit: 3 },
      { nombre: 'Amnesia', danio: 40, type: 'Animated', crit: 3 },
    ];
    this.type = 'Psy';
    this.health = 250;
    this.maxHealth = 250;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 33;
    this.width = 125;
    this.x = 295;
    this.y = 177;
    this.img = 'mewtu_front.gif';
  }
}

class Glitch extends Pokemon {
  constructor(trainer) {
    super(trainer);
    this.nombre = 'Glitch';
    this.attacks = [
      { nombre: 'Tackle', danio: 10, type: 'Normal', crit: 2 },
      { nombre: 'Swift', danio: 20, type: 'Normal', crit: 2 },
      { nombre: 'Ironhacker', danio: 40, type: 'Animated', crit: 2 },
      { nombre: 'Ironhacker', danio: 40, type: 'Animated', crit: 2 },
    ];
    this.type = 'psy';
    this.health = 120;
    this.maxHealth = 120;
    this.healthPercent = (this.health / this.maxHealth) * 80;
    this.level = 40;
    this.width = 100;
    this.x = 265;
    this.y = 208;
    this.img = 'glitch.gif';
  }
}