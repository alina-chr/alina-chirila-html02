const carouselInstance = new Glide('.glide', {
  rewind: true,
  type: 'carousel',
  perView: 4,
  breakpoints: {
    800: {
      perView: 2,
    },
  },
});

carouselInstance.mount();
