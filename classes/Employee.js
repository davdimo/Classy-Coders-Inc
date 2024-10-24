class Employee {
    #salary
    #isHired
constructor(name, position, salary) {
    this.name = name
    this.position = position
    this.#salary = salary
    this.#isHired = true
}
getSalary() {
    return this.#salary
}
setSalary(amount) {
    return this.#salary = amount
}
getStatus() {
    return this.#isHired
}
setStatus(command) {
    if (command == "hire") {
        this.#isHired = true
    } else {this.#isHired = false}
}


    
}

module.exports = {
    Employee,
}
