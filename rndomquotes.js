
var ourRequest = new XMLHttpRequest();
var ourData =[];
ourRequest.open("GET","https://gist.githubusercontent.com/wman27/8fd964ae63540a10f5cff06fbd6a735a/raw/c45b9f19d994d20b473fc73e750cac99dd9de7c7/json%2520quotes");
ourRequest.onload = function() {
    ourData = JSON.parse(ourRequest.responseText);
};
ourRequest.send();

$(document).ready(function() {
    
    function getRandomQuote() {
        var randomNumber = Math.floor(Math.random()*ourData.length);
        $("#quote").text('"' + ourData[randomNumber].quote + '"');
        $("#quote-author").text("-" + ourData[randomNumber].author);
    }

    colorList=["#BF1A22","#C34A1B","#C3B71B","#1C9E16","#9B1563","#9B1563"];
    colorCounter = 0;
    
    $("#new-quote").on("click",function() {
        $("#quote, #quote-author").fadeOut("slow","swing");
        setTimeout(getRandomQuote,500);
        $("#quote, #quote-author").fadeIn("slow","swing");
        
        colorCounter += 1;
        if (colorCounter == colorList.length) {
            colorCounter = 0;
        }
        $("body").css({"background-color": colorList[colorCounter],"transition":"background-color 1s linear"});
        
    })

})


