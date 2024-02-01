//q29 Implement a program that checks if a given year is a leap year. Leap years have specific conditions, such as being divisible by 4 but not by 100 unless also divisible by 400.
let year =2000;
if(year%4==0||year%100==0||year%400==0){ 
    console.log("it is a leap year")
} else { 
    console.log("it  is not leap year")
}



