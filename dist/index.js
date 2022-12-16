let menu = document.getElementById('menu');
let menuBtn = document.getElementById('menu-btn')


/*
menuBtn.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menuBtn.classList.add('open');
    } else {
        menu.classList.add('hidden');
        menuBtn.classList.remove('open');
    }
}); */

//you can use toggle too... pretty easy

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menuBtn.classList.toggle('open');
}