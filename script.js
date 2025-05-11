let container = document.querySelector("#sketch");

function draw(elements) {
    container.innerHTML = '';

    let size = 0;

    for(let i=0; i<elements * elements; i++) {

        let div = document.createElement('div');

        if( (i+1) % elements == 0 && i != 0) {
            let wrapDiv = document.createElement('div');
            wrapDiv.classList.add('wrap');
            container.appendChild(wrapDiv);
        }

        container.appendChild(div);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    draw(16);
})