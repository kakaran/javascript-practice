// var str = "I have to go to New York"

// console.log(str.indexOf("e"))

//  var x = 4;
//  var y = "karan";



//print the table for using function 
// function table()
// {
//   let n=2;
//   for(let i=0;i<10;i++)
//     {
//       let value = (i+1)*n;
//       console.log(n + "*" + Number(i+1) + "=" + value);
//     }
// }

// table();

// function table()
// {
//   let n=2;
//   for(let i=1;i<=10;i++)
//     {
//       let value = i*n;
//       console.log(n + "*" + i + "=" + value);
//     }
// }

// table();

// let detail = {
//   name : "karan",
//   rollno : 18,
//   course : "BCA",
//   subjects :{
//   subject1 : "Math 3",
//   subject2 : "WT",
// },
// };

// let value = 56.23;
// console.log(typeof value);
// console.log(typeof value.toFixed(1));

// let value = "my name is karan kapoor      ";

// console.log(value.trim());

// let value2 = 233
// console.log(value2.toString())

// const arr1 = ["Delhi","India","America","washintonDC"];
// let value =234;
// function table()
// {
//     let arr2=["Karan","Tushar","Utkarsh","Khushi"];

//     arr2.forEach((element)=>
//     {
//         console.log(element);
//     });
//     console.log("\n");
//     console.log(arr1[1],arr1[2]);
//     console.log(value);
// }

// table();

// function getFirstValue(arr)
// {
//     console.log(arr);
// }

// const arr1 = [1,2,3,4];
// getFirstValue(arr1[0]);

// function getFirstValue(value)
// {
//     console.log(typeof value[0]);
// }
// getFirstValue([1,2,3,4]);


// function remainder(x,y)
// {
//     return x%y;
// }

// console.log(remainder(1,3));

// let lessThan = (num1,num2) =>
// {
//     let value = num1+num2;
//     if(value<100)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// };
// console.log(lessThan(90,40));

let NumberCheck = (num1,num2) =>
{
    if(num1 === num2)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(NumberCheck(2,2))