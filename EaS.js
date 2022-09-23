const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let btn = document.querySelector('button');

// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(2);
    makeColumns(2);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

function addMoreGrids(){

    makeRows(0);
    makeColumns(0);
    let gridNum = prompt('How many more grids would you like?');
   
    makeRows(gridNum);
    makeColumns(gridNum);
    console.log('assbaby')
};      

btn.addEventListener('click',addMoreGrids);

// function changeBgColor(){
//     cells.styleSheets.backgroundColor = "black";
//     console.log('clicked!');
// };

// for(i = 0; i < cells.length; i++){
//     cells[i].addEventListener("click", changeBgColor);
// };

defaultGrid();