const guessNumber = Math.range(0,10);
const userNumber = 0;// e.g user input value

if(guessNumber === userNumber) {
    // e.g setResult 
    console.log('Congrats,your guessed the right number')
    // start a new game e.g reset(userNumber);
}
if (guessNumber > userNumber) {
    console.log('That number you added is much smaller than guess number');
}
