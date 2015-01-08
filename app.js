$(document).ready(function(){
    
}); 
    
$(function() {
    $('#search-term').submit(function(event) {
        event.preventDefault();
        $("#search-results").empty();
        var userSearch = $('#query').val();
        
    $.ajax({url: "http://www.omdbapi.com/",
            dataType: 'jsonp',
            type: 'GET',
            data: { 
                s: userSearch,
                r: 'json'
        }})
    .done(function(data) {
        showResults(data.Search);
        });
    });
})
    
function showResults(results) {
    $.each(results, function(index,value) {
        console.log(index+": "+value.Title+" "+value.Year+" "+value.Actors+" "+value.imdbRating);
        var myResults = value.Title+" "+value.Year+"<br>"+"Actors: "+value.Actors+"<br>"+value.imdbRating+"/10"+"<br><br>";
        $("#search-results").append(myResults);
    });
}
    






