const hexColors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
let colorHistory = [];
let currentHex = '#';
let latestHax = '';
let count = 0;

const background = document.querySelector('.background');
const changeBtn = document.querySelector('.change-btn');
const previousBtn = document.querySelector('.previous-btn');
const resetBtn = document.querySelector('.reset-btn');
const saveBtn = document.querySelector('.save-btn');
const hexValue = document.querySelector('.hex-value');
const savedColorsContainer = document.querySelector('.saved-colors-container');

changeBtn.addEventListener('click', () => {
    for( i = 0; i < 6; i+=1) {
        currentHex += hexColors[Math.floor(Math.random()*hexColors.length)]
    }
    colorHistory.push(currentHex);
    console.log(colorHistory);
    background.style.backgroundColor = currentHex;
    hexValue.innerHTML = colorHistory[colorHistory.length-1];
    latestHax = currentHex;
    currentHex = '#';
    count = colorHistory.length;
})

previousBtn.addEventListener('click', () => {
    let previousColor = colorHistory[count-2];
    hexValue.innerHTML = previousColor || colorHistory[0] || 'Click "next color" first :)';
    background.style.backgroundColor = previousColor;
    count = count - 1;
    if(count <= 0) {count = 0};
})

saveBtn.addEventListener('click', () => {
    let saveCount = count;
    let saveColor = (saveCount = colorHistory.length ? colorHistory[count-1] : colorHistory[count-2]);
    const colorToAdd = document.createElement('div');
    const innerX = document.createElement('span');
    innerX.innerText = 'x';
    colorToAdd.classList.add('color-box');
    colorToAdd.setAttribute('style', `background-color: ${saveColor};`);
    colorToAdd.innerText = saveColor;
    colorToAdd.append(innerX);
    savedColorsContainer.append(colorToAdd);
    console.log(savedColorsContainer);
})

resetBtn.addEventListener('click', () => {
    background.removeAttribute('style');
    hexValue.innerHTML = 'Pick a color...';
    savedColorsContainer.innerHTML = '';
    colorHistory = [];
    currentHex = '#';
    latestHax = '';
    count = 0;
})

document.addEventListener('click', (event) => {
    if(event.target.className == 'color-box') {
        event.target.remove();
    }
})
