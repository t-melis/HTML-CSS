var quoteUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&jsonp=?&lang=en";


function getQuote(){
    $.getJSON(quoteUrl,function (quote){
        $("#quote").html(quote.quoteText + "<br>" + "-"+quote.quoteAuthor);
    });
} 
// Get a random quote
getQuote();

navigator.geolocation.getCurrentPosition(success, error);

function success(pos){
    var coords = pos.coords;
    var lat = coords.latitude;
    var lon = coords.longitude;
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&APPID=5eb7599ec069631abc4e8517c3e6daef";
    console.log(weatherUrl);
    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lon + "&zoom=13&size=300x300&sensor=false";
    $("#position").append(img);
    getWeather(weatherUrl);
}

function error(){
    alert("You play bad");
}

// Get another random quote
$("#otherQuote").on("click", getQuote);

function getWeather(weatherUrl){
    $.getJSON(weatherUrl, function(weatherObj){
        var temperature = weatherObj["main"].temp;
        var area = weatherObj.name;
        var desc = weatherObj["weather"][0].description;
        var humidity = weatherObj["main"].humidity;
        var info = "<h2>Current Temperature: "+ temperature + " Celsius.";
        info += "<br>Area: "+ area;
        info += "<br>Current Weather: " + desc;
        info += "<br>Humidity: " + humidity + "%</h2>";
        $("#position").append(info);
    });
}

