// 2단계 메뉴 (전체 슬라이드)
$(function () {
  $('.depth1 > li').hover(
    function () {

      $('.bg').stop().slideDown(200);
      $('.depth2').stop().slideDown(200);
    },
    function () {
      $('.bg').stop().slideUp(200);
      $('.depth2').stop().slideUp(200);
    }
  );
});
// 원형 그래프
$(window).ready(function(){
  draw(80, '.pie-chart1', '#ccc');
 draw(75, '.pie-chart2', '#8b22ff');
 draw(40, '.pie-chart3','#ff0');
});

function draw(max, classname, colorname){
  var i=1;
   var func1 = setInterval(function(){
     if(i<max){
         color1(i,classname,colorname);
         i++;
     } else{
       clearInterval(func1);
     }
   },10);
}
function color1(i, classname,colorname){
  $(classname).css({
       "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
  });
}


function replay(){
 draw(80, '.pie-chart1', '#ccc');
 draw(75, '.pie-chart2', '#8b22ff');
 draw(40, '.pie-chart3','#ff0');
}

$(document).ready(function(){
  $("#contents1").click(function(){
      $(".popup").fadeIn()
  });
  $("#contents2").click(function(){
    $(".popup").fadeIn()
});
  $(".exit").click(function(){
      $(".popup").fadeOut();
  });
});