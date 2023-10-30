//your JS code here. If required.
const button = document.querySelector("input");

let colorSelect = document.querySelector("#colorSelect");
button.addEventListener("click",()=>{
    let selected = colorSelect.value;
    for(let i=0;i<colorSelect.options.length;i++){
        if(colorSelect.options[i].value === selected){
            colorSelect.remove(i);
            return;
        }
    }
})