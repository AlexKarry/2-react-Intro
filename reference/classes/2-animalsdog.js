class Animal {
  constructor(name) {
    this.name = name;
    this.thirst = 100;
    this.belly = [];
  }
  drink() {
    this.thirst -= 10;
    return this.thirst;
  }
  eat(food) {
    this.belly.push(food);
    return this.belly;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log(`Bark bark my name is ${this.name} and I\'m a dog`);
  }
}

const yorik = new Dog('Yorik', 'Terrier');
yorik.bark();

const rhino = new Animal('Rhiney');

rhino.eat('lilies');
rhino.eat('hunters');
rhino.drink();
rhino;
