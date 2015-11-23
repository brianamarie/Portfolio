/**
 * Created by Briana on 11/22/15.
 */
$(document).ready(function(){


    function animateInfo(divClass, infoID){
        $(infoID).stop().removeClass('hidden').animate({height: "100%"}).css({color: "white"});
        $(divClass).mouseleave(function(){
            $(infoID).stop().animate({height: "0px"}).css({color: "rgba(0,0,0,0)"}).addClass('hidden');
        })
    }

    $('.wedding').hover(function(){
        animateInfo('.wedding','#weddingInfo');
    })

    $('.tictactoe').hover(function(){
        animateInfo('.tictactoe', '#tictactoeInfo');
    })

    $('.calculator').hover(function(){
        animateInfo('.calculator','#calculatorInfo');
    })

    $('.quote').hover(function(){
        animateInfo('.quote','#quotegenInfo');
    })

    $('.wikipedia').hover(function(){
        animateInfo('.wikipedia','#wikiInfo');
    })

    $('.weather').hover(function(){
        animateInfo('.weather','#weatherInfo');
    })

    $('.pomodoro').hover(function(){
        animateInfo('.pomodoro','#pomodoroInfo');
    })

    $('.twitch').hover(function(){
        animateInfo('.twitch','#twitchInfo');
    })

    $('.wedding2').hover(function(){
        animateInfo('.wedding2','#weddingInfo2');
    })
})