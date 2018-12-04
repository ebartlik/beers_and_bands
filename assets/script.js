//Reads the HTML before reading the javascript
$(document).ready (function () {

  //Initializing firebase
  var config = {
    apiKey: "AIzaSyA34rCupaiOnfXRKBhsmgYsTc6Brp9ysew",
    authDomain: "beers-and-bands-rev-1.firebaseapp.com",
    databaseURL: "https://beers-and-bands-rev-1.firebaseio.com",
    projectId: "beers-and-bands-rev-1",
    storageBucket: "beers-and-bands-rev-1.appspot.com",
    messagingSenderId: "592809981196"
  };

  firebase.initializeApp(config);

//Create variable to reference the database
  var dataRef = firebase.database();


  // Execute a function when the user presses a key on the keyboard
  $("body").keypress(function(e){
    var key = e.which; // store key in variable
    // Number 13 is the "Enter" key on the keyboard
    if (key == 13){
      //run on click function
      $("#letsRock").click();
      return false;
    }

  });


//When you click the "Let's Rock" Button...
  $("#letsRock").on("click", function (event) {
   // prevent form from submitting
    event.preventDefault();
    //Store value that user typed into variable artist
    var artist = $("#artist").val().trim();
    console.log(artist +"ARTIST");

    var proxyURL = 'https://shielded-hamlet-43668.herokuapp.com/';
    //Are we still using this??
    var queryURL1 = 'http://beermapping.com/webservice/loccity/1cd5db8a402574bb7ecab4285b88793f/jersey+city&s=json'
    var queryURL2 = 'http://rest.bandsintown.com/artists/' + artist + '/events?app_id=1f631e0138387b85bc49eb32aa23ea48&artistname= ' + artist




    //AJAX call to Bands in Town API
    $.ajax({
      url: proxyURL + queryURL2,
      method: "GET"
      // dataType: "xml",
    }).then(function (response) {
      // console.log(response);
      //If query returns no results
      if (response.length === 0){
        //Clear out previous contents of modal
        $(".modal-body").html("");
        //Add message to Modal
        $(".modal-body").text("There Are No Upcoming Events");

      }

      for (i = 0; i < 8; i++) {
        console.log(response[i].venue.name);
        console.log(response[i].venue.city);
        console.log(response[i].venue.datetime);
      }

      //Store JSON strings into variables
      var cityDateTimeOne = JSON.stringify('<b>Venue:</b> ' + (response[0].venue.name) + '<br>' + ' <b>City:</b> ' + response[1].venue.city) + '<br>' + ' <b>Date/Time:</b> ' + (response[1].datetime) + '<br>';
      console.log(cityDateTimeOne);
      var cityDateTimeTwo = JSON.stringify('<b>Venue:</b> ' + (response[1].venue.name) + '<br>' + ' <b>City:</b> ' + response[1].venue.city) + '<br>' + ' <b>Date/Time:</b> ' + (response[1].datetime) + '<br>';
      var cityDateTimeThree = JSON.stringify('<b>Venue:</b> ' + (response[2].venue.name) + '<br>' + ' <b>City:</b> ' + response[2].venue.city) + '<br>' + ' <b>Date/Time:</b>: ' + (response[2].datetime) + '<br>';
      var cityDateTimeFour = JSON.stringify('<b>Venue:</b> ' + (response [3].venue.name) + '<br>' + ' <b>City:</b> ' + response[3].venue.city) + '<br>' + ' <b>Date/Time:</b> ' + (response[3].datetime) + '<br>';
      var cityDateTimeFive = JSON.stringify('<b>Venue:</b> ' + (response[4].venue.name) + '<br>' + ' <b>City:</b> ' + response[4].venue.city) + '<br>' + ' <b>Date/Time:</b> ' + (response[4].datetime) + '<br>';
      var cityDateTimeSix = JSON.stringify('<b>Venue:</b> ' + (response[5].venue.name) + '<br>' + ' <b>City:</b> ' + response[5].venue.city) + '<br>' + ' <b>Date/Time:</b> ' + (response[5].datetime) + '<br>';
      var cityDateTimeSeven = JSON.stringify('<b>Venue:</b> ' + (response[6].venue.name) + '<br>' + ' <b>City:</b> ' + response[6].venue.city) + '<br>' + ' <b>Date/Time:</b> ' + (response[6].datetime) + '<br>';
      var cityDateTimeEight = JSON.stringify('<b>Venue:</b> ' + (response[7].venue.name) + '<br>' + ' <b>City:</b> ' + response[7].venue.city) + '<br>' + ' <b>Date/Time:</b> ' + (response[7].datetime) + '<br>';
      // var cityDateTimeNine = JSON.stringify('<b>Venue:</b> ' + (response[8].venue.name) + '<br>' + ' <b>City:</b> ' + response[8].venue.city) + '<br>' + ' <b>Date/Time:</b> ' + (response[8].datetime) + '<br>';
      // var cityDateTimeTen = JSON.stringify('<b>Venue:</b> ' + (response[9].venue.name) + '<br>' + ' <b>City:</b> ' + response[9].venue.city) + '<br>' + ' <b>Date/Time:</b> ' + (response[9].datetime) + '<br>';
      // var cityDateTimeEleven = JSON.stringify('<b>Venue:</b> ' + (response[10].venue.name) + '<br>' + ' <b>City:</b> ' + response[10].venue.city) + '<br>' + ' <b>Date/Time:</b> ' + (response[10].datetime) + '<br>';
      // var cityDateTimeTwelve = JSON.stringify('<b>Venue:</b> ' + (response[11].venue.name) + '<br>' + ' <b>City:</b> ' + response[11].venue.city) + '<br>' + ' <b>Date/Time:</b> ' + (response[11].datetime) + '<br>';
      
      //Will convert time and date so that user can read it
      //  var dateTimeConverted = new Date("2018-07-26 19:00:00");
      //  dateTimeConverted = moment(dateTime).format("MM-DD-YYYY HH:mm");
      //  var dateTimeConverted = moment(dateTime,"MM-dd-yyyyTHH:MM");
  
      //Clear any previous JSON results from display
      $(".modal-body").html("");

      //Display JSON string variables as buttons and append them to page
      
      $(".modal-body").append('<button id = concert-buttonOne data-venue-name=' + response[0].venue.name + '" data-venue-city="' + response[0].venue.city + '" data-venue-time="' + response[0].datetime + '" class="venue-btn">' + cityDateTimeOne);
      $(".modal-body").append('<button id = concert-buttonTwo data-venue-name="' + response[1].venue.name + '" data-venue-city="' + response[1].venue.city + '" data-venue-time="' + response[1].datetime + '" class="venue-btn">' + cityDateTimeTwo);
      $(".modal-body").append('<button id = concert-buttonThree data-venue-name="' + response[2].venue.name + '" data-venue-city="' + response[2].venue.city + '" data-venue-time="' + response[2].datetime + '" class="venue-btn">' + cityDateTimeThree);
      $(".modal-body").append('<button id = concert-buttonFour data-venue-name="' + response[3].venue.name + '" data-venue-city="' + response[3].venue.city + '" data-venue-time="' + response[3].datetime + '" class="venue-btn">' + cityDateTimeFour);
      $(".modal-body").append('<button id = concert-buttonFive data-venue-name="' + response[4].venue.name + '" data-venue-city="' + response[4].venue.city + '" data-venue-time="' + response[4].datetime + '" class="venue-btn">' + cityDateTimeFive);
      $(".modal-body").append('<button id = concert-buttonSix data-venue-name="' + response[5].venue.name + '" data-venue-city="' + response[5].venue.city + '" data-venue-time="' + response[5].datetime + '" class="venue-btn">' + cityDateTimeSix);
      $(".modal-body").append('<button id = concert-buttonSeven data-venue-name="' + response[6].venue.name + '" data-venue-city="' + response[6].venue.city + '" data-venue-time="' + response[6].datetime + '" class="venue-btn">' + cityDateTimeSeven);
      $(".modal-body").append('<button id = concert-buttonEight data-venue-name="' + response[7].venue.name + '" data-venue-city="' + response[7].venue.city + '" data-venue-time="' + response[7].datetime + '" class="venue-btn">' + cityDateTimeEight);
      // $(".modal-body").append('<button id = concert-buttonNine data-venue-name="' + response[8].venue.name + '" data-venue-city="' + response[8].venue.city + '" data-venue-time="' + response[8].datetime + '" class="venue-btn">' + cityDateTimeNine);
      // $(".modal-body").append('<button id = concert-buttonTen data-venue-name="' + response[9].venue.name + '" data-venue-city="' + response[9].venue.city + '" data-venue-time="' + response[9].datetime + '" class="venue-btn">' + cityDateTimeTen);
      // $(".modal-body").append('<button id = concert-buttonEleven data-venue-name="' + response[10].venue.name + '" data-venue-city="' + response[10].venue.city + '" data-venue-time="' + response[10].datetime + '" class="venue-btn">' + cityDateTimeEleven);
      // $(".modal-body").append('<button id = concert-buttonTwelve data-venue-name="' + response[11].venue.name + '" data-venue-city="' + response[11].venue.city + '" data-venue-time="' + response[11].datetime + '" class="venue-btn">' + cityDateTimeTwelve);


    });//AJAX END

    //When you click on a venue
    $("body").on("click",".venue-btn", function(){
      //Empty previously selected venue
      $(".venue").empty();
      //capture Venue's city in a variable
      var city = $(this).attr("data-venue-city");
      //capture Venue's name in a variable
      var venue = $(this).attr("data-venue-name");
      //Vapute concert's time in a variable
      var time = $(this).attr("data-venue-time");
      //replace any spaces in the city name to prepare it to be plugged into google maps URL
      city.replace(" ","+");
      //plug city value with replaced spaces into google map src and replace the original src in the html
      $("#google-map").attr("src","https://www.google.com/maps/embed/v1/search?key=AIzaSyBbmoAi4qVWUugXB3-QpKR_kdAhtalKGI4&q=Bars+In+" + city);
      //Hide the modal
      $("#venue-modal").modal("hide");
      //Make the "venue" div appear on the html with the following info....
      $(".venue").append("<p class='selected-venue'>Selected Venue</p>");
      var venueDiv = $("<div>").attr("class","venue-details");
      venueDiv.html(
        "<p><b>" + venue + "</b></p>" + 
        "<p><i>" + city + "</i></p>" + 
        "<p>" + time + "</p>");
      $(".venue").append(venueDiv);

    });//Venue button click function
   
   });//Let's Rock click function end

  });




  // }, function(errorObject) {
  //     console.log("Errors handled: " + errorObject.code);
  //   });

