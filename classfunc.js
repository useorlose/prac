function Empl(name,city,id){
    this.name=name;
    this.city=city;
    this.id=id;
    this.getDetails=function(){
        console.log(this.name,'from',this.city,'those id number is',this.id);
    }
}
var emp=new empl('Chandana','mysuru',2674);
console.log(emp);
emp.getDetails();

var emp1=new empl('Ganavi','banglore',2534);
console.log(emp1);
emp1.getDetails();

var emp2=new empl('Pratheeksha','Chennai',2441);
console.log(emp2);
emp2.getDetails();

empl.prototype.sal=0;
// empl.prototype.sal=25000;
// empl.prototype.sal=27000;
emp.sal=30000;
emp1.sal=25000;
emp2.sal=27000;

function printBonus(sal){
    console.log('Bonus Calculation');
   // var bonus = 
    return function(amount){
        console.log(sal*(amount/100));
    };
}
printBonus(emp.sal)(80)
printBonus(emp1.sal)(80)
printBonus(emp2.sal)(80)