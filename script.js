(function () {
     var words = ["Software Developer","Passionate","capable","confident","myself" ],
     i = 0;
     setInterval(function(){ $('#words').fadeOut(function(){
         $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
       }); }, 3000)
   })();




