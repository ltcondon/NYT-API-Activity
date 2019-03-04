// API CALLING 

var searchTerm = ""; 
var limit;
var startYear ; 
var endYear; 
var articleDiv = $("#"); 


// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=qb8DZm914Unf33WJWv9C0NA9J3AiAGjn

var btnSearch= "#";
var btnClear = "#";
 
btnSearch.on("click", function() {
    searchTerm = $("#search").attr("val");
    limit = $("#count").attr("val");
    startYear = $("#start-year").attr("val");
    endYear = $("#end-year").attr("val");

queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm + "&api-key=qb8DZm914Unf33WJWv9C0NA9J3AiAGjn"; 

$.ajax( {
    url : queryURL, 
    method: "GET", 
}).then(function(response){
    console.log(response); 

    //
    for (var i = 0; i < limit; i ++) {
        articleDiv.append(response[i]);
    }

})
    
})


