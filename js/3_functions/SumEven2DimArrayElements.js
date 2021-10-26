// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---

function SumEven2DimArrayElements(arr){
  let sum=0;
  for(var i=0; i<arr.length; i++){
    // console.log(arr[i]);

    for(var j=0; j<arr[i].length; j++){
      
      if(arr[i][j]%2 === 0){
        // console.log(arr[i][j]);
        sum += arr[i][j]; 
      }
    }
  }
  return sum; 
}

// TEST:
let arr = [
  [1,2,3],
  [4,5,6]
];

let sum = SumEven2DimArrayElements(arr);
console.log(sum);

// expected output: 12