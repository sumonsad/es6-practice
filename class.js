class student{
    constructor(sID,sName){
        this.id = sID;
        this.name = sName;
        this.school = 'Panchami Ghat High School';
    }
}

const student1 = new student(12,'Rahim');
const student2 = new student(13,"karim");
//console.log(student1,student2);
console.log(student1.name,student2.name);