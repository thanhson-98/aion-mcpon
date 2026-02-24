(function ($) {
  'use strict';

// PC/SP判定
// スクロールイベント
// リサイズイベント
// スムーズスクロール

  /* ここから */
  var break_point = 767; //ブレイクポイント(767px以下でSP)
  var mql = window.matchMedia('screen and (max-width: '+break_point+'px)');//、MediaQueryListの生成
  var deviceFlag = mql.matches ? 1 : 0; // 0 : PC ,  1 : SP


// vh取得
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  const setVhOnLoad = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh-onload', `${vh}px`);
  };
  window.addEventListener('load', setVh);
  window.addEventListener('resize', setVh);
  window.addEventListener('load', setVhOnLoad);


// pagetop
  var timer = null;
  var $pageTop = $('#pagetop');
  $pageTop.hide();

// スクロールイベント
  $(window).on('scroll touchmove', function () {

    // スクロール中か判定
    if (timer !== false) {
      clearTimeout(timer);
    }

    // 200ms後にフェードイン
    timer = setTimeout(function () {
      if ($(this).scrollTop() > 100) {
        $('#pagetop').fadeIn('normal');
      } else {
        $pageTop.fadeOut();
      }
    }, 200);

    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var footHeight = parseInt($('#footer').innerHeight());


    if (deviceFlag == 0) { // → PC
      if (scrollHeight - scrollPosition <= footHeight) {
        // 現在の下から位置が、フッターの高さの位置にはいったら
        $pageTop.css({
          'position': 'absolute',
          'bottom': footHeight
        });
      }
    } else { // → SP
      $pageTop.css({
        'position': 'fixed',
        'bottom': '20px'
      });
    }

  });


// リサイズイベント

  var checkBreakPoint = function (mql) {
    deviceFlag = mql.matches ? 1 : 0;// 0 : PC ,  1 : SP
    // → PC
    if (deviceFlag == 0) {
    } else {
      // →SP
    }
    deviceFlag = mql.matches;
  }

// ブレイクポイントの瞬間に発火
  mql.addListener(checkBreakPoint);//MediaQueryListのchangeイベントに登録

// 初回チェック
  checkBreakPoint(mql);


// スムーズスクロール
// #で始まるアンカーをクリックした場合にスムーススクロール
  $('a[href^="#"]').on('click', function (e) {
    var speed = 500;
    // アンカーの値取得
    var href = $(this).attr('href');
    // 移動先を取得
    var target = $(href == '#' || href == '' ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;

    // スムーススクロール lazyload対策で実際には２回スムーススクロール実行
    $.when(
      $("html, body").animate({
        scrollTop: position
      }, 400, "swing"),
      e.preventDefault(),
    ).done(function() {
      var diff = target.offset().top;
      if (diff === position) {
      } else {
        $("html, body").animate({
          scrollTop: diff
        }, 10, "swing");
      }
    });

    return false;
  });

  AOS.init();
  
  let splide01 = new Splide('.case-section .splide ', {
    type: 'loop',
    perPage: 1,
    focus: 'center',
    gap: '2rem',
    pagination: true,
    arrows: true,
    padding: '1.5rem',
    drag: 'free',
    snap: true,

    breakpoints: {
      767: {
        destroy: true,
      }
    }
  }).mount();

  const company_slide_options = {
    autoWidth: true,
    gap: 16,
    type: 'loop',
    arrows: false,
    drag: 'free',
    flickPower: 300,
    pagination: false,

    autoScroll: {
      speed: 0.5,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
    breakpoints: {
      767: {
        autoScroll: {
          speed: 1.5,
        },
      }
    },
  }

  const company_slide_options02 = {
    autoWidth: true,
    gap: 16,
    type: 'loop',
    arrows: false,
    drag: 'free',
    flickPower: 300,
    pagination: false,
    focus: '0.5',
    direction: 'rtl',

    autoScroll: {
      speed: 0.5,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
    breakpoints: {
      767: {
        autoScroll: {
          speed: 1.5,
        },
      }
    },
  }

  let slide_business01 = new Splide('.any-section .business .slide-01 .splide', company_slide_options).mount(window.splide.Extensions);//拡張機能をセットする
  let slide_business02 = new Splide('.any-section .business .slide-02 .splide', company_slide_options02).mount(window.splide.Extensions);//拡張機能をセットする

  let slide_department01 = new Splide('.any-section .department .slide-01 .splide', company_slide_options).mount(window.splide.Extensions);//拡張機能をセットする
  let slide_department02 = new Splide('.any-section .department .slide-02 .splide', company_slide_options02).mount(window.splide.Extensions);//拡張機能をセットする

  let slide_tool01 = new Splide('.any-section .tool .slide-01 .splide', company_slide_options).mount(window.splide.Extensions);//拡張機能をセットする
  let slide_tool02 = new Splide('.any-section .tool .slide-02 .splide', company_slide_options02).mount(window.splide.Extensions);//拡張機能をセットする


    // アコーディオン
  $('.accordion-cont').hide();
  $('.js-accordion-btn').on('click', function() {
    $(this).next('.accordion-cont').slideToggle();
    $(this).closest('li').toggleClass('is-active');
    var expanded = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', !expanded);
  });

  function matchLabelsHeight() {
    const target = $('.onestop-section .flow-list .label-box');
    let root = parseFloat($('html').css('font-size')) || 16;
    let breakRem = 64;
    let bp = breakRem * root;

    if ($(window).width() <= bp) {
      let maxHeight = 0;

      target.css('height', '');

      target.each(function(){
        let h = $(this).outerHeight();
        if (h > maxHeight) {
          maxHeight = h;
        }
      });

      target.css('height', maxHeight + 'px');
    } else {
      target.css('height', '');
    }
  }

  $(window).on('load', matchLabelsHeight);

  $(window).on('resize', function () {
    matchLabelsHeight();
  });

})(jQuery);