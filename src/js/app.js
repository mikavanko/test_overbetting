// import './module/cat';

document.addEventListener('click', function (e) {
    e.preventDefault();
    const el = e.target;
    const className = 'contest-menu-link';

    if (el && el.className === className) {
        const id = el.attributes.href.value;

        document.querySelector(`.${className}.active`).classList.remove('active');
        document.querySelector('.contest-tab.active').classList.remove('active');

        el.classList.add('active');
        document.querySelector(id).classList.add('active');
    }
});

function toggleMenu() {
    const menu = document.querySelector('.header-menu');
    const burger = document.querySelector('.burger');
    const bg = document.querySelector('.mob-bg');

    menu.classList.toggle('opened');
    burger.classList.toggle('opened');
    bg.classList.toggle('opened');
}

document.querySelector('.burger').addEventListener('click', toggleMenu);
document.querySelector('.mob-bg').addEventListener('click', toggleMenu);
