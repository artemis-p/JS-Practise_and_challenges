// var flavours = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"];
// var flavourOfTheDay = flavours[3];
// console.log(flavourOfTheDay);

// flavours[3] = "strawberry";
// console.log(flavours);

// var numFlavours = flavours.length;
// console.log(numFlavours);

// var last = flavours.length - 1;
// var recent = flavours[last];
// console.log(recent);


// var products = ["Icy Mint", "Bubblegum"];
// var hasBubbleGum = [false, true];
// var i = 0;

// while (i < hasBubbleGum.length) {
//     if (hasBubbleGum[i]){
//         console.log(products[i] + " contains bubblegum");
//     }
//     i += 1;
// }


// Creating new arrays

// var genres = ["80s", "90s", "Electronic","Folk"];
// // or create an empty array and append new items in it
// var genres = [];
// genres[0] = "80s";
// genres[1] = "90s";
// // or add them by using the push method
// genres.push("folk");
// console.log(genres);


var scores = [60, 50, 69, 58, 54, 54, 58, 50, 52, 54, 48, 69];


function printAndGetHighScore() {
    var highScore = 0;
    var output;
    for (var i = 0; i < scores.length; i++) {
        output = ("Bubble solution #" + i + " score: " + scores[i]);
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestResults(scores, highScore) { 
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push("#" + [i]);
        }
    }
    return bestSolutions;
}


var highScore = printAndGetHighScore(scores);
console.log("Bubble tests: " + scores.length);  
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with highest score: " + bestSolutions);
