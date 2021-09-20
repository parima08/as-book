(function () {
    gsap.registerPlugin(ScrollTrigger);

    const width = 1500; //document.querySelector(".horizontal-scroll-window").scrollWidth * .65;
    console.log(width);


    //const innerWidth = 1000;
    gsap.to(".horizontal-scroll-window", {
        xPercent: -80,
        x: () => -200,
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-scroll-container",
            start: "bottom bottom",
            end: () => width,
            scrub: true,
            pin: '.six-fundas',
            invalidateOnRefresh: true,
            anticipatePin: 1,
            markers: true,
        }
    });


    //let sections = gsap.utils.toArray(".funda-card");

    // gsap.to(sections, {
    //     xPercent: -100 * (sections.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".container",
    //         pin: true,
    //         scrub: 1,
    //         snap: directionalSnap(1 / (sections.length - 1)),
    //         // base vertical scrolling on how wide the container is so it feels more natural.
    //         end: "+=3500"
    //     }
    // });




    // // helper function for causing the sections to always snap in the direction of the scroll (next section) rather than whichever section is "closest" when scrolling stops.
    // function directionalSnap(increment) {
    //     let snapFunc = gsap.utils.snap(increment);
    //     return (raw, self) => {
    //         let n = snapFunc(raw);
    //         return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
    //     };
    // }
})();
