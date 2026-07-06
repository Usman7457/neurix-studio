(function ($) {
    "use strict";

    $(window).on("load", function () {
        bw_reveal_text2();
        bwTitleAnimation();
        bw_reveal_text();
        inibwarqueeLeft();
    });

    gsap.registerPlugin(
        ScrollTrigger,
        ScrollSmoother,
        ScrollToPlugin,
        CustomEase,
    );


    if ($(".dynamic-year").length) {
        let currentYear = new Date().getFullYear();
        $(".dynamic-year").html(currentYear);
    }

    if ($(".bemox-btn").length) {
        const buttons = document.querySelectorAll(".bemox-btn");

        buttons.forEach(button => {
            const textEl = button.querySelector(".bemox-btn__text");
            if (!textEl) return;

            const text = textEl.textContent;
            textEl.innerHTML = "";

            text.split("").forEach((char, index) => {
                const span = document.createElement("span");

                span.innerHTML = char === " " ? "&nbsp;" : char;

                const delay = (text.length - index) * 0.05;
                span.style.transitionDelay = `${delay}s`;

                textEl.appendChild(span);
            });

            button.addEventListener("mouseenter", () => {
                const spans = textEl.querySelectorAll("span");

                spans.forEach(span => {
                    span.classList.remove("animate");
                    void span.offsetWidth; // reflow trick
                    span.classList.add("animate");
                });
            });
        });
    }

    // reveal text animation 02
    function bw_reveal_text2() {
        const textRevealElements = document.querySelectorAll(".bw-reveal-text-2");

        textRevealElements.forEach((element) => {
            const nodes = Array.from(element.childNodes);
            element.innerHTML = "";

            nodes.forEach((node) => {
                if (node.nodeName === "BR") {
                    element.appendChild(node.cloneNode());
                    return;
                }

                if (node.nodeType === 3) {
                    node.textContent.split(/(\s+)/).forEach((text) => {
                        if (!text.trim()) {
                            element.append(text);
                        } else {
                            const word = document.createElement("div");
                            word.className = "word";
                            word.textContent = text;
                            element.appendChild(word);
                        }
                    });
                    return;
                }

                if (node.nodeType === 1) {
                    const word = document.createElement("div");
                    word.className = "word";
                    word.appendChild(node.cloneNode(true));
                    element.appendChild(word);
                }
            });

            element.querySelectorAll(".word").forEach((word) => {
                if (word.children.length) {
                    word.querySelectorAll("*").forEach((tag) => {
                        const childNodes = Array.from(tag.childNodes);
                        tag.innerHTML = "";

                        childNodes.forEach((node) => {
                            if (node.nodeType === 1) {
                                tag.appendChild(node);
                                return;
                            }

                            if (node.nodeType === 3) {
                                node.textContent.split("").forEach((char) => {
                                    if (!char.trim()) {
                                        tag.append(char);
                                    } else {
                                        const p = document.createElement("div");
                                        p.className = "perspective";
                                        p.innerHTML = `<div class="letter"><div>${char}</div></div>`;
                                        tag.appendChild(p);
                                    }
                                });
                            }
                        });
                    });
                }

                if (!word.children.length) {
                    const text = word.textContent;
                    word.innerHTML = "";
                    text.split("").forEach((char) => {
                        if (!char.trim()) {
                            word.append(char);
                        } else {
                            const p = document.createElement("div");
                            p.className = "perspective";
                            p.innerHTML = `<div class="letter"><div>${char}</div></div>`;
                            word.appendChild(p);
                        }
                    });
                }
            });

            const letters = element.querySelectorAll(".letter");

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    toggleActions: "restart none none reset",
                },
            });

            tl.set(element, {
                autoAlpha: 1
            });
            tl.fromTo(
                letters,
                1.6, {
                    transformOrigin: "center",
                    rotationY: 90,
                    x: 30,
                }, {
                    rotationY: 0.1,
                    x: 0,
                    stagger: 0.025,
                    ease: CustomEase.create("custom", "M0,0 C0.425,0.005 0,1 1,1 "),
                },
            );
        });
    }

    // bw title animation
    function bwTitleAnimation() {
        if (!document.querySelector(".bw-title-anim")) return;

        let splitTitleLines = gsap.utils.toArray(".bw-title-anim");

        splitTitleLines.forEach((splitTextLine) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: "top 90%",
                    end: "bottom 60%",
                    scrub: false,
                    markers: false,
                    toggleActions: "play none none reverse",
                },
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "words, lines",
            });

            gsap.set(splitTextLine, {
                perspective: 400
            });

            itemSplitted.split({
                type: "lines"
            });

            tl.from(itemSplitted.lines, {
                duration: 1,
                delay: 0.3,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1,
            });
        });
    }

    // reveal text animation 01
    function bw_reveal_text() {
        const bwElements = document.querySelectorAll(".bw-reveal-text");

        bwElements.forEach((el) => {
            if (!el.dataset.original) {
                el.dataset.original = el.innerHTML;
            }
        });

        const splitWords = (el) => {
            const text = el.dataset.original;
            const wrapper = document.createElement("div");
            wrapper.innerHTML = text;

            const nodes = Array.from(wrapper.childNodes);
            const wrappedHTML = nodes
                .map((node) => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        return node.textContent
                            .split(/\s/)
                            .map((word) => {
                                return word
                                    .split("-")
                                    .map((part) => `<span class="word">${part}</span>`)
                                    .join('<span class="hyphen">-</span>');
                            })
                            .join('<span class="whitespace"> </span>');
                    } else {
                        return node.outerHTML;
                    }
                })
                .join("");
            el.innerHTML = wrappedHTML;
        };

        const getLines = (el) => {
            const lines = [];
            let line = [];
            const words = el.querySelectorAll("span");
            let lastTop = null;

            words.forEach((word) => {
                if (
                    word.offsetTop !== lastTop &&
                    !word.classList.contains("whitespace")
                ) {
                    lastTop = word.offsetTop;
                    line = [];
                    lines.push(line);
                }
                line.push(word);
            });

            return lines;
        };

        const splitLines = (el) => {
            splitWords(el);

            const lines = getLines(el);
            let wrappedHTML = "";

            lines.forEach((wordsArr) => {
                wrappedHTML += '<span class="line"><span class="words">';
                wordsArr.forEach((word) => {
                    wrappedHTML += word.outerHTML;
                });
                wrappedHTML += "</span></span>";
            });

            el.innerHTML = wrappedHTML;
        };

        const initReveal = (el) => {
            const lines = el.querySelectorAll(".words");
            gsap.killTweensOf(lines);
            gsap.set(el, {
                autoAlpha: 1
            });

            gsap.from(lines, {
                yPercent: 100,
                ease: "power3.out",
                stagger: 0.25,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: el,
                    toggleActions: "restart none none reset",
                },
            });
        };

        const runAll = () => {
            bwElements.forEach((el) => {
                splitLines(el);
                initReveal(el);
            });
        };

        runAll();

        // Debounce resize: 200ms delay
        let resizeTimeout;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                runAll();
            }, 200);
        });
    }

    function smoothScroll() {
        $(".smooth-scroll").on("click", function (event) {
            var target = $(this.getAttribute("href"));
            if (target.length) {
                event.preventDefault();
                $("html, body")
                    .stop()
                    .animate({
                            scrollTop: target.offset().top - -60,
                        },
                        1500,
                    );
            }
        });
    }
    smoothScroll();

    // text invert with scroll
    const split = new SplitText(".bw-split-text", {
        type: "lines",
    });
    split.lines.forEach((target) => {
        gsap.to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: "top 90%",
                end: "bottom center",
            },
        });
    });

    // scroll zoom effect
    gsap.utils.toArray(".zoom-effect").forEach((el, index) => {
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                scrub: 1,
                start: "top 80%",
                end: "buttom 60%",
                toggleActions: "play none none reverse",
                markers: false,
            },
        });

        tl1.set(el, {
            transformOrigin: "center center"
        }).from(
            el, {
                scale: 0.7
            }, {
                background: "inherit",
                scale: 1,
                duration: 1,
                immediateRender: false,
            },
        );
    });

    // right to left animation
    if (document.querySelector(".right-to-left-anim")) {
        let counterImgTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".right-to-left-anim",
                start: "top 80%",
                end: "bottom 10%",
                scrub: 2,
                markers: false,
            },
        });
        counterImgTL.fromTo(
            ".right-to-left-anim", {
                x: 200,
            }, {
                x: 0,
                duration: 1.6,
            },
        );
    }

    // left to right animation
    if (document.querySelector(".left-to-right-anim")) {
        let counterImgTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".left-to-right-anim",
                start: "top 80%",
                end: "bottom 10%",
                scrub: 2,
                markers: false,
            },
        });
        counterImgTL.fromTo(
            ".left-to-right-anim", {
                x: -200,
            }, {
                x: 0,
                duration: 1.6,
            },
        );
    }

    if ($("#smooth-wrapper").length && $("#smooth-content").length) {
        ScrollSmoother.create({
            smooth: 2,
            effects: false,
            smoothTouch: 0.1,
            ignoreMobileResize: false
        });
        ScrollTrigger.refresh(true);
    }

    // Marquee - Two Lines , One Line To Right, One Line To Left
    function addHoverPause(el, timeline) {
        el.addEventListener("mouseenter", () => timeline.pause());
        el.addEventListener("mouseleave", () => timeline.resume());
    }

    const inibwarqueeLeft = () => {
        const containers = [...document.querySelectorAll(".marquee-left--gsap")];
        if (!containers.length) return;

        containers.forEach((container) => {
            const el = container.querySelector(".marquee__toleft");
            el.innerHbwL += el.innerHbwL;

            const tl = gsap.timeline().add(marquee(el, 30, "-=50%"), 0);
            const r = gsap.to(tl, {
                duration: 1.5,
                timeScale: 1,
                paused: true
            });
            const clampTS = gsap.utils.clamp(1, 6);
            ScrollTrigger.create({
                start: 0,
                end: "max",
                onUpdate: (st) => {
                    tl.timeScale(clampTS(Math.abs(st.getVelocity() / 200)));
                    r.invalidate().restart();
                },
            });

            addHoverPause(el, tl);
        });
    };

    const marquee = (el, duration, x) => {
        const wrap = gsap.utils.wrap(0, 50);
        return gsap.to(el, {
            duration,
            ease: "none",
            x,
            modifiers: {
                x: (v) => (x = wrap(parseFloat(v)) + "%")
            },
            repeat: -1,
        });
    };

    $(window).on("load", function () {
        AOS.init();
    });

})(jQuery);