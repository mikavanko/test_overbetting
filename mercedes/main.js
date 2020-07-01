document.querySelector('body').addEventListener('click', function(e) {
    e.stopPropagation();

	if(e.target.classList.contains('sidebar__content__item') || e.target.parentNode.classList.contains('sidebar__content__item')) {
        var _target = e.target.closest('.sidebar__content__item');
        var choosed = document.querySelector('.sidebar__content__item.choosed');
        var price = _target.getAttribute('data-price');

        if(choosed) choosed.classList.remove('choosed');
        _target.classList.add('choosed');
        document.querySelector('.main__price__value').innerHTML = price;
	}
});