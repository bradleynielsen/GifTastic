$(document).ready( function() {

//Global Variables
    var buttonsArray = ["hillary clinton","war","election","trump","taxation", "theft"];

// add buttons from array
function gnerateButtons(){


    for (var i = 0; i < buttonsArray.length; i++) {
        var b = $('<button>');
        b.addClass('gif-button');
        b.addClass('btn-lg');
        b.addClass('btn-primary');
        b.attr('data-name', buttonsArray[i]);
        b.text(buttonsArray[i]);
        $("#buttons").append(b);
    };
}
gnerateButtons();
//functions
    //add gifs to div

    $(document).on("click", '.gif-button', function(){
        $("#gifs").empty();
        var apiSearchText = $(this).data('name');
        var numberOfResults = $("#numberOfResults").val();
        console.log(apiSearchText);


        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+apiSearchText+"&api_key=dc6zaTOxFJmzC&limit="+numberOfResults

        $.ajax({url:queryURL, method: 'GET'}).done(function(response){
            console.log(queryURL);

            //magic here
            var response = response.data;
            console.log(response);


            for (var i = 0; i < response.length; i++) {
                
                var gifDiv = $("<div>");
                gifDiv.addClass("col-lg-4");

             

                //rating
                var gifRating = response[i].rating;
                var p = $('<p>').text("Rating: " + gifRating);

                //gif image
                var gifImage = $('<img>');
                    gifImage.attr('src', response[i].images.fixed_height_still.url);
                    gifImage.attr('data-still', response[i].images.fixed_height_still.url);
                    gifImage.attr('data-animate', response[i].images.fixed_height.url);
                    gifImage.attr('data-state','still');
                    gifImage.addClass('gif');


                // add start stop here


                gifDiv.append(p);
                gifDiv.append(gifImage);

            $('#gifs').prepend(gifDiv);               
            }
        });
    });

$(document).on('click', '.gif', function(){

                       var state = $(this).attr('data-state');
   
                           if ( state == 'still'){
                               $(this).attr('src', $(this).data('animate'));
                               $(this).attr('data-state', 'animate');
                           }else{
                               $(this).attr('src', $(this).data('still'));
                               $(this).attr('data-state', 'still');
                           }
});

 $(document).on("click", '#submitNewThingButton', function(){
    var newThing= $("#thing-input").val();
    buttonsArray.push(newThing);
    $('#buttons').empty();
    $('#thing-input').empty();
    gnerateButtons();    
    event.preventDefault();
 });

// add new button
    //add to array from input

});