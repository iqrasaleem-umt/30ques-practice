//q3 Implement a conditional statement to check if a given number is even or odd. Consider using the modulus operator % for this task.
let z=44;
if(z%2==0){ 
    console.log("even")
}else{ 
    console.log("odd")
}  
//another way
function evenorodd(n:number){ 
n%2==0? "even":"odd"
} 
evenorodd(22);