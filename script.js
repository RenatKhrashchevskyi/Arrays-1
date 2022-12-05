// // last element of array

// let product = ['Choo Choo Chocolate', 'Icy Mint', 'Cake Batter', 'Bubblegum'];
// let last = product.length - 1;
// console.log(product[last]);

// // random phrases

// function makePhrases() {
//     let words1 = ['24/7', 'multi-tier', '30,000 foot', 'B-to-B', 'win-win'];
//     let words2 = ['empowered', 'value-adde', 'oriented', 'focused', 'aligned'];
//     let words3 = ['process', 'solution', 'tipping-point', 'strategy', 'vision'];

//     let rand1 = Math.floor(Math.random() * words1.length);
//     let rand2 = Math.floor(Math.random() * words2.length);
//     let rand3 = Math.floor(Math.random() * words3.length);

//     let phrase = words1[rand1] + ' ' + words2[rand2] + ' ' + words3[rand3];
//     console.log(phrase);
// }

// makePhrases();



// //sort through the elements of an array
// //while loop

// let scores = [
//     60, 50, 60, 58, 54, 54, 58, 50, 
//     52, 54, 48, 69, 34, 55, 51, 52, 
//     44, 51, 69, 64, 66, 55, 52, 61, 
//     46, 31, 57, 52, 44, 18, 41, 53, 
//     55, 61, 51, 44];

// let output;
// let i = 0;
// while (i < scores.length) {
//     output = 'Bubble solution #' + i + ' score:' + scores[i];
//     console.log(output);
//     i += 1;
// }


// //task1


let products = ['Choo Choo Chocolate', 'Icy Mint', 'Cake Batter', 'Bubblegum'];
let hasBubbleGum = [false, false, false, true ];

for (let j = 0; j < products.length; j +=1) {
    if (hasBubbleGum[j]) {

    console.log(products[j] + " contains bubble gum");

    }
}


// //for loop

// let scores1 = [60, 50, 60, 58, 54, 54, 58, 50,
//     52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
//     64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44];

//     let output1;

//     for (let i = 0; i < scores1.length; i++) {
//         output1 = 'Bubble solution #' + i + ' score ' + scores1[i];
//         console.log(output1);
//     }


//high Score in array

// let scores2 = [60, 50, 60, 69, 58, 54, 54, 58, 50,
//     52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
//     64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44];

// let highScore = 0;
// let output1;
// let hgighestScores = [];

// for (let i = 0; i < scores2.length; i++) {
//     output1 = ('Bubble solution #' + i + ' score: ' + scores2[i]);
//     console.log(output1);

// if (scores2[i] > highScore) {
//     highScore = scores2[i];
// }
// }


// for (let i = 0; i < scores2.length; i++) {
//     if (highScore == scores2[i]) {
//         hgighestScores.push(i);
//     }
// }

// console.log('Bubbles test : ' + scores2.length);
// console.log('Highest bubble score: ' + highScore);
// console.log('Solutions with hgighest score is: ' + hgighestScores);


// make function insted of array

let scores2 = [60, 50, 60, 69, 58, 54, 54, 58, 50,
    52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
    64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];


let costs = [.25, .27, .25, .25, .25, .25,
        .33, .31, .25, .29, .27, .22, .31, .25,
        .25, .33, .21, .25, .25, .25, .28, .25,
        .24, .22, .20, .25, .30, .25, .24, .25,
        .25, .25, .27, .25, .26, .29];

function getHighestScore (scores2) {
    let highScore = 0;
    let output1;

    for (let i = 0; i < scores2.length; i++) {
        output1 = ('Bubble solution #' + i + ' score: ' + scores2[i]);
        console.log(output1);

        if (scores2[i] > highScore) {
            highScore = scores2[i];
        }
    }
    return highScore;
}


function getBestResult (scores2, highScore) {
    let hgighestScores = [];
    for (let i = 0; i < scores2.length; i++) {
        if (highScore == scores2[i]) {
            hgighestScores.push(i);
        }
}
    return hgighestScores;
}

let highScore = getHighestScore (scores2);
console.log('Bubbles test : ' + scores2.length);
console.log('Highest bubble score: ' + highScore);

let highestScores = getBestResult (scores2, highScore);
console.log('Solutions with highest score is: ' + highestScores);

    
function mostEffectiveSolution (scores, costs, highscore) {
let cost = 100;
let index;
    for (let i = 0; i < scores.length; i++ ) {
        if (scores2[i] == highscore) {
            if (cost > scores2[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
}
let mostCostEffective = mostEffectiveSolution (scores2, costs, highScore);
console.log('Bubble solution #' + mostCostEffective + ' is the most cost effective');
