var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');
var sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', function(e){
    e.preventDefault();
    this.classList.toggle('opened');
    menu.classList.toggle('opened');
})


document.querySelectorAll('.sidebar-list-item--sub > .sidebar-list-link').forEach(function(i,v){
    i.addEventListener('click',function(e){
        e.preventDefault();
        var p = this.closest('.sidebar-list-item--sub');
        var sub = p.querySelector('.sidebar-sub-list');
        sub.style.display = 'block';
        sidebar.classList.add('subopened');
    })
})

document.querySelectorAll('.sidebar-sub-list-link--back').forEach(function(i,v){
    i.addEventListener('click',function(e){
        e.preventDefault();
        var p = this.closest('.sidebar-list-item--sub');
        var sub = p.querySelector('.sidebar-sub-list');
        sidebar.classList.remove('subopened');

        setTimeout(function(){
            sub.removeAttribute("style");
        },300)
    })
})

document.querySelector('.catalog-btn-mob').addEventListener('click', function(e){
    e.preventDefault();
    sidebar.classList.toggle('opened');
})