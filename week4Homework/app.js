$(document).ready(function(){
    var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=fe0441da2d754e7786de826f71523c2b";
    var flex = document.getElementsByClassName("flex-container");

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        return data;
    })
    .then(function(data){
        appendData(data);
    })
    .catch(function(err){
        console.log(err);
    })
})



function appendData(data){
    data.articles.forEach(function(article){
        console.log(article);
        if(article.urlToImage != null){
            var title = article.title;
            var img = "<div><img src='" + article.urlToImage + "'><div>" +"<span id='title'>"+ title +"</span>>/div>" + "</div>";
            $(".flex-container").append(img);
        }
    })
}
