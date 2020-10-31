$(function (){
    $('.carousel-left').on('click',function(e){
        let car = $(this).closest('.carousel');
        car.carousel('prev');
    })
    $('.carousel-right').on('click',function(e){
        let car = $(this).closest('.carousel');
        car.carousel('next');
    })
    $('.carousel').on('slide.bs.carousel', function (e) {
        let car = $(this);
        let idx = e.to + 1
        car.find('.carousel-pagination-num-cur').html(`0${idx}`)
    })
    $('.carousel').each(function(i,car){
        let totalItems = $(this).find('.carousel-item').length
        $(this).find('.carousel-pagination-num-total').html(`0${totalItems}`)
    })
})