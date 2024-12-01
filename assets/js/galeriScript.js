$(document).ready(function () {
  lightbox.option({
    'resizeDuration': 500,      
    'wrapAround': true,           
    'disableScrolling': true,
    'fadeDuration': 400,     
    'imageFadeDuration': 300,
    'fitImagesInViewport': true,
  });

  const animate_fadeInUp = "animate__animated animate__fadeInUp";
  let offset1 = {offset: "80%"}
  let offset2 = {offset: "60%"}

  $("#gallery .row-1").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp);
    $("#gallery .row-1 .content-1").addClass(animate_fadeInUp)
    $("#gallery .row-1 .content-2").addClass(animate_fadeInUp)
    $("#gallery .row-1 .content-3").addClass(animate_fadeInUp)
  }, offset1)

  $("#gallery .row-2 .content-1").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp);
  }, offset2)

  $("#gallery .row-2 .content-2").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp);
  }, offset2)

  $("#gallery .row-2 .content-3").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp);
  }, offset2)


  $("#gallery .row-2 .content-4").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp);
  }, offset2)

  $("#gallery .row-2 .content-5").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp);
  }, offset2)

  $("#gallery .row-2 .content-6").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp);
  }, offset2)

  $("#gallery .row-2 .content-7").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp);
  }, offset2)

  $("#gallery .row-2 .content-8").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp);
  }, offset2)

  $("#gallery .row-2 .content-9").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp);
  }, offset2)


});