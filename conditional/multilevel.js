// const price = 5000;
// if (price >= 5000) {
//      const discount = price * 10/100 ;
//      const payAmount = price - discount;
//      console.log(payAmount);    
// } else {
//     console.log("you have to pay" + price);
// }



const price = 4000;

if (price >= 5000) {
     const discount = price * 10/100 ;
     const payAmount = price - discount;
     console.log(payAmount);    
}
    else if (price >= 3500 ){
        const discount = price * 5/100 ;
        const payAmount = price - discount;
        console.log(payAmount);  

    }
 else {
    console.log("you have to pay" + price);
}

git add .
git commit -m "commit "
git push