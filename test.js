$(document).ready(function(){
setInterval(function(){
  var w = Math.floor(Math.random()*300);
  var h = Math.floor(Math.random()*500);
  $('.card').css("left",h)
  $('.card').css("top",w)
  $('.card').fadeToggle()

},500)
setInterval(function(){
  var w = Math.floor(Math.random()*300);
  var h = Math.floor(Math.random()*500);
  $('.card1').css("left",h)
  $('.card1').css("top",w)
  $('.card').fadeToggle()


},300)

setInterval(function(){
  var w = Math.floor(Math.random()*300);
  var h = Math.floor(Math.random()*500);
  $('.card2').css("left",h)
  $('.card2').css("top",w)
  $('.card').fadeToggle()


},400)

setInterval(function(){
  var w = Math.floor(Math.random()*300);
  var h = Math.floor(Math.random()*500);
  $('.card3').css("left",h)
  $('.card3').css("top",w)
  $('.card').fadeToggle()


},294)
setInterval(function(){
  var w = Math.floor(Math.random()*300);
  var h = Math.floor(Math.random()*500);
  $('.card4').css("left",h)
  $('.card4').css("top",w)
  $('.card').fadeToggle()


},350)
setInterval(function(){
  var w = Math.floor(Math.random()*300);
  var h = Math.floor(Math.random()*500);
  $('.card5').css("left",h)
  $('.card5').css("top",w)
  $('.card').fadeToggle()


},300)
});
