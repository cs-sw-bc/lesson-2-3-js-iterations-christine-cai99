//while loop: entry check loop
let i=0;//keep track of the count -- iterator
//Display Hello 10 times
//update i/counter variable
//i = i+1 or i++;
while(i<10){//condition tells us where to end
    console.log("Hello");
    i++;
}
//while loop will keep executing until (i<10) is false
//use while loop, when you don't know how many times to perform repetition


//Print hello until I type stop
//I know the ending condtion but I don't know how may times to print hello
//best scenario to use while loops

// let answer = "yes";
// while (answer != "stop"){
//     console.log("Hello");
//     answer = prompt ("Enter stop to stop:");
// }


//do-while: exit-check loop. when you want to execute the loop once before condition check
//when you want to execute a block at least once

let j=0;
do{
    console.log("I want more pizza");
    j++;
}while(j<3);

// let password = null;
// do{
//     password=prompt("Enter your password:");
// }while(password !="Password123");


//for loop: most elegant
//initialise, condition check, increment
//put the above three in a single line
//best to use when you know the exact number of repetitions


// let i=0;//keep track of the count -- iterator
// //Display Hello 10 times
// //update i/counter variable
// //i = i+1 or i++;
// while(i<10){//condition tells us where to end
//     console.log("Hello");
//     i++;
// }

//Convert while to for
for(let k=0; k<4; k++){
    console.log("Hello from for loop");
}

//so k=0 goes first, then k<4, then console.log, then k++, then k<4, then console.log...
//for and while loops are exactly the same




const fruits = ["Apple", "Banana", "Mango", "Grapes"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
//counter from our loops
for(let count=0; count<fruits.length; count++){//.length gives you the count of array
    console.log(`The value of count is ${count}`);
    console.log(fruits[count]);
}

//You can increment value of your counter by anything
for(let x=0;x<50;x=x+2){
    console.log("X=" +x);
}


//Array functions
//map, reduce, filter

//map--transforming one array to another array based on some function without using for loop
// scores=[90,89,70,50]
// grades=[A, B, C, D]

//Map: to multiply everything by 2
const ages =[18,15,14,72,25,42];
function double(d){
    return d*2;
}
const doubled_ages = ages.map(double);
//map has an in-built for loop
//take each item from the ages array and calls the double function on each one of them
console.log(doubled_ages)


//filter--take an array and return another array with only elements that match certain condition
const age =[18,15,14,72,25,42]; //wants ppl >18

function isMajor(age){
    return age>18;
}
const major_ages = age.filter(isMajor);
console.log(major_ages);



//reduce-- take an array and reduce it to a single value
//e.g. calcuulate the sum of all ages
//e.g. calculate the average of all ages



// const age =[18,15,14,72,25,42]; //wants ppl >18

// function isMajor(age){
//     return age>18;
// }
// const major_ages = age.filter(isMajor);
// console.log(major_ages);


for(let z=0;z<ages.length;z++){
    //if age is greater than 18, say major age detected
    //otherwise, print minor age detected
    if (ages[z] >=18){
        console.log(`${ages[z]} is a Major age`)
    }
    else{
        console.log(`${ages[z]} is a minor age`)
    }
}

let sumofAges = 0;
for (let l=0; l<ages.length;1++){
    sumofAges = sumofAges+ages[l];
}
console.log("Sum of ages"+sumofAges);

let averageAges = sumofAges/age.length;
console.log("Average of ages"+averageAges);



function printNumbers() {
    // Step 1: Get user input
    // Step 2: Use a for loop to print numbers 1 to input value
    // Step 3: Display result inside #output
}