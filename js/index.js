$(document).ready(function(){


function updateBackground(event){ //FUNCTION TO UPDATE page
  event.preventDefault();//prevent a form submission
  $('body').removeClass(); //remove existing class
  var city = $('input').val();
  //If the variable is one of the three things that is city xx then show xx image
    //Remove class of body. Add class of xx to body tag
    //else give an alert
  if (city== "New York"||city=="NYC"||city=="New York City"){
      $('body').addClass('nyc');}
  else if (city== "San Francisco"||city=="SF"||city=="Bay Area"){
      $('body').addClass('sf');}
  else if (city== "Los Angeles"||city=="LA"||city=="LAX"){
      $('body').addClass('la');}
  else if (city== "Austin"||city=="ATX"){
      $('body').addClass('austin');}
  else if (city== "Sydney"||city=="SYD"){
      $('body').addClass('sydney');}
  else alert("Sorry we do not have this city");
  $('#cityType').val("");
  }
//On pressing Update
$('#submit-btn').click(updateBackground)


});
