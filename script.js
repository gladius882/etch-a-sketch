let container = document.querySelector("#sketch");

function draw(elements) {
    container.innerHTML = '';

    let size = (container.offsetWidth / elements) - 2;

    for(let i=0; i<elements * elements; i++) {

        let div = document.createElement('div');
        div.style.height = size + 'px';

        div.addEventListener('mouseover', onMouseOver);

        container.appendChild(div);

        if( (i+1) % elements == 0 && i != 0) {
            let wrapDiv = document.createElement('div');
            wrapDiv.classList.add('wrap');
            container.appendChild(wrapDiv);
        }
    }
}

function onMouseOver(e) {
    e.target.style.backgroundColor = 'red';
}

document.addEventListener('DOMContentLoaded', () => {
    draw(16);
})