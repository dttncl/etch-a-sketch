const container = document.querySelector('#container');
const sizes = document.querySelectorAll('#size > fieldset > input');

// default values
const DEFAULT_COLOR = '#D81B60;';

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

// create grid
function createGrid (area) {
    console.log(area)
    for (let i = 0; i < area; i++) {
        const div = document.createElement('div');
        div.style.width = 500 / area**(1/2) + "px";
        div.style.height = 500 / area**(1/2) + "px";
        container.appendChild(div);
    }
}

// function to fill color
function addColor(e) {
    e.preventDefault();
    this.classList.add('fill');
}

// function to start sketching
function startSketch(e) {
    e.preventDefault();
    const divs = document.querySelectorAll('#container > div');
    console.log(divs)
    for (let div of divs) {
        div.addEventListener('mouseover', addColor)
    }
}

// function to stop sketching
function stopSketch(e) {
    e.preventDefault();
    const divs = document.querySelectorAll('#container > div');
    for (let div of divs) {
        div.removeEventListener('mouseover', addColor)
    }
}

const sketch = document.querySelector('#container');
sketch.addEventListener('mousedown',startSketch);
sketch.addEventListener('mouseup',stopSketch);

