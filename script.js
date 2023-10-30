const deleteButton = document.querySelector("#delete");

deleteButton.addEventListener("click", ()=>{
	const dropDown = document.getElementById("colorSelect");
	const selected = dropDown.options[dropDown.selectedIndex];
	if(selected){
		dropDown.removeChild(selected);
	}
})