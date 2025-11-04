$('.owl-carousel').owlCarousel({
  autoplay: false,
  // autoplayTimeout: 5000,
  // autoplayHoverPause: true,
  // loop: true,
  margin: 50,
  responsiveClass: true,
  nav: true,
  loop: true,
  stagePadding: 0,
  responsive: {
    0: {
      items: 1
    }//,
    // 568: {
    //   items: 2
    // },
    // 600: {
    //   items: 3
    // },
    // 1000: {
    //   items: 3
    // }
  }
});