var myswiper= new Swiper('.page',{});
$('nav').on('click','a',function(){
    var ind = $(this).index();
    myswiper.slideTo(ind);
});
$('footer').on('click','dl',function(){
    var ind = $(this).index();
    $(this).addClass('bg').siblings().removeClass('bg');
    myswiper.slideTo(ind);
});