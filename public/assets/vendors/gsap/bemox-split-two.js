(function ($) {
    "use strict";

    gsap.registerPlugin(
        ScrollTrigger
    );

    const mm = gsap.matchMedia();

    function initScrollSlider() {

        const leftItems = gsap.utils.toArray(".left-track .success-stories-area__item");
        const rightItems = gsap.utils.toArray(".right-track .success-stories-area__item");

        const total = leftItems.length;

        let currentIndex = 0;

        const section = document.querySelector(".success-stories-area");

        function goToSlide(index) {

            if (index < 0 || index >= total) return;

            currentIndex = index;

            gsap.to(leftItems, {
                yPercent: -100 * index,
                duration: 1,
                ease: "power2.out"
            });

            gsap.to(rightItems, {
                yPercent: 100 * index,
                duration: 1,
                ease: "power2.out"
            });
        }

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "+=400",
            pin: true,
            scrub: 1,
            onUpdate: (self) => {

            const progress = self.progress;

            const index = Math.round(progress * (total - 1));

            if (index !== currentIndex) {
                goToSlide(index);
            }
            }
        });
    }

    initScrollSlider();

    function playLoaderAnimation() {
        const svg = document.getElementById("svg");
        const tl = gsap.timeline();
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
            delay: 1.5,
            y: -100,
            opacity: 0,
        });
        tl.to(svg, {
            duration: 0.5,
            attr: {
                d: curve
            },
            ease: "power2.easeIn",
        }).to(svg, {
            duration: 0.5,
            attr: {
                d: flat
            },
            ease: "power2.easeOut",
        });
        tl.to(".loader-wrap", {
            y: -1500,
        });
        tl.to(".loader-wrap", {
            zIndex: -1,
            display: "none",
        });
        tl.from(
            "main", {
                y: 100,
                opacity: 0,
                delay: 0.3,
            },
            "-=1.5"
        );
    }

    

    $(window).on("load", function () {
        playLoaderAnimation();
        initSliderScroll();
        ScrollTrigger.refresh();
    });

})(jQuery);