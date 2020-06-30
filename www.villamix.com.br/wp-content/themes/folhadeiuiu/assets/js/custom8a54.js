var swiper = new Swiper(".swiper-container", {
  // autoplay: {
  //   delay: 5000
  // },
  slidesPerView: 1,
  spaceBetween: 160,
  pagination: {
    el: ".swiper-pagination-slide",
    clickable: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50
      }
    },
    renderBullet: function (index, className) {
      return '<span class="' + className + '">&nbsp;</span>';
    }
  }
});

var swipernovo = new Swiper(".swiper-container-carrosel-eventos", {
  // autoplay: {
  //   delay: 5000
  // },
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next-eventos",
    prevEl: ".swiper-button-prev-eventos"
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }
});

var swiperfoto = new Swiper(".swiper-container-carrosel-fotos", {
  // autoplay: {
  //   delay: 3000
  // },
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next-eventos",
    prevEl: ".swiper-button-prev-eventos"
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50
    }
  }
});

var playlists = new Swiper(".swiper-container-carrosel-playlists", {
  // autoplay: {
  //   delay: 5000
  // },
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next-playlist",
    prevEl: ".swiper-button-prev-playlist"
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }
});

$(".video-home-display").on("click", function (event) {
  event.preventDefault();
  console.log($(this).attr("data-video"));
  $("#video-player").remove();
  var video =
    '<div id="video-player" class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item"  src="' +
    $(this).attr("data-video") +
    '" frameborder="0" allowfullscreen wmode="opaque"></iframe></div>';
  $(video).insertAfter($(".video-home-display-embed"));

  $(".bar-video-home").addClass("is-playing");
  $(".img-thumb-video-home").addClass("is-playing");
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav"
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  prevArrow: '<button class="prev-arrow-edicao"></button>',
  nextArrow: '<button class="next-arrow-edicao"></button>',
  //centerMode: true,
  focusOnSelect: true
});

(function () {
  var pcastPlayers = document.querySelectorAll(".player-content");

  for (i = 0; i < pcastPlayers.length; i++) {
    var player = pcastPlayers[i];
    var audio = player.querySelector("audio");
    var play = player.querySelector(".villa-play");
    var pause = player.querySelector(".villa-pause");
    var VolumeSlider = player.querySelector(".volume-bar");

    pause.style.display = "none";

    play.addEventListener(
      "click",
      function () {
        this.style.display = "none";
        pause.style.display = "inline-block";
        pause.focus();
        audio.volume = 0.2;
        audio.play();
      },
      false
    );

    pause.addEventListener(
      "click",
      function () {
        this.style.display = "none";
        play.style.display = "inline-block";
        play.focus();
        audio.pause();
      },
      false
    );

    VolumeSlider.addEventListener(
      "input",
      function () {
        audio.volume = parseInt(this.value) / 10;
        step = 0.01;
        min = 0;
        max = 1;
        value = 1;
      },
      false
    );
  }
})(this);

