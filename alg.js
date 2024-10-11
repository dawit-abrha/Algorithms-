//1. Print 1 - 135

//Write a program using JavaScript that will print all the numbers from 1 to 135.
//The program should use a for loop to iterate over the numbers.
//The program should print each number on a new line.
for(let  i = 1; i <= 135; i++){
    console.log(i);
}
//2. Print Odd Numbers 1 - 135

//Write a program using JavaScript that will print all the odd numbers from 1 to 135.
//The program should use a for loop to iterate over the numbers.
//The program should print each number on a new line.
for(let  i = 1; i <= 135; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
//3. Sum of Printed Numbers

//Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far.Your output should look similar to this:
// declare sum  variable
// apply for loop to iterate the numbers
let sum =0
for(let i  = 1; i <= 135; i++){
    sum += i;
    console.log(`${i} sum:${sum}`);
}


//4. Print the elements of an array

//Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.
//declare array.
// apply for loop to iterate through the array.
let array = [1,4,2,12];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
//5. Find Max

//Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.
//declare array.
//declare max to zero;
//apply  for loop to iterate through the array.
let  X = [2,1,3];
let sum = 0;
let  average = 0;
function getAverage(){
for( let i =0 ; i < X.length; i++){
    sum = sum + X[i];
}
average = sum / X.length;
return average;
}
console.log(getAverage(average));

//7. Eliminate the Negatives

//Given an array X write a program that will remove all negative numbers and replace them with a 0. For example, 
//for array X = [2,-1,4,-3] the output of your program should be
// declare ann array 
// check the number if it is negative or not 
//if it is negative replace by zero
//apply for loop to iterate over the array
let X = [-1, 2, -3, 4];
function replaceNegative(){
   for(let i = 0 ; i < X.length; i++){
    if(X[i] < 0){
        X[i] = 0;
    }
   }
   return X;
}
console.log(replaceNegative(X));;


//8. Number to String

//Write a program that takes an array of numbers and turns the negative values into strings.
// declare array
// create function
//apply for loop
// check if number is negative
// if negative, convert to string
let x  = [-1, 2, -3, 4, -5];
function convertNegativeTostring(x){
    for (let i = 0 ; i < x.length; i++){
        if (x[i] < 0){
            x[i] = 'me';
        }
    }
    return x;

}
console.log(convertNegativeTostring(x));