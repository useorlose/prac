name = ['Namjoon','Jin','yoongi','Hoseok','Jimin','Taehyung','Jungkook'];
name.forEach(elem => {
    console.log(elem);
    
});
var greet = () => {
    console.log('great day');
}

greet();

//to invoke a function immediately
(function(){
    console.log('great day')
})();//we can also pass a parameter


name.forEach(elem => {
    console.log(elem)
});