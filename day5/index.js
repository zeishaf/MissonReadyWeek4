// class User {
//     constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     }
//     greet() {
//         console.log("Hello",this.firstName, this.lastName);
//     }
// }

// const user1 = new User("Jon", "Snow")
// console.log(user1);
// console.log(user1.firstName, user1.lastName);

// const user2 = new User("Ned", "Stark");
// console.log(user2);
// console.log(user2.firstName, user2.lastName);

// user1.greet();

// // Getter
// const person = {
//     firstName: 'Sebin',
//     lastName: 'Benjamin',
//     get name() {
//       console.log('A getter for "name" is just called');
//       return this.firstName + ' ' + this.lastName;
//     },
//   };
//   console.log(person.name);
//   person.name = "John";

// // Setter 
// const person = {
//     firstName: 'Sebin',
//     lastName: 'Benjamin',
//     get name() {
//       return this.firstName + ' ' + this.lastName;
//     },
//     set newFirstName(fName);
    
//   };
//   console.log(person.name);
//   person.name = "John";

// Exercise 1

bankAccount = {
    bankCode: '01',
    branch: '1234',
    account: '1234567',
    suffix: '01',
    get accountNo() {
    return (
    this.bankCode + '-' + this.branch + '-' + this.account + '-' + this.suffix
    );
    },
    set newSuffix(suffix) {
    this.suffix = suffix;
    },
    
    };
    console.log(bankAccount.accountNo);