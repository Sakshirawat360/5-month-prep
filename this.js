
//object mtd

const user = {
    name : "Sakshi",
    greet: function(){
        console.log(this.name);
    }
}
user.greet();

const sakshi = {
    name: "Anaya",
    age: 23,

    hello:   function(){
        console.log(this.name, this.age);
        
    }
}
sakshi.hello()

const ritika = {
    name: "Anaya",
    age: 23,

    hey:   () => {
        console.log(this.name, this.age);
        
    }
}
ritika.hey()

const moksh = {
    name: "Sakshi",
    sam: function(){
        const test = () =>{
            console.log(this.name);
            
        }
        test()
    }
}
moksh.sam()