// Add all the values between 200 and 2700 (inclusively) that are 
// divisible by 3 or 5, but not both 3 and 5. 
// 1. declare the variable and sum
// 2.for loop to iterate the number
// 3.check if the number is divisible by 3 or by 5;
// 4.check if the number is divisible by 3 and 5 at the same time.
// print the sum

let sum = 0;
for(let i = 200 ; i < 2700 ;i++ ){
    if((i%3 == 0 || i%5 == 0) && !(i%3 == 0 && i%5 == 0)){
        sum +=i;

    }    
}
console.log(sum)
//2. Shift the Values
//Given any array X, for example [2,1,6,4,-7], 
//create an algorithm that shifts each number by one to the front.
// When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].
// declare empty array
// for loop to iterate the array
// unshift the array element
let x = [];
let  arr =  [2,1,6,4,-7];
for( let  i = 0; i < arr.length; i++){
   x.unshift(arr[i]);
}
console.log(x);


// Create an algorithm that inserts the numbers from 1 to 135
// into an array, while replacing the values 
// that are divisible by 3 with the word "Fizz", 
// the numbers that are divisible by 5 with the word "Buzz", 
// and the numbers that are divisible with 3 and 5 
// with the word "FizzBuzz"
// declare empty array
// for loop to iterate the numbers
// check if the number is divisible by 3 
// check the number if it is divisible by 5
// check the number if it is divisible by five and three at the same time.

let newArr = [];
for(let i = 1 ; i < 135; i++){
    if(i%3 == 0 && i%5==0){
        newArr[i] = 'FizzyBuzz';
    }
    else if(i%3===0){
        newArr[i] = 'Fizz';
    }
    else if(i%5===0){
        newArr[i] = 'Buzz';
    }
    else{
        newArr[i] = i;
    }
}
console.log(newArr);

// 4. Fibonacci

// For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. 
// A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
function fibonacciSum(number) {
    let a = 0, b = 1;
    let total = 0;
    while (b < number) {
      total += b;
      [a, b] = [b, a + b];
    }
    return total;
  }
  
  console.log(fibonacciSum(1000000));

  //5. Remove the Negative

//Given any array X, for example [1,-2,4,1], 
//remove the negative numbers, so that the output becomes: [1,4,1].
// declare empty array
// check if the is negative number in the given array.
// if the number is negative, remove it from the array.
//print the array.
let  arrayy = [1,-2,4,1];
let newwArr = [];
for(let i = 0; i < arrayy.length; i++){
    if(arrayy[i] >= 0){
        newwArr.push(arrayy[i]);
    }
}
console.log(newwArr);

//. Communist Censorship

//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'],
// replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. 
//Then make your algorithm work for any word of your choice

let array = ['Man', 'I','Love','The','Matrix','Program'];
let word  = 'Program';
let st =  '';
for(let i = 0; i < word.length; i++){
    st += '*';
}
for(let i = 0;  i < array.length; i++){
    if(word ==  array[i]){
        array[i] = st;

    }

}

console.log(array);
