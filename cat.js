function Cat(name, weight) {
    this.name = name,
    this.weight = weight,
    this.stomach = []
}

Cat.prototype.run = () => {
    console.log("Running...")
}

Cat.prototype.sleep = () => {
    console.log("Sleeping...")
}

module.exports = Cat