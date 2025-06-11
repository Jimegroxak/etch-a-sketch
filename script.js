const content = document.querySelector(".content");
const button = document.querySelector("button");
button.addEventListener("click", onButtonClick);

function CreateGrid(size) {
    const grid = document.createElement("div");
    grid.classList.toggle("grid");

    grid.addEventListener("mouseover", (MouseEvent) => {
            MouseEvent.target.style.backgroundColor = "purple";
        });

    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.toggle("grid-row");
        for (let j = 0; j < size; j++) {
            const gridCell = document.createElement("div", );
            gridCell.classList.toggle("grid-cell");
            gridRow.appendChild(gridCell);
        }
        
        grid.appendChild(gridRow);
    }

    content.appendChild(grid);
}

function onButtonClick() {
    let newSize = prompt("Choose a new size for the grid (max 100):");
    // prevent size from being greater than 100
    newSize = Math.min(newSize, 100);
    const grid = document.querySelector(".grid");
    content.removeChild(grid);
    CreateGrid(newSize);
}

CreateGrid(4);

