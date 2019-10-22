var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var userDo = process.argv[2];
var userSearch = process.argv[3];

userChoiceFunction();



function searchMovie(movie){
    var movieChoice = movie
    const axios = require('axios');
    var baseURL = 'http://www.omdbapi.com/?apikey=';
    var APIKEY = 'trilogy';
    var parameter = '&t=';


 
    // Make a request for a user with a given ID
    axios.get(baseURL + APIKEY + parameter + movie)
    .then(function (response) {

     console.log("All the Data:", response.data);


      // handle success
     // console.log("Title:", response.data.Title);
     // console.log("Year it came out:", response.data.Year);
     // console.log("Ratings:", response.data.Ratings);


    })

   
}







function searchSpotify(song){
        var searchQuery = song;
        var spotify = new Spotify(keys.spotify);

        spotify.search({ type: 'track', query: searchQuery }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }
        
            console.log(data.tracks.items[0]); 
        });
}




function userChoiceFunction(){
    if (userDo === "spotify-this-song"){
        searchSpotify(userSearch);
        console.log('search spotify for a song!')
    } else if (userDo === "movie-this"){
        searchMovie(userSearch);        
        console.log('search a movie!')

    } else{
        console.log('search a movie for All That She Wants by Ace of Base!')
        searchSpotify('All That She Wants');

    }
}
