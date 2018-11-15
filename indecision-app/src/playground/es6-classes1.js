class Person {
    constructor(name = 'Anonymous'/*for setting default value*/, age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //return 'Hi. I am ' + this.name + '!';
        return `${this.name} is ${this.age} year(s) old!`;
    }
}
class Student extends Person{
    constructor(name = 'Anonymous', age = 0 , major){
        super(name,age);
        this.major = major;
    }
    getMajor(){
        return !!this.major;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.getMajor()){
            greeting+= ` and has ${this.major} as major.`
        }
        
        return greeting;
    }
}

const me = new Student('Garvit', 19, 'Computer Science')
console.log(me.getGreeting());
const other = new Student();
console.log(other.getGreeting());
