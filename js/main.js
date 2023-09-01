
// CAROUSEL  
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        540: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 120,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});


function calculateDistanceX(elem, mouseX) {
    return Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 1);
}

function calculateDistanceY(elem, mouseY) {
    return Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 1);
}

function bouncingValue(elem, valX, valY) {
    var matrix = elem.css('transform');
    var results = matrix.split('(')[1].split(')')[0].split(',');
    var array = $({
        a: results[0],
        b: results[1],
        c: results[2],
        d: results[3],
        e: results[4],
        f: results[5],
        g: results[6],
        h: results[7],
        i: results[8],
        j: results[9],
        k: results[10],
        l: results[11],
        m: results[12],
        n: results[13],
        o: results[15],
        p: results[15],
        x: valX,
        y: valY
    });
    array.animate({
        a: 1,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 1,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 1,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 1,
        x: 0,
        y: 0
    }, {
        duration: 2000,
        easing: 'easeOutElastic',
        step: function () {
            elem.css({
                'transform': 'matrix3d(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ',' + this.g + ',' + this.h + ',' + this.i + ',' + this.j + ',' + this.k + ',' + this.l + ',' + this.m + ',' + this.n + ',' + this.o + ',' + this.p + ')',
                'box-shadow': '' + this.x * 3 * -1 + 'px ' + this.y * 3 + 'px 10px rgba(0,0,0,.3)'
            });
            elem.find('img').css('transform', 'matrix3d(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ',' + this.g + ',' + this.h + ',' + this.i + ',' + this.j + ',' + this.k + ',' + this.l + ',' + this.m + ',' + this.n + ',' + this.o + ',' + this.p + ')');
        }
    });

    elem.on('mousemove', function (e) {
        mX = e.pageX;
        mY = e.pageY;
        distanceY = (calculateDistanceY(elem, mY) / 100) * -2;
        distanceX = (calculateDistanceX(elem, mX) / 100) * 2;
        elem.css({
            'transform': 'rotateY(' + distanceX + 'deg) rotateX(' + distanceY + 'deg)',
            'transition': 'all 0s'
        });
        array.finish();
    });
}

var mX, mY, distance;

var $teaser = $('.trip__teaser');

var teaser = function (box) {
    var onMouseLeave,
        onMouseEnter,
        onMouseMove,
        mX,
        mY,
        distance,
        $teaser = $(box);

    onMouseEnter = function (e) {
        e.stopImmediatePropagation();
        $element = $(this);
    }

    onMouseMove = function (e) {
        mX = e.pageX;
        mY = e.pageY;
        distanceY = (calculateDistanceY($element, mY) / 100) * -2;
        distanceX = (calculateDistanceX($element, mX) / 100) * 2;
        $element.css({
            'transform': 'rotateY(' + distanceX + 'deg) rotateX(' + distanceY + 'deg)',
            'transition': 'all 0s'
        });
        $element.find('img').css('transform', 'scale(1.2) translate3d(' + distanceY * 3 + 'px, ' + distanceX * 2 + 'px, 0)');
    }
    onMouseLeave = function (e) {
        e.stopImmediatePropagation();
        bouncingValue($element, distanceX, distanceY);
    }
    return {
        bindHandlers: function (e) {
            $teaser.on('mouseenter', onMouseEnter);
            $teaser.on('mousemove', onMouseMove);
            return this;
        }
    };
}


t = teaser('.trip__teaser').bindHandlers();

// NAV
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav__bar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
}

// Loader
window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader--hidden");
})