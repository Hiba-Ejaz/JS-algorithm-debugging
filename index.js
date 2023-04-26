/*
1. Fix the bugs in the codes below, to make the console print out different numbers
from 0 to 100
 */

const printNum = () => {
    for (var i = 0; i <= 100; i++) {
         console.log(i);
    }
}

printNum();

/*
2. Given the array below:
myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12']
the array above has serveral dates, written in order month-day-year
Write the code inside function fixDate(array) below to transform the array to new
format dates day-month-year
expected result: ['24-12-2014', '23-09-2022', '30-12-2021', '08-02-2021', '15-07-2018', '14-12-2019', '14-12-2022'] . 
You only need to produce the same array as expected result, no need to consider other 
possibility.
 */

let myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12'] //all dates are not written in order month-day-year, but im considering the instruction.
const fixDate = (array) => {
    for(let i=0;i<array.length;i++){
        let splittedString=array[i].split("-");
        array[i]=(`${splittedString[1]} - ${splittedString[0]} - ${splittedString[2]}`);
    }
    return array;
}
let newArr = fixDate(myArr)
console.log(newArr);
/*
3. Counter function
Write a counter funtion to print out in console the time difference between 2 given date
Expected result in the console: 11 days - 13 hours - 38 minutes - 20 seconds
*/
const dateFrom = new Date(500000);
const dateTo = new Date(1000000000);
const counter = (from, to) => {
let seconds = (to.getTime() - from.getTime())/1000;
let minutes=(seconds/60);
let hours=(minutes/60);
let days=(hours/24);
let hrs=(hours%24);
let min=(hrs%1)*60;
let sec=(min%1)*60;
return `${Math.floor(days)} days - ${Math.floor(hrs)} days - ${Math.floor(min)} minutes  - ${Math.floor(sec)} sec` 
};
const timer = counter(dateFrom, dateTo)
console.log(timer);

/*
4. Provide logic for function generateNewFolderName, which receive an array as argument. Everytime the function gets called,
it should check for folder name. If the folder named 'New Folder' does not exist, it should add the name 'New Folder' to array.
If folder 'New Folder' exists, it should add 'New Folder (1)' to array. If 'New Folder (1)' exists, it should add 'New Folder (2)'
to array, and so on.
*/

const generateNewFolderName = (existingFolders) => {
    for(let i=0;i<=existingFolders.length;i++){
if(i===0 && (!existingFolders.includes("New Folder"))){ //although it wont be there, just fulfilling the statement requirement
    existingFolders.push("New Folder");
   break;
}     
else if(!existingFolders.includes(`New Folder (${i})`)){ //although it wont be there, just fulfilling the statement requirement
        existingFolders.push(`New Folder (${i})`);
        break;
    }
    }
}
let folder = []
generateNewFolderName(folder)
generateNewFolderName(folder)
generateNewFolderName(folder)
generateNewFolderName(folder)
console.log(folder) //expect to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)']


/* 5. Write a higher order function in JavaScript called debounce that can be used to debounce a callback function. 
The debounce function should take two arguments: the callback function to debounce and the delay time in milliseconds. 
The debounced function returned by debounce should wait until the delay time has passed before calling the callback function. 
If the debounced function is called again within the delay time, the timer should be reset and the callback function should be called after the delay time has passed. 
Your solution should be implemented in JavaScript without using any third-party libraries or frameworks. */
const debounce = (callback, timer) => {
    //Your code goes here
    
    let tId;

    return (...args) => {
      clearTimeout(tId);
    }
  
      tId = setTimeout(() => {
        callback(...args);
      }, delay);
}

//This is the test code for the debounce function
for (let i = 0; i < 5; i++) {
    debounce(() => console.log("this should print out only once"), 1000)
}

/* 6. Create a function called cacheFunc that takes another function as an argument and returns a new function. 
The new function should cache the result of the original function for each set of arguments that it's called with. 
If the new function is called with the same arguments again, it should return the cached result, instead of calling the original function again. 
The new function should have a cache property that stores the cached results. */

const cacheFunc = (callback) => {
    
}

//This is the test code for cacheFunc
const addition = (a, b) => {
    console.log("addition of " + a + " and " + b)
    return a + b
}
const subtraction = (a, b) => {
    console.log("subtraction of " + a + " and " + b)
    return a - b
}
const cacheAddition = cacheFunc(addition)
const cacheSubtraction = cacheFunc(subtraction)
console.log(cacheAddition(10, 5)) // should print out: "addition of 10 and 5" and "15"
console.log(cacheAddition(10, 5)) // should print out: "15"
console.log(cacheAddition(10, 9)) // should print out: "addition of 10 and 9" and "19"
console.log(cacheAddition(10, 9)) // should print out: "19"
console.log(cacheSubtraction(10, 5)) // should print out: "subtraction of 10 and 5" and "5"
console.log(cacheSubtraction(10, 5)) // should print out: "5"

/* 7. Check the code below, fix the bug and complete withMetrics to make the final console.log
print out the expect result */
const createRecipe = (name, instructions) => {
    return {
        name,
        instructions,
        printInstructions: () => {
            console.log(`Instructions for ${this.name}:`)
            console.log(this.instructions + `for ${this.time} seconds. Contain ${this.calories} calories`)
        }
    }
}

const withMetrics = (time, calories) => {
return function(name,instructions){
    return createRecipe(time,calories,name,instructions);
}
}

const pancakeRecipe = withMetrics(30, 200)(createRecipe('Pancakes', 'Mix flour, eggs, and milk. Cook on a griddle.'))
/** Expected result
 * Instructions for Pancakes:
 * Mix flour, eggs, and milk. Cook on a griddle.for 30 seconds. Contain 200 calories
 */
pancakeRecipe.printInstructions()
