function guessingNumber(difficulty) {
    let attempts = 0;
    let randomNumber;
    let maxAttempts;
    let range;

    switch (difficulty) {
        case 'easy':
            range = 10;
            maxAttempts = 5;
            randomNumber = Math.floor(Math.random() * 10) + 1;
            console.log(randomNumber);
            break;

        case 'medium':
            range = 100;
            maxAttempts = 7;
            randomNumber = Math.floor(Math.random() * 100) + 1;
            console.log(randomNumber);
            break;

            case 'hard':
                range = 1000;
                maxAttempts = 10;
                randomNumber = Math.floor(Math.random() * 1000) + 1;
                console.log(randomNumber);
                break;

            default:
                console.error("Invalid")    
            
    }

    while(attempts < maxAttempts) {
        let guess = parseInt(prompt(`Guess a number between 1 to ${range} . So you have ${maxAttempts - attempts} attempts left`));
        attempts++;
        if(guess === randomNumber){

            console.log('Congratulationss!!');
            break;
        }
        else if (guess < randomNumber){
            console.log('Too low, please try again');
        }
        else {
            console.log('Too high, please try again');
        }
        console.log(guess);
    }

}



let difficulty = prompt('Select difficulty (easy, medium, hard)').toLowerCase();
// console.log(difficulty);
guessingNumber(difficulty);