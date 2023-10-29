//your JS code here. If required.
const button = document.querySelector("input");

let colorselect = document.querySelector("#colorSelect");
button.addEventListener("click",()=>{
    let selected = colorselect.value;
    for(let i=0;i<colorselect.options.length;i++){
        if(colorselect.options[i].value === selected){
            colorselect.remove(i);
            return;
        }
    }
})