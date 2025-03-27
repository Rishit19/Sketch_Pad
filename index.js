var container = document.querySelector('#container');
var gridSize = 16;


function createGrid(gridSize) {
    let boxWidth = 100 / gridSize;
    for (var i=0; i<gridSize; i++) {
        for (var j=0; j<gridSize; j++) {
            let child_div = document.createElement('div');
            child_div.classList.add('box');
            child_div.classList.add(`box_${i}`);
            child_div.style.width = boxWidth + '%';
            child_div.addEventListener('mouseenter',() =>{
                child_div.classList.add('highlighted');
            });
            container.appendChild(child_div);
        }
    }
}

function clearGrid() {
    container.innerHTML = '';
}

createGrid(gridSize);
var button = document.querySelector('#button');
button.addEventListener('click', ()=>{
    var gridSize = parseInt(prompt("Please enter the grid size <= 100"));
    if (gridSize <= 100) {
    clearGrid();
    createGrid(gridSize);
    } else {
        alert("Invalid input. Please enter a number less than or equal to 100.");
    }
})