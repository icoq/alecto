const modal = document.querySelector(".nav>.navCont");

const items = document.querySelectorAll(".navItems__item-inner");
const burger = document.querySelector(".burger");
const burgerFix = document.querySelector(".burger>span");
const navSearch = document.querySelector(".fa-search");

const body = document.querySelector("body");

burger.onclick = function () {
  $(".navCont").toggleClass("active");
  $(".burger").toggleClass("active");
  $("body").toggleClass("scrollLock");
};

const navItems = document.querySelectorAll(".navItems__item-inner");

window.onclick = function (event) {
  for (const navItem of navItems) {
    if ($(".navCont").hasClass("active") && event.target == navSearch) {
      continue;
    } else if ($(".navCont").hasClass("active") && event.target == navItem) {
      $(".navCont").removeClass("active");
      $(".burger").removeClass("active");
      $("body").removeClass("scrollLock");
    }
  }
};

const srchBtn = document.querySelector(".searchBtn");
const search = document.querySelector(".search-nav");

srchBtn.onclick = function () {
  search.classList.toggle("search-hidden");
};
;
;
;
;

window.onload = function () {
  $(".slider-hero").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
    cssEase: "ease",
    speed: 750,
    //fade: true,

    prevArrow:
      '<span class="slick-prev pull-left"><img class="larrow" src="./img/larrow.png"></span>',
    nextArrow:
      '<span class="slick-next pull-right"><img class="rarrow" src="./img/rarrow.png"></span>',
  });

  let heroHeight = $(".hero").css("height");
  let heroY = parseInt(heroHeight, 10);

  let timeline2 = new TimelineMax();
  let controller = new ScrollMagic.Controller();

  timeline2.to(".navBlack", 1.5, {
    height: "55px",
    opacity: 0.87,
    ease: Circ.ease,
  });

  let scene2 = new ScrollMagic.Scene({
    triggerElement: ".title-slide",
    // triggerHook: "onScroll",
    duration: "100%",
    triggerHook: 0,
    offset: "0",
    //loglevel: 2,
  })
    .setTween(timeline2)
    .addTo(controller);

  $(window).on("mousemove", function (e) {
    let w = $(window).width();
    let h = $(window).height();
    let offsetX = 0.5 - e.pageX / w;
    let offsetY = 0.5 - e.pageY / h;
    $(".img-star").each(function (i, el) {
      let offset = parseInt($(el).data("offset"), 10);

      let translate =
        "translate3d(" +
        Math.round(offsetX * offset * 2.5) +
        "px," +
        Math.round(offsetY * offset * 2.5) +
        "px, 0px";

      $(el).css({
        transform: translate,
      });
    });
  });

  const tween = gsap.timeline();

  // rocket
  $(".item-rocket").mouseenter(function () {
    $(".fa-product1").removeClass("fix");
    if (tween.isActive()) {
      return false;
    } else {
      tween.to(".fa-product1", {
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,

        motionPath: {
          path: [
            { x: 60, y: -55 },
            { x: 80, y: -70 },
            { x: 70, y: 90 },
            { x: -90, y: 110 },
            { x: 0, y: 0 },
          ],

          curviness: 1,

          autoRotate: false,
        },
      });
    }
  });

  $(".item-rocket").mouseleave(function (e) {
    $(".fa-product1").addClass("fix");
    tween.pause();
    tween.restart();
    tween.killTweensOf(".fa-product1");
  });

  //cloud
  $(".item-cloud").mouseenter(function () {
    $(".fa-product2").removeClass("fix");
    if (tween.isActive()) {
      return false;
    } else {
      tween.to(".fa-product2", {
        duration: 2.5,

        ease: "circ.inOut",
        repeat: -1,

        motionPath: {
          path: [
            { x: 97, y: 0, opacity: 0 },

            { x: 97, y: 90 },
            { x: -97, y: 100 },
            { x: -97, y: 0 },
            { x: 0, y: 0 },
          ],

          curviness: 0,

          autoRotate: false,
        },
      });
    }
  });

  $(".item-cloud").mouseleave(function (e) {
    $(".fa-product2").addClass("fix");
    tween.pause();
    tween.restart();
    tween.killTweensOf(".fa-product2");
  });

  //plug
  $(".item-plug").mouseenter(function () {
    $(".fa-product3").removeClass("fix");
    if (tween.isActive()) {
      return false;
    } else {
      tween.to(".fa-product3", {
        duration: 1,

        ease: "bounce.out",
        //repeat: -1,

        motionPath: {
          path: [
            { x: 65, y: 0, rotation: 45 },
            //  { x: 0, y: 20, rotation: -45, delay: 1 },
          ],

          curviness: 1,

          //autoRotate: true,
        },
      });
    }
  });

  $(".item-plug").mouseleave(function (e) {
    $(".fa-product3").addClass("fix");
    tween.pause();
    tween.restart();
    tween.killTweensOf(".fa-product3");
  });

  //i-explorer
  $(".item-explorer").mouseenter(function () {
    $(".fa-product4").removeClass("fix");
    if (tween.isActive()) {
      return false;
    } else {
      tween.to(".fa-product4", {
        duration: 2,

        ease: "bounce.inOut",
        repeat: -1,

        motionPath: {
          path: [
            { x: 0, y: -20, rotation: -9 },

            { x: 0, y: 0, rotation: 0 },
            //  { x: 0, y: 20, rotation: -45, delay: 1 },
          ],

          curviness: 1,

          //autoRotate: true,
        },
      });
    }
  });

  $(".item-explorer").mouseleave(function (e) {
    $(".fa-product4").addClass("fix");
    tween.pause();
    tween.restart();
    tween.killTweensOf(".fa-product4");
  });
};

//# sourceMappingURL=main.js.map
