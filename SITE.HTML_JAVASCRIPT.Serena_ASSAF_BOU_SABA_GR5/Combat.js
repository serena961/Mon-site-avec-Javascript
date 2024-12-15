class Fighter {
    constructor(name, health, attack, accuracy) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.accuracy = accuracy;
    }

  
    canAttack() {
        return Math.random() < this.accuracy;
    }

   
    attackOpponent(opponent) {
        if (this.canAttack()) {
            console.log(`${this.name} hits ${opponent.name} for ${this.attack} damage!`);
            opponent.health -= this.attack;
            if (opponent.health < 0) opponent.health = 0; 
        } else {
            console.log(`${this.name} misses the attack!`);
        }
    }
}


const joker = new Fighter("Joker", 100, 12, 0.65); 
const batman = new Fighter("Batman", 120, 15, 0.75);


console.log("The battle begins between Joker and Batman!");

while (joker.health > 0 && batman.health > 0) {

    joker.attackOpponent(batman);
    if (batman.health === 0) {
        console.log(`${batman.name} has been defeated! ${joker.name} wins the battle!`);
        break;
    }


    batman.attackOpponent(joker);
    if (joker.health === 0) {
        console.log(`${joker.name} has been defeated! ${batman.name} wins the battle!`);
        break;
    }


    console.log(`${joker.name}: ${joker.health} HP, ${batman.name}: ${batman.health} HP`);
}

console.log("The battle is over!");
