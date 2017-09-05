$(function(){

	// Яндекс метрики и гугл Аналитика

	$('.count_element').on('click',function(){
		ga('send','event','goal','goal');
		yaCounterXXXXXXXX.reachGoal('goal');
		return true;
	});

	$('.content__top').owlCarousel({
    loop: true,
    nav: true,
    navText : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
    responsive: {
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

});
