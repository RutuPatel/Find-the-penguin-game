$(document).ready(function () {
    
    
     var scores = 0;
     var max_score = 0;
    
     update_score(scores, max_score);
    
     function update_score (scores, max){
        if(max < scores){
            max_score = scores;
        }
        $("#score").empty();
        $("#score").append("Scores "+scores+"\nHighScore "+max_score);


    }

     var elements = $("#gameholder").children("div");
     shuffle(elements);
    
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex ;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      for(i=0;i<array.length;i++){
            $('#gameholder').append($(array[i]));
        }
    }
    
    $('#Penguin1').click(function () {
        $('#Penguin1').addClass('penguin1-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin2').click(function () {
        $('#Penguin2').addClass('penguin2-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin3').click(function () {
        $('#Penguin3').addClass('penguin3-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin4').click(function () {
        $('#Penguin4').addClass('penguin4-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin5').click(function () {
        $('#Penguin5').addClass('penguin5-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin6').click(function () {
        $('#Penguin6').addClass('penguin6-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin7').click(function () {
        $('#Penguin7').addClass('penguin7-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin8').click(function () {
        $('#Penguin8').addClass('penguin8-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin9').click(function () {
        $('#Penguin9').addClass('penguin9-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin10').click(function () {
        $('#Penguin10').addClass('penguin10-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin11').click(function () {
        $('#Penguin11').addClass('penguin11-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin12').click(function () {
        $('#Penguin12').addClass('penguin12-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin13').click(function () {
        $('#Penguin13').addClass('penguin13-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin14').click(function () {
        $('#Penguin14').addClass('penguin14-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin15').click(function () {
        $('#Penguin15').addClass('penguin15-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin16').click(function () {
        $('#Penguin16').addClass('penguin16-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin17').click(function () {
        $('#Penguin17').addClass('penguin17-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
     $('#Penguin18').click(function () {
        $('#Penguin18').addClass('penguin18-reveal');
         scores = scores + 1;  
        update_score(scores, max_score);
    });
    $('#Penguin19').click(function () {
        $('#Penguin19').addClass('penguin19-reveal');
        scores = scores + 1;  
        update_score(scores, max_score);
    });
    $("#yeti").click(function () {
        $('#yeti').addClass('yeti-reveal');        
            $("#myModal").modal();
            scores = 0;
            update_score(scores,max_score);
            shuffle(divs);
    });
    
});

function sound() {
    var s = document.getElementById('yetisound');
    s.currentTime = 0;
    s.play();

    setTimeout(function () {
        if (window.confirm('Sorry!!! You Loose The Game\n\nReset Game?')) {
            window.location.reload();
            if(window.reload()){
             document.cookie = max_score;
         }
            
            if ($('#yeti').hasClass('yeti-reveal')) {
                $('#yeti').removeClass('yeti-reveal');
            }
            if ($('#Penguin1').hasClass('penguin1-reveal')) {
                $('#Penguin1').removeClass('penguin1-reveal');
            }
            if ($('#Penguin2').hasClass('penguin2-reveal')) {
                $('#Penguin2').removeClass('penguin2-reveal');
            }
            if ($('#Penguin3').hasClass('penguin3-reveal')) {
                $('#Penguin3').removeClass('penguin3-reveal');
            }
            if ($('#Penguin4').hasClass('penguin4-reveal')) {
                $('#Penguin4').removeClass('penguin4-reveal');
            }
            if ($('#Penguin5').hasClass('penguin5-reveal')) {
                $('#Penguin5').removeClass('penguin5-reveal');
            }
            if ($('#Penguin6').hasClass('penguin6-reveal')) {
                $('#Penguin6').removeClass('penguin6-reveal');
            }
            if ($('#Penguin7').hasClass('penguin7-reveal')) {
                $('#Penguin7').removeClass('penguin7-reveal');
            }
            if ($('#Penguin8').hasClass('penguin8-reveal')) {
                $('#Penguin8').removeClass('penguin8-reveal');
            }
             if ($('#Penguin9').hasClass('penguin9-reveal')) {
                $('#Penguin9').removeClass('penguin9-reveal');
            }
            if ($('#Penguin10').hasClass('penguin10-reveal')) {
                $('#Penguin10').removeClass('penguin10-reveal');
            }
            if ($('#Penguin11').hasClass('penguin11-reveal')) {
                $('#Penguin11').removeClass('penguin11-reveal');
            }
            if ($('#Penguin12').hasClass('penguin12-reveal')) {
                $('#Penguin12').removeClass('penguin12-reveal');
            }
            if ($('#Penguin13').hasClass('penguin13-reveal')) {
                $('#Penguin13').removeClass('penguin13-reveal');
            }
            if ($('#Penguin14').hasClass('penguin14-reveal')) {
                $('#Penguin14').removeClass('penguin14-reveal');
            }
            if ($('#Penguin15').hasClass('penguin15-reveal')) {
                $('#Penguin15').removeClass('penguin15-reveal');
            }
            if ($('#Penguin16').hasClass('penguin16-reveal')) {
                $('#Penguin16').removeClass('penguin16-reveal');
            }
             if ($('#Penguin17').hasClass('penguin17-reveal')) {
                $('#Penguin17').removeClass('penguin17-reveal');
            }
             if ($('#Penguin18').hasClass('penguin18-reveal')) {
                $('#Penguin18').removeClass('penguin18-reveal');
            }
             if ($('#Penguin19').hasClass('penguin19-reveal')) {
                $('#Penguin19').removeClass('penguin19-reveal');
            }
        }
    }, 1000);
}

function jump() {
    var p = document.getElementById('jumpsound');
    p.currentTime = 0;
    p.play();
}
