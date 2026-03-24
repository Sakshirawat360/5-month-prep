//extends - we use extends to inherit the property from one class for another class, 

class Animal{
    constructor(name){
        this.name = name
    }

    speak(){
        console.log("hello" + this.name);
        
    }
}

class Dog extends Animal{
    speak(){
        console.log("woof");
        
    }
}
const d1 = new Dog("Tommy")

d1.speak();

