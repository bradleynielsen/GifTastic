$(document).ready( function() {

//Global Variables
    var buttonsArray = ["dog","cat","yeti","the dude","taxation is theft"];

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
        console.log(apiSearchText);

        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+apiSearchText+"&api_key=dc6zaTOxFJmzC&limit=10"

        $.ajax({url:queryURL, method: 'GET'}).done(function(response){
            console.log(queryURL);

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
                    gifImage.attr('src', response[i].images.fixed_height_still.url);
                    gifImage.attr('data-still', response[i].images.fixed_height_still.url);
                    gifImage.attr('data-animate', response[i].images.fixed_height.url);
                    gifImage.attr('data-state','still');
                    gifImage.addClass('gif inline-block');

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
    console.log(buttonsArray);
    console.log(newThing);
    buttonsArray.push(newThing);
    console.log(buttonsArray);
    $('#buttons').empty();
    gnerateButtons();

    event.preventDefault();
 });

// add new button
    //add to array from input

});