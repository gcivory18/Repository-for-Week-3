// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [];
ages.push(3, 9, 23, 64, 2, 8, 28, 93);
//checked that the ages printed to the console
console.log(ages);

//Programmatically subtract the value of the first element in the array from the value in the last element of the array 
const first = ages[0];
const last = ages[ages.length -1]; 
const subtract = last - first;
console.log(subtract);


//Add a new age to your array and repeat the step above to ensure it is dynamic
ages.push(12);
//checked to make sure this number was added to the array
console.log(ages);
//Use a loop to iterate through the array and calculate the average age.
//used a for loop to find the average age and printed to the console
var total = 0
for(let i = 0; i < ages.length; i++){
    total += ages[i];
}
var avg = total / ages.length;
console.log(avg);


//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’
var names = [];
names.push("Sam", "Tommy", "Tim", "Sally", "Buck", "Bob");
//checked that the names printed to the console
console.log(names);
//Use a loop to iterate through the array and calculate the average number of letters per name. 
var array = [];
for(let i =0; i < names.length; i++){
    array.push(names[i].length);
    console.log(array);
}
var arrayTotal = 0
for(let i = 0; i < array.length; i++){
    arrayTotal += array[i]; //summing each element of the array and totaling it in arrayTotal
    console.log("array total;",arrayTotal);
}
var arrayAvg = arrayTotal / array.length;
console.log(arrayAvg);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let combinedNames = ""
for(let i = 0; i < names.length; i++){
    let currName = names[i];
    combinedNames += currName + " ";
}
console.log(combinedNames);

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
var nameLengths = [];
for(let i =0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
console.log(nameLengths); //'this is the names length array', 

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array
var arrayAdd = 0
for(let i = 0; i < names.length; i++){
    arrayAdd += array[i]; //summing each element of the array and totaling it in arrayTotal
}
console.log("array total;",arrayAdd);

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function comboFunction(word, n){
    console.log(word.repeat(n));
}
comboFunction('Hello', 5);

//Write a function that takes two parameters, firstName and lastName, and returns a full name
function createFullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}
createFullName('Gwyneth', 'Ivory');

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
var myArray = [5, 12, 43, 19, 82];
function arraySum(myArray){
    if(myArray > 100){
    console.log(true);
    return true
    }else{
        console.log(false);
        return false
    }   
}
arraySum(myArray);

//Write a function that takes an array of numbers and returns the average of all the elements in the array
var exampleArray = [17, 42, 16, 12, 10];
function arrayAverage(exampleArray){
    let sum = 0
    for(let i = 0; i < exampleArray.length; i++){
        sum += exampleArray[i];
    }
    var thisAverage = sum / exampleArray.length;
    return thisAverage
}
console.log(arrayAverage(exampleArray));

   
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
function mulitpleAverages(arr1, arr2){
if(arrayAverage(arr1 > arrayAverage(arr2))){
    console.log(true);
    return true
}else{
    console.log(false);
    return false
}
}
mulitpleAverages(exampleArray, myArray); 


//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket >= 10.50){
        console.log(true);
        return true
    }else{
        console.log(false);
        return false
    }
}
willBuyDrink(true, 9); //test to see if the function will return true or false in the browser


//Create a function of your own that solves a problem. 
function willIBuyDunkin(iAmEmployed, haveMoneyLoadedOnApp, iHaveAFreeDrink){
    if(iAmEmployed == true && haveMoneyLoadedOnApp >= 4.00 || iHaveAFreeDrink == true){
        console.log(true);
        return true
    }else{
        console.log(false);
        return false
    }
}
willIBuyDunkin(true, 3.50, false);
//this function determines whether or not I should go to Dunkin and get an iced coffee
//I created this function since I go to Dunkin multiple times a week and I should save money
//If i have less than $4 I can't pay for my drink and I shouldn't reload money to the app
//But, if I have a free drink then yes, I can go to Dunkin!