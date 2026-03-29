fetch("https://jsonplaceholder.typicode.com/posts", 
    {method: "GET"}
).then(responce=>responce.json()).then(data=>console.log(data)).catch(error=>console.log(error))

// step 1-> we sent get request to api , 
// step 2-> server sends data, but that data is not directly useful, 
// step 3-> so we convert that data into json using response.json(),
// step 4-> we print it , 

fetch("https://jsonplaceholder.typicode.com/users").then(responce=>responce.json()).then(users=>{
    users.forEach(user => {
        console.log(user.name);
        
    });
}).catch(error=>console.log("error", error))

async function fetchdata(){
    try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await responce.json()
        console.log(data[0].name);
        
    } catch (error) {
        console.log(error);
        
    }
}
fetchdata()