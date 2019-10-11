function createPad(res) {
    const CONTAINER = document.getElementById('container');
    for (let i = 1, yDiv; i <= res; i++) {
        yDiv = document.createElement('DIV');
        yDiv.setAttribute('class', 'yDiv')
        for (let j = 1, xDiv; j <= res; j++) {
            xDiv = document.createElement('DIV');
            xDiv.setAttribute('class', 'xDiv')
            yDiv.append(xDiv);
        }
        CONTAINER.append(yDiv);
    }
}

function writeOnPad(e) {
    if (e.buttons == 1) {
        return;
    }
    e.target.style.backgroundColor = 'black';
}

function clearPad() {
    document.querySelectorAll('.xDiv').forEach(function (div) {
        if (div.style.backgroundColor) {
            div.style.backgroundColor = '';
        }
    });
}

function newPad() {
    let eraser = document.getElementById('erase_but');
    let r = +prompt(`Please Choose Resolution between 16 - 128`, '32');
    if (r > 128) {
        r = 128;
    }
    else if (r < 16) {
        r = 16;
    }
    else {
        r = r;
    }
    document.querySelectorAll('.yDiv').forEach(div => div.remove());
    createPad(r);
    if (eraser.classList.contains('but_focused')) {
        eraser.classList.toggle('but_focused');
        eraser.classList.add('draw');
        eraser.innerText = 'Eraser'
    }
    document.querySelectorAll('.xDiv').forEach(div => div.addEventListener('mouseenter', writeOnPad));
}

function erasePad(e) {
    if (e.target.style.backgroundColor) {
        e.target.style.backgroundColor = '';
    }
}

function toggleErasePad(e) {
    if (e.target.classList.contains('draw')) {
        document.querySelectorAll('.xDiv').forEach(div => div.removeEventListener('mouseenter', writeOnPad));
        document.querySelectorAll('.xDiv').forEach(div => div.addEventListener('mouseenter', erasePad));
        e.target.classList.toggle('draw');
        e.target.classList.toggle('but_focused');
        e.target.innerText = 'Draw';
    } else {
        document.querySelectorAll('.xDiv').forEach(div => div.removeEventListener('mouseenter', erasePad));
        document.querySelectorAll('.xDiv').forEach(div => div.addEventListener('mouseenter', writeOnPad));
        e.target.classList.toggle('draw');
        e.target.classList.toggle('but_focused');
        e.target.innerText = 'Eraser';
    }
}

createPad(16);

document.querySelectorAll('.xDiv').forEach(div => div.addEventListener('mouseenter', writeOnPad));
document.getElementById('clear_but').addEventListener('click', clearPad);
document.getElementById('resolution_but').addEventListener('click', newPad);
document.getElementById('erase_but').addEventListener('click', toggleErasePad);