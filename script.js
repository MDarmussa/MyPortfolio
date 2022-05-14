(function () {
     var words = ["passionate","creative","confident","perseverance", "problems solver", "inquisitive", "resilient", "knowledgeable", "adaptable"],
     i = 0;
     setInterval(function(){ $('#words').fadeOut(function(){
         $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
       }); }, 2000)
   })();




