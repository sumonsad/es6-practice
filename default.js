function add(num1,num2=20){
    // if(num2==undefined){
    //  num2=0;
        //num2=20;
    // }
    num2 = num2||0;
    return num1+num2;
}
//const total = add(10,12);
const total = add(10);
console.log(total);