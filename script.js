const button = document.querySelector("input");
const colorSelect = document.querySelector("#colorSelect");

button.addEventListener("click", () => {
    const selectedValue = colorSelect.value;
    for (let i = 0; i < colorSelect.options.length; i++) {
        if (colorSelect.options[i].value === selectedValue) {
            colorSelect.remove(i);
            return;
        }
    }
});
