$(document).ready(function(){
  var hello = $(".hello"),
      helloCopy = hello.find(".copy"),
      userpic = hello.find(".userpic"),
      helloWelcome = hello.find("p"),
      helloName = helloWelcome.find("span");
  var win8apps = $(".win8apps"),
      win8Tile = win8apps.find(".tile");
  var xboxBase = $("img.base"),
      xboxTop = $("img.top"),
      xboxPlay = $("img.play");
  
  hello.addClass('animated slideInRight');
  helloWelcome.addClass('animated slideInLeft').css("animation-delay", ".3s");
  helloName.addClass('animated slideInLeft').css("animation-delay", "1s");
  userpic.addClass('animated slideInLeft').css("animation-delay", "1s");
  helloCopy.addClass('animated slideRight').css("animation-delay", "1.4s");
  hello.addClass('animated slideOutRight').css("animation-delay","3.3s");
  
  win8apps.addClass('animated slideInLeft').css("animation-delay", "3s");
  
  xboxBase.addClass('animated xboxFloat').css("animation-duration", "1.8s");
  xboxTop.addClass('animated xboxFloat').css("animation-duration", "2.1s");
  xboxPlay.addClass('animated xboxFloat').css("animation-duration", "2.0s"); 
});
$(function(){
  var TVContainer = $(".tv-fixed.first"),
      monitor = TVContainer.find(".monitor"),
      TVSnap = $(".tv-fixed.last"),
      snapTop = TVSnap.offset().top,
      originalTop = TVContainer.offset().top - 200;
  
  monitor.height(monitor.width() * 0.58);
  
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var tvGoesTooFar = scrollTop + 216 >= snapTop;
  
  if (tvGoesTooFar){
    TVContainer.removeClass('screen_fixed');
    TVSnap.addClass('active');
  } else {
    TVSnap.removeClass('active');
    if (scrollTop >= originalTop) {
      TVContainer.addClass('screen_fixed').css('width', TVContainer.width() ).css('margin-left', '-' + TVContainer.width()/2 );
    } else {    
        TVContainer.removeClass('screen_fixed');
    }
  }
  });
});