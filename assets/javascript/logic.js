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

// var winsCounter = $("#wins-counter");
// var word = $("#guessing-word");
var selection = [];
var dummyWord = [];
var guessesRemaining = 10;
var lettersGuessed = [];

function computerSelect() {
    var select = books[Math.floor(Math.random()*books.length)]
    selection.push(select);
    console.log(selection);
    for (i = 0; i < select.length; i++) {
        var dummyChar = select[i].replace(/[a-z]/, "_");
        dummyWord += dummyChar;
    }
    console.log(dummyWord);
    $("#guessing-word").html(dummyWord);
}

document.onkeydown = function userInput() {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var letter = event.key;
        console.log(letter);
        for (i = 0; i < selection.length; i++) {
            var position = selection[i].indexOf(letter);
            // console.log(position);
            if (position < 0) {
                lettersGuessed.push(letter);
                $("#letters-guessed").html(lettersGuessed);
                guessesRemaining--;
                $("#guesses-counter").html(guessesRemaining);
            } 
            else {
                for (i = 0; i < position.length; i++) {
                    dummyWord[position].replace("_", letter);
                    console.log(dummyWord);
                }
            }
        }
    }
} 