$(function() {
    console.log( "ready!" );
    var clickCount = 0;

    $('div.mario').click(function(){
      clickCount++;
      console.log(clickCount);
    	let mario = $(this);
    	mario.find('div.box').css('top','-5px');

      if (clickCount === 9) {
        $("<audio></audio>").attr({
          'src':'../sounds/powerup-appears.wav',
          'autoplay':'autoplay'
        }).appendTo("body");
        mario.find('span.mushroom').addClass('play');

        setTimeout(function(){
          mario.find('span.mushroom').removeClass('play');
        }, 500);
      } else {
        $("<audio></audio>").attr({
          'src':'../sounds/gold-sound.mp3',
          'autoplay':'autoplay'
        }).appendTo("body");
        mario.find('span.coin').addClass('play');

        setTimeout(function(){
          mario.find('span.coin').removeClass('play');
        }, 500);
      }
      setTimeout(function(){
        mario.find('div.box').css('top','0px');
      }, 100);
    });
});
