let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---
var highestScore=scores[0];

function getHighestScoreIndex(){

  for(var i=0; i<scores.length; i++){

    let studentScore = scores[i];

    if(studentScore>highestScore){

      highestScore=studentScore;
      // console.log(i);
      return i;
    }
  }
}

// getHighestScoreIndex()

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---
console.log(`${students[getHighestScoreIndex()]} has the higest score: ${highestScore}`);
// expected output
// Maria has the higest score: 6