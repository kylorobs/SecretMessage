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
        $('#Q2Help').text('I am at a loss for words.').addClass('help');
        if ($wrongQ3 === 'wrong'){
          $('#Q3Help').text('Shocking!').addClass('help');
      }
      }
        else if ($wrongQ3 === 'wrong'){

          $('#Q3Help').text('Shocking!').addClass('help');
      }
      }

    else if ($wrongQ2 === 'wrong'){
      $('.Correct-Message p').text($wrongMsg).css('color', 'red');
      $('#Q2Help').text('I am at a loss for words.').addClass('help');
      if ($wrongQ3 === 'wrong'){
          $('#Q3Help').text('Shocking!').addClass('help');
      }
    }

    else if ($wrongQ3 === 'wrong') {
      $('.Correct-Message p').text($wrongMsg).css('color', 'red');
      $('#Q3Help').text('Shocking!').addClass('help');
    }

    $('html, body').animate({
      scrollTop: $('.submit').offset().top
  }, 'slow');


 });


  // REVEAL MESSAGES

  $('.reveal').on('click', function(){
    let enteredPassword = $('#user-input').val();

    if (enteredPassword === 'test') {
      $('.message-text').html('<p> Yay this works </p>')
                        .css('border', '40px solid lightblue');
    }

    else if (enteredPassword === 'AussieHolly53') {
      $('.message-text').html('<p> Dear Holly </p><p> I want to thank you for mentoring me, for being supportive, and always ready to solve a problem. I have enjoyed working with you and bouncing ideas off you - the smokey campaign a great example. </p><p> I also know that your career is taking off, and I wish you all the best for the future. Please keep in touch!</p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'youbrokeitAGAIN??!') {
      $('.message-text').html('<p> Dear Ella </p> <p> Thank you so much for this year. I have really enjoyed working with you, and I will really miss you in the office, and you messing up the website :) </p><p> I know you will do really well in your new job, and I am super excited for you.</p>  <p> Let\'s stay in touch.</p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'DogsandWeddings18') {
      $('.message-text').html('<p> Dear Andita </p> <p> I want to thank for the last two years. You have been an inspiration, and I want you to know that many staff members look up to you. </p><p> Please continue being a leader and doing great things. I wish you all the best for the future, and for your wedding :) I am so excited for you.</p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'codingqueen253') {
      $('.message-text').html('<p> Dear Sophie </p> <p> I cannot tell you how much I am going to miss you. You really do amaze me - your drive, hard-work and ambition. You have always supported me, and working with you has taught me so many things.</p><P> The card you gave me is now one of my most cherished possessions </p><p>Always believe in yourself Soph. And don\'t be hard on yourself when you don\'t understand something right away. When I began the job I barely knew how to use Wordpress - I am deadly serious.</p><p> I look forward to our coding meetups :) </p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'pugCitybitch') {
      $('.message-text').html('<p> Dear Naomi </p><p> I am really going to miss you. You have such energy and drive it\'s astounding. Most of all, you are a great role model for others to pursue your interests outside of work and keep pushing. </p><p> I am confident you will go very far in life, and I wish you the best for the future. We will definitely keep in touch. </p>  <p> Send little Millie my love :) </p><p> And if we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'vanisstuck') {
      $('.message-text').html('<p> Dear Sarah </p><p> Thank you so much for the last two years. I cannot imagine UWSU without you to be honest. Your work ethic and easy-going personality will take you far in life. </p><p> Let\'s definitely stay in touch. All the best for the future. </p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p> <p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'hotwaterdrinker') {
      $('.message-text').html(' <p> Dear Beth </p><p> I am really really going to miss having you around. No cup of tea will ever be the same. Seriously, what am I going to do? </p><p> I worry how my ego will be kept in check without a few insults from you. So make sure you whatsapp them to me instead :) </p><p> Don\'t forget how hard-working and talented you are. Any organisation should count their lucky stars to have you. And just so you know, your smile genuinely uplifts everyone in the office.  </p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'sportsjock') {
      $('.message-text').html('<p> Dear Chris </p><p> Another man down in the office! I am glad Morwood has joined to stop the girls from completely taking over.</p><p> Thanks so much for the year buddy. I think UWSU is really going to rely on you in the coming months, don\'t let your age hold you back :)</p><p> All the best for the future. </p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Cheers, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'TheLegendReturns') {
      $('.message-text').html('<p> Dear Andy </p><p> Why did you decide to come back just as I leave? You are always incredible to work with, I am definitely missing out. </p><p> All the best for the year head, and please do stay in touch. </p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'RememberMadiba') {
      $('.message-text').html('<p> Dear Freya </p><p> You have been President for the entire time I have worked here, and I can\'t say enough how much of a pleasure it has been to work with you.</p><p> Despite shamefully putting another ahead of Nelson, and referring to me occassionally as the \'social media guy\', you are an incredible leader, and an even better friend. </p><p> Best of luck with your film aspirations. Keep writing and creating. Please keep me updated! </p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'fromnaplestolondon') {
      $('.message-text').html('<p> Dear Ludo </p><p> I am really going to miss you. It\'s been two years of hard work, and now it\'s time for both of us to begin new adventures. </p><p> You have a special way with people, no matter their background and age. This with your intelligence and drive is going to take you super far in life. </p><p> Please please stay in touch. If I go to Italy I will be giving you a call :) </p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'DanTheMan') {
      $('.message-text').html(' <p> Dear Dan </p><p> Thank you so so much for the past two years. It really has been a pleasure working with a sabb with a comms background, and who wants to test and experiment with new ideas. You have kept me on my toes, and I have grown professionally because of you. </p><p> You already have much lined up in the months ahead. Beginning a new business is a challenging, roller-coaster undertaking, and I know you have what it takes to be great. Keep pushing and believe in yourself. </p><p> Please stay in touch. </p><p> And if we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'Ayearofcoffees') {
      $('.message-text').html('  <p> Dear Ethel </p><p> You have been a true friend this year, and I want to thank you for being such a legend. I love how curious you are about the world, and ready for the next adventure. </p><p> Always keep that positive spirit of yours. I will miss our coffee catch-ups, but I also know we will stay in touch. </p><p> Best of luck for the year ahead. </p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'joseph') {
      $('.message-text').html('<p> Dear Joseph </p><p> Thanks for the year buddy, and well done for all the hard-work and commitment to UWSU. </p><p> I wish you all the best for the future. </p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'untilthatbeer') {
      $('.message-text').html('<p> Dear Graham</p><p> Thank you for all your hard to make UWSU the best students\' union it can be. Even in these few months you have been around I have learnt a lot from you. </p><p> All the best for the next 2-3 months, it is a very exciting time. </p><p> I will definitely take you up on that beer in a month or two. </p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Cheers, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'salesqueen') {
      $('.message-text').html('<p> Dear Claire </p>  <p> I really wish we would have worked in the same campus. I believe we could have accomplished so much together. You have such a good work ethic, and are always ready for any challenge. </p><p> Thank you so much for always being so friendly and positive. I will miss you. Please stay in touch. </p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }

    else if (enteredPassword === 'AmericanFootball') {
      $('.message-text').html('<p> Dear Andy</p><p> I want to congratulate you for everything you have accomplished in the student bar. Thank you for the year. </p><p> I wish you all the best for the future. </p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Cheers, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }

    else if (enteredPassword === 'Charmaine654') {
      $('.message-text').html('<p> Dear Charmaine</p><p> I am sorry we never really got to work together much. Thank you for all your hard work, and congratulations for the NUS award.</p><p> I wish you the best for the year ahead. </p>  <p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'thatruddy2step') {
      $('.message-text').html('<p> Dear Manisha </p><p> Firstly, I am terribly sorry I never got around to sitting with you and taking you through some of our digital systems. Thank you so much for your patience and understanding. </p><p> Thanks also for always smiling and being so friendly. I hope everything works out.</p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p>  <p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }

    else if (enteredPassword === 'IadmitKyleisAwesome') {
      $('.message-text').html('<p> Dear Sophia </p><p> Despite all the insults over the last two years, I am actually really going to miss you. Really. </p><p> I am most proud of the new job you found, as I think someone like you needs to be challenged. You have everything you need to be successuful - work ethic, intelligence and people-skills. Just a pity you are so annoying... </p><p> Please do join me for a screening of Dunkirk sometime (although I have seen it 3 times now). </p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'GadgetQueen') {
      $('.message-text').html('<p> Dear Sharon </p><p> What am I going to do without all those kickstarter emails? Please carry on sending things you find :) </p> Thank you so much for always looking after me, and being so easy to chat to. </p><p> Your efforts to get me over to Aus have made an impact - after telling Chloe it\'s all she talks about. I will keep you updated. </p><p> Best of luck for the year ahead Sharon, I know everything will work out. </p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'AussieHolly53') {
      $('.message-text').html('')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'Ade975') {
      $('.message-text').html('<p> Dear Ade </p>  <p> Thank you for the past two years. It has been really great to work with you. You are always so helpful, and easy to talk to. </p><p> I wish you all the best for the future. Please do keep in touch. </p>  <p> Cheers, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'therealgraphicsgirl') {
      $('.message-text').html('<p> Dear Jen</p> <p> There can only be one Graphics Girl in my life... What an adventure we have had in the last two years: ups and downs, banter and singing \(well, only you\), jokes and dancing \(only you again\). </p><p> It\'s been literally two weeks and I already miss seeing you everyday. We must definitely make an effort to regularly meet up. </p><p> I am ridiculously excited about the Natural History Museum job. It will be an unforgettable chapter in your life, and I wish you best of luck for it. </p><p> Thanks for being one of the most special people I know. </p>  <p> Much love, Web Boy </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'studentoftheyear') {
      $('.message-text').html('<p> Dear Humaira </p><p> Quite simply, thanks for being incredible. Your work ethic, initiative and creativity is an inspiration. You are also a very friendly and kind person - qualities that will take you very far in life. </p><p> Best of luck for future. Please stay in touch! </p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }
    else if (enteredPassword === 'Angelo862') {
      $('.message-text').html('<p> Dear Angelo </p>  <p> Thanks very much for the past two years. You have worked hard and achieved much, and it has been a pleasure to work with you. </p><p> All the best for future adventures. </p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }

    else if (enteredPassword === 'QueenSomirun') {
      $('.message-text').html('<p> Dear Somirun </p><p> I really do not know what I am going to do without a 2step from you waiting for me to complete. And then the hundred changes thereafter :) I wish all staff had your attention for detail. You make up my game on a daily basis. </p><p> I really am going to miss you Somirun! You are fun, easy-going and loved by everyone. I wish you all the best for the months ahead, I know it will all work out. </p><p> We must definitely stay in touch! </p><p> If we haven\'t already, make sure we are connected on <a href="https://www.linkedin.com/in/kyle-robinson-a221a54b/"> LinkedIn</a></p><p> Much love, Kylo </p>')
                        .css('border', '40px solid lightblue');
    }

    else {
      $('.message-text').html('<p> Incorrect password. Type carefully </p>')
                        .css('border', '40px solid lightblue');
    }




    $('#user-input').val('');
    $('html, body').animate({
      scrollTop: $('.submit').offset().top
  }, 'slow');

  });







});
