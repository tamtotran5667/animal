function Cat(name, weight) {
    this.name = name,
    this.weight = weight,
    this.stomach = []
}

Cat.prototype.run = () => {
    console.log("Running...")
}

module.exports = Cat