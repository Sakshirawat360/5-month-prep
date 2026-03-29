// dom manipulation means changing or modifying html element using javascript.
// query selector is used to select the element using css selector like clss id and tag. 

const head = document.getElementById("heading")

head.textContent = "Hello Friends"
head.style.color = "blue"


const btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
    btn.style.backgroundColor = "blue"
    btn.textContent="clicked!"
    btn.style.color = "white"
})

const headtwo = document.querySelector(".heading2");
headtwo.textContent = "Front End Developer";
headtwo.style.color = " blue"
