$(document).ready(function(){

$('.slide').hide();

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
      $(this).attr('val', 'wrong');
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
      $(this).attr('val','wrong');
    }
    else if ($noAnswer === 'Q2'){
      $(this).attr('val', 'correct');
    }
    else if ($noAnswer === 'Q3'){
      $(this).attr('val','wrong');
    }

  });

  // Help Errors
  $('.submit').on('click', function(){
const $correctQ1 = $('#Q1').children('.yes').attr('val');
const $correctQ2 = $('#Q2').children('.no').attr('val');
const $correctQ3 =$('#Q3').children('.yes').attr('val');

const $wrongQ1 = $('#Q1').children('.no').attr('val');
const $wrongQ2 =$('#Q2').children('.yes').attr('val');
const $wrongQ3 =$('#Q3').children('.no').attr('val');

const $wrongMsg = 'Incorrect! Check your answers.';

  if ($correctQ1 === 'correct'&& $correctQ2 === 'correct' && $correctQ3 === 'correct') {

     $('.Correct-Message p').text('Correct! Insert password:').css('color', 'green');
     $('.slide').slideToggle("slow");
  }
  else if ($wrongQ1 === 'wrong') {
    $('.Correct-Message p').text($wrongMsg).css('color', 'red');
    $('#Q1Help').text('Of course we have hyenahs!').addClass('help');
      if ($wrongQ2 === 'wrong'){
        $('#Q2Help').text('I am at a loss for words').addClass('help');
        if ($wrongQ3 === 'wrong'){
          $('#Q3Help').text('Shocking! You should know this.').addClass('help');
      }
      }
        else if ($wrongQ3 === 'wrong'){

          $('#Q3Help').text('Shocking! You should know this.').addClass('help');
      }
      }

    else if ($wrongQ2 === 'wrong'){
      $('.Correct-Message p').text($wrongMsg).css('color', 'red');
      $('#Q2Help').text('I am at a loss for words').addClass('help');
      if ($wrongQ3 === 'wrong'){
          $('#Q3Help').text('Shocking! You should know this.').addClass('help');
      }
    }

    else if ($wrongQ3 === 'wrong') {
      $('.Correct-Message p').text($wrongMsg).css('color', 'red');
      $('#Q3Help').text('Shocking! You should know this.').addClass('help');
    }

    $('html, body').animate({
      scrollTop: $('.submit').offset().top
  }, 'slow');


 });


  // REVEAL MESSAGES

  $('.reveal').on('click', function(){
    let enteredPassword = $('#user-input').val();

    if (enteredPassword === 'test') {
      $('.message-text').html('<p> Dear Holly </p><p> I want you to know how much I respect you and look up to you. Thank you for always being supportive, and always ready to solve a problem. I have enjoyed working with you and bouncing ideas off you - the smokey campaign a great example. </p> <p> I also know that your career is taking off, and I wish you all the best for the future. We will no doubt keep in touch.</p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }

    else if (enteredPassword === 'AussieHolly53') {
      $('.message-text').html('<p> I want to thank you for mentoring me, for being supportive, and always ready to solve a problem. I have enjoyed working with you and bouncing ideas off you - the smokey campaign a great example. </p><p> I also know that your career is taking off, and I wish you all the best for the future. Please keep in touch!</p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'EllySmelly12') {
      $('.message-text').html('')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'DogsandWeddings18') {
      $('.message-text').html('<p> I want to thank for the last two years. You have been an inspiration, and I want you to know that many staff members look up to you </p><p> Please continue being a leader and doing great things. I wish you all the best for the future, and for your wedding :) I am so excited for you.</p><p> If we haven not already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'codingqueen253') {
      $('.message-text').html('<p> Dear Sophie </p> <p> I cannot tell you how much I am going to miss you. You are a huge inspiration to me - your drive, hard-work and ambition. You have always supported me, and working with you has taught me so many things.</p><P> The card you gave me is now one of my most cherished posessions </p><p>Always believe in yourself Soph. And don\'t be hard on yourself when you don\'t understand something right away. When I began the job I barely knew how to use Wordpress - I am deadly serious.</p><p> I look forward to our coding meetups :) </p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'AussieHolly53') {
      $('.message-text').html('')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'AussieHolly53') {
      $('.message-text').html('')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'AussieHolly53') {
      $('.message-text').html('')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'AussieHolly53') {
      $('.message-text').html('')
                        .css('border', '40px solid lightblue');
    }


    $('#user-input').val('');
    $('html, body').animate({
      scrollTop: $('.submit').offset().top
  }, 'slow');

  });







});
