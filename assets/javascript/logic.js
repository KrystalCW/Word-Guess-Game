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
var selection = [];
var dummyWord = [];
var guessesRemaining = 10;
var lettersGuessed = [];

function computerSelect() {
    var select = books[Math.floor(Math.random()*books.length)];
    selection.push(select);
    console.log("guessing word", selection);
    for (i = 0; i < select.length; i++) {
        var dummyChar = select[i].replace(/[a-z]/, "_");
        dummyWord += dummyChar;
    }
}

function display() {
    // $("#wins-counter").html(winsCounter);
    $("#guessing-word").html(dummyWord);
}

document.onkeydown = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var letter = event.key;
        console.log(letter);
        var positions = [];
        for (var i = 0; i < selection.length; i++) {
            var indexNumber = selection[i].indexOf(letter);
            if (indexNumber === -1) {
                lettersGuessed.push(letter);
                $("#letters-guessed").html(lettersGuessed);
                console.log("check letters array", lettersGuessed);
                guessesRemaining = guessesRemaining - 1;
                winLose();
                $("#guesses-counter").html(guessesRemaining);
            }
            while (indexNumber > -1) {
                positions.push(indexNumber);
                indexNumber = selection[i].indexOf(letter, indexNumber +1); 
            }
        }
        console.log(positions);
    }
    for (var i = 0; i < positions.length; i++) {
         dummyWord = setCharAt(dummyWord,positions[i],letter);
        $("#guessing-word").html(dummyWord);
        winLose();
    }
    console.log(dummyWord);
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function winLose() {
    if (dummyWord.indexOf("_") < 0) {
        alert("Yay!! Great job!");
        winsCounter++;
        $("#wins-counter").html(winsCounter);
        dummyWord = "";
        resetScreen();
    }
    else if (guessesRemaining < 1) {
        alert("Sorry! No more guesses. You lose :(");
        resetScreen();
    }
}

function resetScreen() {
    computerSelect();
    guessesRemaining = 10;
    lettersGuessed = [];
    $("#guesses-counter").html(guessesRemaining);
    $("#letters-guessed").html(lettersGuessed);
    $("#guessing-word").html(dummyWord);
}

computerSelect();
display();