export interface IUser{
    userId : number,
    userName : string,
    userEmail : string,
    mobile : string
}// sience its an interface we don't need to initalize its varible or create an object;
// just like class we can also create n no. of interface in this file.
/*In interface vaiable are sepreated BY (,) but in class variable are seprated by (;). */
/*when ever we create an variable with spesicfic type create a class or interface for it. */


/** When to use class and when to use inter face */
/** if u are creating vairbale to bind form create class */
/** if u are creating a variable to hold an array create interface */

export interface IUserList{
    userId : number,
    userName : string,
    emailId : string,
   
}