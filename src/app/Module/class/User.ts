export class User {
    userId : number;
    userName : string;
    email : string;
    city?: string;   // this question make this variable optional ie its not necessary to initalize this element. But we have to initalize the rest 
    mobile? : string;


    constructor(){
        this.userId= 0;
        this.userName='';
        this.email="";
    }
    // similary we can create getter and setter and we can also make these element, gettor,settor  private ,public,protected just like in java.

    // Now when ever we use to create an object ,or variable with any data type  But now we will  use these class as datatype 
    // for ex :-  Userdata : User ; like this instead of any . any is used when we dont know what kind of data is going to return or stroed at that time we use any.
    // a class is used when ever we try to bind data with form.
}

// we can create n no. of class in this file.

export class Customer{

    cusId: number;
    cusName: string ;
    cusMail : string ;

    constructor(){
        this.cusId = 0;
        this.cusName = '';
        this.cusMail ='';
    }
}
// we can also create an obj of class
// User : User  = new User();
// name : classname/ type  = new  
/*In interface vaiable are sepreated BY (,) but in class variable are seprated by (;). */
/*when ever we create an variable with spesicfic type create a class or interface for it. */

/** When to use class and when to use inter face */
/** if u are creating vairbale to bind form create class why see we can use interface to bind form but we have to initiaize its variable in the code which make it 
 * repetative code. but in class the constructor will inittialize every time so no code repeat. thats why
 */
/** if u are creating a variable to hold an array create interface */

export class UserObj{
    email : string;
    password : string ;

    constructor(){
       this.email = "";
       this.password='';
    }
}
