// function guessingNumber(difficulty) {
//     let attempts = 0;
//     let randomNumber;
//     let maxAttempts;
//     let range;

//     switch (difficulty) {
//         case 'easy':
//             range = 10;
//             maxAttempts = 5;
//             randomNumber = Math.floor(Math.random() * 10) + 1;
//             console.log(randomNumber);
//             break;

//         case 'medium':
//             range = 100;
//             maxAttempts = 7;
//             randomNumber = Math.floor(Math.random() * 100) + 1;
//             console.log(randomNumber);
//             break;

//             case 'hard':
//                 range = 1000;
//                 maxAttempts = 10;
//                 randomNumber = Math.floor(Math.random() * 1000) + 1;
//                 console.log(randomNumber);
//                 break;

//             default:
//                 console.error("Invalid")

//     }

//     while(attempts < maxAttempts) {
//         let guess = parseInt(prompt(`Guess a number between 1 to ${range} . So you have ${maxAttempts - attempts} attempts left`));
//         attempts++;
//         if(guess === randomNumber){

//             console.log('Congratulationss!!');
//             break;
//         }
//         else if (guess < randomNumber){
//             console.log('Too low, please try again');
//         }
//         else {
//             console.log('Too high, please try again');
//         }
//         console.log(guess);
//     }

// }

// let difficulty = prompt('Select difficulty (easy, medium, hard)').toLowerCase();
// // console.log(difficulty);
// guessingNumber(difficulty);

const min = 1;
const max = 100;
const result = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guessing;
let run = true;

while (run) {
  guessing = window.prompt(`Guess a number between ${min} - ${max}`);
  guessing = Number(guessing);

  if (isNaN(guessing)) {
    window.alert(`Please enter a valid number`);
  } else if (guessing < min || guessing > max) {
    window.alert(`Please enter a valid number`);
}
else {
    attempts ++
    if(guessing < result){
        window.alert(`Too low `);
    }
    else if (guessing > result){
        
        window.alert(`Too high `);
    }
    else {
        
        window.alert(`Correct!! the answer is ${result} and you have ${attempts} completed`);
        run = false;
    }
  }

}
