const container = document.querySelector('#container');
const sizes = document.querySelectorAll('#size > fieldset > input');
const colors = document.querySelectorAll('#pen > fieldset > input[type="radio"]');
const picker =  document.querySelector('#pen > fieldset > input[type="color"]');
const eraser = document.querySelector('#eraser');
const reset = document.querySelector('#reset');

const DEFAULT_BG = '#FFF2F7';
// grid sizes
const GRID_SIZES = {
    NORMAL_GRID : 256,
    SMALL_GRID : 2500,
    LARGE_GRID : 100
}

createGrid (GRID_SIZES.NORMAL_GRID);
// set grid size
sizes.forEach(size => size.addEventListener('change', () => {
    if (size.value === 'small') {
        container.innerHTML = '';
        createGrid (GRID_SIZES.SMALL_GRID);
    } else if (size.value === 'large') {
        container.innerHTML = '';
        createGrid (GRID_SIZES.LARGE_GRID)
    } else {
        container.innerHTML = '';
        createGrid (GRID_SIZES.NORMAL_GRID);
    }
}));

// function to create grid
function createGrid (area) {
    console.log(area)
    for (let i = 0; i < area; i++) {
        const div = document.createElement('div');
        div.style.width = 500 / area**(1/2) + "px";
        div.style.height = 500 / area**(1/2) + "px";
        container.appendChild(div);
    }
}

// set pen option
colors.forEach(color => color.addEventListener('change', () => {
    if (color.value === 'rainbow') {
        picker.disabled = true;
    } else if (color.value === 'custom') {
        picker.disabled = false;
        picker.addEventListener('change')
    } 
}));

// function to fill color
function addColor(e) {
    e.preventDefault();

    let penColor;
    if (picker.disabled) {
        // generate random colors
        penColor = "#"+((1<<24)*Math.random()|0).toString(16); 
    } else {
        // use chosen color
        penColor = picker.value;
    }
    
    this.style.backgroundColor = penColor;
}

// function to start sketching
function startSketch(e) { 
    e.preventDefault();
    const divs = document.querySelectorAll('#container > div');
    divs.forEach(div => div.addEventListener('mouseover', addColor));
}

// function to stop sketching
function stopSketch(e) {
    e.preventDefault();
    const divs = document.querySelectorAll('#container > div');
    divs.forEach(div => div.removeEventListener('mouseover', addColor));

}

container.addEventListener('mousedown',startSketch);
container.addEventListener('mouseup',stopSketch);

// reset button
reset.addEventListener('click', () => {
    const divs = document.querySelectorAll('#container > div');
    divs.forEach(div => div.style.backgroundColor = DEFAULT_BG);
})
/*
// set eraser option
erasers.forEach(eraser => eraser.addEventListener('change', () => {
    if (eraser.value === 'eraser') {
        
    } else if (eraser.value === 'eraseall') {
        const divs = document.querySelectorAll('#container > div');
        divs.forEach(div => div.style.backgroundColor = DEFAULT_BG);
    } 
}));
*/