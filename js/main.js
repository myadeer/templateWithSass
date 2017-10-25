$(function(){
    'use strict';
    $(window).on("resize",function(){
    	$('.heading ,.overlay').height($(window).height());
    })
    $('html').niceScroll();
    $('.nicescroll-cursors').css({
    	'border':'none',
    	'background-color': 'rgb(61, 121, 85)'
    });
   
    // Do something.
    $('.heading ,.overlay').height($(window).height());
     
    $.fn.elementcenter=function(){
    	$(this).css({
    		'top':($(window).height()-$(this).height())/2
    	})
    }
    $('.cen').elementcenter();
    //start project
    $('.project ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.myhover').fadeOut(.1);
     var mybut=$(this).data('class');
     if($('img').hasClass(mybut)){
     	//console.log ($('img').hasClass());
       $('img[alt="' + mybut + '"]').next('.myhover').fadeIn();
     }
     else{
     	 $('img[alt="' + mybut + '"]').next('.myhover').css('opacity','0');
     }
 });

 });