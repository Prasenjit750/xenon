$(document).ready(function() {
    $('.project-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
          }
    });

    $('.counter').counterUp();

    $('.testimonials').slick({
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
      dots: true,
    });

  });