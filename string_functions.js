const s = " apple ";

//first 

// console.log(s.substring(0,3));

//second

// console.log(s.indexOf("l"));
// console.log(s.lastIndexOf("p"));

// third 
// it is same of substring and it is store the negitive value store 

// console.log(s.slice(0,3));  
// console.log(s.slice(-3));

// fourth
                    //inclusive//exculiseve
                    //start //length
// console.log(s.substr(1,3));

// fifth

// console.log(s.replace(s,"car"));

//sixth

// console.log(s.toLowerCase());
// console.log(s.toUpperCase());

//seven

// console.log(s.concat(" ", "mango"));

//eight

// console.log(s);
// console.log(s.trim());

// nine
// const x =12.355;
// console.log(x.toFixed(1))

                                        // data types

//1.primitive 
//number, string,undefined, null, BigInt, Symbol, Boolean

//Non - primitive
//Functions, arrays

// console.log(typeof true);

// const object ={
//     //key  //value
//     name :"karan",
// }

// console.log(object);
// console.log(object.name);

//plus sign alwys prefers string addition operation

// let num1 = "10" +10;

//minus operation always perfers calculation
// let ana = "karan" + 10;
//it was expecting a number but did not succeed
// console.log(typeof (NaN));

//coercion
//checks data type 
// if(1=="1")
// {
//     console.log(true);
// }

// check data type as well as value

// if(1 ==="1")
// {
//     console.log(true);
// }
// else{
//     console.log(false)
// }

//traditional
// function apple()
// {
//     console.log("apple");
// }
// apple();

//arrow
// const apple = () =>{
//     console.log("Apple");
// };

// apple();

// function auto run method

// (function apple(parameter)
// {
//     console.log(parameter);
// })("apple");