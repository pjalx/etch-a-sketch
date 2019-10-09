function createPad(size) {
    const CONTAINER = document.getElementById('container');
    CONTAINER.style.border = '1px solid black';
    for (let i = 1, yDiv; i <= size; i++) {
        yDiv = document.createElement('DIV');
        yDiv.setAttribute('class', 'yDiv')
        for (let j = 1, xDiv; j <= size; j++) {
            xDiv = document.createElement('DIV');
            xDiv.setAttribute('class', 'xDiv')
            yDiv.append(xDiv);
        }
        CONTAINER.append(yDiv);
    }
}
createPad(32);

document.querySelectorAll('.xDiv').forEach(div => div.addEventListener('mousemove', function(e) {
    if(e.buttons == 1) {
        return;
    }
    e.target.style.backgroundColor = 'black';
}));
