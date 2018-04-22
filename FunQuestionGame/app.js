var url = "https://opentdb.com/api.php?amount=1";
var question = $(".question");
axios.get(url)
.then(function(res){
    console.log(res);
    $(".question").text(res.data.results[0].question);
    displayRandomAnswers(res);
})
.catch(function(err){
    console.log(err);
})


function displayRandomAnswers(res){
    var correctAnswer = res.data.results[0].correct_answer;
    var incorrectAnswers = res.data.results[0].incorrect_answers;
    incorrectAnswers.push(correctAnswer);
    incorrectAnswers = shuffle(incorrectAnswers);
    incorrectAnswers.forEach(function(answer){
        var newAnswer = "<div>" + answer + "</div>";
        console.log(newAnswer);
        $(".answers").append(newAnswer);
    });
}

function shuffle(arr){
    var j,k,i;
    for(i = arr.length -1; i > 0; i--){
        j = Math.floor(Math.random() * (i+1));
        k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
    }
    return arr;
}