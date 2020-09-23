/ class Student{
    //     constructor(fname,lname){
    //         this.lname = lname;
    //         this.fname = fname;
    //     }
    //     getName(){
    //         return this.fname+" "+this.lname;
    //     }
    //     setName(first,last){
    //         this.lname = last;
    //         this.fname = first;
    //     }
    // }
    // var stud = new Student('Raj','Mohan');
    // stud.setName('Ram','Kumar');
    // console.log(stud.getName());
    
    
    class Student{
        constructor(fname,lname){
            this.lname = lname;
            this.fname = fname;
        }
        get firstName(){
            return this.fname;
        }
        get fullName(){
            return this.fname+ " "+this.lname;
    
        }
        set firstName(first){
            this.fname = first;
        }
    }
    var stud = new Student('Raj','Mohan');
    stud.firstName = 'Ram'
    console.log(stud.firstName);
    console.log(stud.fullName);
    
    var msg = `Betty brought some butter `+
    `but the butter was bitter` +
    `so betty brought better butter to make a bitter butter better`
    console.log(msg);