const weight = 80;
const height = 1.77;
const bmi = weight / (height)^2 ;
if (bmi < 18.5) {
    console.log("you are underwighte");
} else if (bmi >=18.5 && bmi <=29.9){
    console.log("you are normal");
} else if (bmi >= 25 && bmi <= 29.9){
    console.log("you are overweight");
}else {
    console.log('you are obese');
}