// const person = {
// name: "Zeisha",
// colour: 1234,
// hello: function() {
//     return "It is a nice day";
//     }
// }

// console.log(person.id);
// console.log(person.hello());


// const person = {
//     name: "Zeisha",
//     id: 1234,
//     hello: function() {
//         return "It is a nice day" +  this.name;
//         }
//     }

// console.log(person.hello());

// person.name = "Christa";
// console.log(person.hello());


// const person = {
//     firstName: 'Zeisha',
//     lastName: 'Ann',
//     greetings: function () {
//         console.log('Hello', this.firstName);
//     }
// };

// person.greetings();

// const persons = {
//     fname: 'Sebin',
//     lname: 'Benjamin',
//     hello: function () {
//       console.log('Hello: ' + this.fname + " " + this.lname);
//     },
//   };
//   function greet() {
//     console.log('Hello: ' + this.fname + " " + this.lname);
//   }
//   persons.hello();
//   fname = "John";
//   lname = "Doe";
//   window.greet();

class Person {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log("Hello", this.name);
    }
}

const Zeisha = new Person ('Zeisha Fremaux');
Zeisha.introduce();

const John = new Person('John Doe');
console.log(John.name);
