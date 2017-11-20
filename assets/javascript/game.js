
 $(document).ready(function() {


        var animal = [tiger, giraffe, zebra, lion, monkey, turkey, jaguar, bear, squirrel, deer, bird, snake, raccoon, kangaroo, moose, fox, leopard, owl, elephant, rabbit];


        var word = "";
        var blanks = "";
        var userGuess;
        var guessCorrect = [];
        var guessIncorrect = [];
        var timesGuess = 10;
        var keypress = false;
        var newWord = [];
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var random;
        var guessComplete = 0;
        var guessedWord = "";
        var wins = 0;


        document.onkeyup = function(event) {
            //still need to figure out how to prevent repeating words

            //puts blanks for 1st word
            if (keypress === false) {
                random = Math.floor(Math.random() * (animal.length - 1));
                guessedWord = animal[random].name;

                for (var i = 0; i < animal[random].name.length; i++) {
                    blanks = blanks + "_";
                    $("#blanks").text(blanks);
                    $("#timesGuess").text(timesGuess);
                    keypress = true;
                }
            }
        }

        document.onkeypress = function(event) {


            if (keypress === true) {
                userGuess = event.key.toLowerCase();

                //can i keep the letters and blanks from moving around
                //need to group class and ids with similar styles

                //this alerts user if something other than a letter is pressed
                if (letters.indexOf(userGuess) < 0) {
                    alert("You must select a letter");
                }
                //this checks the correctly and incorrectly guessed arrays to ensure that the user has not 
                //already selected the pressed letter.  if letter has already been selected, it will not 
                //count toward the guess.
                else if ((guessCorrect.indexOf(userGuess) > -1) || (guessIncorrect.indexOf(userGuess) > -1)) {
                    alert("This letter has already been selected")
                } else {

                    // checks to see if letter guessed is in word and pushes letter to either 
                    //a correctly guessedor incorrectly guessed array
                    if (animal[random].name.indexOf(userGuess) > -1) {
                        guessCorrect.push(userGuess);
                    } else {
                        guessIncorrect.push(userGuess);
                        timesGuess--;
                    }

                }
                // checks to see if each letter in the current word has been guessed or not.  
                //if the letter has not been guessed it checks to see if the user input matches.  
                //if so, it replaces the blank with a letter, if not it keeps the blank.  
                //if there is already a guessed letter, it keeps the guessed letter.
                for (var i = 0; i < animal[random].name.length; i++) {


                    if (letters.indexOf(blanks.charAt(i)) > -1) {
                        newWord = newWord + blanks.charAt(i);
                    } else {
                        if (userGuess === animal[random].name.charAt(i)) {
                            newWord = newWord + userGuess;
                            guessComplete++;
                        } else {
                            newWord = newWord + "_";
                        }
                    }
                }

                //this keeps track of wins and resets variables to start new game
                if (guessComplete === animal[random].name.length) {
                    $("#status").text("YOU WIN");
                    $("#guessedWord").text(animal[random].name);
                    $("#picture").html(animal[random].pic);
                    wins++;
                    newWord = "";
                    timesGuess = 10;
                    guessCorrect = [];
                    guessIncorrect = [];
                    keypress = false;
                    guessComplete = 0;
                    $("#wins").text(wins);
                } 
                //this resets variable to start a new game
                else if (timesGuess < 1) {
                    $("#status").text("YOU LOSE");
                    $("#guessedWord").text(animal[random].name);
                    $("#picture").html(animal[random].pic);
                    newWord = "";
                    timesGuess = 10;
                    guessCorrect = [];
                    guessIncorrect = [];
                    keypress = false;
                    guessComplete = 0;
                }

            }


            blanks = newWord;
            newWord = "";
            $("#blanks").text(blanks);
            $("#timesGuess").text(timesGuess);
            $("#guessIncorrect").text(guessIncorrect);

        }

    })


tiger = {
	name: "tiger",
	pic: "<img src='./assets/images/tiger.png' />",
},

giraffe = {
	name: "giraffe",
	pic: "<img src='./assets/images/giraffe.png' />",
},

zebra = {
	name: "zebra",
	pic: "<img src='./assets/images/zebra.png' />",
},

lion = {
	name: "lion",
	pic: "<img src='./assets/images/lion.png' />",
},

monkey = {
	name: "monkey",
	pic: "<img src='./assets/images/monkey.jpg' />",
},

turkey = {
	name: "turkey",
	pic: "<img src='./assets/images/turkey.jpg' />",
},

jaguar = {
	name: "jaguar",
	pic: "<img src='./assets/images/jaguar.gif' />",
},

bear = {
	name: "bear",
	pic: "<img src='./assets/images/bear.jpg' />",
},

squirrel = {
	name: "squirrel",
	pic: "<img src='./assets/images/squirrel.jpg' />",
},

deer = {
	name: "deer",
	pic: "<img src='./assets/images/deer.png' />",
},

bird = {
	name: "bird",
	pic: "<img src='./assets/images/bird.png' />",
},

snake = {
	name: "snake",
	pic: "<img src='./assets/images/snake.gif' />",
},

raccoon = {
	name: "racoon",
	pic: "<img src='./assets/images/raccoon.gif' />",
},

kangaroo = {
	name: "kangaroo",
	pic: "<img src='./assets/images/kangaroo.png' />",
},

moose = {
	name: "moose",
	pic: "<img src='./assets/images/moose.png' />",
},

fox = {
	name: "fox",
	pic: "<img src='./assets/images/fox.png' />",
},

leopard = {
	name: "leopard",
	pic: "<img src='./assets/images/leopard.png' />",
},

owl = {
	name: "owl",
	pic: "<img src='./assets/images/owl.jpg' />",
},

elephant = {
	name: "elephant",
	pic: "<img src='./assets/images/elephant.jpg' />",
},

rabbit = {
	name: "rabbit",
	pic: "<img src='./assets/images/rabbit.gif' />",
}
