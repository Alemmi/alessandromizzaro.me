$(document).ready(function(){
      function onscroll(){
            var scroll = $(window).scrollTop();
            var h = $("nav.fixed-top").height();
            if (scroll >= h + 50) {
                  $("nav.fixed-top").addClass("nav_scrolled");
              }else{
                  $("nav.fixed-top").removeClass("nav_scrolled");
              }
      };
      $(window).scroll(onscroll);
      onscroll();
      
      function scroll(){
            var temp = $(this).attr('href');
            if (temp.includes("/")){
                  var $href = temp.replace("/","");
            }else{
                  var $href = temp;
            }
            var $anchor = $($href).offset();
            $('html, body').animate({
                  scrollTop:$anchor.top - 100
            },400);
            return false;
      }
      $('.spy').find('a').click(scroll);
});
