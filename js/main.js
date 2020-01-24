$(function() {
  const body = document.body;
  let clickCount = 0;
  let game = '';
  let isMobile = window.matchMedia("only screen and (min-width: 992px)").matches;

  window.addEventListener('blur', () => {
    if (document.activeElement === game) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'visible'
    }
  })

  window.addEventListener('focus', () => {
    body.style.overflow = 'visible'
  })

  $('div.mario').click(function() {
    clickCount++;
    let mario = $(this);
    mario.find('div.box').css('transform', 'translateY(-5px)');

    if (clickCount === 9) {
      $("<audio></audio>").attr({
        'src': '../sounds/powerup-appears.wav',
        'autoplay': 'autoplay'
      }).appendTo("body");
      mario.find('span.mushroom').addClass('play');

      setTimeout(function() {
        mario.find('span.mushroom').removeClass('play');
      }, 2000);
    } else if (clickCount === 20 && !isMobile) {
      $('.game').addClass('screen');

      setTimeout(function() {
        $('.game').html('<iframe src="https://supermarioemulator.com/mario.php"></iframe>');
        game = document.querySelector('.game iframe');
        $("<audio></audio>").attr({
          'src': '../sounds/secret.wav',
          'autoplay': 'autoplay'
        }).appendTo("body");
      }, 500);

      $('html, body').animate({
        scrollTop: $(".game").offset().top
      }, 2000);
    } else {
      $("<audio></audio>").attr({
        'src': '../sounds/gold-sound.mp3',
        'autoplay': 'autoplay'
      }).appendTo("body");
      mario.find('span.coin').addClass('play');

      setTimeout(function() {
        mario.find('span.coin').removeClass('play');
      }, 500);
    }
    setTimeout(function() {
      mario.find('div.box').css('transform', 'translateY(0px)');
    }, 100);
  });
});
