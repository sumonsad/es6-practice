class Parent{
    constructor(){
        this.fatherName = "Kolimuddin";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Karim");
const baby2 = new Child("Rahim");
console.log(baby.getFullName());
console.log(baby2.getFullName());


// object oriented programming core concept
// 1. inheritence
// 2. incepsulation
// 3. polimerphism.
