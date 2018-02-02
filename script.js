var firstNumber;
var secondNumber;
var sign;

firstNumber = Number(prompt("input firs number"));
secondNumber = Number(prompt("input second number"));

sing =Number(prompt("what you wont ?  if (+) input 1, if (-) input 2, if (*) input 3, if (/) input 4"));


if(sing===1){
var sum = firstNumber + secondNumber;
document.write("sum is : " + sum + "<br>")
}
if(sing===2){
var sub = firstNumber - secondNumber;
document.write("sub is : " + sub + "<br>")
}
if(sing===3){
var mul = firstNumber * secondNumber;
document.write("mul is : " + mul + "<br>")
}
if(sing===4){
var div = firstNumber / secondNumber;
document.write("div is : " + div + "<br>")
}


// var sum = firstNumber + secondNumber;
// var sum1 = firstNumber - secondNumber;
// var sum2 = firstNumber * secondNumber;
// var sum3 = firstNumber / secondNumber;