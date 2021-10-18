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
            end: "+=200",
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
            end: "+=200",
            scrub: true,
            markers: markersFlag,
        }
    });

    $('.menu').click(() => {
        $('.navigation-drawer').toggleClass('active');
    })

    const amazonUrl = {
        us: "https://smile.amazon.com/gp/product/9354894038?ie=UTF8&linkCode=sl1&tag=&linkId=6aab0fcb0be3b1bce9137d107a1e91b5&language=en_US&ref_=as_li_ss_tl",
        ca: "https://www.amazon.ca/gp/offer-listing/9354894038/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=9354894038&linkCode=am2&tag=sass0b7-20&linkId=4a74717397786047afb9a3fb91bd6bca",
        au: "https://www.amazon.com.au/gp/offer-listing/9354894038/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=9354894038&linkCode=am2&tag=sass0f-22&linkId=8fdc7a3b8419e681489f9dbcec11b7c4",
        nz: "https://www.amazon.com.au/gp/offer-listing/9354894038/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=9354894038&linkCode=am2&tag=sass0f-22&linkId=8fdc7a3b8419e681489f9dbcec11b7c4", //new_zealand
        sg: "https://www.amazon.sg/gp/offer-listing/9354894038/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=9354894038&linkCode=am2&tag=sass0d-22&linkId=bf39e236a2e97a1079dbc67eb1425a9d", //because no europe
        in: "https://www.amazon.in/gp/offer-listing/9354894038/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=9354894038&linkCode=am2&tag=sass08-21&linkId=5b831ef86f7ffe7f899ec15c41677919",
        gb: "https://www.amazon.co.uk/Atmasiddhi-Shastra-Spiritual-Complete-Commentary/dp/9354894038/"
    }

    const amazonTimeZoneUrl = {
        america: "https://smile.amazon.com/gp/product/9354894038?ie=UTF8&linkCode=sl1&tag=&linkId=6aab0fcb0be3b1bce9137d107a1e91b5&language=en_US&ref_=as_li_ss_tl",
        canada: "https://www.amazon.ca/gp/offer-listing/9354894038/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=9354894038&linkCode=am2&tag=sass0b7-20&linkId=4a74717397786047afb9a3fb91bd6bca",
        australia: "https://www.amazon.com.au/gp/offer-listing/9354894038/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=9354894038&linkCode=am2&tag=sass0f-22&linkId=8fdc7a3b8419e681489f9dbcec11b7c4",
        auckland: "https://www.amazon.com.au/gp/offer-listing/9354894038/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=9354894038&linkCode=am2&tag=sass0f-22&linkId=8fdc7a3b8419e681489f9dbcec11b7c4", //new_zealand
        singapore: "https://www.amazon.sg/gp/offer-listing/9354894038/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=9354894038&linkCode=am2&tag=sass0d-22&linkId=bf39e236a2e97a1079dbc67eb1425a9d", //because no europe
        india: "https://www.amazon.in/gp/offer-listing/9354894038/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=9354894038&linkCode=am2&tag=sass08-21&linkId=5b831ef86f7ffe7f899ec15c41677919",
        calcutta: "https://www.amazon.in/gp/offer-listing/9354894038/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=9354894038&linkCode=am2&tag=sass08-21&linkId=5b831ef86f7ffe7f899ec15c41677919",
        kolkata: "https://www.amazon.in/gp/offer-listing/9354894038/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=9354894038&linkCode=am2&tag=sass08-21&linkId=5b831ef86f7ffe7f899ec15c41677919",
        london: "https://www.amazon.co.uk/Atmasiddhi-Shastra-Spiritual-Complete-Commentary/dp/9354894038/"
    }

    const preOrderKindle = {
        us: "https://www.amazon.com/Atmasiddhi-Shastra-Spiritual-Complete-Commentary-ebook/dp/B09FN8Q697?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=sass076-20&linkId=cf3ae2813fc989d76d6f6273f8356096&language=en_US&ref_=as_li_ss_tl&pldnSite=1",
        in: "https://www.amazon.in/Atmasiddhi-Shastra-Spiritual-Complete-Commentary-ebook/dp/B09FN8Q697/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=",
        ca: "https://amzn.to/3ESlCa6",
        au: "https://amzn.to/3lZ4hUu",
        gb: "https://www.amazon.co.uk/gp/offer-listing/B09FN8Q697/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B09FN8Q697&linkCode=am2&tag=sass0d-21&linkId=830dd2e60cb9223280bdceb4c0f5c012",
    }
    const flipkartUrl = "https://urldefense.com/v3/__https:/www.flipkart.com/atmasiddhi-shastra/p/itm2901e4fb01b4b?pid=9789354894039__;!!PH0vZokp8wwQNw!hplLHjr8uumhcTAhhH32oi3r0Iu58ECjgRiK0VCBbxTWDqCnaGNnYzwDlwkjn4zoLb8mW-JAN2E$"
    let link;

    $.getJSON('https://ipapi.co/json/', function (data) {

        console.log(JSON.stringify(data, null, 2));

        //const country = data.country.toLowerCase();
        const countryCode = data.country_code.toLowerCase();

        link = amazonUrl[countryCode] || amazonUrl.us;
        $('.amazon-link').attr('href', link);

        const preOrderKindlelink = preOrderKindle[countryCode] || preOrderKindle.us;
        $('.pre-order-kindle').attr('href', preOrderKindlelink);
        if (countryCode === "in") {
            $('.flipkart').removeClass('hide');
            $('.pre-order-main-link').attr('href', flipkartUrl);
        }
        else {
            $('.pre-order-main-link').attr('href', link);
        }
    }).fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.log("Request Failed: " + err);
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        console.log(timeZone);
        const country = timeZone.split("/")[0].toLowerCase();
        const city = timeZone.split('/')[1].toLowerCase();

        const indiaTerms = ["india", "calcutta", "kolkata"];

        const link = amazonTimeZoneUrl[country] || amazonTimeZoneUrl[city] || amazonTimeZoneUrl[timeZone] || amazonUrl.america;

        $('.amazon-link').attr('href', link);

        if (indiaTerms.includes(country) || indiaTerms.includes(city)) {
            $('.flipkart').removeClass('hide');
        }
    })




})();