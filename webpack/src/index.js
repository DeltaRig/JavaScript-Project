"use strict";

var tools = require("./calculate.js");  

var costByPerson = 50;

// function constructor 
function Employee(experience, skills){   
    this.experience= experience; 
    this.skills = skills; 
} 

// creating calculateAge() method to the Prototype property 
Employee.prototype.calculateCost = function(){  
    var mult = 300; // Number
    var result = (this.experience * this.skills * mult);
    console.log('The current cost to this employee is: '+ result); 
    return result;
} 
console.log(Employee.prototype); 

//Funtions returning Functions
const multi = (integer) => (anotherInteger) => integer * anotherInteger;

function allCost(team, callback) {
    var cost = 0;
    for (var i = 0; i < team.length; i++) {
        console.log(team[i]) 
        cost = tools.sum(cost, team[i].calculateCost()); 
    }
    cost += multi(team.length)(costByPerson)
    return callback(cost); //Callback
}

//IIFE and Closure
const projectId = (function() {
    let count = 0;
    return function() {
      ++count;
      return `${count}`;
    };
})();

// var that is a function
var taxes = function(price){
    return price * 1.3; //Function as an argument
}

console.log("Project " + projectId());

// creating Objects
let Emp1= new Employee(1, 4);

let Emp2= new Employee(2, 7); 

let Emp3= new Employee(3, 10); 

var team = [Emp1, Emp2, Emp3]; //Array

var allCost = allCost(team, taxes);
console.log("Cost with all team: " + allCost);

console.log("Project " + projectId());