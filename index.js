const container = document.querySelector('#container');

// create grid
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
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