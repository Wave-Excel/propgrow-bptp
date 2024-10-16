new Swiper(".swiper4", {  
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
    },
  breakpoints: {  
    '320': {
      slidesPerView: 1,
    },
    '480': {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    '768': {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '1000': {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    '1200': {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    '1400': {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  }
});
new Swiper(".swiper1", {  
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
    },
  breakpoints: {  
    '320': {
      slidesPerView: 1,
    },
    '480': {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    '768': {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '1000': {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    '1200': {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    '1400': {
      slidesPerView: 1,
    },
  }
  
});
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
    $('#dynamic').addClass('newClass');
  } else {
    $('#dynamic').removeClass('newClass');
  }
});
$('#toggle').click(function() {
$(this).toggleClass('active');
$('#overlay').toggleClass('open');
}),
$(".menu ul li a").click(function() {
$('#toggle').removeClass('active');
$('#overlay').removeClass('open');
}),  
$('.menu ul li a[href^="#"]').on("click", function(t) {
t.preventDefault();
var i = this.hash,
    e = $(i);
$("html, body").stop().animate({
    scrollTop: e.offset().top - 83 
}, 1000, "swing", function() {})
}),
$('.banner-arrow[href^="#"]').on("click", function(t) {
t.preventDefault(); 
var i = this.hash,
    e = $(i);
$("html, body").stop().animate({
    scrollTop: e.offset().top - 80
}, 1000, "swing", function() {})
}),
function(e) {
  e.fn.loadScroll = function(t) {
      var n, i, o = e(window),
          r = this;
      r.one("loadScroll", function() {
          if (this.getAttribute("data-src")) {
              if (this.setAttribute("src", this.getAttribute("data-src")), this.removeAttribute("data-src"), !t) return !1;
              e(this).hide().fadeIn(t).add("img").removeAttr("style")
          }
      }), o.scroll(function() {
          n = r.filter(function() {
              var t = o.scrollTop(),
                  n = o.height(),
                  i = e(this).offset().top;
              return i + e(this).height() >= t && i <= t + n
          }), i = n.trigger("loadScroll"), r = r.not(i)
      })
  }
}(jQuery), $(function() {
  $("img").loadScroll(500)
});
var swiper = new Swiper('.featured-projects-swiper', { 
  spaceBetween: 0,
  slidesPerView: 3,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
  autoplay: {
      delay: 4500,
      disableOnInteraction: false, 
  }, 
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {  
'320': {
  slidesPerView: 1,
},
'480': {
  slidesPerView: 2,
},
'768': {
  slidesPerView: 2,
},
'1000': {
  slidesPerView: 3,
},
'1200': {
  slidesPerView: 3,
},
'1400': {
  slidesPerView: 3,
},
}
});  