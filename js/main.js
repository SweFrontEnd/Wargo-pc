$(document).ready(function(){

    //Toggle side nav
	$('.side-nav-bg').click(function(){
        var parent = $(this).parent();
        parent.toggleClass('active');
        parent.siblings().removeClass('active');

        //Scroll to click
        
        var top = $(this).offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 800);
    });

    //Slider top page
    $('.slider-banner').flexslider({
        animation: "slide",
        directionNav: true,
        controlNav: true,
        pauseOnHover: true,
        reverse: false,
        prevText: "",
        nextText: "",
        easing: "linear",
        slideshow:true
      });

    //Grid/List view
    $('.view-grid').addClass('active');

    $('.view-list').click(function(e){
        e.preventDefault();
        $('.product-list').addClass('list-view');
    });
    $('.view-grid').click(function(e){
        e.preventDefault();
        $('.product-list').removeClass('list-view');
    });

    $('.filter-view a').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    //Product list lightbox
    $('.product-gallery .product-gallery-item').click(function(){
        var srcImage = $(this).find('img').attr('src');
        var targetImage = $(this).closest('.product-desc').siblings('.product-img');
        targetImage.find('img').attr('src', srcImage);
    })
})