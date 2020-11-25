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
     
String.prototype.toKorChars = function() {
  var cCho = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], 
  cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ], 
  cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], cho, jung, jong; 
  var str = this, 
  cnt = str.length, 
  chars = [], 
  cCode; 
  for (var i = 0; i < cnt; i++) { 
      cCode = str.charCodeAt(i); 
      if (cCode == 32) { 
        chars.push(" ");
        continue;
      } // 한글이 아닌 경우 
      if (cCode < 0xAC00 || cCode > 0xD7A3) { 
          chars.push(str.charAt(i)); continue; 
          } 
      cCode = str.charCodeAt(i) - 0xAC00; 

      jong = cCode % 28; 
      // 종성 
      jung = ((cCode - jong) / 28 ) % 21 

      // 중성 
      cho = (((cCode - jong) / 28 ) - jung ) / 21 
      // 초성 

      //기본 코드 테스트가 ㅌㅔㅅ-ㅌ- 형식으로 저장됨 
      // chars.push(cCho[cho], cJung[jung]); 
      // if (cJong[jong] !== '') { 
      //     chars.push(cJong[jong]); 
      //     } 

// 이부분을 원하는 방향으로 바꿈.
      // 테스트라는 문장이 
      // ㅌ,ㅔ,ㅅ,-,ㅌ,- 형식으로 저장되던 코드를 
      // ㅌ,테,ㅅ,스,ㅌ,트 형식으로 저장되도록함 (타이핑효과를 위해서)
      chars.push(cCho[cho]);
      chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28)));
      if (cJong[jong] !== '') { 
          chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28) + jong ));
      }
     
  } 
  
  return chars; 
}


//타이핑할 문장
var result1 = "안녕하세요!";
var result2 = "웹 퍼블리셔라는 꿈을 코딩중인";
var result3 = "정원진입니다.";
var typeing1=[],
    typeing2=[],
    typeing3=[];
result1 = result1.split(''); // 한글자씩자름
result2 = result2.split(''); // 한글자씩자름
result3 = result3.split(''); // 한글자씩자름

//각글자 초성,중성,종성으로 나눔
for(var i =0; i<result1.length; i++){
  typeing1[i]=result1[i].toKorChars();
}
for(var i =0; i<result2.length; i++){
  typeing2[i]=result2[i].toKorChars();
}
for(var i =0; i<result3.length; i++){
  typeing3[i]=result3[i].toKorChars();
}

//출력할 엘리먼트요소 가져옴 
var resultDiv1 = document.getElementsByClassName("result1")[0];
var resultDiv2 = document.getElementsByClassName("result2")[0];
var resultDiv3 = document.getElementsByClassName("result3")[0];

//
var text = "";
var i=0; 
var j=0; 

//총글자수
var imax1 = typeing1.length;
var imax2 = typeing2.length;
var imax3 = typeing3.length;

//setInterval을 이용해 반복적으로 출력 
var inter = setInterval(typi,150);
var inter2;
var inter3;


function typi(){
  //글자수만큼 반복후 종료
  $('.result1').addClass('cursor1');
  if(i<=imax1-1){
      //각 글자가 초성 중성 종성 순서대로 추가되도록 
      var jmax1 = typeing1[i].length;
      $('.result1').innerText = text + typeing1[i][j];
      j++;
      if(j==jmax1){
          text+=  typeing1[i][j-1];//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
          i++;
          j=0;
      }
  } else{
      clearInterval(inter);
       text ="";
      i=0;
      j=0; 
 setTimeout(function(){    
  $('.result1').removeClass("cursor1");
    setTimeout(function(){             
      $('.result2').addClass("cursor1");
       setTimeout(function(){
          inter2 = setInterval(typi2,150);
       },400);
     },300);
   },400);
  }
}

function typi2(){
  //글자수만큼 반복후 종료 

  if(i<=imax2-1){
      //각 글자가 초성 중성 종성 순서대로 추가되도록 
      var jmax2 = typeing2[i].length;
      $('.result2').innerText = text + typeing2[i][j];
      j++;
      if(j==jmax2){
          text+=  typeing2[i][j-1];//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
          i++;
          j=0;
      }
  } else{
    clearInterval(inter);
     text ="";
    i=0;
    j=0; 
setTimeout(function(){    
  $('.result2').removeClass("cursor1");
  setTimeout(function(){             
    $('.result3').addClass("cursor1");
     setTimeout(function(){
        inter3 = setInterval(typi3,150);
     },400);
   },300);
 },400);
}
}

function typi3(){
  //글자수만큼 반복후 종료 

  if(i<=imax3-1){
      //각 글자가 초성 중성 종성 순서대로 추가되도록 
      var jmax3 = typeing3[i].length;
      $('.result3').innerText = text + typeing3[i][j];
      j++;
      if(j==jmax3){
          text+=  typeing3[i][j-1];//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
          i++;
          j=0;
      }
  } else{
      clearInterval(inter);
  }
}




// 원형 그래프
$(window).ready(function(){
  draw(80, '.pie-chart1', ' rgb(140, 140, 206)');
 draw(70, '.pie-chart2', ' rgb(152, 152, 209)');
 draw(50, '.pie-chart3','#bdbaea');
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
$(document).ready(function(){
  $("#contents1").click(function(){
      $(".popup").fadeIn()
  });
  $("#contents2").click(function(){
    $(".popup1").fadeIn()
});
  $(".exit").click(function(){
      $(".popup").fadeOut();
  });
  $(".exit1").click(function(){
    $(".popup1").fadeOut();
});
});