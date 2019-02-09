var books = [
    "It",
    "Cujo",
    "Thinner",
    "Under the Dome",
    "Pet Semetary",
    "The Shining",
    "Carrie",
    "The Green Mile",
    "The Gunslayer",
].map(v => v.toLowerCase());

var hints = [
    "Many viewers developed coulrophobia after watching this movie",
    "Apparently all dogs do NOT go to heaven.",
     "In this story, a man desperate to make a change learns the lesson 'Be careful what you wish for'",
     "If you feel claustrophobic in your life, try living in this town.",
     "figure out something for Pet Semetary",
    "All work and no play is a recipe for cabin fever",
    "Be careful of that weirdo in math class. She's more than what she seems.",
    "If you're ever incarcerated, let's hope this main character is your cell mate.",
    "This story takes place in a world very similar to our own, but with some major twists."
]

var winsCounter = 0;
// var word = $("#guessing-word");
var selection = [];
var dummyWord = [];
var guessesRemaining = 10;
var lettersGuessed = [];
var gamePlay = true;
// var positions = [];

function computerSelect() {
    if (gamePlay) {
        var select = books[Math.floor(Math.random()*books.length)];
        selection.push(select);
        console.log(selection);
        for (i = 0; i < select.length; i++) {
            var dummyChar = select[i].replace(/[a-z]/, "_");
            dummyWord += dummyChar;
        }
        // console.log(dummyWord);
        display();
    }
}

function display() {
    $("#wins-counter").html(winsCounter);
    $("#guessing-word").html(dummyWord);
    $("#guesses-counter").html(guessesRemaining);
    $("#letters-guessed").html(lettersGuessed);
}

document.onkeydown = function userInput() {
    gamePlay = false;
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var letter = event.key;
        console.log(letter);
        var positions = []
        for (var i = 0; i < selection.length; i++) {
            var indexNumber = selection[i].indexOf(letter);
            if (indexNumber < 0) {
                lettersGuessed.push(letter);
                // $("#letters-guessed").html(lettersGuessed);
                guessesRemaining--;
                winLose();
                // $("#guesses-counter").html(guessesRemaining);
                display();
            }
            while (indexNumber > -1) {
                positions.push(indexNumber);
                indexNumber = selection[i].indexOf(letter, indexNumber +1); 
            }
        }
        console.log(positions);
    }
    for (var i = 0; i < positions.length; i++) {
        dummyWord[positions[i]] = letter;
        dummyWord.push;
        display();
    }
    console.log(dummyWord);
    // // $("#guessing-word").html(dummyWord);
    // console.log(positions);
}

function winLose() {
    if (dummyWord.indexOf("_") < 0) {
        alert("Yay!! Great job!");
        winsCounter++;
    }
    else if (guessesRemaining < 1) {
        alert("Sorry! No more guesses. You lose :(");
    }
    gameplay = true;
    computerSelect();
    guessesRemaining = 10;
    lettersGuessed = [];
}