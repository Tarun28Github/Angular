// constant is used to store const data or 
export const Constant={
  // in constant data store in key value pair
  // naming convertion is to be capital always for industry/good skill.

  API_URL : 'https://jsonplaceholder.typicode.com/users',// THIS IS CONSTANT ELEMNET/FIELD

  DEPARTMENT_METHODS :{ // THIS IS CONSTANT OBJCET CONTAIN VARIOUS FIELDS 

    PREVIOUS_DEPT_URI : '',
    NEW_DEPT_URI : '',

    // HOW TO USE
    // JUST ADD Constant.DEPARTMENT_METHODS.PREVIOUS_DEPT_URI  (THIS IS FOR .TS FILE).
    // TO THE PLACE THIS WHERE EVER U WANT TO ADD THE URL INSTED OF THE ACTUAL URL.
  },

  VALIDATION_MESSAGES:{ // IF WE WANT USE THIS IS HTML FILE THAN CREATE A VARIALBLE IN .TS FILE PUT CONTANT OBJ IN VALUE IN CREATED VARIABLE AND THEN USE THAT VARIABLE IN HTML FILE.
    REQUIRED : 'THIS IS REQUIRED',
    MIN_LENGTH : 'MIN 3 CHAR'
  },

  STATUS_LIST :['TODO','IN_PROGRESS'] // CONSTANT ARRAY
 



}