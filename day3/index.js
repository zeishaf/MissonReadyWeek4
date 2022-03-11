// Compare function tells you if you need to swap values

// function compare(a,b) {

// }

// const characters = [
//     { name: 'Tom Sawyer', birthdate: 1876, death: 1945 },
//     { name: 'Bart Simpson', birthdate: 1989, death: 2017 },
//     { name: 'Peter Griffin', birthdate: 1999, death: 2014 },
//   ];

//   const sortByDoB =(characters) => {
//       return characters.sort(
//           (a, b) => {
//               return a.birthdate - b.birthdate
//           }
//       );
//   }
//   console.log(sortByDoB(characters));

// const sortByDoB = (characters) => {
//     return characters.sort(
//         (a, b) => {
//           return a.birthdate - b.birthdate
//           // For - oldest return b.birthdate - b.birthdate
//         }
//     );
//   };

//   const sortByDoB = (charsArray) => {
//     return charsArray.sort((a, b) => a.birthdate - b.birthdate);
//   };

//   const charsWithAge = characters.map((character) => {
//       character.age = character.death - character.birthdate
//       return character;
//   })

//   const sortByDeathYear = (charsArray) => {
//     return charsArray.sort((a, b) => a.death - b.death);
//   };

//   sortByName = (charsArray) => {
//       return charsArray.sort((a,b) => a.name.localCompare(b.name));
//   };
//   console.log(sortByName(characters));

//   (a, b) => a.name.localeCompare(b.name)


// Filter Method 

//   const tasks = [ 
//       {
//       "userId": 1,
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 2,
//       "title": "quis ut nam facilis et officia qui",
//       "completed": true
//     },
//     {
//       "userId": 1,
//       "id": 3,
//       "title": "fugiat veniam minus",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 4,
//       "title": "et porro tempora",
//       "completed": true
//     },
//     {
//       "userId": 1,
//       "id": 5,
//       "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//       "completed": false
//     }
// //   ]
// //   const completedTasks = tasks.filter((task)) => );
//   task.completed === true)
//   console.log(completedTasks)

// // Version 2
// const completedTasks = tasks.filter(task => task.completed === true);
// // Version 3
// const completedTasks = tasks.filter(task => task.completed);

const nums = ['0','1','2','3','4','5', '6', '7', '8','9'];

const removeNums = (nums) => {
    nums.splice(3,5);
}

removeNums(nums);
console.log(nums)
