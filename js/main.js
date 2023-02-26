const elCount = document.querySelector('input[name=counParallel]');
const elBtn = document.querySelector('button[name=btnGo]');
const elArrParall = document.querySelector('.arrParallel');

elBtn.addEventListener('click', () => {
    elArrParall.innerHTML = '';
    let count = elCount.value;
    if (count > 0) {
        for( let i=1; i<=count; i=i+1 ) {
            elArrParall.innerHTML = elArrParall.innerHTML + `<div class="parallel" id="${i}"></div>`;
        }
    }
    else {
        elArrParall.innerHTML = `Введіть число більше 0!`;
        return;
}
})

elArrParall.addEventListener('click', (ev) => {
    if(ev.target.classList.value != 'parallel') 
    {
        //ev.target.style.visibility = 'hidden';
        ev.target.classList.remove('number');
        ev.target.innerHTML = '';
        elCount.value = '';
        return;
    } else {
        ev.target.innerHTML = ev.target.id;
        ev.target.classList.add('number');
        //ev.target.classList.toggle('number');
        //console.log(ev.target.classList);
    }
})
