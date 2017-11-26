# Hangman-Game

I used html, css, JavaScript and JQuery to make this game.  Overall, I am happy with the way it looks and that it works!  

There were two extremely challenging parts to this game.  One was how to press any key to get started and then use keys to guess letters in the game.  It was very difficult to prevent these two events from interacting with each other until I came up with using boolean to turn them on and off.  
The second challenge was replaceing the blanks in the word with the correct letters.  I attempted to use charAt and indexOf many times, but could not make it work.  Finally I came up with using for and if statements nested within each other to build a new word each time a letter was guessed.  

The remaining programming was more straight forward and only had to work through issues with scope.  

Some of the things I did not get to do were: incorporate sound, make the blanks and letters stationary, simplify my css so that I repeat like properties as little as possible, and use JQuery more.