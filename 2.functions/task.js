function getArrayParams(...arr) {
  let min = arr[0]; 
  let max = arr[0]; 
  let sum = 0; 
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    max = Math.max(max, element);
    min = Math.min(min, element);
    sum += element;    
  }
  let avg = (sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: Number(avg) };
}

console.log(getArrayParams(1, 2, 3, -100, 10));

function summElementsWorker(...arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

    for (let element of arr) {
        if (element % 2 === 0) {
            sumEvenElement += element; 
        } else {
            sumOddElement += element; 
        }
    }

    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let element of arr) {
        if (element % 2 === 0) {
            sumEvenElement += element; 
            countEvenElement++;
        }
    }

    return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement; 
}

console.log(summElementsWorker(10, 10, 11, 20, 10));
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); 
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let arr of arrOfArr) {
    let result = func(...arr); 
    if (result > maxWorkerResult) {
        maxWorkerResult = result;
    }
  }
    return maxWorkerResult;
}

function exampleWorker(...args) {
  return args.reduce((acc, item) => acc + item, 0);
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];

console.log(makeWork(arr, exampleWorker));