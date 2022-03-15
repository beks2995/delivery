$(document).ready(function () {


    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        dots: false,
        responsive: {
            0 : {
                items: 1
            },
            768 : {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    // Go to the next item
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


    $('ul.menu-tabs__caption').on('click', 'li:not(.menu-tabs__btn_active)', function() {
        $(this)
          .addClass('menu-tabs__btn_active').siblings().removeClass('menu-tabs__btn_active')
          .closest('div.menu-tabs').find('div.menu-tabs__content').removeClass('menu-tabs__content_active').eq($(this).index()).addClass('menu-tabs__content_active');
      });

    //   $('.faq__moreBtn').on('click', function(e) {
    //       e.preventDefault()
    //       $('#faq-hidden').toggleClass('faq__text_hidden')
    //       $('.faq__moreBtn').toggleClass('less')
    //       console.log(e.className);
    //       if(e.className.includes('less')){
    //          $('.faq__moreBtn').text('less...') 
    //       } else {
    //         $('.faq__moreBtn').text('see more...')  
    //       }
    //   })

    $('.burger').on('click', function(){
        $('.burger').toggleClass('burger_active')
        $('.header-nav').toggleClass('header-nav_active')
    })
});


const moreBtn = document.querySelector('.faq__moreBtn')
const hidden = document.getElementById('faq-hidden')
function checkBtnClass() {
    if(moreBtn.className.includes('less')){
        moreBtn.textContent = 'less...'
    } else {
        moreBtn.textContent = 'see more...' 
    }
}
moreBtn.addEventListener('click', function(e) {
    e.preventDefault()
    hidden.classList.toggle('faq__text_hidden')
    moreBtn.classList.toggle('less')
    checkBtnClass()
})