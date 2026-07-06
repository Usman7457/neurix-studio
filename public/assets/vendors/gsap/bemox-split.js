(function ($) {
  "use strict";

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

  const mm = gsap.matchMedia();

  // button animation

  if ($(".bemox-btn").length) {
    const buttons = document.querySelectorAll(".bemox-btn");

    buttons.forEach((button) => {
      const textEl = button.querySelector(".bemox-btn__text");
      if (!textEl) return;

      const hasIcon =
        button.querySelector(".bemox-btn__icon") || button.querySelector("i");
      if (hasIcon) {
        button.classList.add("has-icon");
      }

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

        spans.forEach((span) => {
          span.classList.remove("animate");
          void span.offsetWidth;
          span.classList.add("animate");
        });
      });
    });
  }

  if ($(".bemox-circle-btn").length) {
    const wrappers = gsap.utils.toArray(".bemox-circle-btn__wrapper");
    const buttons = gsap.utils.toArray(".bemox-circle-btn");

    $(".bemox-circle-btn").on("mouseenter mouseleave", function (e) {
      const x = e.pageX - $(this).offset().left;
      const y = e.pageY - $(this).offset().top;

      $(this).find(".bemox-circle-btn__dot").css({
        left: x,
        top: y
      });
    });

    wrappers.forEach((wrapper, i) => {
      $(wrapper).on("mousemove", function (e) {
        parallax(e, buttons[i], 80);
      });

      $(wrapper).on("mouseleave", function () {
        gsap.to(buttons[i], {
          duration: 0.5,
          x: 0,
          y: 0,
          ease: "power2.out"
        });
      });

      function parallax(e, target, movement) {
        const $this = $(wrapper);
        const relX = e.pageX - $this.offset().left;
        const relY = e.pageY - $this.offset().top;

        gsap.to(target, {
          duration: 0.5,
          x: ((relX - $this.width() / 2) / $this.width()) * movement,
          y: ((relY - $this.height() / 2) / $this.height()) * movement,
          ease: "power2.out"
        });
      }
    });
  }

  if ($(".team-card-two").length) {
    document.querySelectorAll(".team-card-two").forEach((parent) => {
      const dot = parent.querySelector(".team-card-two__dot");
      const tl = gsap.timeline({
        paused: true
      });
      tl.to(dot, {
        duration: 2,
        top: 60,
        left: 20,
        ease: "power2.inOut"
      });
      parent.addEventListener("mouseenter", () => tl.play());
      parent.addEventListener("mouseleave", () => tl.reverse());
    });
  }

  if ($(".banner-image__wrap__shape").length) {
    const shapes = document.querySelectorAll(".banner-image__wrap__shape");
    gsap.to(shapes, {
      width: "0%",
      duration: 0.5,
      ease: "power3.inOut",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".banner-image",
        start: "top 30%",
        toggleActions: "play none none reverse"
      }
    });
  }

  if ($(".bw-hover-item").length) {
    let hoverAnimation__do = function (t, n) {
      let a = new hoverEffect({
        parent: t.get(0),
        intensity: t.data("intensity") || void 0,
        speedIn: t.data("speedin") || void 0,
        speedOut: t.data("speedout") || void 0,
        easing: t.data("easing") || void 0,
        image1: n.eq(0).attr("src"),
        image2: n.eq(0).attr("src"),
        displacementImage: t.data("displacement"),
        imagesRatio: n[0].height / n[0].width,
        hover: false
      });
      t.closest(".bw-hover-item")
        .on("mouseenter", function () {
          a.next();
        })
        .on("mouseleave", function () {
          a.previous();
        });
    };
    let hoverAnimation = function () {
      $(".bw-hover-img").each(function () {
        let n = $(this);
        let e = n.find("img");
        let i = e.eq(0);
        i[0].complete
          ? hoverAnimation__do(n, e)
          : i.on("load", function () {
              hoverAnimation__do(n, e);
            });
      });
    };
    hoverAnimation();
  }

  if ($(".bw__random-text").length) {
    const elements = document.querySelectorAll(".bw__random-text");

    const settings = {
      activeColor: "var(--bemox-base)",
      defaultColor: "var(--bemox-white)",
      glow: "0 0 10px",
      interval: 800,
      speed: 0.5
    };

    elements.forEach((elements) => {
      const split = new SplitText(elements, {
        type: "chars",
        charsClass: "char"
      });

      const chars = split.chars;

      function animate() {
        gsap.to(chars, {
          color: settings.defaultColor,
          textShadow: ` -1px 0 0 #414243,
                    1px 0 0 #414243,
                    0 -1px 0 #414243,
                    0  1px 0 #414243,
                    -1px -1px 0 #414243,
                    1px -1px 0 #414243,
                    -1px  1px 0 #414243,
                    1px  1px 0 #414243;`,
          duration: settings.speed
        });

        const randomIndex = Math.floor(Math.random() * chars.length);
        const target = chars[randomIndex];

        gsap.to(target, {
          color: settings.activeColor,
          duration: settings.speed,
          ease: "power2.out"
        });
      }

      setInterval(animate, settings.interval);
    });
  }

  if ($(".parallax-view").length) {
    const containers = document.querySelectorAll(".parallax-view");

    containers.forEach((container) => {
      const img = container.querySelector("img");
      if (!img) return;
      let speed = parseFloat(img.dataset.speed) || 0.5;
      let lag = parseFloat(img.dataset.lag) || 0;
      gsap.to(img, {
        y: () => -(container.offsetHeight * speed),
        ease: "none",
        delay: lag,
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }

  if ($(".scale").length) {
    const scales = document.querySelectorAll(".scale");
    scales.forEach((item) => {
      gsap.to(item, {
        scale: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reverse play reverse"
        }
      });
    });
    const images = document.querySelectorAll(".scale img");
    images.forEach((img) => {
      gsap.set(img, {
        scale: 1.3
      });
      gsap.to(img, {
        scale: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reverse play reverse"
        }
      });
    });
  }

  if ($("#scroll-top").length) {
    function scrollTopPercentage() {
      const scrollElementWrap = $("#scroll-top");
      const scrollValueEl = $("#scroll-top-value");

      const updateScrollValue = () => {
        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;

        const docHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        );

        const winHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const maxScroll = Math.max(docHeight - winHeight, 0);

        const scrollValue =
          maxScroll > 0
            ? Math.min(100, Math.round((scrollTop / maxScroll) * 100))
            : 0;

        scrollElementWrap.css(
          "background",
          `conic-gradient(var(--bemox-black3) ${scrollValue}%, var(--bemox-white) ${scrollValue}%)`
        );

        if (scrollTop > 100) {
          scrollElementWrap.addClass("active");
        } else {
          scrollElementWrap.removeClass("active");
        }

        if (scrollValue < 96) {
          scrollValueEl.text(`${scrollValue}%`);
        } else {
          scrollValueEl.html('<i class="fas fa-arrow-up"></i>');
        }
      };

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: updateScrollValue
      });

      window.addEventListener("scroll", updateScrollValue);

      updateScrollValue();

      scrollElementWrap.on("click", function () {
        gsap.to(window, {
          scrollTo: 0, // ✅ cleaner
          duration: 1,
          ease: "power2.out"
        });
      });
    }

    // ✅ call only if exists
    scrollTopPercentage();
  }

  if ($(".lines-wrapper").length) {
    function initLinesWrapper() {
      const wrapper = $(".lines-wrapper")[0];

      let toggle = true;

      for (let i = 0; i < 50; i++) {
        const line = document.createElement("div");
        line.classList.add("line");

        if (!toggle) {
          line.classList.add("small-gap");
        }

        const randomDuration = (Math.random() * 5 + 3).toFixed(2);
        const randomDelay = (Math.random() * 5).toFixed(2);

        line.style.setProperty("--duration", `${randomDuration}s`);
        line.style.setProperty("--delay", `${randomDelay}s`);

        wrapper.appendChild(line);
        toggle = !toggle;
      }
    }

    initLinesWrapper();
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

  if ($(".img-reveal-left, .img-reveal-right, .img-reveal-top").length) {
    gsap.set(".img-reveal-left, .img-reveal-right, .img-reveal-top", {
      overflow: "hidden"
    });

    document
      .querySelectorAll(".img-reveal-left, .img-reveal-right, .img-reveal-top")
      .forEach((container) => {
        let image = container.querySelector("img");

        // default values
        let fromX = 0;
        let fromY = 0;
        let imgX = 0;
        let imgY = 0;

        if (container.classList.contains("img-reveal-left")) {
          fromX = -100;
          imgX = 100;
        }

        if (container.classList.contains("img-reveal-right")) {
          fromX = 100;
          imgX = -100;
        }

        if (container.classList.contains("img-reveal-top")) {
          fromY = -100;
          imgY = 100;
        }

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "restart none none reset"
          }
        });

        tl.set(container, {
          autoAlpha: 1
        });

        tl.from(container, {
          xPercent: fromX,
          yPercent: fromY,
          duration: 1.5,
          ease: "power2.out"
        });

        tl.from(
          image,
          {
            xPercent: imgX,
            yPercent: imgY,
            scale: 1.3,
            duration: 1.5,
            ease: "power2.out"
          },
          "-=1.5"
        );
      });
  }

  if (
    $(
      ".contact-area__big-title, .about-three__bottom__thumb__text, .why-choose-five__letter"
    ).length
  ) {
    const title = document.querySelector(
      ".contact-area__big-title, .about-three__bottom__thumb__text, .why-choose-five__letter"
    );

    const nodes = Array.from(title.childNodes);
    const fragment = document.createDocumentFragment();

    nodes.forEach((node) => {
      if (node.nodeType === 3) {
        const text = node.textContent;

        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.classList.add("letter");
          span.textContent = char;
          fragment.appendChild(span);
        });
      } else if (node.nodeName === "BR") {
        fragment.appendChild(document.createElement("br"));
      }
    });

    title.innerHTML = "";
    title.appendChild(fragment);

    const letters = title.querySelectorAll(".letter");

    const totalDuration = 10000;
    const delay = totalDuration / letters.length;

    function runAnimation() {
      letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add("active");

          setTimeout(() => {
            letter.classList.remove("active");
          }, delay);
        }, index * delay);
      });
    }

    runAnimation();
    setInterval(runAnimation, totalDuration);
  }

  if ($(".img-move-wrap").length) {
    const items = document.querySelectorAll(".img-move-wrap");

    items.forEach((wrapper) => {
      const imgLR = wrapper.querySelector(".img-move-lr");
      const imgRL = wrapper.querySelector(".img-move-rl");
      const isRTL = getComputedStyle(wrapper).direction === "rtl";

      const speed = parseFloat(wrapper.dataset.speed) || 1;

      gsap.set(wrapper, {
        overflow: "hidden"
      });

      const dir = isRTL ? -1 : 1;

      const moveAmount = 12.5 * speed;

      if (imgLR) {
        gsap.set(imgLR, {
          width: "125%",
          maxWidth: "none",
          xPercent: -moveAmount * dir,
          willChange: "transform"
        });

        gsap.to(imgLR, {
          xPercent: moveAmount * dir,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }

      // RIGHT → LEFT
      if (imgRL) {
        gsap.set(imgRL, {
          width: "125%",
          maxWidth: "none",
          xPercent: moveAmount * dir,
          willChange: "transform"
        });

        gsap.to(imgRL, {
          xPercent: -moveAmount * dir,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    });
  }

  if ($(".footer-cta").length) {
    const item = document.querySelectorAll(".footer-cta");

    mm.add("(min-width: 1550px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item[0],
          start: "top 70%",
          end: "bottom 30%",
          scrub: 2
        }
      });

      tl.to(".footer-cta__logo", {
        top: "77px",
        right: "225px",
        transform: "translate(0,0)",
        duration: 1,
        ease: "power3.out"
      });

      tl.to(
        ".footer-cta__image-one",
        {
          opacity: 1,
          top: "175px",
          left: "122px",
          transform: "translate(0,0)",
          rotate: 28,
          scale: 1,
          duration: 1.2,
          ease: "power2.out"
        },
        "<"
      );

      tl.to(
        ".footer-cta__image-two",
        {
          opacity: 1,
          bottom: "-100px",
          right: "80px",
          transform: "translate(0,0)",
          scale: 1,
          duration: 1.2,
          ease: "power2.out"
        },
        "<"
      );

      tl.to(
        ".footer-cta__title-subtitle, .footer-cta__title-title, .footer-cta__title__email, .footer-cta__btn",
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out"
        },
        "<0.4"
      );
    });

    mm.add("(min-width: 991px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item[0],
          start: "top 70%",
          end: "bottom 30%",
          scrub: 2
        }
      });

      tl.to(".footer-cta__logo", {
        top: "77px",
        right: "10px",
        transform: "translate(0,0)",
        duration: 1,
        ease: "power3.out"
      });

      tl.to(
        ".footer-cta__image-one",
        {
          opacity: 1,
          top: "100px",
          left: "20px",
          transform: "translate(0,0)",
          rotate: 28,
          scale: 1,
          duration: 1.2,
          ease: "power2.out"
        },
        "<"
      );

      tl.to(
        ".footer-cta__image-two",
        {
          opacity: 1,
          bottom: "-80px",
          right: "20px",
          transform: "translate(0,0)",
          scale: 1,
          duration: 1.2,
          ease: "power2.out"
        },
        "<"
      );

      tl.to(
        ".footer-cta__title-subtitle, .footer-cta__title-title, .footer-cta__title__email, .footer-cta__btn",
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out"
        },
        "<0.4"
      );
    });
  }

  if ($(".anim-reveal-btn").length) {
    const items = document.querySelectorAll(".anim-reveal-btn");
    items.forEach((cta) => {
      gsap.fromTo(
        cta,
        {
          opacity: 0,
          y: 80,
          scaleX: 0.85
        },
        {
          opacity: 1,
          y: 0,
          scaleX: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cta,
            start: "top 85%",
            once: true
          }
        }
      );
      gsap.to(cta, {
        scale: 1.04,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2
      });
      const arrow = cta.querySelector(".anim-reveal-btn__arrow");
      if (arrow) {
        gsap.to(arrow, {
          x: 12,
          duration: 0.8,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        });
      }
      cta.addEventListener("mousemove", (e) => {
        const rect = cta.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(cta, {
          x: x * 0.15,
          y: y * 0.15,
          duration: 0.3,
          ease: "power3.out"
        });
      });
      cta.addEventListener("mouseleave", () => {
        gsap.to(cta, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out"
        });
      });
    });
  }

  if ($(".animated-path").length) {
    const paths = document.querySelectorAll(".path-anim");

    paths.forEach((path) => {
      const dash = Math.random() * 60 + 20;
      const gap = Math.random() * 200 + 100;
      const duration = Math.random() * 3 + 2;

      path.style.strokeDasharray = `${dash} ${gap}`;
      path.style.animation = `moveStroke ${duration}s linear infinite`;
    });
  }

  if ($(".bw-stroke-text").length) {
    const items = document.querySelectorAll(".bw-stroke-text");

    items.forEach((item) => {
      if (item.classList.contains("split-done")) return;
      item.classList.add("split-done");

      const startColor = item.dataset.strokeStart || "#999";
      const endColor = item.dataset.strokeEnd || "#000";
      const staggerVal = parseFloat(item.dataset.stagger) || 0.03;

      const split = new SplitText(item, {
        type: "chars"
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "bottom 20%",
          scrub: 1
        }
      });

      tl.fromTo(
        split.chars,
        {
          WebkitTextStrokeColor: startColor
        },
        {
          WebkitTextStrokeColor: endColor,
          stagger: staggerVal,
          ease: "none"
        }
      );
    });
  }

  function initWorkCardCursor(options = {}) {
    const {
      cardSelector = ".cursor-text",
      cursorSelector = ".custom-cursor-text",
      defaultText = "VIEW",
      defaultIcon = "",
      followSpeed = 0.25
    } = options;

    const cursor = document.querySelector(cursorSelector);
    const cards = document.querySelectorAll(cardSelector);

    // ✅ FIRST check
    if (!cursor || !cards.length) return;

    // ✅ THEN query inside cursor
    const iconEl = cursor.querySelector(".cursor-icon");
    const labelEl = cursor.querySelector(".cursor-label");

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    gsap.ticker.add(() => {
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: followSpeed,
        ease: "power3.out"
      });
    });

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        if (labelEl) {
          labelEl.textContent = card.dataset.cursorText || defaultText;
        }

        if (iconEl) {
          iconEl.innerHTML = card.dataset.cursorIcon || defaultIcon;
        }

        gsap.to(cursor, {
          opacity: 1,
          scale: 1,
          duration: 0.25
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          opacity: 0,
          scale: 0.8,
          duration: 0.25
        });
      });
    });
  }

  function whyChooseShapeAnimation() {
    const svg = document.querySelector(".why-choose-area__shape svg");
    const path = document.querySelector(".why-choose-area__shape path");
    const circle = document.querySelector(".why-choose-area__shape circle");

    if (!svg || !path || !circle) return;

    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    });

    mm.add("(min-width: 1200px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".why-choose-area",
          start: "top -=100%",
          end: "+=200%",
          scrub: 1.5,
          pin: true
        }
      });

      // 🔹 Step 1: Draw the shape
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.out"
      });

      // 🔹 Step 2: Rotate + zoom
      tl.to(svg, {
        rotation: 360,
        scale: 8,
        transformOrigin: "50% 50%",
        duration: 1,
        ease: "none"
      });

      // 🔹 Step 3: Circle pulse
      tl.to(
        circle,
        {
          scale: 2,
          transformOrigin: "50% 50%",
          duration: 0.5
        },
        "<"
      );

      // 🔹 Step 4: Color change
      tl.to(
        path,
        {
          stroke: "#C6F216"
        },
        "<"
      );

      tl.to(
        circle,
        {
          fill: "#000"
        },
        "<"
      );

      // 🔹 Step 5: Background change
      tl.to(
        ".why-choose-area",
        {
          backgroundColor: "#C6F216",
          duration: 0.5
        },
        "-=0.3"
      );
    });
  }

  if ($(".banner-image-three__image").length) {
    mm.add("(min-width: 991px)", () => {
      const items = document.querySelectorAll(".banner-image-three__image");
      items.forEach((container) => {
        const img = container.querySelector("img");
        if (!img) return;

        const rows = 5;
        const cols = 10;

        const src = img.getAttribute("src");
        img.style.display = "none";

        container.style.display = "grid";
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.style.overflow = "hidden";

        const pieces = [];

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const div = document.createElement("div");
            div.className = "piece";

            div.style.backgroundImage = `url(${src})`;

            div.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;

            div.style.backgroundPosition = `
                    ${(x / (cols - 1)) * 100}%
                    ${(y / (rows - 1)) * 100}%
                    `;

            div.style.opacity = 0;
            div.style.backgroundRepeat = "no-repeat";

            container.appendChild(div);
            pieces.push(div);
          }
        }

        gsap.to(pieces, {
          opacity: 1,
          stagger: 0.02,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      });
    });
  }

  function initRotateAnimation() {
    gsap.utils.toArray(".bw-animate-rotate").forEach((el) => {
      let speed = parseFloat(el.getAttribute("data-speed")) || 2;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 100%",
          end: "top -50%",
          toggleActions: "play none none reverse"
        }
      });

      tl.set(el, {
        transformOrigin: "center center"
      });

      tl.fromTo(
        el,
        {
          rotate: 0
        },
        {
          rotate: 360,
          duration: speed,
          ease: "none",
          immediateRender: false
        }
      );
    });
  }

  function initSvgDrawOnScroll(svgSelector = "#logo") {
    const svg = document.querySelector(svgSelector);
    if (!svg) return;

    const paths = svg.querySelectorAll("path");
    paths.forEach((path) => {
      const length = path.getTotalLength();

      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.fillOpacity = 0;
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.3
    })
      .to(paths, {
        fillOpacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2
      })
      .to(svg, {
        scale: 1.05,
        rotate: 360,
        transformOrigin: "center",
        duration: 6,
        ease: "none",
        repeat: -1
      });

    return tl;
  }

  function initWOW() {
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        mobile: true,
        live: true
      });
      wow.init();
    }
  }

  function serviceItemScaleAnimation() {
    document
      .querySelectorAll(".awards-area, .awards-area__item")
      .forEach((item) => {
        gsap.to(item, {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 60%",
            scrub: 0.5,
            invalidateOnRefresh: true
            // markers: true
          }
        });
      });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("[data-t-throwable-scene]");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        once: true,
        onEnter: () => initThrowable(section)
      });
    });
  });

  function initThrowable(scene) {
    if (typeof Matter === "undefined" || typeof gsap === "undefined") return;
    if (!scene) return;

    const wrapper = scene.querySelector(".client-capsule-wrapper");
    const items = scene.querySelectorAll("[data-t-throwable-el]");
    if (!items.length || !wrapper) return;

    const { Engine, World, Bodies, Mouse, MouseConstraint, Body } = Matter;

    const engine = Engine.create();
    engine.gravity.y = 1;

    const bounds = wrapper.getBoundingClientRect();
    const wallThickness = 100;

    const walls = [
      Bodies.rectangle(
        bounds.width / 2,
        -wallThickness,
        bounds.width,
        wallThickness * 2,
        { isStatic: true }
      ),
      Bodies.rectangle(
        bounds.width / 2,
        bounds.height + wallThickness,
        bounds.width,
        wallThickness * 2,
        { isStatic: true }
      ),
      Bodies.rectangle(
        -wallThickness,
        bounds.height / 2,
        wallThickness * 2,
        bounds.height,
        { isStatic: true }
      ),
      Bodies.rectangle(
        bounds.width + wallThickness,
        bounds.height / 2,
        wallThickness * 2,
        bounds.height,
        { isStatic: true }
      )
    ];

    World.add(engine.world, walls);

    const bodies = [];

    items.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const x = Math.random() * (bounds.width - r.width) + r.width / 2;
      const y = Math.random() * -150;

      const body = Bodies.rectangle(x, y, r.width, r.height, {
        restitution: 0.5,
        friction: 0.3,
        frictionAir: 0.02
      });

      body.el = el;
      bodies.push(body);
      World.add(engine.world, body);
    });

    const mouse = Mouse.create(wrapper);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    World.add(engine.world, mouseConstraint);

    (function engineLoop() {
      Engine.update(engine, 1000 / 60);
      requestAnimationFrame(engineLoop);
    })();

    (function renderLoop() {
      bodies.forEach((body) => {
        gsap.set(body.el, {
          x: body.position.x - body.el.offsetWidth / 2,
          y: body.position.y - body.el.offsetHeight / 2,
          rotation: (body.angle * 180) / Math.PI
        });
      });

      requestAnimationFrame(renderLoop);
    })();

    bodies.forEach((body, i) => {
      setTimeout(() => {
        Matter.Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 4,
          y: Math.random() * 2
        });
      }, i * 100);
    });
  }

  function initImageParallax() {
    mm.add("(min-width: 992px)", () => {
      gsap.utils.toArray(".img-container").forEach((wrap) => {
        const img = wrap.querySelector("img");
        if (!img) return;

        gsap.fromTo(
          img,
          {
            y: "-10%"
          },
          {
            y: "10%",
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              scrub: true
            }
          }
        );
      });
    });
  }

  function heroThreeSvgText() {
    const textEl = document.querySelector("#modernText");
    if (!textEl) return;

    const text = textEl.textContent.trim();
    textEl.innerHTML = "";

    const letters = text.split("");
    const ns = "http://www.w3.org/2000/svg";
    letters.forEach((letter, i) => {
      const tspan = document.createElementNS(ns, "tspan");

      tspan.textContent = letter;

      if (i !== 0) {
        tspan.setAttribute("dx", "10");
      }

      textEl.appendChild(tspan);
    });

    const tspans = textEl.querySelectorAll("tspan");

    tspans.forEach((letter) => {
      gsap.to(letter, {
        fill: "#C3EE18",
        stroke: "#C3EE18",
        duration: 1,
        delay: Math.random() * 2,
        repeat: -1,
        yoyo: true,
        repeatDelay: Math.random() * 2,
        ease: "power1.inOut"
      });
    });
    gsap.fromTo(
      tspans,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        stagger: {
          each: 0.08,
          from: "random"
        }
      }
    );
  }

  heroThreeSvgText();

  function drawSvgBorder() {
    const rect1 = document.querySelector(".rect1");
    const rect2 = document.querySelector(".rect2");

    if (rect1) {
      gsap.to(rect1, {
        strokeDashoffset: 0,
        duration: 2.2,
        ease: "power2.out"
      });
    }

    if (rect2) {
      gsap.to(rect2, {
        strokeDashoffset: 0,
        duration: 2.2,
        delay: 0.8,
        ease: "power2.out"
      });
    }
  }

  if ($("#svg").length && $(".loader-wrap").length) {
    function playLoaderAnimation() {
      const svg = document.getElementById("svg");
      const tl = gsap.timeline();

      const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
      const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

      tl.to(".loader-wrap-heading .load-text, .loader-wrap-heading .cont", {
        delay: 1.5,
        y: -100,
        opacity: 0
      });

      tl.to(svg, {
        duration: 0.5,
        attr: {
          d: curve
        },
        ease: "power2.easeIn"
      }).to(svg, {
        duration: 0.5,
        attr: {
          d: flat
        },
        ease: "power2.easeOut"
      });

      tl.to(".loader-wrap", {
        y: -1500
      });

      tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none"
      });
    }
    playLoaderAnimation();
  }

  // text animation

  if ($(".bw-split-text").length) {
    const elements = document.querySelectorAll(".bw-split-text");

    elements.forEach((elements) => {
      const split = new SplitText(elements, {
        type: "lines"
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: elements,
          start: "top 90%",
          end: "bottom 20%",
          scrub: 1
        }
      });

      split.lines.forEach((line) => {
        tl.fromTo(
          line,
          {
            backgroundPositionX: "100%"
          },
          {
            backgroundPositionX: "0%",
            ease: "none",
            duration: 1
          }
        );
      });
    });
  }

  function bwsplit_title() {
    document.querySelectorAll(".bw-spilt-title-two").forEach((twbEl) => {
      twbEl.style.display = "block";

      const twbSplit = new SplitText(twbEl, {
        type: "words"
      });
      const twbWords = twbSplit.words;

      const twbY = parseFloat(twbEl.getAttribute("data-y")) || 20;
      const twbRotation = parseFloat(twbEl.getAttribute("data-rotation")) || 0;
      const twbBlur = parseFloat(twbEl.getAttribute("data-blur")) || 5;
      const twbDuration =
        parseFloat(twbEl.getAttribute("data-duration")) || 0.75;
      const twbStagger = parseFloat(twbEl.getAttribute("data-stagger")) || 0.02;
      const twbOpacity = twbBlur > 0 ? 0 : 1;

      if (twbBlur > 0) {
        twbWords.forEach((twbWord) => {
          twbWord.style.opacity = 1;
        });
      }

      let atDelay = parseFloat(twbEl.getAttribute("data-delay")) || 0;

      gsap.from(twbWords, {
        y: twbY,
        rotation: twbRotation,
        filter: `blur(${twbBlur}px)`,
        opacity: twbOpacity,
        duration: twbDuration,
        delay: atDelay,
        stagger: twbStagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: twbEl,
          start: "top 100%",
          once: true
        }
      });
    });
  }

  function logoAnimation() {
    if ($(".logo").length) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".logo",
          start: "top bottom",
          toggleActions: "play none none none"
        }
      });
      tl.to(".logo-letter", {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2
      })

        .to(".logo-letter", {
          scaleY: 1.2,
          duration: 0.3,
          ease: "power1.out"
        })

        .to(".logo-letter", {
          scaleY: 1,
          duration: 0.3,
          ease: "power1.inOut"
        });
    }
  }

  $(document).ready(function () {
    setTimeout(function () {
      $("#container").addClass("loaded");
    }, 500);

    setTimeout(function () {
      $(".loader-wrap").fadeOut(1000, function () {
        $(this).remove();
        document.dispatchEvent(new Event("preloaderDone"));
      });
    }, 1800);
  });

  $(window).on("load", function () {
    initWorkCardCursor();
    initRotateAnimation();
    initSvgDrawOnScroll("#logo");
    whyChooseShapeAnimation();
    serviceItemScaleAnimation();
    document.addEventListener("preloaderDone", function () {
      initWOW();
      initImageParallax();
      bwsplit_title();
      drawSvgBorder();
      logoAnimation();
      if ($(".page-header__bg__wrap__shape").length) {
        const shapes = document.querySelectorAll(
          ".page-header__bg__wrap__shape"
        );
        gsap.to(shapes, {
          width: "0%",
          duration: 0.5,
          ease: "power3.inOut",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".page-header",
            start: "top 30%",
            toggleActions: "play none none reverse"
          }
        });
      }
      if ($(".letters-fade-in").length) {
        const elements = document.querySelectorAll(".letters-fade-in");

        elements.forEach((element) => {
          let globalIndex = 0;
          const delayStep = parseFloat(element.dataset.delay) || 0.05;

          function wrapLetters(node) {
            if (node.nodeType === 3) {
              const text = node.textContent;
              const fragment = document.createDocumentFragment();

              // 👉 split by words first
              text.split(" ").forEach((word, wordIndex) => {
                const wordSpan = document.createElement("span");
                wordSpan.className = "word";

                word.split("").forEach((letter) => {
                  const span = document.createElement("span");
                  span.className = "char";
                  span.textContent = letter;
                  span.style.setProperty(
                    "--transition-delay",
                    `${globalIndex * delayStep}s`
                  );

                  wordSpan.appendChild(span);
                  globalIndex++;
                });

                fragment.appendChild(wordSpan);

                // space add
                if (wordIndex !== text.split(" ").length - 1) {
                  fragment.appendChild(document.createTextNode(" "));
                }
              });

              node.replaceWith(fragment);
            } else if (node.nodeType === 1 && node.tagName !== "BR") {
              [...node.childNodes].forEach((child) => wrapLetters(child));
            }
          }

          wrapLetters(element);

          ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            once: true,
            onEnter: () => element.classList.add("is-visible")
          });
        });
      }
      if ($(".bw-split-text-two").length) {
        const elements = document.querySelectorAll(".bw-split-text-two");

        elements.forEach((el) => {
          if (el.classList.contains("split-done")) return;
          el.classList.add("split-done");

          // 👉 data → CSS variable
          const padding = el.dataset.padding || 0;
          const paddingMobile = el.dataset.paddingMobile || padding;

          el.style.setProperty("--line-padding", padding + "px");
          el.style.setProperty("--line-padding-mobile", paddingMobile + "px");

          const split = new SplitText(el, {
            type: "lines"
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "bottom 20%",
              scrub: 1
            }
          });

          split.lines.forEach((line) => {
            tl.fromTo(
              line,
              {
                backgroundPositionX: "100%"
              },
              {
                backgroundPositionX: "0%",
                ease: "none",
                duration: 1
              }
            );
          });
        });
      }
      if ($(".bw-split-text-three").length) {
        const elements = document.querySelectorAll(".bw-split-text-three");
        elements.forEach((el) => {
          const styles = getComputedStyle(el);

          const strokeStart = styles
            .getPropertyValue("--bw3-stroke-start")
            .trim();
          const strokeEnd = styles.getPropertyValue("--bw3-stroke-end").trim();

          const split = new SplitText(el, {
            type: "lines"
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "bottom 20%",
              scrub: 1
            }
          });

          split.lines.forEach((line) => {
            // 👉 gradient animation
            tl.to(line, {
              backgroundPositionX: "0%",
              ease: "none",
              duration: 1
            });

            // 👉 stroke sync animation
            tl.fromTo(
              line,
              {
                WebkitTextStrokeColor: strokeStart
              },
              {
                WebkitTextStrokeColor: strokeEnd,
                ease: "none",
                duration: 1
              },
              "<" // sync with gradient
            );
          });
        });
      }
    });
    heroThreeSvgText();
  });
})(jQuery);
