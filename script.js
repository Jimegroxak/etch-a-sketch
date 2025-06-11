function CreateGrid(size) {
    const grid = document.querySelector(".grid");

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
}

CreateGrid(4);

