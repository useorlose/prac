//setTimeout - callback function
/*setTimeout(()=>{
    console.log('this is a demo')
},3000);
*/

//setInterval
/*setInterval(() => {
    console.log('happy learning')
}, 3000);
*/

//constructor
function Student(name,city){
    this.name=name;
    this.city = city;
    this.getDetails = function(){
        console.log('Welcome ',this.name, 'from', this.city);
    }
}
var stud = new Student('Jungkook','Busan');
console.log(stud);

var stud1 = new Student('Taehyung','itaewon');
console.log(stud1);
stud.getDetails();

//prototype set property for all objects

Student.prototype.studId = 90;
Student.prototype.greetMsg = ()=>{
    console.log('Great Day ',this.name);
}
stud.greetMsg();