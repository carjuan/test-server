/* eslint-disable */
// google maps
function initMap() {
  // element to display map
  const mapElement = document.querySelector('.map');
  console.log(mapElement);
  // Business location
  const loc = { lat: 49.900501, lng: -97.139313 };
  // centered map on location
  const map = new google.maps.Map(mapElement, { zoom: 14, center: loc });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map });
  console.log(marker);
}

// var scroll = new SmoothScroll('a[href*="#"]');
// new WOW().init();
new WOW().init();
/**
 * This function will run  a throttled script every 300 ms for the navbar scroll
 * event listener
 */
const checkNavbar = _.throttle((e) => {
  // select element to change for scroll events
  const navbarElement = document.querySelector('.navbar');
  // grab element to signify when to change navbar's style
  const elementToStartChange = document
    .querySelector('section#what-we-do-section')
    .getClientRects()[0].y;
  // console.log(startChangeAtElement);

  // add class sticky pass the 100 pixels
  if (elementToStartChange < 110) {
    navbarElement.classList.add('navbar--sticky');
  } else {
    navbarElement.classList.remove('navbar--sticky');
  }
}, 300);

window.addEventListener('scroll', checkNavbar);

$(document).ready(function() {
  // herobox transition
  setTimeout(() => {
    $('.hero-showcase__title-wrapper').addClass(
      'hero-showcase__title-wrapper--transitioned'
    );
  }, 200);

  // Smooth scrolling - all browser support
  $('a').click(function(e) {
    e.preventDefault();
    if (this.hash !== '') {
      const { hash } = this;
      console.log(hash);

      $('html').animate(
        {
          scrollTop: $(hash).offset().top - 80
        },
        800
      );
    }
  });

  // hamburguer menu toggle
  $('.hamburguer-btn').click(function() {
    $('.nav-main').toggleClass('nav-main--open');
    $('.nav-toggle__link').toggleClass('nav-toggle__link--hidden');
  });

  $('.sidenav-quit').click(function() {

    $('.nav-main--open').toggleClass('nav-main--open');
    
  });

  // video-player clicked transition
  $('.who-section__play-button').on('click', function() {
    $(this).hide();
    console.log(this);
    $(videoPlayerTemplate).appendTo('body');
    console.log(videoPlayerTemplate);

    /**
     *
     * Vimeo player object creation
     * jQuery object returns an array-like object of selected elements
     *
     */
    const iframe = $('.video-player__video');
    const videoPLayer = new Vimeo.Player(iframe);
    videoPLayer.play();
    console.log('then event...');
    // adding the quit video control event
    $('.video-player__controls-close').on('click', function() {
      $('.who-section__play-button').show();
      $('.viewport-overlay').remove();
      $('.video-player').remove();
    });
  });
});
