(function () {

    // var $allVideos = $("iframe[src^='//www.youtube.com']"),

    //     // The element that is fluid width
    //     $fluidEl = $("body");

    // // Figure out and save aspect ratio for each video
    // $allVideos.each(function () {

    //     $(this)
    //         .data('aspectRatio', this.height / this.width)

    //         // and remove the hard coded width/height
    //         .removeAttr('height')
    //         .removeAttr('width');

    // });

    // // When the window is resized
    // $(window).resize(function () {

    //     var newWidth = $fluidEl.width();

    //     // Resize all videos according to their own aspect ratio
    //     $allVideos.each(function () {

    //         var $el = $(this);
    //         $el
    //             .width(newWidth)
    //             .height(newWidth * $el.data('aspectRatio'));

    //     });

    //     // Kick off one resize to fix all videos on page load
    // }).resize();

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        draggable: false,
        cssEase: 'linear'
    });

    var slickEnabled = true;

    const {
        gsap,
        ScrollTrigger,
        gsap: { to, set, fromTo, timeline } } =
        window;

    gsap.registerPlugin(ScrollTrigger);

    const introDiv = document.querySelector(".introduction");
    const introHeight = introDiv.scrollHeight * .65;

    console.log(introHeight, window.innerHeight, window.scrollHeight, introDiv.innerHeight, introDiv.clientHeight);



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

    const background = gsap.timeline();

    to('.background-radiant', {
        opacity: .3,
        scrollTrigger: {
            start: 1.5 * (introHeight / 6),
            end: 3.5 * (introHeight / 6),
            scrub: 1,
        }
    })
    to('.background-radiant', {
        // background: 'rgba(221, 205, 169, 1)',
        // opacity: 1,
        scale: 1.5,
        opacity: 1,
        scrollTrigger: {
            start: 3.5 * (introHeight / 6),
            end: introHeight,
            scrub: 1,
            immediateRender: false,
        }
    })

    // set('.background-radiant', {
    //     scale: 1.5,
    //     opacity: 1,
    //     scrollTrigger: {
    //         trigger: '.as-book-img-container',
    //         start: introHeight,
    //         end: "middle middle",
    //         markers: true,
    //         scrub: 1,
    //     }
    // })

    to('.background-radiant', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.as-book-img-container',
            start: "middle middle",
            end: "+=300",
            markers: true,
            scrub: 1,
            immediateRender: false,
        }
    })

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
    // const aboutAs = document.querySelector(".about-as");
    // const aboutAsStart = aboutAs.offsetTop;
    // const aboutAsHeight = aboutAs.scrollHeight;
    // const introRealHeight = introDiv.scrollHeight; * .65
    console.log(document.querySelector('.about-as-book-reveal').scrollHeight);
    // const aboutTheAuthor = document.querySelector("#about-the-autor");
    // const aboutTheAuthorTop = aboutTheAuthor.top * .65;

    imageTimeline
        .to('.as-book-and-text', {
            duration: 1,
            scrollTrigger: {
                trigger: '.as-book-and-text',
                start: () => "center center",
                endTrigger: '.about-as-book-reveal',
                end: () => 'bottom bottom', //`+=${document.querySelector('.about-as-book-reveal').scrollHeight}`,
                markers: true,
                pin: '.as-book-and-text',
                anticipatePin: 1,
            }
        })
        .to('.as-book-img-container', {
            scale: .8,
            duration: 1,
            scrollTrigger: {
                trigger: ".about-as-book-reveal",
                scrub: 1,
                start: () => "middle -10%",
                end: () => "middle -20%",
                markers: true,
            }
        }).to('.as-book-img-container', {
            xPercent: -50,
            duration: 1,
            scrollTrigger: {
                trigger: ".about-as-book-reveal",
                scrub: 1,
                start: () => "middle -20%",
                end: () => "middle -30%",
                markers: true,
            }
        })

        .to('.as-text', {
            xPercent: 50,
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: ".about-as-book-reveal",
                scrub: 1,
                start: () => "middle -20%",
                end: () => "middle -30%",
                markers: true,
            }
        })

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




    // const testimonialTimeline = gsap.timeline();

    // testimonialTimeline.to('.as-book-img-container', {
    //     duration: 1,
    //     scrollTrigger: {
    //         start: () => "top top",
    //         end: () => "",
    //         markers: true,
    //         pin: '.as-book-img-container',
    //         anticipatePin: 1,
    //     }
    // })




    // gsap.to(".about-as", {
    //     background: "#ddcda9",
    //     scrollTrigger: {
    //         start: "bottom bottom",
    //         end: () => 100,
    //         markers: true,
    //     }
    // })

    // to('.as-content .as-content-one', {
    //     color: '#bb965e',
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

    const pkdContentHeight = document.querySelector('.pkd').scrollHeight;
    const pkdContentOffsetTop = document.querySelector('.pkd').offsetTop;
    const pkdTimeLine = gsap.timeline();

    const scrollFactor = 200;

    // pkdTimeLine
    //     .to('.pkd-content', {
    //         scrollTrigger: {
    //             pin: '.pkd-content',
    //             start: 'top middle',
    //             anticipatePin: 1,
    //             end: () => `+=${scrollFactor * 8}`,
    //         }
    //     })
    //     .to(".pull-out-quote .line1", {
    //         opacity: 1,
    //         color: "#bb965e",
    //         scrollTrigger: {
    //             start: pkdContentOffsetTop,
    //             end: pkdContentOffsetTop + (scrollFactor * 1),
    //             scrub: true,
    //             markers: true,
    //         }
    //     })
    //     .to(".pull-out-quote .line2", {
    //         opacity: 1,
    //         color: "#bb965e",
    //         scrollTrigger: {
    //             start: pkdContentOffsetTop + (scrollFactor * 1),
    //             end: pkdContentOffsetTop + (scrollFactor * 2),
    //             scrub: true,
    //             markers: true,
    //         }
    //     })
    //     .to(".pull-out-quote .line3", {
    //         opacity: 1,
    //         color: "#bb965e",
    //         scrollTrigger: {
    //             start: pkdContentOffsetTop + (scrollFactor * 2),
    //             end: pkdContentOffsetTop + (scrollFactor * 3),
    //             scrub: true,
    //             markers: true,
    //         }
    //     })
    //     .to(".pull-out-quote .line4", {
    //         opacity: 1,
    //         color: "#bb965e",
    //         scrollTrigger: {
    //             start: pkdContentOffsetTop + (scrollFactor * 3),
    //             end: pkdContentOffsetTop + (scrollFactor * 4),
    //             scrub: true,
    //             markers: true,
    //         }
    //     })

    // to('.pkd-writing-image', {
    //     scrollTrigger: {
    //         scrub: 1,
    //         start: () => pkdContentOffsetTop + (scrollFactor * 5),
    //         end: () => pkdContentOffsetTop + (scrollFactor * 6)
    //     },
    //     scale: 1,
    //     opacity: 1
    // });
    // to('.pull-out-quote', {
    //     opacity: 0,
    //     scrollTrigger: {
    //         scrub: 1,
    //         start: () => pkdContentOffsetTop + (scrollFactor * 6),
    //         end: () => pkdContentOffsetTop + (scrollFactor * 7)
    //     },
    // })
    // to('.pkd-description', {
    //     scrollTrigger: {
    //         scrub: 1,
    //         start: () => pkdContentOffsetTop + (scrollFactor * 7),
    //         end: () => pkdContentOffsetTop + (scrollFactor * 8)
    //     },
    //     opacity: 1
    // });
    // to('.pkd-content', {
    //     scrollTrigger: {
    //         trigger: '.pkd-content',
    //         pin: '.pkd-content',
    //         start: 'bottom bottom',
    //         anticipatePin: 1,
    //         end: () => `+=${scrollFactor * 8}`,
    //     }
    // })


    to('.about-the author', {
        scrollTrigger: {
            pin: '.about-the-author',
            start: 'top middle',
            anticipatePin: 1,


            end: () => `+=${scrollFactor * 8}`,
        }
    })

    const aboutAuthorTop = document.querySelector('.bapa').offsetTop;

    to('.about-the-author', {

        scrollTrigger: {
            pin: '.about-the-author',
            start: 'top top',
            anticipatePin: 1,
            end: () => `+=${scrollFactor * 8}`,
        }
    })
    if (document.documentElement.clientWidth < 768) {
        to('.about-the-author-image', {
            //background: 'blue',

            "clip-path": "circle(25% at 50% 40%)",
            scrollTrigger: {
                start: aboutAuthorTop,
                end: aboutAuthorTop + (scrollFactor * 1),
                scrub: true,
                markers: true,
            }
        })
    }
    else {
        to('.about-the-author-image', {
            //background: 'blue',

            "clip-path": "circle(25% at 25% 40%)",
            scrollTrigger: {
                start: aboutAuthorTop,
                end: aboutAuthorTop + (scrollFactor * 1),
                scrub: true,
                markers: true,
            }
        })
    }

    to('.bapa .container', {
        opacity: 1,
        yPercent: 25,
        scrollTrigger: {
            start: aboutAuthorTop + (scrollFactor * .5),
            end: aboutAuthorTop + (scrollFactor * 1.5),
            scrub: true,
            markers: true,
        }
    })

    //const innerWidth = 1000;


    to(".horizontal-scroll-window", {
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
    })


})();