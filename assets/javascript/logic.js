// API CALLING 

var searchTerm = ""; 
var limit;
var startYear ; 
var endYear;  


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm + "&api-key=qb8DZm914Unf33WJWv9C0NA9J3AiAGjn"; 
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=qb8DZm914Unf33WJWv9C0NA9J3AiAGjn

var btnSearch = $("<button>"); 

