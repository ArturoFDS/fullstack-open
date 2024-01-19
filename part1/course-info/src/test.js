class Character {
    constructor(name, powerLevel, age) {
        this.name = name
        this.powerLevel = powerLevel
        this.age = age
    }

    greet() {
        console.log('Hello, welcome to the hood ' + this.name)
    }
}

const julian = new Character({
    name: 'Julian Yeah',
    powerLevel: '202,030',
    age: '400,000'
})

julian.greet()