//your JS code here. If required.
function remove(){
    const select = document.querySelector("#colorSelect");
    let selectedvalue = select.value;
    let options = select.children;
    for(let i=0;i<options.length;i++){
        options[i].value === selectedvalue;
        options[i].remove();
        return;
    }
}