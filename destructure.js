const person = {name: "sumon", age:37,job:"pilil", gfName:"Farjana", phone:01915522518,address:"Sonargaon"};
// const job = person.job;
// const phone = person.phone;

const complexObject = {
    name:'sumon',
    info:{
        address:'sonargaon',
        phone:01915522518
    }
}
const{phone} = complexObject.info;
console.log(phone);


//const {phone, age,address,job} = person;

//console.log(phone,age,address,job);

// const friends = ['sohel','kamal','jamal','samal','salman'];
// const [firstFriend,secondFriend,...restFirends] = friends;
// console.log(firstFriend,secondFriend,restFirends);