var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');

burger.addEventListener('click', function(e){
    e.preventDefault();
    this.classList.toggle('opened');
    menu.classList.toggle('opened');
})


document.querySelector('.menu-list-item--has-sub-mob > .menu-list-link').addEventListener('click',function(e){
    e.preventDefault();
    menu.classList.add('subopened');
})

document.querySelector('.menu-list-link--back').addEventListener('click',function(e){
    e.preventDefault();
    menu.classList.remove('subopened');
})