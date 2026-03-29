// Event Bubbling means Event start from the target element and bubbles up to the parent element. 

// button -> div -> body > document

const list = document.getElementById("list")
 
list.addEventListener("click", ()=>{
    console.log("clicked");
    //event deliogation - adding event listener to the parent element instead of multiple children

    
})