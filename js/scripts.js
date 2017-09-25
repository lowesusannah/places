//business logic
function Destination(country, city, hotel, landmark) {
  this.country = country;
  this.city = city;
  this.hotel = hotel;
  this.landmark = landmark;
}
Destination.prototype.cityCountry = function() {
  return this.city + " " + this.country;
}

$(document).ready(function(){
  $("#form").submit(function(event) {
  event.preventDefault();

  var country= $("#country").val();
  var city = $("#city").val();
  var hotel = $("#hotel").val();
  var landmark = $("#landmark").val();
  var newDestination = new Destination(country, city, hotel, landmark);
console.log(typeof newDestination);


$("ul#output").append("<li><span class='info'>" + newDestination.cityCountry() + "</span></li>");
alert("here");
$(".info").click(function(){
  $("#show-info").show();
  $("#show-info h2").text(newDestination.country);
  $(".country").text(newDestination.country);
  $(".city").text(newDestination.city);
  $(".hotel").text(newDestination.hotel);
  $(".landmark").text(newDestination.landmark);

});
});
});
