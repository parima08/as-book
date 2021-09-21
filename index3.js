(function () {
    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
            invert: false,
        },
        // autoHeight: true,
        pagination: {
            el: '.blog-slider__pagination',
            clickable: true,
        }
    });

    const {
        gsap,
        ScrollTrigger,
        gsap: { to, set, fromTo, timeline } } =
        window;

    gsap.registerPlugin(ScrollTrigger);
    // window.onscroll = function (e) {
    //     console.log(window.scrollY); // Value of scroll Y in px
    // };

    // console.log(window.innerHeight);
    const introDiv = document.querySelector(".introduction");
    const introHeight = introDiv.scrollHeight * .65;

    console.log(introHeight, window.innerHeight, window.scrollHeight, introDiv.innerHeight, introDiv.clientHeight);

    to('.background-text.move-right', {
        xPercent: -100,
        scrollTrigger: {
            scrub: 1,
            start: () => 0,
            end: () => introHeight,
        }
    });

    to('.background-text.move-left', {
        xPercent: 100,
        scrollTrigger: {
            scrub: 1,
            start: () => 0,
            end: () => introHeight,
        }
    });

    // TEXT MOVEMENT:

    // set('.intro-header.second', {
    //     opacity: 0,
    //     scrollTrigger: {
    //         scrub: 1,
    //         start: () => 0,
    //         end: () => 0
    //     }
    // });

    let onEnterIntroText = (divId) => {
        $(`${divId}`).addClass('active');
    }
    let onLeaveIntroText = (divId) => {
        $(`${divId}`).removeClass('active');
    }

    const firstIntroHeaderTl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: '.intro-header.first',
                start: () => 0,
                end: () => 1 * (introHeight / 6),
                scrub: 1
            }
        }
    );

    firstIntroHeaderTl
        .to('.intro-header.first', { yPercent: 100, opacity: 0, duration: 1 })

    const secondIntroHeaderTl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: '.intro-header.second',
                markers: false,
                start: () => 1 * (introHeight / 6),
                end: () => 3 * (introHeight / 6),
                scrub: 1
            }
        }
    );

    secondIntroHeaderTl
        .to('.intro-header.second', { yPercent: -100, opacity: 1, duration: 1 })
        .to('.intro-header.second', { yPercent: 0, opacity: 0, duration: 1 })


    const thirdIntroHeaderTl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: '.intro-header.third',
                markers: false,
                start: () => 3 * (introHeight / 6),
                end: () => 5 * (introHeight / 6),
                scrub: 1
            }
        }
    );

    thirdIntroHeaderTl
        .to('.intro-header.third', { yPercent: -100, opacity: 1, duration: 1 })
        .to('.intro-header.third', { yPercent: 0, opacity: 0, duration: 1 })


    to('.background-text.move-right', {
        opacity: 0,
        scrollTrigger: {
            trigger: ".about-as",
            scrub: 1,
            start: () => "top middle",
            end: () => 100,
            // markers: true
        }
    });
    to('.background-text.move-left', {
        opacity: 0,
        scrollTrigger: {
            trigger: ".about-as",
            scrub: 1,
            start: () => "top middle",
            end: () => () => 100,
            // markers: true
        }
    });
    // const imgContainerTimeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".about-as",
    //         scrub: 1,
    //         start: () => "top middle",
    //         end: () => 100,
    //         markers: true,
    //     }
    // })

    //imgContainerTimeline.to('.as-book-image-container', { scale: .5, duration: 1 });

    const imageTimeline = gsap.timeline();
    const aboutAs = document.querySelector(".about-as");
    const aboutAsStart = aboutAs.offsetTop;
    const aboutAsHeight = aboutAs.scrollHeight * .65;
    console.log({ aboutAs, aboutAsHeight });
    // const aboutTheAuthor = document.querySelector("#about-the-autor");
    // const aboutTheAuthorTop = aboutTheAuthor.top * .65;
    imageTimeline
        .to('.as-book-img-container', {
            duration: 1,
            scrollTrigger: {
                start: () => "top middle",
                end: () => aboutAsStart + aboutAsHeight - 60,
                markers: true,
                pin: '.as-book-img-container',
                anticipatePin: 1,
            }
        })
        .to('.as-book-img-container', {
            scale: .5,
            duration: 1,
            scrollTrigger: {
                trigger: ".about-as",
                scrub: 1,
                start: () => "top middle",
                end: () => 200,
                markers: true,
            }
        }).to('.as-book-img-container', {
            xPercent: -50,
            duration: 1,
            scrollTrigger: {
                trigger: ".about-as",
                scrub: 1,
                start: () => "200 top",
                end: () => 400,
                markers: true,
            }
        })
    // .to(".second-image", {
    //     opacity: 1,
    //     scrollTrigger: {
    //         trigger: ".about-as",
    //         start: () => "bottom bottom",
    //         end: () => "4500 bottom",
    //         markers: true,
    //         scrub: true,
    //     }
    // })
    // .to(".first-image", {
    //     opacity: 0,
    //     scrollTrigger: {
    //         trigger: ".about-as",
    //         start: () => "bottom bottom",
    //         end: () => "4500 bottom",
    //         markers: true,
    //         scrub: true,
    //     }
    // })
    // .to(".about-as", {
    //     backgroundColor: '#885830',
    //     scrollTrigger: {
    //         trigger: ".about-as",
    //         start: () => "3500 bottom",
    //         end: () => "bottom bottom",
    //         markers: true,
    //         scrub: true,
    //     }
    // })


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
            end: () => 10000,
            scrub: true,
            markers: true,
            pin: '.six-fundas',
            invalidateOnRefresh: true,
            anticipatePin: 1,
        }
    });




    // gsap.to(".about-as", {
    //     background: "#ddcda9",
    //     scrollTrigger: {
    //         start: "bottom bottom",
    //         end: () => 100,
    //         markers: true,
    //     }
    // })

    // to('.as-content .as-content-one', {
    //     color: 'white',
    //     scrollTrigger: {
    //         trigger: ".as-content",
    //         scrub: 1,
    //         start: () => "center",
    //         end: 100,
    //         markers: true,
    //     }
    // })
    // .to('.as-content', {
    //     display: 'block', duration: 1, scrollTrigger: {
    //         trigger: ".about-as",
    //         scrub: 1,
    //         start: () => "top middle",
    //         end: () => 100,
    //         markers: true,
    //         anticipatePin: 1,

    //     }
    // });

    // to('.as-content', {
    //     display: "block",
    //     scrollTrigger: {
    //         trigger: ".about-as",
    //         scrub: 1,
    //         start: () => "top middle",
    //         end: () => 100,
    //         markers: true,
    //     }
    // })

    // to('.about-as', {
    //     scrollTrigger: {
    //         pin: '.about-as',
    //         start: () => ""
    //     }
    // })

})();