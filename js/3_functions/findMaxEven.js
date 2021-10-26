// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---

function findMaxEven(numbers){

  var max=numbers[0];

  for(var i=0; i<numbers.length; i++){

    let n = numbers[i];

    if(n>=max && n%2==0){ //ако не е четно връща 5, а не 9, тъй като 5>max. Как да се напише така, че да мине през всички елементи?? Единственото, за което се сещам, е да се направи още един if statement за нечетни елементи и накрая да се сравнят 2та резултата... но това ще работи само за този масив в това му състояние и съдържание.

      max=n;
      return max;
    }
  }
}

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);