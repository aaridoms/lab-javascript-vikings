// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack = () => {
        return this.strength
    }

    receiveDamage = (dmg) => {
        this.health -= dmg
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage = (dmg) => {
        this.health -= dmg

        if (this.health > 0) {
            return `${this.name} has received ${dmg} points of damage`
        }else {
            return `${this.name} has died in act of combat` 
        }
    }

    battleCry = () => {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage = (dmg) => {
        this.health -= dmg

        if (this.health > 0) {
            return `A Saxon has received ${dmg} points of damage`
        }else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addVikings = (Viking) => {
        this.vikingArmy.push(Viking)
    }

    addSaxon = (Saxon) => {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack = () => {
        let randomVikingI = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxonI = Math.floor(Math.random() * this.saxonArmy.length)

        let randomViking = this.vikingArmy[randomVikingI]
        let randomSaxon = this.saxonArmy[randomSaxonI]

        let result = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonI, 1)
        }

        return result
    }

    saxonAttack = () => {
        let randomVikingI = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxonI = Math.floor(Math.random() * this.saxonArmy.length)

        let randomViking = this.vikingArmy[randomVikingI]
        let randomSaxon = this.saxonArmy[randomSaxonI]

        let result = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingI, 1)
        }

        return result
    }

    showStatus = () => {

        if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        }

        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        }

        if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}

// ESTA PROBADO QUE FUNCIONA AUNQUE TODA LA PARTE DE LA CLASE WAR() ME SALE ROJO EN JASMINE


// let viking1 = new Viking("Ruth", 100, 50)
// let viking2 = new Viking("Pedro", 100, 80)
// let viking3 = new Viking("Jorge", 100, 100)
// let viking4 = new Viking("Antonio", 100, 70)

// let saxon1 = new Saxon(100, 70)
// let saxon2 = new Saxon(100, 50)
// let saxon3 = new Saxon(100, 60)
// let saxon4 = new Saxon(100, 70)

// let war1 = new War()
// war1.addSaxon(saxon1, saxon2, saxon3, saxon4)
// war1.addVikings(viking1, viking2, viking3, viking4)
// console.log(war1.vikingAttack())
// console.log(war1.saxonAttack())

// console.log(war1.showStatus())