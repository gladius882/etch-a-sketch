function draw(elements) {
    let container = document.querySelector("#sketch");
    container.innerHTML = '';

    for(let i=0; i<elements * elements; i++) {

        let div = document.createElement('div');

        if(i % elements == 0) {
            div.classList.add('wrap');
        }

        container.appendChild(div);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    draw(16);
})