var stud={
    name:'Jungkook',
    empId:23,
    hobbies:['dance','boxing'],
    address:{
        city:'Busan',
        country:'South korea'
    }
}

var jsonstring = JSON.stringify(stud);
console.log(jsonstring);
var jsobj = JSON.parse(jsonstring);
console.log(jsobj);