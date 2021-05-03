class Card {
    constructor(name, cost, gil) {
        this.name = name;
        this.cost = cost;
        this.gil = gil;
    }
}
class Unit extends Card {
    constructor(name, cost, power = 0, resilience = 0) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    show() {
        console.log(`Name : ${this.name}, Power: ${this.power}, Resilience:  ${this.resilience}`)

    }
    attack(target) {
        target.resilience -= this.power;
        console.log(`${this.name} attacked ${target.name} dealing ${this.power} damage!`)
        if (target.resilience > this.power) {
            console.log(`${target.name} has ${target.resilience} health remaining..`)
        } else {
            console.log(`${target.name} has been defeated!`)
        }
    }
}
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    move(target) {
        if (this.stat == 'resilience') {
            target.resilience += this.magnitude;
            console.log(`${target.name}'s resilience stat has been changed by ${this.magnitude}`)
        } else {
            target.power += this.magnitude;
            console.log(`${target.name}'s power stat has been changed by ${this.magnitude}`)
        }
    }
}

const red_belt_ninja = new Unit('Kelvin', 3, 4, 3)
const black_belt_ninja = new Unit('Christian', 5, 4, 4)

const hardAlgorithm = new Effect('Hard Algorithm', 2, "increase target resilience by 3", "resilience", 3)
const unhandledPromiseRejection = new Effect('Unhandled Promise Rejections', 1, "reduce resilience by 2", "resilience", -2)
const pairProgramming = new Effect('Pair Programming', 3, "increases power by 2", "power", 2)

console.log('Welcome the Red Belt Challnger')
red_belt_ninja.show();
hardAlgorithm.move(red_belt_ninja);
red_belt_ninja.show();
console.log('Welcome the Black Belt Challnger')
black_belt_ninja.show();
unhandledPromiseRejection.move(red_belt_ninja);
pairProgramming.move(red_belt_ninja);
red_belt_ninja.attack(black_belt_ninja);