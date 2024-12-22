$(document).ready(function(){
  $('.testimonial-container').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    dots: true, 
    prevArrow: '<button type="button" class="slick-prev custom-arrow d-flex flex-column justify-content-center"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next custom-arrow d-flex flex-column justify-content-center"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 750,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: false,
      nextArrow: false
    }
  }
]
  });

  
  
$('.custom-arrow').on('click', function() {
  $('.custom-arrow').removeClass('active-arrow'); 
  $(this).addClass('active-arrow'); 
});

// animation
let offset1 = {
  offset: "80%"
}

let offset2 = {
  offset: "90%"
}

const animate_fadeInUp = "animate__animated animate__fadeInUp";
const animate_fadeInLeft = "animate__animated animate__fadeInLeft";
const animate_zoomInDown = "animate__animated animate__zoomInDown";

$(".hero-tagline").waypoint(function(){
  $(".hero-tagline").addClass(animate_fadeInLeft);
}, offset1);


$("#layanan .heading-section").waypoint(function(){
  $("#layanan .heading-section h2").addClass(animate_fadeInUp)
  $("#layanan .heading-section span").addClass(animate_fadeInUp)
}, offset2)

$("#layanan .card-layanan-container").waypoint(function(){
  $(this.element).addClass(animate_fadeInUp)
  $("#layanan .card-layanan-1").addClass(animate_fadeInUp)
  $("#layanan .card-layanan-2").addClass(animate_fadeInUp)
  $("#layanan .card-layanan-3").addClass(animate_fadeInUp)
}, offset1)

  // FAQ Functionality
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      item.addEventListener('click', () => {
          item.classList.toggle('active');

          // Close other items if only one should be open at a time
          faqItems.forEach(otherItem => {
              if (otherItem !== item) {
                  otherItem.classList.remove('active');
              }
          });
      });
  });
  document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('mouseenter', function () {
        const answer = this.nextElementSibling;
        if (answer) {
            answer.style.display = 'block'; // Tampilkan jawaban
            this.classList.add('open'); // Tambahkan rotasi pada panah
        }
    });

    arrow.addEventListener('mouseleave', function () {
        const answer = this.nextElementSibling;
        if (answer) {
            answer.style.display = 'none'; // Sembunyikan jawaban
            this.classList.remove('open'); // Kembalikan posisi panah
        }
    });
});

$("#layanan .button-container").waypoint(function(){
  $(this.element).addClass(animate_fadeInUp)
  $("#layanan .button-primary").addClass(animate_fadeInUp)
}, offset1)

$("#portofolio .heading-section").waypoint(function(){
  $(this.element).addClass(animate_fadeInLeft)
  $("#portofolio .heading-section h2").addClass(animate_fadeInLeft)
  $("#portofolio .heading-section span").addClass(animate_fadeInLeft)
}, offset1)


$("#portofolio .galeri-portofolio").waypoint(function(){
  $(this.element).addClass(animate_fadeInLeft)
  $("#portofolio .galeri-portofolio .img-1").addClass(animate_fadeInLeft)
  $("#portofolio .galeri-portofolio .img-2").addClass(animate_fadeInLeft)
  $("#portofolio .galeri-portofolio .img-3").addClass(animate_fadeInLeft)
  $("#portofolio .galeri-portofolio .img-4").addClass(animate_fadeInLeft)
  $("#portofolio .galeri-portofolio .img-5").addClass(animate_fadeInLeft)
  $("#portofolio .galeri-portofolio .img-6").addClass(animate_fadeInLeft)
  $("#portofolio .galeri-portofolio .img-7").addClass(animate_fadeInLeft)
  $("#portofolio .galeri-portofolio .img-8").addClass(animate_fadeInLeft)
}, offset1)

$("#portofolio .infografik-container").waypoint(function(){
  $(this.element).addClass(animate_fadeInLeft)
  $("#portofolio .infografik-container .infografik-item-1").addClass(animate_fadeInLeft)
  $("#portofolio .infografik-container .infografik-item-2").addClass(animate_fadeInLeft)
  $("#portofolio .infografik-container .infografik-item-3").addClass(animate_fadeInLeft)
},offset1)

$("#portofolio .button-gallery").waypoint(function(){
  $(this.element).addClass(animate_fadeInUp)
  $("#portofolio .button-gallery .button-primary").addClass(animate_fadeInUp)
},offset1)


$("#fitur .heading-testimoni").waypoint(function(){
  $(this.element).addClass(animate_fadeInUp)
  $("#fitur .heading-testimoni h2").addClass(animate_fadeInUp)
  $("#fitur .heading-testimoni p").addClass(animate_fadeInUp)
},offset1)


$("#fitur .testimonial-container").waypoint(function(){
  $(this.element).addClass(animate_fadeInUp)
  $("#fitur .testimonial-container .testimonial-item").addClass(animate_fadeInUp)
}, offset1)


$("#faq .slogan").waypoint(function(){
  $(this.element).addClass(animate_fadeInUp)
  $("#faq .slogan .text-1").addClass(animate_fadeInUp)
  $("#faq .slogan .text-2").addClass(animate_fadeInUp)
  $("#faq .slogan .text-3").addClass(animate_fadeInUp)
}, offset1)

$('.faq-container').waypoint(function(){
  $(this.element).addClass(animate_fadeInLeft)
  $('.faq-container h1').addClass(animate_fadeInLeft)
  $('.faq-container .faq-item').addClass(animate_fadeInLeft)

}, offset1)

$('#kontak .card-kontak').waypoint(function(){
  $(this.element).addClass(animate_fadeInLeft)
}, offset1)

$('#kontak .content-kontak').waypoint(function(){
  $(this.element).addClass(animate_fadeInUp)
}, offset1)

$('.section-title .heading-section').waypoint(function(){
  $(this.element).addClass(animate_fadeInUp)
  $('.section-title .heading-section h2').addClass(animate_fadeInUp)
  $('.section-title .heading-section p').addClass(animate_fadeInUp)
}, offset1)

});


