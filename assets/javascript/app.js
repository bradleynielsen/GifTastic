$(document).ready( function() {
//Global Variables
    var buttons = ["dog","cat","yeti","the dude","taxation is theft"];

// add buttons from array
    for (var i = 0; i < buttons.length; i++) {
        var b = $('<button>');
        b.addClass('gif-button');
        b.addClass('btn-lg');
        b.addClass('btn-primary');
        b.attr('data-gifAnimalName', buttons[i]);
        b.text(buttons[i]);
        $("#buttons").append(b);
    };

//functions
    //add gifs to div

    $('.gif-button').on("click", function(){
        $("#gifs").empty();
        var apiSearchText = $(this).data("data-gifAnimalName");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+apiSearchText+"&api_key=dc6zaTOxFJmzC&limit=10"
        
        //aaaaaaaajjjjjjjaaaaaaxxxxxx!!!!!
        $.ajax({
            url:queryURL, method: 'GET'}).done(function(response){

            //magic here
            var response = response.data;
            console.log(response);


            for (var i = 0; i < response.length; i++) {
                
                var gifDiv = $("<div>");

                //rating
                var gifRating = response[i].rating;
                var p = $('<p>').text("Rating: " + gifRating);

                //gif image
                var gifImage = $('<img>');
                gifImage.attr('src', response[i].images.fixed_height.url);
                // add start stop here


                gifDiv.append(p)
                gifDiv.append(gifImage)

            $('#gifsAppearHere').prepend(gifDiv);

            $("#gifs").append(gifImage)
               
            }
        })
    })



// start gif
// stop gif


// add new button
    //add to array from input

});