// Configuration
let cellsN = 100;

// References
const startButton = document.getElementById("button-start");
const gridElement = document.getElementById("grid");

// Link UI with JS
startButton.addEventListener("click", generateGrid);

// Generation logic
function generateGrid() {

    // Clear grid
    clearGrid();

    // Create a reusable mould
    const mouldCell = document.createElement("div");
    mouldCell.classList.add("cell");

    // Create N cells
    for (let i = 0; i < cellsN; i++) {

        const cellN = i + 1;

        // Create cell
        const cell = mouldCell.cloneNode(); //clone
        cell.insertAdjacentHTML("beforeend", "<span>" + cellN + "</span>"); //insert number

        // Add click response
        cell.addEventListener("click", function () {

            if (!cell.classList.contains("revealed")) {

                // Rivela la cella
                cell.classList.add("revealed");
                console.log(`[${cellN}]`);

            } else {

                // Cell already revealed
                console.log(`Cella già rivelata! [${cellN}]`)

            }
        });

        // Add to the grid
        gridElement.append(cell);
    }
}

function clearGrid() {
    while (gridElement.firstChild) {
        gridElement.removeChild(gridElement.firstChild);
    }
}
