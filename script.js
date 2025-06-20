const content = document.querySelector(".content");
const button = document.querySelector("button");
button.addEventListener("click", onButtonClick);

function CreateGrid(size) {
    const grid = document.createElement("div");
    grid.classList.toggle("grid");

    grid.addEventListener("mouseover", (MouseEvent) => {
        const cell = MouseEvent.target;
        if (cell === grid) return;

        if (!cell.style.backgroundColor) {
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            cell.style.opacity = 0.1;
        } else {    
            let opacity = parseFloat(cell.style.opacity);
            opacity += 0.1;
            cell.style.opacity = opacity;
        }
        
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

