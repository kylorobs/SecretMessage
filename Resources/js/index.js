$(document).ready(function(){

  // style Yes and No buttons
  $('.yes').on('click', function(){
   $(this).addClass('green')
          .attr('val','correct');
     $('.no').removeClass('red')
             .attr('val', '');

  });

    $('.no').on('click', function(){
   $(this).addClass('red');
          .attr('val','wrong');
    $('.yes').removeClass('green')
             .attr('val', '');

  });


  // Help Errors
  $('.submit').on('click', function(){
let $wrongQ1 = $('.yes').attr('val');
let $correctQ1 = $('#Q1 .answer .yes')..attr('val')
let $correctQ2 =
let $correctQ3 =

let $wrongQ1 =
let $wrongQ2 =
let $wrongQ3 =

 });


 $('.submit').on('click', function(){
   let $correct = $('.yes').attr('val');
   if ($correct === 'answer'){
     $('.help p').text('What are you thinking?');
   }
 });





});
