class Animal {
  type;
  name;
  age;
  hungry;
  energy;

  static animals = [];

  constructor(type, name, age, hungry) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.energy = 0;
    this.hungry = hungry;
    this.constructor.animals.push({
      name: this.name,
      hungry: this.hungry,
      energy: this.energy,
    });
  }

  eat() {
    console.log(`O ${this.type} chamado ${this.name} está comendo.`);
    this.hungry -= 2;

    this.constructor.updateAnimalsHungry(this.name, this.hungry);
  }

  sleep(hours) {
    console.log(`O ${this.type} chamado ${this.name} está dormindo.`);
    this.energy += hours;
    console.log(`Energia atual: ${this.energy}.`);

    this.constructor.updateAnimalsEnergy(this.name, this.energy);
  }

  static updateAnimalsEnergy(name, updatedEnergy) {
    const animalIndex = this.animals.findIndex((animal) => {
      animal.name === name;
      this.animals[animalIndex].energy = updatedEnergy;
    });

    this.animals[animalIndex].hungry = updatedHungry;
  }

  static needToSleep() {
    this.animals.forEach((element) => {
      if (element.energy <= 5) {
        console.log(`O animal ${element.name} precisa dormir.`);
      }
    });
  }

  static updateAnimalsHungry(name, updatedHungry) {
    const animalIndex = this.animals.findIndex((animal) => {
      animal.name === name;
    });

    this.animals[animalIndex].hungry = updatedHungry;
  }

  static nextToEat() {
    const sortedByHungry = this.animals.sort((a, b) => {
      return b.hungry - a.hungry;
    });

    console.log(
      `O próximo animal para comer é ${sortedByHungry[0].name}. Ele está com ${sortedByHungry[0].hungry} de fome.`
    );
  }
}

const aslam = new Animal("cachorro", "Aslam", 3, 32, 12);

console.log(Animal.animals);

aslam.sleep(3);
