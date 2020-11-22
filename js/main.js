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
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlide");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active2", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active2";
      setTimeout(showSlides, 5000);
  }
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