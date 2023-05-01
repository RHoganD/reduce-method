  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) =>{
  console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc+ curr
    );
    return acc + curr;

}); // if }0); specifie where to start the accumular example }0); the output
   // will be 5 values instead of 4 as it will start from 0

console.log(sum)


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];


// Totaling a specific object property


let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); // the 0 will be the initial value of the accumulator
console.log(totalExperience);

// Grouping by a property, and totaling it too
// {Developer: 12, Designer:4}, <----- tis is waht we want!

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
     acc[key] = curr.yrsExperience;
  } else {
  acc[key] += curr.yrsExperience;
  }
  return acc;
  }, {});
  
  console.log(experienceByProfession);





