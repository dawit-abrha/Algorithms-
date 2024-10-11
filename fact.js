
// declare function
//declare multiplier
// apply for loop
// print value
function factoriliaz(num){
    let x = 1;
    for(let i = 1 ; i <= num ; i++){
        x *= i;
    }
    return x;
}
console.log(factoriliaz(5));  // 120