$(document).ready(function(){

  // Actions for Yes and No buttons
  $('.yes').on('click', function(){
    const $q1 = $(this).parent()
                       .attr('val');

                       $(this).addClass('green');

                       $(this).next()
                              .removeClass('red')
                              .attr('val', '');

    if ($q1 === 'Q1'){
      $(this).attr('val','correct');
    }
    else if ($q1 === 'Q2'){
      $(this).attr('val', '');
    }
    else if ($q1 === 'Q3'){
      $(this).attr('val','correct');
    }

  });


  $('.no').on('click', function(){
    const $noAnswer = $(this).parent()
                       .attr('val');

                       $(this).addClass('red');

                       $(this).prev()
                              .removeClass('green')
                              .attr('val', '');

    if ($noAnswer === 'Q1'){
      $(this).attr('val','');
    }
    else if ($noAnswer === 'Q2'){
      $(this).attr('val', 'correct');
    }
    else if ($noAnswer === 'Q3'){
      $(this).attr('val','');
    }

  });

  // Help Errors
  $('.submit').on('click', function(){
const $correctQ1 = $('#Q1').children('.yes').attr('val');
const $correctQ2 = $('#Q2').children('no').attr('val');
const $correctQ3 =$('#Q3').children('yes').attr('val');

const $wrongQ1 = $('#Q1 .answer .no').attr('val');
const $wrongQ2 =$('#Q2 .answer .yes').attr('val');
const $wrongQ3 =$('#Q3 .answer .no').attr('val');

  if ($correctQ1 === 'correct'|| $correctQ2 === 'correct' || $correctQ3 === 'correct') {
     $('.slide').hide();
  }
  else if ($wrongQ1 === 'wrong') {
    $('#Q1 .help p').text('Of course we have hyenahs! Lions too.');
  }
  else if ($wrongQ2 === 'wrong') {
    $('#Q1 .help p').text('I am lost for words');
  }
  else if ($wrongQ3 === 'wrong') {
    $('#Q1 .help p').text('Come now! You should know this.');
  }


 });







});
