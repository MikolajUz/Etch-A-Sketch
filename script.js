const container = document.querySelector('#container');
const containerSize = 500;



function boxCreate(gridDim) {
    let box = [];
    for (i = 0; i < gridDim * gridDim; i++) {
        box[i] = document.createElement('div');
        box[i].style.height = `${boxDimensions(gridDim) - 1.82}px`;
        box[i].style.width = `${boxDimensions(gridDim) - 1.82}px`;
        box[i].classList.add('box');
        pixelTrail(box[i]);
        container.appendChild(box[i]);
    }
}

function boxDimensions(gridDim) {
    dimensionSize = containerSize / gridDim;
    return dimensionSize;
}
function pixelTrail(pixel) {
    pixel.addEventListener('mouseover', event => {
        pixel.style.backgroundColor='black';

    });
}

boxCreate(10);



