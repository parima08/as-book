(function () {

    const markersFlag = false;

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


    to('.background-radiant', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.as-book-img-container',
            start: "middle middle",
            end: "+=300",
            markers: markersFlag,
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


    const imageTimeline = gsap.timeline();


    ScrollTrigger.matchMedia({
        "(min-width: 800px)": function () {
            to('.as-book-and-text', {
                duration: 1,
                scrollTrigger: {
                    trigger: '.as-book-and-text',
                    start: () => "center center",
                    endTrigger: '.about-as-book-reveal',
                    end: () => 'bottom bottom', //`+=${document.querySelector('.about-as-book-reveal').scrollHeight}`,
                    markers: markersFlag,
                    pin: '.as-book-and-text',
                    anticipatePin: 1,
                }
            })
            to('.as-book-img-container', {
                scale: .8,
                duration: 1,
                scrollTrigger: {
                    trigger: ".about-as-book-reveal",
                    scrub: 1,
                    start: () => "middle -10%",
                    end: () => "middle -20%",
                    markers: markersFlag,
                }
            })
            to('.as-book-img-container', {
                xPercent: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: ".about-as-book-reveal",
                    scrub: 1,
                    start: () => "middle -20%",
                    end: () => "middle -30%",
                    markers: markersFlag,
                }
            })
            to('.as-book-img-container', {
                xPercent: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: ".about-as-book-reveal",
                    scrub: 1,
                    start: () => "middle -20%",
                    end: () => "middle -30%",
                    markers: markersFlag,
                }
            })
            to('.navigation', {
                display: 'block',
                scrollTrigger: {
                    trigger: ".about-as-book-reveal",
                    scrub: 1,
                    start: () => "middle -20%",
                    end: () => "middle -30%",
                    markers: markersFlag,
                }
            })
            to('.as-text', {
                xPercent: 50,
                duration: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".about-as-book-reveal",
                    scrub: 1,
                    start: () => "middle -20%",
                    end: () => "middle -30%",
                    markers: markersFlag,
                }
            })

        },
        "(max-width: 800px)": function () {
            to('.navigation', {
                display: 'block',
                scrollTrigger: {
                    trigger: ".as-book-img-container",
                    scrub: 1,
                    start: () => "bottom bottom",
                    end: () => "+=20%",
                    markers: markersFlag,
                }
            })
        },
    })


    const pkdTimeLine = gsap.timeline();



    ScrollTrigger.matchMedia({
        "(min-width: 800px)": function () {
            to('.quote', {
                scrollTrigger: {
                    pin: ".quote",
                    trigger: '.quote',
                    markers: markersFlag,
                    start: "center center",
                    end: "+=400",
                    anticipatePin: 1,
                    immediateRender: false,
                }
            })
        }
    })




    const beigeColor = "#ddcda9";

    pkdTimeLine
        .to(".pull-out-quote .line1", {
            opacity: 1,
            color: beigeColor,
            scrollTrigger: {
                trigger: '.quote',
                markers: markersFlag,
                start: "center center",
                end: "+=100",
                scrub: true,
                markers: markersFlag,
            }
        })
        .to(".pull-out-quote .line2", {
            opacity: 1,
            color: beigeColor,
            scrollTrigger: {
                trigger: '.quote',
                markers: markersFlag,
                start: "center center +=100",
                end: "+=200",
                scrub: true,
            }
        })
        .to(".pull-out-quote .line3", {
            opacity: 1,
            color: beigeColor,
            scrollTrigger: {
                trigger: '.quote',
                markers: markersFlag,
                start: "center center +=200",
                end: "+=300",
                scrub: true,
            }
        })
        .to(".pull-out-quote .line4", {
            opacity: 1,
            color: beigeColor,
            scrollTrigger: {
                trigger: '.quote',
                markers: markersFlag,
                start: "center center +=300",
                end: "+=400",
                scrub: true,
            }
        })


    const aboutAuthorTop = document.querySelector('.bapa').offsetTop;
    const aboutAuthorTotalHeight = document.querySelector('.about-the-author').scrollHeight;
    const scrollFactor = aboutAuthorTotalHeight / 3;



    ScrollTrigger.matchMedia({
        "(min-width: 800px)": function () {
            to('.about-the-author', {
                scrollTrigger: {
                    pin: '.about-the-author',
                    start: 'top top',
                    anticipatePin: 1,
                    markers: markersFlag,
                    endTrigger: '.six-fundamental-background',
                    end: () => `top bottom`,
                    immediateRender: false,
                }
            })

            to('.about-the-author-image', {
                "clip-path": "circle(25% at 25% 55%)",
                scrollTrigger: {
                    start: aboutAuthorTop,
                    end: aboutAuthorTop + (scrollFactor * 1),
                    scrub: true,
                    markers: markersFlag,
                }
            })
            to('.bapa .container', {
                opacity: 1,
                yPercent: 50,
                scrollTrigger: {
                    start: aboutAuthorTop + (scrollFactor * .5),
                    endTrigger: '.six-fundamental-background',
                    end: "top bottom",
                    scrub: true,
                    markers: markersFlag,
                }
            })
        }
    })


    to('.tick.right', {
        opacity: 1,
        xPercent: 20,
        scrollTrigger: {
            trigger: '.six-fundamental-background',
            start: "center center",
            end: "+=400",
            scrub: true,
            markers: markersFlag,
        }
    })

    to('.tick.left', {
        opacity: 1,
        xPercent: -20,
        scrollTrigger: {
            trigger: '.six-fundamental-background',
            start: "center center",
            end: "+=400",
            scrub: true,
            markers: markersFlag,
        }
    });

    $('.menu').click(() => {
        $('.navigation-drawer').toggleClass('active');
    })

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(timeZone);
    const country = timeZone.split("/")[0].toLowerCase();
    const city = timeZone.split('/')[1].toLowerCase();
    const amazonUrl = {
        america: "https://smile.amazon.com/gp/product/9354894038?ie=UTF8&linkCode=sl1&tag=&linkId=6aab0fcb0be3b1bce9137d107a1e91b5&language=en_US&ref_=as_li_ss_tl",
        canada: "https://amzn.to/3kNgqwx",
        australia: "https://amzn.to/3i8YIBB",
        auckland: "https://amzn.to/3i8YIBB", //new_zealand
        london: "https://amzn.to/3zGPQt1", //because no europe
        singapore: "",
        india: "https://amzn.to/3uqcBk5",
        calcutta: "https://amzn.to/3uqcBk5",
        kolkata: "https://amzn.to/3uqcBk5"
    }
    const indiaTerms = ["india", "calcutta", "kolkata"];

    const link = amazonUrl[country] || amazonUrl[city] || amazonUrl[timeZone] || amazonUrl.america;

    $('.amazon-link').attr('href', link);

    if (indiaTerms.includes(country) || indiaTerms.includes(city)) {
        $('.flipkart').removeClass('hide');
    }

})();