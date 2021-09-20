(function () {
  const {
    gsap,
    ScrollTrigger,
    gsap: { to, set, fromTo } } =
    window;

  gsap.registerPlugin(ScrollTrigger);

  to('.firepit', {
    scrollTrigger: {
      scrub: 1,
      start: () => 0,
      end: () => window.innerHeight
    },

    scaleY: 10,
    scaleX: 10,
    opacity: .3
  });

  to('.pkd-writing-image', {
    scrollTrigger: {
      scrub: 1,
      start: () => 700,
      end: () => window.innerHeight
    },

    scale: 1,
    opacity: 1
  });


})();