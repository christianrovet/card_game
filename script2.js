class Player {
    constructor(name) {
        this.name = name;
    }
}
class Ninja_cards extends Player {
    constructor(name, gil = 10, power = 0, resilience = 0, cost = 0) {
        super(name);
        this.gil = gil;
        this.power = power;
        this.resilience = resilience;
        this.cost = cost;
    }
    redBeltNinja() {
        this.cost = 3
        if (this.gil >= this.gil - this.cost) {
            this.gil -= this.cost;
            this.power += 3;
            this.resilience += 4;
            console.log(`${this.name} used the Red Belt Ninja Card`);
        } else {
            console.log('Not Enough Gil!');
        }
    }
    blackBeltNinja() {
        this.cost = 4
        if (this.gil >= this.gil - this.cost) {
            this.gil -= this.cost;
            this.power += 5;
            this.resilience += 4;
            console.log(`${this.name} used the Black Belt Ninja Card`);
        } else {
            console.log('Not Enough Gil!');
        }
    }
}
class Ninjas_card extends Ninja_cards {
    constructor(name) {
        super(name, 10, 0, 0, 0)
    }
    hardAlgorithm() {
        this.cost = 2;
        if (this.gil >= this.gil - this.cost) {
            this.gil -= this.cost;
            this.resilience += 3;
            console.log(`${this.name} healed themselves with a Hard Algo and increased their resilience by 3!`)
        } else {
            console.log('Not Enough Gil!');
        }
    }

    unhandledPromiseRejection(target) {
        this.cost = 1;
        if (this.gil >= this.gil - this.cost) {
            this.gil -= this.cost;
            target.resilience -= 2;
            console.log(`${this.name} attacked ${target.name} with Unhandled Promise Rejection attack and decreased their resilience by 2!`)
        } else {
            console.log('Not Enough Gil!');
        }
    }
    pairProgramming() {
        this.cost = 3;
        if (this.gil >= this.gil - this.cost) {
            this.gil -= this.cost;
            this.power += 2;
            console.log(`${this.name} called a friend to Pair Program and increased their attack power by 2!`)
        } else {
            console.log('Not Enough Gil!');
        }
    }
    attack(target) {
        target.res -= this.power;
        console.log(`${this.name} attacked ${target.name} dealing ${this.power} damage!`)
        if (target.resilience > this.power) {
            console.log(`${target.name} has ${target.resilience} health remaining..`)
        } else {
            console.log(`${target.name} has been defeated!`)
        }
    }
}

const player1 = new Ninjas_card("Christian");
console.log(player1);
player1.redBeltNinja();
console.log(player1);

player1.hardAlgorithm();
console.log(player1);

const player2 = new Ninjas_card("Preston");
console.log(player2);
player2.blackBeltNinja();
console.log(player2);

player2.unhandledPromiseRejection(player1);
console.log(player1);

player1.pairProgramming();
console.log(player1);

player1.attack(player2);