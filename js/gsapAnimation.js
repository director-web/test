gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// SMOOTHER SCROLL
if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '900',
            scrub: true
        }

    })

    // AOS EFFECT ON SCROLL
    function animateFrom(elem, direction) {
        direction = direction || 1;
        var x = 0,
            y = direction * 300;
        if (elem.classList.contains("gs_reveal_fromLeft")) {
            x = -300;
            y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
            x = 300;
            y = 0;
        }
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto"
        });
    }

    function hide(elem) {
        gsap.set(elem, { autoAlpha: 0 });
    }

    document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
            hide(elem); // assure that the element is hidden when scrolled into view

            ScrollTrigger.create({
                trigger: elem,
                onEnter: function () { animateFrom(elem) },
                onEnterBack: function () { animateFrom(elem, -1) },
                onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
            });
        });
    });
}

// GSAP ANIMATION
const tl = gsap.timeline({ defaults: { duration: .2 } });
tl.from('.logo', { opacity: 0, y: -100 })
    .from('.nav__link1', { opacity: 0, y: -30 })
    .from('.nav__link2', { opacity: 0, y: -30 })
    .from('.nav__link3', { opacity: 0, y: -30 })
    .from('.nav__link4', { opacity: 0, y: -30 })
    .from('.nav__link5', { opacity: 0, y: -30 })
    .from('.nav__register', { opacity: 0, y: -30 })


const tl2 = gsap.timeline({ defaults: { duration: .4 } });
tl2.from('.trip__img-block2', { opacity: 0, x: -100, y: -100 })
    .from('.trip__img-block', { opacity: 0, x: -100, y: 100 })
    .from('.trip__text-start', { opacity: 0, x: 100 })
    .from('.trip__title', { opacity: 0, x: 100, y: -50 })
    .from('.trip__text', { opacity: 0, x: 100, y: 50 })
    .from('.trip__btn-parrent', { opacity: 0, x: 100 })

