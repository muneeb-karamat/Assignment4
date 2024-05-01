// 1.Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting: string = "Hello, World!";
console.log(greeting);
// 2.Define two variables with integer values and calculate their sum, difference, product, and quotient.
// Summation operation
let num1: number = 5,
    num2: number = 9;
    let result: number = num1 + num2;
    console.log("sum of num1 and num2 is :", result);
    result = num1 - num2; // Difference
    console.log("Difference of num1 and num2 is :" , result);
    result = num1 / num2; // Quotient
    console.log("Quotient of num1 and num2 is :" , result);
    result = num1 * num2 // Product
    console.log("Product of num1 and num2 is : " , result);
    // 3. Swap the values of two variables without using a third variable.
    let a = 2 ,
     b = 3;
     [a, b] = [b, a]     
     console.log("a :" + a);
     console.log(" b :" + b);
     // 4. This applies to TypeScript. Create a string variable and try changing its type.
     let message : string ;
     message = "string" ;
      / message = 45 ; /;
    console.log(message);
      // 5. Use the modulus operator to find the remainder of two numbers.
      let num3: number = 5,
    num4: number = 9;
    let result2: number = num3 % num4;
    console.log("Remainder of num3 and num4 is :" , result2);
    result2 = num3 / num4;
    console.log("Quotient of num3 and num4 is :" , result2);
   // 6. Increment a variable's value by 1 using two different methods.
   let counter: number = 0;
   counter++;
   console.log(counter);
   counter + 1;
   console.log(counter);
   // 7. Logical Gates
 // Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
 let a_true: boolean = true,
  b_false: boolean = false,
  c: boolean = true;
  let and_Expression = [
  { AND_Expression: ` ${a_true} AND ${c}` , value: `${a_true && c}` },
  { AND_Expression: ` ${a_true} AND ${b_false}` , Value: `${a_true && b_false}` },
  { AND_Expression: ` ${b_false} AND ${a_true}` , value: `${b_false && a_true}` },
  { AND_Expression: ` ${b_false} AND ${c}` , value: `${b_false && c}` },
  ];
  let or_Expression = [
    { OR_Expression: ` ${a_true} OR ${c}` , value: `${a_true || c}` },
    { OR_Expression: ` ${a_true} OR ${b_false}` , value: `${a_true || b_false}` },
    { OR_Expression: ` ${b_false} OR ${a_true}` , value: `${b_false || a_true}` },
    { OR_Expression: ` ${b_false} OR ${c}` , value: `${b_false || c}` },
  ];
  let not_Expression = [
    { NOT_Expression: ` ${a_true} NOT` , value: `${!a}` },
    { NOT_Expression: ` ${b_false} NOT ` , value: `${!b}` },
    { NOT_Expression: ` ${c} NOT` , value: `${!c}` },
  ];
   console.table(and_Expression);
   console.table(or_Expression);
   console.table(not_Expression);
  // 8. Compound Assignment
// Instructions: Show examples of using compound assignment operators.
let n : number = 10;
 n /= 4;
 console.log(" n/=4 :" , n);   // n = 2.5
 n *= 4;
 console.log(" n*=4 :" , n);   // n = 10
 n -= 4;
 console.log(" n-=4 :" , n);    // n = 6
 n += 4;
 console.log(" n+=4 :" , n);    // n = 10
// 9. Even or Odd
// Instructions: Write a program to check if a number is even or odd.

 let num: number = 8;
 if(num%2==0)
 {
   console.log("Number is Even");
 }
 else{
   console.log("Number is Odd");  
 }
  num = 9;
 if(num%2==0)
 {
   console.log("Number is Even");
 }
 else{
   console.log("Number is Odd");  
 }
 // Voting Eligibility
 // Instructions: Check if a person is eligible to vote.
 
 let age: number = 28;
 if(age>=18)
 {
   console.log("Eligible for vote");
 }
 else{
   console.log("Not elgible for vote");  
 }
 age = 10;
 if(age<18)
 {
   console.log("Not Eligible for vote");
 }
 else{
   console.log("Elgible for vote");  
 }
// 11. Grading System
// Instructions: Assign a grade based on a numerical score.
let score: number = 85
if(score>=85) {
  console.log("Grade is A");
} else if(score>=80){
  console.log("Grade is B");
} else if(score>=70){
  console.log("Grade is C");
} else if(score>=60){
  console.log("Grade is D");
} else{
  console.log("Grade is F");
}
score = 50;
if(score>=85) {
    console.log("Grade is A");
  } else if(score>=80){
    console.log("Grade is B");
  } else if(score>=70){
    console.log("Grade is C");
  } else if(score>=60){
    console.log("Grade is D");
  } else{
    console.log("Grade is F");
  }
 // 12. Max of Three
// Instructions: Find the maximum of three numbers.
let x: number = 200 ;
let y: number = 100 ;
let z: number = 50 ;
if(x>y && x>z) {
  console.log(" x is larger");
} else if(y>x && y>z){
   console.log(" y is larger");
} else{
  console.log(" z is larger");
}
// 13. Leap Year Checker
// Instructions: Check if a given year is a leap year.
let year: number = 2024;
if(year %4===0){
  console.log(`${year} is leap year`);
} else{
  console.log(`${year} is leap year`);
}
// 14. Fahrenheit to Celsius Converter
// Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
let Fahrenheit: number = 70;
let Celcius: number = (5/9)*(Fahrenheit-32);
console.log(" celcius = ", Celcius);
// 15. Positive, Negative, or Zero
// Instructions: Check if a number is positive, negative, or zero.
let num5: number = 20;
if(num5 ==0){
  console.log(`${num5} is zero`);
} else if(num5>=0){
  console.log(`${num5} is positive`);
} else {
  console.log(`${num5} is negative`);
}
// 16. Multiplication Table
//Instructions: Write a program that prints the multiplication table of a given number up to 10.
const table = 6;
console.log("6 * 1 =" , 6 * 1);
console.log("6 * 2 =" , 6 * 2);
console.log("6 * 3 =" , 6 * 3);
console.log("6 * 4 =" , 6 * 4);
console.log("6 * 5 =" , 6 * 5);
console.log("6 * 6 =" , 6 * 6);
console.log("6 * 7 =" , 6 * 7);
console.log("6 * 8 =" , 6 * 8);
console.log("6 * 9 =" , 6 * 9);
console.log("6 * 10 =" , 6 * 10);






















