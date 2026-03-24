// this keyword = this keyword in javascript refers to the object that is currently executing the code. 

function sayhello(){
    console.log("hello" +" " +this.name);
    
}

const person = {
    name: "Sakshi",
    greet: sayhello
}

person.greet();
//-----------------------------------------------------------

const user = {
    username: "Sakshi Rawat",

    regular: function hello(){
        console.log("hello" + " " + this.username);
        
    }
}
user.regular();