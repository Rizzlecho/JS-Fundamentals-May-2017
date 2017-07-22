function personTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }


    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, course: ${this.course})`;
        }
    }

    // ---------- For Judge

    function extendPrototype(baseClass) {
        baseClass.prototype.species = 'Human';
        baseClass.prototype.toSpeciesString = function () {
            return `I am a ${this.species}. ${this.toString()}`;
        };
    }

    // ----------

    return {Person, Teacher, Student, extendPrototype};
}

let Person = personTeacher().Person;
let extendPrototype = personTeacher().extendPrototype;
let person = new Person("gosho", "gosho1234@abv.bg");

extendPrototype(person);

