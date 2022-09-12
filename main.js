let boxes = document.querySelectorAll(".box")
let active = document.querySelector("#active")
boxes.forEach((box)=>{
    box.addEventListener("mouseenter", ()=>{
        box.classList.add("animated")
    })  
}
    
)
