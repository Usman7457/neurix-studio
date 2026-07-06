(function ($) {
  "use strict";
  $(".form-one__control input, .form-one__control textarea")
    .on("focus", function () {
      $(this).closest(".form-one__control").addClass("is-focus");
    })
    .on("blur", function () {
      if (!this.value) {
        $(this).closest(".form-one__control").removeClass("is-focus");
      }
    });

  let dynamicyearElm = $(".dynamic-year");
  if (dynamicyearElm.length) {
    let currentYear = new Date().getFullYear();
    dynamicyearElm.html(currentYear);
  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        let $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate(
            {
              countNum: n
            },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              }
            }
          );
        }
      },
      {
        accY: 0
      }
    );
  }

  if ($(".contact-form-validated").length) {
    $(".contact-form-validated").validate({
      // initialize the plugin
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        },
        subject: {
          required: true
        }
      },
      submitHandler: function (form) {
        const $form = $(form);
        const $result = $form.parent().find(".result");

        $.post($form.attr("action"), $form.serialize())

          .done(function (response) {
            $result.html('<div class="success-message">' + response + "</div>");

            $form.find('input[type="text"]').val("");
            $form.find('input[type="email"]').val("");
            $form.find("textarea").val("");
          })

          .fail(function (jqXHR, textStatus, errorThrown) {
            console.error("Form submission failed:", textStatus, errorThrown);

            $result.html(
              '<div class="error-message">' +
                "Something went wrong. Please try again later." +
                "</div>"
            );
          });

        return false;
      }
    });
  }

  // mailchimp form
  if ($(".mc-form").length) {
    $(".mc-form").each(function () {
      let $self = $(this);
      let mcURL = $self.data("url");
      let mcResp = $self.parent().find(".mc-form__response");

      $self.ajaxChimp({
        url: mcURL,
        callback: function (resp) {
          const message = $("<p>", {
            class: "mc-message",
            text: resp.msg // safely escaped
          });
          // appending response
          mcResp.append(message);
          // making things based on response
          if (resp.result === "success") {
            // Do stuff
            $self.removeClass("errored").addClass("successed");
            mcResp.removeClass("errored").addClass("successed");
            $self.find("input").val("");

            mcResp.find("p").fadeOut(10000);
          }
          if (resp.result === "error") {
            $self.removeClass("successed").addClass("errored");
            mcResp.removeClass("successed").addClass("errored");
            $self.find("input").val("");

            mcResp.find("p").fadeOut(10000);
          }
        }
      });
    });
  }

  // popup video and image
  if ($(".video-popup").length) {
    $(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,

      fixedContentPos: false
    });
  }

  if ($(".img-popup").length) {
    let groups = {};
    $(".img-popup").each(function () {
      let id = parseInt($(this).attr("data-group"), 10);

      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });

    $.each(groups, function () {
      $(this).magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: {
          enabled: true
        }
      });
    });
  }

  $(document).on("click", ".bw-popup-box-trigger-item", function (e) {
    e.preventDefault();
    $(".header-right-sidebar").addClass("isActive");
    $("body").addClass("locked");
  });

  $(document).on("click", ".header-right-sidebar__toggler", function (e) {
    e.preventDefault();
    $(".header-right-sidebar").removeClass("isActive");
    $("body").removeClass("locked");
  });

  function dynamicCurrentMenuClass(selector) {
    let $filename = window.location.href.split("/").reverse()[0];

    selector.find("li").each(function () {
      let anchor = $(this).find("a");
      if ($(anchor).attr("href") == $filename) {
        $(this).addClass("current");
      }
    });
    // if any li has .current elmnt add class
    selector.children("li").each(function () {
      if ($(this).find(".current").length) {
        $(this).addClass("current");
      }
    });
    // if no file name return
    if ("" == $filename) {
      selector.find("li").eq(0).addClass("current");
    }
  }

  if ($(".main-menu__list").length) {
    // dynamic current class
    let mainNavUL = $(".main-menu__list");
    dynamicCurrentMenuClass(mainNavUL);
  }

  if ($(".service-sidebar__nav").length) {
    // dynamic current class
    let mainNavUL = $(".service-sidebar__nav");
    dynamicCurrentMenuClass(mainNavUL);
  }

  if ($(".main-menu").length && $(".mobile-nav__container").length) {
    let navContent = document.querySelector(".main-menu").innerHTML;
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    mobileNavContainer.innerHTML = navContent;
  }

  if ($(".sticky-header").length) {
    $(".sticky-header")
      .clone()
      .insertAfter(".sticky-header")
      .addClass("sticky-header--cloned");
  }

  if ($(".mobile-nav__container .main-menu__list").length) {
    let dropdownAnchor = $(
      ".mobile-nav__container .main-menu__list .dropdown > a"
    );
    dropdownAnchor.each(function () {
      let self = $(this);
      let toggleBtn = document.createElement("BUTTON");
      toggleBtn.setAttribute("aria-label", "dropdown toggler");
      toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
      self.append(function () {
        return toggleBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("expanded");
        self.parent().toggleClass("expanded");
        self.parent().parent().children("ul").slideToggle();
      });
    });
  }

  $(".add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });

  $(".sub").on("click", function () {
    if ($(this).next().val() > 0) {
      if ($(this).next().val() > 0)
        $(this)
          .next()
          .val(+$(this).next().val() - 1);
    }
  });

  if ($(".mobile-nav__toggler").length) {
    $(".mobile-nav__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav__wrapper").toggleClass("expanded");
      $("body").toggleClass("locked");
    });
  }

  if ($(".search-toggler").length) {
    $(".search-toggler").on("click", function (e) {
      e.preventDefault();
      $(".search-popup").toggleClass("active");
      $(".mobile-nav__wrapper").removeClass("expanded");
      $("body").toggleClass("locked");
    });
  }
  if ($(".mini-cart__toggler").length) {
    $(".mini-cart__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mini-cart").toggleClass("expanded");
      $(".mobile-nav__wrapper").removeClass("expanded");
      $("body").toggleClass("locked");
    });
  }
  if ($(".odometer").length) {
    $(".odometer").appear(function (e) {
      let odo = $(".odometer");
      odo.each(function () {
        let countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  }

  if ($(".bemox-accrodion").length) {
    let accrodionGrp = $(".bemox-accrodion");
    accrodionGrp.each(function () {
      let accrodionName = $(this).data("grp-name");
      let $self = $(this);
      let accordion = $self.find(".accrodion");
      $self.addClass(accrodionName);
      $self.find(".accrodion .accrodion-content").hide();
      $self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            if ($(this).parent().hasClass("active") === false) {
              $(".bemox-accrodion." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".bemox-accrodion." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().addClass("active");
              $(this).parent().find(".accrodion-content").slideDown();
            }
          });
      });
    });
  }

  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      let target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  function thmOwlInit() {
    $(".bemox-owl__carousel").each(function () {
      let elm = $(this);

      // prevent multiple init
      if (elm.hasClass("owl-loaded")) return;

      let optionsData = elm.data("owl-options");
      let options = {};

      try {
        options =
          typeof optionsData === "object"
            ? optionsData
            : JSON.parse(optionsData);
      } catch (e) {
        console.warn("Invalid owl options", e);
      }

      elm.owlCarousel(options);

      // accessibility
      elm.find("button").attr("aria-label", "carousel button");
    });

    $(".bemox-owl__carousel--custom-nav").each(function () {
      let elm = $(this);

      let prev = elm.data("owl-nav-prev");
      let next = elm.data("owl-nav-next");

      $(prev)
        .off("click")
        .on("click", function (e) {
          e.preventDefault();
          elm.trigger("prev.owl.carousel");
        });

      $(next)
        .off("click")
        .on("click", function (e) {
          e.preventDefault();
          elm.trigger("next.owl.carousel");
        });
    });

    $.fn.owlcarousel2_filter = function (filter) {
      this.find(".owl-item").each(function () {
        let item = $(this).find(".item");
        let category = item.data("owl-filter");

        if (filter === "*" || category === filter) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });

      this.trigger("refresh.owl.carousel");
    };

    $(".bemox-owl__carousel--filter").each(function () {
      let elm = $(this);

      // init only once
      if (!elm.hasClass("owl-loaded")) {
        let optionsData = elm.data("owl-options");
        let options = {};

        try {
          options =
            typeof optionsData === "object"
              ? optionsData
              : JSON.parse(optionsData);
        } catch (e) {
          console.warn("Invalid owl options", e);
        }

        elm.owlCarousel(options);
      }

      elm.find("button").attr("aria-label", "carousel button");

      let filtersDiv = elm.data("owl-filters-div");

      // prevent duplicate events
      $(filtersDiv).off("click", ".project-area__tab__item");

      $(filtersDiv).on("click", ".project-area__tab__item", function () {
        let $this = $(this);

        // active class
        $(filtersDiv).find(".project-area__tab__item").removeClass("active");
        $this.addClass("active");

        let filter = $this.data("owl-filter");

        elm.owlcarousel2_filter(filter);
      });
    });

    if ($(".bemox-owl__carousel--custom-dots").length) {
      let bemoxowlCarouselCustomDots = $(".bemox-owl__carousel--custom-dots");

      bemoxowlCarouselCustomDots.each(function () {
        let elm = $(this);
        let thumbSelector = elm.data("thumb-elm");
        let thumb = $(thumbSelector);

        thumb.find(".owl-dot").on("click", function () {
          elm.trigger("to.owl.carousel", [$(this).index(), 300]);
        });

        elm.on("changed.owl.carousel", function (event) {
          thumb.find(".owl-dot").removeClass("active");
          thumb.find(".owl-dot").eq(event.item.index).addClass("active");
        });
      });
    }
  }

  function bemoxSlickInit() {
    $(".bemox-slick__carousel").each(function () {
      let $this = $(this);

      // 🔥 prevent double init for counter slider
      if ($this.hasClass("bemox-slick__custome-counter")) return;

      if ($this.hasClass("slick-initialized")) return;

      let options = $this.data("slick-options");

      try {
        options = typeof options === "object" ? options : JSON.parse(options);
      } catch (e) {
        options = {};
      }

      $this.slick(options);
    });

    $(".bemox-slick__custome-counter").each(function () {
      let $this = $(this);

      if ($this.hasClass("slick-initialized")) return;

      let options = $this.data("slick-options");

      try {
        options = typeof options === "object" ? options : JSON.parse(options);
      } catch (e) {
        options = {};
      }

      let $counter = $('<div class="bemox-slick__counter"></div>');

      // 🔥 leading zero function
      function formatNumber(num) {
        return num < 10 ? "0" + num : num;
      }

      function updateCounter(slick) {
        let current = formatNumber(slick.slickCurrentSlide() + 1);
        let total = formatNumber(slick.slideCount);

        $counter.html(`
                    <span class="bemox-slick__counter__active">${current}</span>
                    <span>${total}</span>
                `);
      }

      $this.on("init", function (event, slick) {
        $this.append($counter);
        updateCounter(slick);
      });

      $this.on("afterChange", function (event, slick) {
        updateCounter(slick);
      });

      $this.slick(options);
    });
  }

  $(".slider-one__carousel .grid-mask").each(function () {
    let blocks = [];
    for (let i = 0; i < 24; i++) {
      let block = document.createElement("div");
      block.style.transitionDelay = `${Math.random() * 1.2}s`;
      blocks.push(block);
    }
    blocks.sort(() => Math.random() - 0.5);
    blocks.forEach((block) => this.appendChild(block));
  });

  /*-- Price Range --*/
  function priceFilter() {
    if ($(".price-ranger").length) {
      $(".price-ranger #slider-range").slider({
        range: true,
        min: 50,
        max: 1000,
        values: [11, 500],
        slide: function (event, ui) {
          $(".price-ranger .ranger-min-max-block .min").val("$" + ui.values[0]);
          $(".price-ranger .ranger-min-max-block .max").val("$" + ui.values[1]);
        }
      });
      $(".price-ranger .ranger-min-max-block .min").val(
        "$" + $(".price-ranger #slider-range").slider("values", 0)
      );
      $(".price-ranger .ranger-min-max-block .max").val(
        "$" + $(".price-ranger #slider-range").slider("values", 1)
      );
    }
  }

  /*-- Checkout Accoradin --*/
  if ($(".checkout-page__payment__title").length) {
    $(".checkout-page__payment__item")
      .find(".checkout-page__payment__content")
      .hide();
    $(".checkout-page__payment__item--active")
      .find(".checkout-page__payment__content")
      .show();
    $(".checkout-page__payment__title").on("click", function (e) {
      e.preventDefault();
      $(this)
        .parents(".checkout-page__payment")
        .find(".checkout-page__payment__item")
        .removeClass("checkout-page__payment__item--active");
      $(this)
        .parents(".checkout-page__payment")
        .find(".checkout-page__payment__content")
        .slideUp();
      $(this).parent().addClass("checkout-page__payment__item--active");
      $(this).parent().find(".checkout-page__payment__content").slideDown();
    });
  }

  /*-- One Page Menu --*/
  function SmoothMenuScroll() {
    let anchor = $(".scrollToLink");
    if (anchor.length) {
      anchor.children("a").on("click", function (event) {
        if ($(window).scrollTop() > 10) {
          let headerH = "0";
        } else {
          let headerH = "0";
        }
        let target = $(this);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $(target.attr("href")).offset().top - headerH + "px"
            },
            900,
            "easeInOutExpo"
          );
        anchor.removeClass("current");
        anchor.removeClass("current-menu-ancestor");
        anchor.removeClass("current_page_item");
        anchor.removeClass("current-menu-parent");
        target.parent().addClass("current");
        event.preventDefault();
      });
    }
  }
  SmoothMenuScroll();

  function OnePageMenuScroll() {
    let windscroll = $(window).scrollTop();
    if (windscroll >= 117) {
      let menuAnchor = $(".one-page-scroll-menu .scrollToLink").children("a");
      menuAnchor.each(function () {
        let sections = $(this).attr("href");
        $(sections).each(function () {
          if ($(this).offset().top <= windscroll + 100) {
            let Sectionid = $(sections).attr("id");
            $(".one-page-scroll-menu").find("li").removeClass("current");
            $(".one-page-scroll-menu")
              .find("li")
              .removeClass("current-menu-ancestor");
            $(".one-page-scroll-menu")
              .find("li")
              .removeClass("current_page_item");
            $(".one-page-scroll-menu")
              .find("li")
              .removeClass("current-menu-parent");
            $(".one-page-scroll-menu")
              .find("a[href*=\\#" + Sectionid + "]")
              .parent()
              .addClass("current");
          }
        });
      });
    } else {
      $(".one-page-scroll-menu li.current").removeClass("current");
      $(".one-page-scroll-menu li:first").addClass("current");
    }
  }

  // window scroll event
  function stickyMenuUpScroll($targetMenu, $toggleClass) {
    let lastScrollTop = 0;
    window.addEventListener(
      "scroll",
      function () {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > 500) {
          if (st > lastScrollTop) {
            // downscroll code
            $targetMenu.removeClass($toggleClass);
            // console.log("down");
          } else {
            // upscroll code
            $targetMenu.addClass($toggleClass);
            // console.log("up");
          }
        } else {
          $targetMenu.removeClass($toggleClass);
        }
        lastScrollTop = st;
      },
      false
    );
  }

  stickyMenuUpScroll($(".sticky-header--normal"), "active");

  if ($(".project-area-three__item").length) {
    const items = $(".project-area-three__item");
    items.each(function () {
      const item = $(this);
      const imageBox = item.find(".project-area-three__item__image-box");

      if (item.hasClass("active")) {
        imageBox.show();
      } else {
        imageBox.hide();
      }
    });
    items.on("click", function () {
      const current = $(this);
      const imageBox = current.find(".project-area-three__item__image-box");

      if (current.hasClass("active")) {
        current.removeClass("active");
        imageBox.stop(true, true).slideUp(300);
      } else {
        items
          .removeClass("active")
          .find(".project-area-three__item__image-box")
          .stop(true, true)
          .slideUp(300);
        current.addClass("active");
        imageBox.stop(true, true).slideDown(300);
      }
    });
  }

  if ($("[data-countdown]").length > 0) {
    let countdown = $("[data-countdown]");
    countdown.each(function () {
      let $this = $(this);
      let dateStr = $this.attr("data-countdown") || $this.data("countdown");
      if (!dateStr) return;
      let finalDate = new Date(dateStr.replace(/\//g, "-"));
      if (isNaN(finalDate.getTime())) return;

      function updateCountdown() {
        let now = new Date();
        let diff = finalDate.getTime() - now.getTime();
        if (diff <= 0) {
          $this.html(`
                        <span class="countdown-section">
                            <span class="countdown-amount">0</span>
                            <span class="countdown-period"> days </span>
                        </span>
                        <span class="countdown-section">
                            <span class="countdown-amount">0</span>
                            <span class="countdown-period"> hours </span>
                        </span>
                        <span class="countdown-section">
                            <span class="countdown-amount">0</span>
                            <span class="countdown-period"> mins </span>
                        </span>
                        <span class="countdown-section">
                            <span class="countdown-amount">0</span>
                            <span class="countdown-period"> secs </span>
                        </span>
                    `);
          clearInterval(timer);
          return;
        }
        let d = Math.floor(diff / (1000 * 60 * 60 * 24));
        let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((diff % (1000 * 60)) / 1000);
        $this.html(
          '<span class="countdown-section"><span class="countdown-amount">' +
            d +
            '</span><span class="countdown-period"> days </span></span>' +
            '<span class="countdown-section"><span class="countdown-amount">' +
            h +
            '</span><span class="countdown-period"> hours </span></span>' +
            '<span class="countdown-section"><span class="countdown-amount">' +
            m +
            '</span><span class="countdown-period"> mins </span></span>' +
            '<span class="countdown-section"><span class="countdown-amount">' +
            s +
            '</span><span class="countdown-period"> secs </span></span>'
        );
      }
      updateCountdown();
      let timer = setInterval(updateCountdown, 1000);
    });
  }

  // window load event
  $(window).on("load", function () {
    bemoxSlickInit();
    thmOwlInit();
    priceFilter();
    if ($(".circle-progress").length) {
      $(".circle-progress").appear(function () {
        let circleProgress = $(".circle-progress");
        circleProgress.each(function () {
          let progress = $(this);
          let progressOptions = progress.data("options");
          progress.circleProgress(progressOptions);
        });
      });
    }
    if ($(".masonry-layout").length) {
      $(".masonry-layout").imagesLoaded(function () {
        $(".masonry-layout").isotope({
          layoutMode: "masonry"
        });
      });
    }
    if ($(".fitRow-layout").length) {
      $(".fitRow-layout").imagesLoaded(function () {
        $(".fitRow-layout").isotope({
          layoutMode: "fitRows"
        });
      });
    }

    if ($(".post-filter").length) {
      let postFilterList = $(".post-filter li");
      $(".filter-layout").isotope({
        filter: ".filter-item",
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false
        }
      });
      postFilterList.on("click", function () {
        let $self = $(this);
        let selector = $self.attr("data-filter");
        postFilterList.removeClass("active");
        $self.addClass("active");

        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    }
  });

  $(window).on("scroll", function () {
    OnePageMenuScroll();
    if ($(".sticky-header--one-page").length) {
      let headerScrollPos = 130;
      let stricky = $(".sticky-header--one-page");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("active");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("active");
      }
    }

    let scrollToTopBtn = ".scroll-to-top";
    if (scrollToTopBtn.length) {
      if ($(window).scrollTop() > 500) {
        $(scrollToTopBtn).addClass("show");
      } else {
        $(scrollToTopBtn).removeClass("show");
      }
    }
  });

  if ($(".awards-area__item").length) {
    // Portfolio Hover Image
    const link = document.querySelectorAll(".awards-area__item");
    const linkHoverReveal = document.querySelectorAll(
      ".awards-area__item__box"
    );
    const linkImages = document.querySelectorAll(
      ".awards-area__item__box__img"
    );
    for (let i = 0; i < link.length; i++) {
      link[i].addEventListener("mousemove", (e) => {
        linkHoverReveal[i].style.opacity = 1;
        linkHoverReveal[i].style.transform =
          `translate(-100%, -50% ) rotate(12.6deg)`;
        linkImages[i].style.transform = "scale(1, 1)";
        linkHoverReveal[i].style.left = e.clientX + "px";
      });
      link[i].addEventListener("mouseleave", (e) => {
        linkHoverReveal[i].style.opacity = 0;
        linkHoverReveal[i].style.transform = `translate(50%, 50%)`;
        linkImages[i].style.transform = "scale(0.8, 0.8)";
      });
    }
  }

  // Popular Causes Progress Bar
  if ($(".count-bar").length) {
    $(".count-bar").appear(
      function () {
        let el = $(this);
        let percent = el.data("percent");
        $(el).css("width", percent).addClass("counted");
      },
      {
        accY: -50
      }
    );
  }

  if ($(".service-four__item").length) {
    // Service Hover Image
    const link = document.querySelectorAll(".service-four__item");
    const linkHoverReveal = document.querySelectorAll(
      ".service-four__image__box"
    );
    const linkImages = document.querySelectorAll(
      ".service-four__image__box__img"
    );
    for (let i = 0; i < link.length; i++) {
      link[i].addEventListener("mousemove", (e) => {
        linkHoverReveal[i].style.opacity = 1;
        linkHoverReveal[i].style.transform = `translate(-100%, -50% )`;
        linkImages[i].style.transform = "scale(1, 1)";
        linkHoverReveal[i].style.left = e.clientX + "px";
      });
      link[i].addEventListener("mouseleave", (e) => {
        linkHoverReveal[i].style.opacity = 0;
        linkHoverReveal[i].style.transform = `translate(50%, 50%)`;
        linkImages[i].style.transform = "scale(0.8, 0.8)";
      });
    }
  }

  $(".blog-three__item").on("mouseenter", function () {
    let current = $(this);
    if (current.hasClass("active")) return;
    $(".blog-three__item.active").removeClass("active");
    current.addClass("active");
  });

  // awards item hover
  $(".award-three__list__item").on("mouseenter", function () {
    let index = $(this).index();
    $(".award-three__thumb__item")
      .removeClass("active")
      .eq(index)
      .addClass("active");
    $(".award-three__list__item").removeClass("active");
    $(this).addClass("active");
  });

  $(".award-three__list__item").on("mouseleave", function () {
    let $defaultItem = $(".award-three__list__item.active:first");
    let defaultIndex = $defaultItem.index();

    $(".award-three__thumb__item")
      .removeClass("active")
      .eq(defaultIndex)
      .addClass("active");
  });

  if ($(".hero-six__border").length) {
    $(".hero-six__border").each(function () {
      let $border = $(this);
      let isHorizontal = $border.hasClass("top") || $border.hasClass("bottom");

      let size = 33;
      let count;

      if (isHorizontal) {
        count = Math.floor($border.outerWidth() / size);
      } else {
        count = Math.floor($border.outerHeight() / size);
      }

      for (let i = 0; i < count; i++) {
        $border.append('<div class="cell"></div>');
      }
    });

    let $cells = $(".cell");

    setInterval(function () {
      $cells.removeClass("active").css({
        background: "transparent",
        boxShadow: "none",
        borderColor: "#272727"
      });

      for (let i = 0; i < 12; i++) {
        let rand = Math.floor(Math.random() * $cells.length);

        $cells.eq(rand).addClass("active").css({
          background: "#6C43E3",
          boxShadow: "0 0 12px #6C43E3",
          borderColor: "transparent"
        });
      }
    }, 300);
  }

  window.addEventListener("load", () => {
    const section = document.querySelector(".hero-area-one");
    if (!section) return; // section না থাকলে script stop

    const canvas = section.querySelector("#diamondCanvas");
    if (!canvas) return; // canvas না থাকলে stop

    const ctx = canvas.getContext("2d");

    const size = 50;
    const baseColor = "#c6ff00";

    let diamonds = [];
    let mouse = {
      x: -1000,
      y: -1000
    };

    function resize() {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    class Diamond {
      constructor(x, y) {
        this.x = x;
        this.y = y;

        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;

        this.alpha = 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          const force = ((100 - dist) / 100) * 0.5;

          this.vx += dx * 0.01 * force;
          this.vy += dy * 0.01 * force;
        }

        this.vx *= 0.95;
        this.vy *= 0.95;

        this.alpha -= 0.01;
      }

      draw() {
        ctx.save();

        ctx.globalAlpha = this.alpha;

        ctx.shadowBlur = 8;
        ctx.shadowColor = baseColor;

        ctx.fillStyle = baseColor;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y - size / 2);
        ctx.lineTo(this.x + size / 2, this.y);
        ctx.lineTo(this.x, this.y + size / 2);
        ctx.lineTo(this.x - size / 2, this.y);
        ctx.closePath();

        ctx.fill();

        ctx.restore();
      }
    }

    function drawGrid() {
      ctx.strokeStyle = "#272727";
      ctx.lineWidth = 1;

      for (let i = -canvas.height; i < canvas.width; i += size) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + canvas.height, canvas.height);
        ctx.stroke();
      }

      for (let i = 0; i < canvas.width + canvas.height; i += size) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i - canvas.height, canvas.height);
        ctx.stroke();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGrid();

      diamonds.forEach((d) => {
        d.update();
        d.draw();
      });

      diamonds = diamonds.filter((d) => d.alpha > 0);

      requestAnimationFrame(animate);
    }

    animate();

    section.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      const gridX = Math.round(mouse.x / size) * size;
      const gridY = Math.round(mouse.y / size) * size;

      diamonds.push(new Diamond(gridX, gridY));
    });

    section.addEventListener("mouseleave", () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });
  });
})(jQuery);
