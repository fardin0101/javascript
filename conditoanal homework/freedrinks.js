const inPocket = 600;
const burger = 500;
if (burger <= inPocket) {
    console.log("you can get free coke")
}
else {
    console.log("you have to pay 30 taka for drinks");
}
//  tarnary way
burger <= inPocket ? console.log("you can get free coke") :  console.log("you have to pay 30 taka for drinks");