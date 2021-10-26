var fruitsData = [
  ["apple", "orange", "cherry"],
  [1.2, 2.0, 3.5],
];

// TASK: log in console each fruit and its price

// the non-efective (stupid) way:
// console.log( fruitsData[0][0] +'='+ fruitsData[1][0]);
// console.log( fruitsData[0][1] +'='+ fruitsData[1][1]);
// console.log( fruitsData[0][2] +'='+ fruitsData[1][2]);


// the cleaver way:
// >>>>>>>>>>>> your code here >>>>>>>>>>>>
//HINT: you have to loop over fruitsData "columns"

// var fruit=fruitsData[0];
// var price=fruitsData[1];
var rows = fruitsData.length;
var cols = fruitsData[0].length;
// var column = [];

for(var i=0; i<rows; i++){
  // console.log(fruitsData[i]);
  for(var j=0; j<cols; j++){
    // console.log(fruitsData[i][j]);
    
    console.log(`${fruitsData[0][j]} = ${fruitsData[1][j]}`);//не мисля че това е най-добрият вариант - връща резултата 2 пъти и не съм сигурен че разбирам защо... осен това в EXPECTED OUTPUT има запетайки след първите 2 елемента, което не знам дали е просто така написано или се очаква. Mога да намаля циклите с един (i<rows-1 или var i=1), но не мисля, че това изпънява задачата... ако се добавят още масиви (например за брой или произход на плодовете) към fruitsData[] програмата няма да работи правилно... 

    // var column = [];
    // column.push(`${fruitsData[0][j]} = ${fruitsData[1][j]}`);
    
    // for(var q=0; q<column.length; q++){
    //   console.log(column[q]);
    // }
  }
}

// EXPECTED OUTPUT:
// apple = 1.2,
// orange = 2.0,
// cherry = 3.5