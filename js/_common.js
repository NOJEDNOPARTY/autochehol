var common = {
	init: function() {
		common.main();
  },
	main: function() {

    $('.phone-mask').mask("+380(99)999-99-99");

    $('.lang').click(function(){
      $(this).toggleClass('active');
    });

    $('.nav-trigger').click(function(){
      $('header').toggleClass('open');
    });

    $('.callback-btn').click(function(e){
      e.preventDefault();
      $('header').removeClass('open');
      $('#callBackPopup').addClass('active');
    });
    $('.popup-close').click(function(){
      $('.popup-wrapper').removeClass('active');
    });



    $('.documents').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

  
    $(document).mouseup(function (e){
      var div = $(".lang");
      if (!div.is(e.target)
          && div.has(e.target).length === 0) {
        div.removeClass('active');
      }
    });
    
    // new WOW().init();

    $("nav, .banner-cnt").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 20}, 1500);
      $("header").removeClass('open');
    });


    $('.card-wrapper-1 .card-cnt').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      fade: true,
      infinite: false,
      asNavFor: '.card-wrapper-1 .card-nav'
    });
    $('.card-wrapper-1 .card-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.card-wrapper-1 .card-cnt',
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      infinite: false,
    });
    $('.card-wrapper-2 .card-cnt').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      fade: true,
      infinite: false,
      asNavFor: '.card-wrapper-2 .card-nav'
    });
    $('.card-wrapper-2 .card-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.card-wrapper-2 .card-cnt',
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      infinite: false,
    });
    $('.card-wrapper-3 .card-cnt').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      fade: true,
      infinite: false,
      asNavFor: '.card-wrapper-3 .card-nav'
    });
    $('.card-wrapper-3 .card-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.card-wrapper-3 .card-cnt',
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      infinite: false,
    });

    function cardWrapperHeight() {
      var h = $('#product .wrapper').height();
      $('#product .wrapper').css('height', h);
      setTimeout(function(){
        $('#product .wrapper').css('height', 'auto');
      }, 300)
    }

    cardWrapperHeight()

    $('.best-tabs button').click(function(e){
      e.preventDefault();

      cardWrapperHeight();

      $('.best-tabs button').removeClass('btn');
      $('.card-wrapper').removeClass('active');
      var dataAttr = '.' +  $(this).attr('data-name');

      var thisBtn = $(this)
      setTimeout(function(){
        thisBtn.addClass('btn');
        $(dataAttr).addClass('active');
      }, 10)

    });







    // $('.best-tabs button').each(function(){
    //   var cardCnt = '.' + $(this).attr('data-name') + ' .card-cnt';
    //   var cardNav = '.' + $(this).attr('data-name') + ' .card-nav';
    //   $(cardCnt).slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     fade: true,
    //     infinite: false,
    //     asNavFor: cardNav
    //   });
    //   $(cardNav).slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: cardCnt,
    //     dots: false,
    //     arrows: false,
    //     centerMode: false,
    //     focusOnSelect: true,
    //     infinite: false,
    //   });
    // });



		// $('#form__1').submit(function(e) {
		// 	var phoneMask = $(this).parent().find('.phone-mask');
		// 	if(phoneMask.val() != 0) {
		// 		$.ajax({
		// 			type    : "POST",
		// 			url     : "/mail/send.php",
		// 			success: function(data){
		// 				// $('.popup-wrapper').removeClass('active');
		// 				// setTimeout(function(){
  //             $('#thanksPopup').addClass('active');
		// 				// }, 1000);
		// 			}
		// 		});
		// 	}
		// 	e.preventDefault();
		// });


    function quizStart(){  
      if(localStorage.getItem('quiz') != 'clicked') {
        $('#quiz').addClass('active');
      }
    }

    setTimeout(function(){
      quizStart();
    }, 6000);

    $(document).mouseleave(function(e){
      if(e.clientY < 0) {
          quizStart();
          localStorage.setItem('quiz', 'clicked');
      }
    })
    $('.next-step').click(function(e){
      e.preventDefault();
      var step = "." +  $(this).attr('data-test');

      $('.test-item').addClass('test-hidden');
      $(step).removeClass('test-hidden');
      localStorage.setItem('quiz', 'clicked');
    });



    // $('.call-thanksPopup').click(function(e) {
    //   e.preventDefault();

    //   var phoneField = $(this).parent().find('.phone-mask').val();

    //   if(phoneField != 0) {
    //     $('#thanksPopup').addClass('active');
    //     setTimeout(function(){
    //       location.reload();
    //     }, 5000);
    //   }else {
    //     $(this).parent().find('.phone-mask').addClass('error');
    //     setTimeout(function(){
    //       $(this).parent().find('.phone-mask').removelass('error');
    //     }, 3000);
    //   }
    // });


	}
};

(function() {
	common.init();
}());
