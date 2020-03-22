names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter) {
        return [].concat(names).filter(e => e.startsWith(letter));
    }

    sort() {
        return [].concat(names).sort();
    }

    get() {
        return [].concat(names);
    }

    getFirst(n) {
        return [].concat(names).slice(0, n);
    }
}

class StudentsWrapper {
    constructor(names) {
        this.names = names;
    }

    startWith(letter) {
        this.names = [].concat(names).filter(e => e.startsWith(letter));
        return this;
    }

    sort() {
        this.names = [].concat(names).sort();
        return this;
    }

    get() {
        this.names = [].concat(names);
        return this;
    }

    getFirst(n) {
        this.names = [].concat(names).slice(0, n);
        return this;
    }

    getArray() {
        return this.names;
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M'));
// console.log(students.startWith('M').sort());
console.log(students.getFirst(4));
// console.log(students.sort().getFirst(4));
// console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());


studentsWrapper = new StudentsWrapper(names);
console.log(studentsWrapper.get().getArray());
console.log(studentsWrapper.sort().getArray());
console.log(studentsWrapper.startWith('P').getArray());
console.log(studentsWrapper.startWith('M').sort().getArray());
console.log(studentsWrapper.sort().getFirst(4).getArray());
console.log(studentsWrapper.startWith('M').sort().getFirst(2).getArray());
console.log(studentsWrapper.get().getArray());

