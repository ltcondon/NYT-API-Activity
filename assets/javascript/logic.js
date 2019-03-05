// API CALLING 
$(document).ready(function() {

    var searchTerm = ""; 
    var limit;
    var startYear ; 
    var endYear; 
    var articleDiv = $("#article-Div"); 


    // https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=qb8DZm914Unf33WJWv9C0NA9J3AiAGjn

    var btnSearch= $("#btnSearch");
    var btnClear = "#";
    

    btnSearch.on("click", function() {
        searchTerm = $("#searchTerm").val();
        console.log(searchTerm);
       
        if ( searchTerm !== null)
        {
            limit = $("#retrieveRecords").val();

            startYear = $("#startYear").val();
            endYear = $("#endYear").val();

            queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm + "&begin_year="+ startYear + "&end_year=" + endYear + "&api-key=qb8DZm914Unf33WJWv9C0NA9J3AiAGjn"; 

            $.ajax( {
                url : queryURL, 
                method: "GET", 
            }).then(function(results){
                console.log(results); 

                //
                for (var i = 0; i < limit; i ++) {

                    var headline = results.response.docs[i].headline.main; 
                    $("<h3>").text(headline); 

                    // console.log(headline); 

                    articleDiv.append($("<h1>" + "Article: " + headline + "</h1>"));

                    var byline = results.response.docs[i].byline.original; 
                    // console.log(byline); 

                    articleDiv.append($("<h2> Byline: " + byline + "</h2>"));
                    var snippet = results.response.docs[i].snippet; 
                    console.log(snippet);
                    articleDiv.append($("<p> News Snippet: ").text(snippet));



                }

            })
        }
        else { 
            alert("Please enter a search Term"); 
        }
    });


})
