//business logic
function Place (city, country, language, landmark, year, recommendation){
  this.city = city;
  this.country = country;
  this.language = language;
  this.landmark = landmark;
  this.year = year;
  this.recommendation = recommendation;
}

//user interface logic
$(document).ready(function(){
  $("form#places").submit(function(event){
    event.preventDefault();

    var inputtedCity=$("#newcity").val();
    var inputtedCountry=$("#newcountry").val();
    var inputtedLanguage=$("#newlanguage").val();
    var inputtedLandmark=$("#newlandmark").val();
    var inputtedYear=$("#newyear").val();
    var inputtedRecommendation=$("#newrecommendation").val();

    var newPlace = new Place(inputtedCity, inputtedCountry, inputtedLanguage, inputtedLandmark, inputtedYear, inputtedRecommendation);

    $("ul#results").append("<li><span class='place'>") + newPlace.city + "</span></li>");

    $("input#newcity").val("");
    $("input#newcountry").val("");
    $("input#newlanguage").val("");
    $("input#newlandmark").val("");
    $("input#newyear").val("");
    $("input#newrecommendation").val("");

  });
});
