class Person {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getPerson() {
        return `${this.name} ${this.surname.toUpperCase()}`
    };

    getInitials() {
        return `${this.name.slice(0, 1)}.${this.surname.slice(0, 1)}.`;
    }
}

let person1 = new Person("Jan", "Nowak");
let person2 = new Person("Krzysztof", "Uliasz");

console.log(person1.getPerson());
console.log(person2.getPerson());
console.log(person1.getInitials());
console.log(person2.getInitials());