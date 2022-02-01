"use strict";
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

function allCost(team) {
    var cost = 0;
    for (var i = 0; i < team.length; i++) {
        console.log(team[i]) 
        cost += team[i].calculateCost(); 
    }
    return cost;
}


// creating Objects
let Emp1= new Employee(1, 4);

let Emp2= new Employee(2, 7); 

let Emp3= new Employee(3, 10); 

var team = [Emp1, Emp2, Emp3]; //Array

var allCost = allCost(team);
console.log("Cost with all team: " + allCost);