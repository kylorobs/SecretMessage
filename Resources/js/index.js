$(document).ready(function(){

  // style Yes and No buttons
  $('.yes').on('click', function(){
   $(this).addClass('green')
          .attr('val','answer');
     $('.no').removeClass('red');

  });

    $('.no').on('click', function(){
   $(this).addClass('red');
    $('.yes').removeClass('green')
             .attr('val', '');

  });

  // Help Errors

 $('.submit').on('click', function(){
   let $correct = $('.yes').attr('val');
   if ($correct === 'answer'){
     $('.help p').text('What are you thinking?');
   }
 });





});
