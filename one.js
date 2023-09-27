/*myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12']
the array above has serveral dates, written in order month-day-year
Write the code inside function fixDate(array) below to transform the array to new
format dates day-month-year
expected result: ['24-12-2014', '23-09-2022', '30-12-2021', '08-02-2021', '15-07-2018', '14-12-2019', '14-12-2022'] . 
You only need to produce the same array as expected result, no need to consider other 
possibility.
 */

const createRecipe = (name, instructions, time, calories) => {
    return {
      name,
      instructions,
      time,
      calories,
      printInstructions: function() {
        console.log(`Instructions for ${this.name}:`);
        console.log(`${this.instructions} for ${this.time} seconds. Contains ${this.calories} calories.`);
      }
    }
  }
  
  const withMetrics = (time, calories) => {
    return (name, instructions) => {
      
    }
  }
  
  const pancakeRecipe = withMetrics(30, 200)('Pancakes', 'Mix flour, eggs, and milk. Cook on a griddle.');
  // Expected output: "Instructions for Pancakes: Mix flour, eggs, and milk. Cook on a griddle. for 30 seconds. Contains 200 calories."
  pancakeRecipe.printInstructions();
  