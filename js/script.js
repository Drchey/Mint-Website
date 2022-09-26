/*----------------------------------------------------------------

	Template Name: Nigerian Security Printing and Minting 
	Version: 1.0

	-------------------------------------------------------------------------------*/

/**************************************************************
	
  Main Js Activation
  00. Include HTML
	01. Animsition Activation 
	02. Wow Activation 
	03. Mainmenu 
	04. Masonry
	05. Progressbar
	06. Counters
	07. Timer
	08. Background Hover Change
	09. Home Minimal
	10. Bind Links
	11. Piling Play Video
	12. Carousels Activation
	13. Video Background
	__ End Js Activation

***************************************************************/

/*
Include HTML by W3
*/

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();

      /* Exit the function: */
      return;
    }
  }
}
includeHTML();
(function ($) {
  "use strict";

  /*-------------------------------------------------------------------------------
	  Animsition init
	-------------------------------------------------------------------------------*/

  $(".animsition").animsition({
    loadingClass: "preloader",
    loadingInner:
      '<img src="../img/logo.png" width="100px"/><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
  });

  /*-------------------------------------------------------------------------------
	  Wow init
	-------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();

  /*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/

  $(".a-nav-toggle").on("click", function () {
    if ($("html").hasClass("body-menu-opened")) {
      $("html").removeClass("body-menu-opened").addClass("body-menu-close");
    } else {
      $("html").addClass("body-menu-opened").removeClass("body-menu-close");
    }
  });

  $(".navbar-nav .dropdown").on({
    mouseenter: function () {
      $(this).find(".dropdown-menu").show();
    },
    mouseleave: function () {
      $(this).find(".dropdown-menu").hide();
    },
  });

  var offset = $(window).height();
  if ($(".a-affix").length) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= offset) {
        $(".header").addClass("header-affix");
      } else {
        $(".header").removeClass("header-affix");
      }
    });
  }

  /*-------------------------------------------------------------------------------
	  Masonry
	-------------------------------------------------------------------------------*/

  $(window).on("load", function () {
    if ($(".a-grid").length) {
      $(".a-grid").isotope({
        itemSelector: ".grid-item",
      });
      $(".a-grid-filter a").on("click", function () {
        $(this).parents(".a-grid-filter").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        var filterValue = $(this).attr("data-filter");
        $(".a-grid").isotope({ filter: filterValue });
      });
    }

    if ($(".a-grid-line").length) {
      $(".a-grid-line").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });
      $(".a-grid-filter a").on("click", function () {
        $(this).parents(".a-grid-filter").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        var filterValue = $(this).attr("data-filter");
        $(".a-grid-line").isotope({ filter: filterValue });
      });
    }
  });

  /*-------------------------------------------------------------------------------
	  Progressbar
	-------------------------------------------------------------------------------*/

  if ($(".a-progressbar").length) {
    function progressbar() {
      $(".a-progressbar .progress-bar:in-viewport").each(function () {
        if (!$(this).hasClass("animated")) {
          $(this).addClass("animated");
          $(this).width($(this).attr("aria-valuenow") + "%");
        }
      });
    }

    progressbar();

    $(window).on("scroll", function () {
      progressbar();
    });
  }

  /*-------------------------------------------------------------------------------
	  Counters
	-------------------------------------------------------------------------------*/

  if ($(".a-counter").length) {
    function counter() {
      $(".a-counter:in-viewport").each(function () {
        if (!$(this).hasClass("animated")) {
          $(this).addClass("animated");
          var thisElement = $(this);
          $({ count: 0 }).animate(
            { count: thisElement.attr("data-value") },
            {
              duration: 2000,
              easing: "swing",
              step: function step() {
                var mathCount = Math.ceil(this.count);
                thisElement.text(
                  mathCount.toLocaleString("en-IN", {
                    maximumSignificantDigits: 3,
                  })
                );
              },
            }
          );
        }
      });
    }
    counter();
    $(window).on("scroll", function () {
      counter();
    });
  }

  /*-------------------------------------------------------------------------------
	  Timer
	-------------------------------------------------------------------------------*/

  if ($(".a-timer").length) {
    $(".a-timer").countdown("2020/10/10", function (event) {
      $(this).html(
        event.strftime(
          '<div class="timer-item"><span>%D</span> Days</div><div class="divider"></div><div class="timer-item"><span>%H</span> Hours</div><div class="divider"></div><div class="timer-item"><span>%M</span> Minutes</div><div class="divider"></div><div class="timer-item"><span>%S</span> Seconds</div>'
        )
      );
    });
  }

  /*-------------------------------------------------------------------------------
	  Background Hover Change
	-------------------------------------------------------------------------------*/

  $(".a-change-bg").on("mouseover", function () {
    var index = $(".a-change-bg").index(this);
    $(".slide-bg-list .slide-bg")
      .removeClass("active")
      .eq(index)
      .addClass("active");
  });

  /*-------------------------------------------------------------------------------
	  Home Minimal
	-------------------------------------------------------------------------------*/

  $(".a-minimal a").on({
    mouseenter: function () {
      $("body").addClass("dark-horizontal");
      var index = $(this).index();
      $(".promo-minimal-hover .minimal-item").eq(index).addClass("visible");
      $(".promo-minimal .minimal-item").addClass("over");
    },
    mouseleave: function () {
      $("body").removeClass("dark-horizontal");
      var index = $(this).index();
      $(".promo-minimal-hover .minimal-item").eq(index).removeClass("visible");
      $(".promo-minimal .minimal-item").removeClass("over");
    },
  });

  /*-------------------------------------------------------------------------------
	  Bind Links
	-------------------------------------------------------------------------------*/

  $(".flash-item-nav a, .a-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 100,
        },
        1000
      );
    event.preventDefault();
  });

  /*-------------------------------------------------------------------------------
	  Carousels
	-------------------------------------------------------------------------------*/

  if ($(".a-project-carousel").length) {
    var owl = $(".a-project-carousel");
    owl.owlCarousel({
      smartSpeed: 750,
      dots: false,
      nav: true,
      autoplay: true,
      loop: true,
      margin: 5,
      autoplayHoverPause: true,
      navText: [
        '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
        '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
      ],
      items: 1,
    });
    owl.trigger("stop.owl.autoplay");
    $(window).bind("scroll", function (event) {
      if ($(".a-play").hasClass("animated")) {
        owl.trigger("play.owl.autoplay", [7000]);
      }
    });

    $(".project-carousel-3d .owl-next").on({
      mouseenter: function () {
        $(".project-carousel-3d").addClass("move-left");
      },
      mouseleave: function () {
        $(".project-carousel-3d").removeClass("move-left");
      },
    });
    $(".project-carousel-3d .owl-prev").on({
      mouseenter: function () {
        $(".project-carousel-3d").addClass("move-right");
      },
      mouseleave: function () {
        $(".project-carousel-3d").removeClass("move-right");
      },
    });
  }

  if ($(".a-article-promo-carousel").length) {
    $(".a-article-promo-carousel").owlCarousel({
      smartSpeed: 750,
      dots: true,
      nav: true,
      autoplay: true,
      loop: true,
      autoplayHoverPause: true,
      navText: [
        '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
        '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
      ],
      items: 1,
    });
  }

  if ($(".a-reviews-carousel").length) {
    $(".a-reviews-carousel").owlCarousel({
      smartSpeed: 750,
      dots: true,
      margin: 30,
      nav: false,
      items: 1,
    });
  }

  if ($(".a-photo-carousel").length) {
    $(".a-photo-carousel").owlCarousel({
      items: 3,
      smartSpeed: 750,
      margin: 8,
      autoplayHoverPause: true,
      dots: true,
      nav: true,
      navText: [
        '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
        '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
      ],
      dotData: false,
      responsive: {
        0: {
          nav: false,
          items: 1,
        },
        900: {
          nav: true,
          items: 3,
        },
      },
    });
  }
})($);
