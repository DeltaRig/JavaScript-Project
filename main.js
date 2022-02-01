"use strict";
// function constructor 
function Employee(experience, skills){   
    this.experience= experience; 
    this.skills = skills; 
} 

// creating calculateAge() method to the Prototype property 
Employee.prototype.calculateCost = function(){  
    console.log('The current cost is: '+(this.experience * this.skills * 300)); 
} 
console.log(Employee.prototype); 

// creating Objects
let Emp1= new Employee(1, 4);

let Emp2= new Employee(2, 7); 

let Emp3= new Employee(3, 10); 

var team = [Emp1, Emp2, Emp3];

for (var i = 0; i < team.length; i++) {
    console.log(team[i]) 
    team[i].calculateCost(); 
}