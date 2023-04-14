const container = document.querySelector('#container');
const containerSize = 500;

const pixelGrid=document.getElementById("slider");
piks=document.querySelector('slidercont');
piks.addEventListener('mouseup',event => {
    BoxRemove()
    boxCreate(pixelGrid.value);
    
});
var option='';
const buttons=document.querySelectorAll('button');
buttons.forEach(el=>el.addEventListener('click',event=>{
    listenerRemove();
    pixelTrailChange(el.id); 
    if(el.id!=='erase'){
        option=el.id;
    }
    console.log(option);
       
}))



function boxCreate(gridDim) {
    let box = [];
    for (i = 0; i < gridDim * gridDim; i++) {
        box[i] = document.createElement('div');
        box[i].style.height = `${boxDimensions(gridDim) - 1.82}px`;
        box[i].style.width = `${boxDimensions(gridDim) - 1.82}px`;
        box[i].classList.add('box');
        box[i].style.backgroundColor='rgb(255, 255, 255)';
        container.appendChild(box[i]);
        pixelTrailChange(option);
    }
}

function boxDimensions(gridDim) {
    dimensionSize = containerSize / gridDim;
    return dimensionSize;
}


function colorRandom(){
    let color="#" + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor=color;
}
function shade(){
        let temp=this.style.backgroundColor.substring(4);
        let array= temp.split(',');
        array[2]=array[2].slice(0,-1);
        this.style.backgroundColor='rgb('+(array[0]-32)+', '+(array[1]-32)+', '+(array[2]-32)+')';     
}
function blackPix(){
    this.style.backgroundColor="rgb(0, 0, 0)";
}

function BoxRemove(){
    container.querySelectorAll('div').forEach(el=>el.remove());
}
function listenerRemove(){
    container.querySelectorAll('div').forEach(el=>{
        el.removeEventListener('mouseover', blackPix);
        el.removeEventListener('mouseover', colorRandom);
        el.removeEventListener('mouseover', shade);
        }); 
    }
function erase(){
   container.querySelectorAll('div').forEach(el=>el.style.backgroundColor='rgb(255, 255, 255)');
}


function pixelTrailChange(button){
    
    if(button==='shading'){
        container.querySelectorAll('div').forEach(el=>el.addEventListener('mouseover',shade));
        };
    
    if(button==='rainbow'){
        container.querySelectorAll('div').forEach(el=>el.addEventListener('mouseover', colorRandom));
        };

    if(button==='black'){
       container.querySelectorAll('div').forEach(el=>el.addEventListener('mouseover', blackPix)); 
        };
        
    if(button==='erase'){
        erase();
        pixelTrailChange(option);
    }
}
    boxCreate(25); 






