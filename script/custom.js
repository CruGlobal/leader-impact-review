// Show the first tab and hide the rest
$('.story-item:first-child').addClass('active');
$('.story-tab').hide();
$('.story-tab:first-child').show();

// Click function
$('.story-item').mouseenter(function(){
  $('.story-item').removeClass('active');
  $(this).addClass('active');

 // $(this).addClass('active');
  $('.story-tab').hide();
  
  var activeTab = $(this).first('a').attr('href');
  $(activeTab).css('display', 'flex');
  return false;
});


$('.hamburger').click(function(){
    toggleMobileMenu();
});

var mobile_menu_open = false;
function toggleMobileMenu() {
if (mobile_menu_open) {
    $('.close').css('display', 'none');
    $('.open').css('display', 'flex');
    $('.mobile-nav-wrap').slideUp('slow');
} else {
    $('.open').css('display', 'none');
    $('.close').css('display', 'flex');
    $('.mobile-nav-wrap').slideDown(500, function(){
        $(this).css('display', 'flex');
    });
}
mobile_menu_open = !mobile_menu_open;
}


$('.search').click(function(){
    $('.header').addClass('active');
    $('.search-bar').css('display', 'flex');
    $('.header .container').css('display', 'none');
});
$('.close-search').click(function(){
    $('.header').removeClass('active');
    $('.search-bar').css('display', 'none');
    $('.header .container').css('display', 'flex');
});



$('.product-slider').slick({
    dots: false,
	slidesToShow: 3,
	adaptiveHeight: false,
	infinite: true,
    centerMode: true,
    variableWidth: false,
	speed: 500,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><img src='./assets/left-arrow.svg'></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><img src='./assets/right-arrow.svg'></button>",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});



$('.latest-post .post-wrap').slick({
    dots: false,
	slidesToShow: 2,
	adaptiveHeight: false,
	infinite: true,
    variableWidth: false,
	speed: 500,
    arrows: false,
    responsive: [
        {
        breakpoint: 9999,
            settings: "unslick"
        },
        {
        breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode: true,
                centerPadding: '20px',
                autoWidth: true,
                variableWidth: false
            }
        },
        {
        breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode: false,
                autoWidth: false,
                variableWidth: false
            }
        }
    ]
});
