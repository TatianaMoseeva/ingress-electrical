/*SLIDERS */
$(document).ready(function(){
    $('.works__items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><div class="arrow_wrap"><img src="../icons/works/left_arrow.svg" alt="previous"></img>Previous</div></button>',
        nextArrow:  '<button type="button" class="slick-next"><div class="arrow_wrap">Next<img src="../icons/works/right_arrow.svg" alt="next"></img></div></button>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    $('.commitments__wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/services/left.svg" alt="left"></img></button>',
      nextArrow:  '<button type="button" class="slick-next"><img src="icons/services/right.svg" alt="right"></button>',
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick"
        },
         {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
         }
      ]
   });
  });


/* FAQ */
const   question = document.querySelectorAll('.faq__question'),
        minus = Array.from(document.querySelectorAll('.vertical'));

        for (let i = 0; i < question.length; i++) {
            question[i].addEventListener('click', () => {
                minus[i].classList.toggle('vertical-active');
                let answer = question[i].nextSibling;
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                    answer.classList.remove('faq__answer-active');
                }else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.classList.add('faq__answer-active');
                }
            });
        }


/*SERVICES TABS*/
const   tabsParent = document.querySelector('.services__tabs'),
        tabs = document.querySelectorAll('.services__tab'),
        tabsContent = document.querySelectorAll('.services__content');

function hideTabContent() {
  tabsContent.forEach(item => {
    item.style.display = "none";
  });

  tabs.forEach(item => {
    item.classList.remove('services__tab_active');
  });
}

function showTabContent(i) {
  tabsContent[i].style.display = "block";
    tabs[i].classList.add('services__tab_active');
  }

hideTabContent();
showTabContent(0);

tabsParent.addEventListener('click', (event) => {
  if (event.target && event.target.closest('li').classList.contains('services__tab')) {
    tabs.forEach((item, i) => {
      if(event.target == item || event.target.parentElement == item) {
      hideTabContent(0);
      showTabContent(i);
      }
    });
  }
});

/*GALLERY*/
function showGallery(item) {
  $(item).each(function(i) {
      $(this).on('click', function(e) {
          e.preventDefault();
          $('.overlay-gallery').eq(i).addClass('overlay-gallery_active');
          document.body.style.overflow = 'hidden';
          $('.gallery__photos').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            fade: true,
            cssEase: 'linear',
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="../icons/services/left.svg" alt="left"></img></button>',
            nextArrow:  '<button type="button" class="slick-next"><img src="icons/services/right.svg" alt="right"></button>',
            speed: 400
        }); 
      });
  });
}
showGallery('[data-modal=gallery]');

function closeGallery(item) {
  $(item).each(function(i) {
      $(this).on('click', function(e) {
          e.preventDefault();
          $('.overlay-gallery').eq(i).removeClass('overlay-gallery_active');
          document.body.style.overflow = '';
          $('.gallery__photos').slick('unslick'); 
      });
  });
}
closeGallery('.gallery__close');



/*REVIEWS*/
$(document).ready(function(){
    $(".reviews__item").slice(0, 2).show();
    $(".btn_reviews").on("click", function(e){
      e.preventDefault();
      $(".reviews__item:hidden").slice(0, 2).slideDown();
      if($(".reviews__item:hidden").length == 0) {
        $(".btn_reviews").addClass("btn_reviews-hidden");
      }
    });
  });


/*MODAL QUOTE*/
const quoteBtns = document.querySelectorAll('[data-modal=quote]'),
      overlay = document.querySelector('.overlay-quote'),
      closeBtns = document.querySelectorAll('.modal__close');

  function closeModal() {
    overlay.style.display="none";
    document.body.style.overflow = '';
  }
  function showModal(e) {
    e.preventDefault();
    document.body.style.overflow = 'hidden';
    overlay.style.display="block";
  }

closeBtns.forEach(btn =>
  btn.addEventListener('click', closeModal)
  );

quoteBtns.forEach(btn =>
  btn.addEventListener('click', showModal)
);

/*MODAL POLICY*/
const policyBtns = document.querySelectorAll('[data-modal=policy]'),
      policy = document.querySelector('.overlay-policy'),
      closeCrosses = document.querySelectorAll('[data-modal=close]');

  function closePolicy() {
    policy.style.display="none";
    document.body.style.overflow = '';
  }
  function showPolicy(e) {
    e.preventDefault();
    document.body.style.overflow = 'hidden';
    policy.style.display="block";
  }

closeCrosses.forEach(btn =>
  btn.addEventListener('click', closePolicy)
  );

policyBtns.forEach(btn =>
  btn.addEventListener('click', showPolicy)
);

/*MENU*/
const menu = document.querySelector('.promo__list'),
      menuItem = document.querySelectorAll('.promo__link'),
      hamburger = document.querySelector('.hamburger');

  function toggleMenu() {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('promo__list_active');
  }

  hamburger.addEventListener('click', toggleMenu);

  menuItem.forEach(item => 
    item.addEventListener('click', toggleMenu)
  );
