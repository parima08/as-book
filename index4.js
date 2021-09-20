(function () {

    const fundaDiv = document.querySelector(".six-fundas-container");
    const fundaHeight = fundaDiv.scrollHeight * .65;
    let cont = $("#mask-outer")[0],
        masks = $(".mask").toArray(),
        tl = new TimelineMax({ repeat: -1, paused: true });

    TweenLite.defaultEase = Power2.easeOut;

    //tl.staggerTo(masks, 1, { scaleX: 0 }, 0.5)
    // .set(cont, { padding: "0 100px", rotation: "-=90", scaleY: 1 })
    // .staggerTo(masks, 1, { scaleX: 1 }, 0.2)
    // .set(cont, { padding: "100px 0", rotation: "-=90", scaleY: -1 })
    // .staggerTo(masks, 1, { scaleX: 0 }, 0.2)
    // .set(cont, { padding: "0 100px", rotation: "-=90", scaleY: 1 })
    // .staggerTo(masks, 1, { scaleX: 1 }, 0.2)
    // .set(cont, { padding: "100px 0", rotation: "-=90", scaleY: -1 })
    // .staggerTo(masks, 1, { scaleX: 0 }, 0.2)
    // .set(cont, { padding: "0 100px", rotation: "-=90", scaleY: 1 })
    // .staggerTo(masks, 1, { scaleX: 1 }, 0.2)
    // .set(cont, { padding: "100px 0", rotation: "-=90", scaleY: -1 })
    // .staggerTo(masks, 1, { scaleX: 0 }, 0.2)
    // .set(cont, { padding: "0 100px", rotation: "-=90", scaleY: 1 })
    // .staggerTo(masks, 1, { scaleX: 1 }, 0.2);

    // $("#image").on('load', () => { tl.play(); });
    //$("#parent").css("background-image", `url("img/6-fundas/1.jpg")`)


    let onEnter = (batch, divId) => {
        gsap.to(batch, { scaleX: 0, stagger: { each: 0.05 } }).then(() => {
            if ($(divId).hasClass('active')) {
                console.log('this has active!');
                gsap.to(`${divId} .content`, {
                    opacity: 1,
                    y: 100,
                }, .5)
            }
        })

    }

    let onLeave = (batch, divId) => {

        gsap.to(`${divId} .content`, {
            opacity: 0,
            y: 100,
        }, .5).then(() => {
            gsap.to(batch, { scaleX: 1, transformOrigin: "right center" }).then(() => {
                $(divId).toggleClass('active');
            });
        })




    }

    let onEnterBack = (batch, divId) => {
        $(divId).toggleClass('active');
        gsap.to(batch, { scaleX: 0 })
        if ($(divId).hasClass('active')) {
            console.log('this has active!');
        }
    }

    ScrollTrigger.batch(".mask", {
        interval: .2, // time window (in seconds) for batching to occur. 
        //batchMax: 3,   // maximum batch size (targets). Can be function-based for dynamic values
        onEnter: batch => onEnter(batch, "#first-funda"),
        onLeave: batch => onLeave(batch, "#first-funda"),
        onEnterBack: batch => onEnterBack(batch, "#first-funda"),
        onLeaveBack: batch => gsap.to(batch, { scaleX: 1 }),
        // you can also define most normal ScrollTrigger values like start, end, etc.
        start: 0,
        end: (fundaHeight / 3) - 100,
        markers: true,
        scrub: true,
    })

    ScrollTrigger.batch(".mask", {
        interval: .2, // time window (in seconds) for batching to occur. 
        //batchMax: 3,   // maximum batch size (targets). Can be function-based for dynamic values
        onEnter: batch => onEnter(batch, "#second-funda"),
        onLeave: batch => onLeave(batch, "#second-funda"),
        onEnterBack: batch => onEnterBack(batch, "#second-funda"),
        onLeaveBack: batch => gsap.to(batch, { scaleX: 1 }),
        // you can also define most normal ScrollTrigger values like start, end, etc.
        start: (fundaHeight / 3) * 2,
        end: (fundaHeight / 3) * 3,
        markers: true,
        scrub: true,
    })


    // gsap.set("#first-funda", {
    //     "class": "-=active"
    // });

    // gsap.set('#second-funda', {
    //     "class": "+=active",
    //     scrollTrigger: {
    //         scrub: 1,
    //         start: (fundaHeight / 3) - 100,
    //         end: fundaHeight
    //     }
    // });

    // // $("#parent").css("background-image", `url("img/6-fundas/2.jpg")`)
    // ScrollTrigger.batch(".mask", {
    //     interval: .5, // time window (in seconds) for batching to occur. 
    //     //batchMax: 3,   // maximum batch size (targets). Can be function-based for dynamic values
    //     onEnter: batch => gsap.to(batch, { scaleX: 0 }),
    //     onLeave: batch => gsap.to(batch, { scaleX: 1 }),
    //     onEnterBack: batch => gsap.to(batch, { scaleX: 0 }),
    //     onLeaveBack: batch => gsap.to(batch, { scaleX: 1 }),
    //     // you can also define most normal ScrollTrigger values like start, end, etc.
    //     start: (fundaHeight / 2),
    //     end: fundaHeight,
    //     markers: true,
    // })

    // ScrollTrigger.create({
    //     //trigger: ".c",
    //     animation: tl,
    //     // Uncomment these to see how they affect the ScrollTrigger
    //     markers: true,
    //     start: 0,
    //     end: fundaHeight,
    //     // toggleClass: "active",
    //     //pin: true,
    //     scrub: 1,
    //     // onUpdate: self => {
    //     //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    //     // }
    // });

})();

