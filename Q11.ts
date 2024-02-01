//q11 Write a function to find the average value of numbers in an array. Sum the elements and divide by the length of the array.
let numarray=[1,2,3,4,5] 
function averagevalue(){
    let sum=0; 
    for(let i=0;i<numarray.length;i++){
    sum=numarray[i]+sum
    }
   console.log("sum:",sum)
   let averagevalue=sum/numarray.length;
   console.log(averagevalue);

}
averagevalue();
