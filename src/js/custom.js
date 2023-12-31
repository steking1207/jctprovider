(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.7";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//if ( window.location.hash ) scroll(0,0);
//// void some browsers issue
//setTimeout( function() { scroll(0,0); }, 1);

$(function(){
    $('.anchor').click(function(){
		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 95}, 750);
		return false;
	});

//    $('.scroll').on('click', function(e) {
//        e.preventDefault();
//        $('html, body').animate({
//            scrollTop: $($(this).attr('href')).offset().top + 'px'
//        }, 750);
//    });
//    if(window.location.hash) {
//        $('html, body').animate({
//            scrollTop: $(window.location.hash).offset().top + 'px'
//        }, 750);
//    }    
    
//    $('.dropdown').hover(function(){
//        $('.dropdown-toggle', this).trigger('click');
//    });
    $('li.dropdown').on('click', function() {
        var $el = $(this);
        if ($el.hasClass('open')) {
            var $a = $el.children('a.dropdown-toggle');
            if ($a.length && $a.attr('href')) {
                location.href = $a.attr('href');
            }
        }
    });
    
    $('.modal').on('shown.bs.modal', function (e) {
        $('html').addClass('freezePage');
        $('body').addClass('freezePage');
        $('.slider-modal').resize();
        $('.slider-modal').slick("setPosition", 0);
    });
    $('.modal').on('hidden.bs.modal', function (e) {
        $('html').removeClass('freezePage');
        $('body').removeClass('freezePage');
    });

    $('.slider-modal').slick({
        dots: true,
//        autoplay: true,
    });
});

var Sticky = new hcSticky('.sidebar', {
    stickTo: '.content',
    innerTop: -80,
    queries: {
        980: {
            disable: true
        }
    }
});
$('#menu').hcSticky({
//    noContainer: true
//    top: 0
  });

$('.btn-like').click(function(){
    $(this).find('i').toggleClass('far fas')
});
$('.btn-smile').click(function(){
    $(this).find('i').toggleClass('far fas')
});
$('.btn-meh').click(function(){
    $(this).find('i').toggleClass('far fas')
});
$('.btn-frown').click(function(){
    $(this).find('i').toggleClass('far fas')
});
