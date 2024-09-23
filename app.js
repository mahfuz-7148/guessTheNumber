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

}



let difficulty = prompt('Select difficulty (easy, medium, hard)').toLowerCase();
// console.log(difficulty);
guessingNumber(difficulty);