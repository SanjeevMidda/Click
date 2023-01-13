let letter = document.querySelectorAll("h1");

function changeColour(){
    this.classList.toggle('color')
}

letter.forEach(element => {
    element.addEventListener("click", changeColour);
});
