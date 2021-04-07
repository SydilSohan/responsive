$(document).ready(function(){
  var mixer = mixitup('.container');
})
$(".toggle-nav").waypoint(function(direction) {
  if (direction == "down") {
    $("nav").addClass("sticky");
  }
  else {
    $("nav").removeClass("sticky");
  }
})
