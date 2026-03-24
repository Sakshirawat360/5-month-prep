//prototype - javascript mai har ek object ke pass uski ek hidden property hoti hai, uske hi prototype bolte hain. 
//prototype chain - jab js koi property find krta hai, or usko vo property object mai nhi milti hai, to vo prototype mai find krta hai,, fir uske prototype mai find krta.. jab tak ki value null na ho jaye,, isko prototype chain bolte hain.
//   const user = {
//     name : "Sakshi"
//   }

//   console.log(Object.getPrototypeOf(user));
  

  class Animal  {
    constructor(name){
        this.name = name 
    }

    speak(){
        console.log("Some sound" + " " + this.name);
        
    }
  }

  const p1 = new Animal("Sakshi")

  p1.speak()