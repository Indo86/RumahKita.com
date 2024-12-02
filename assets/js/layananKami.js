$(document).ready(function(){

  let offset1 = {offset: "80%"}
  let offset2 = {offset: "70%"}
  const animate_fadeInLeft = "animate__animated animate__fadeInLeft";
  const animate_fadeInUp = "animate__animated animate__fadeInUp";

  $("#home .card-layanan-container").waypoint(function(){
    $(this.element).addClass(animate_fadeInLeft)
    $("#home  .card-layanan-container .card-layanan-1").addClass(animate_fadeInLeft)
    $("#home  .card-layanan-container .card-layanan-2").addClass(animate_fadeInLeft)
    $("#home  .card-layanan-container .card-layanan-3").addClass(animate_fadeInLeft)
  }, offset1)

  $("#harga .content-desain-rumah .head-desain-rumah").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp)
  }, offset1)

  $("#harga .content-desain-rumah .desc-desain-rumah").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp)
  }, offset1)

  $("#harga .content-desain-rumah .card-1").waypoint(function(){
    $(this.element).addClass(animate_fadeInLeft)
  }, offset2)

  
  $("#harga .content-desain-rumah .card-2").waypoint(function(){
    $(this.element).addClass(animate_fadeInLeft)
  }, offset2)

  $("#harga .content-desain-rumah .card-3").waypoint(function(){
    $(this.element).addClass(animate_fadeInLeft)
  }, offset2)
  

  $("#harga .content-desain-interior .head-desain-interior").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp)
  }, offset1)

  $("#harga .content-desain-interior .desc-desain-interior").waypoint(function(){
    $(this.element).addClass(animate_fadeInUp)
  }, offset1)

  $("#harga .content-desain-interior .card-1").waypoint(function(){
    $(this.element).addClass(animate_fadeInLeft)
  }, offset2)

  
  $("#harga .content-desain-interior .card-2").waypoint(function(){
    $(this.element).addClass(animate_fadeInLeft)
  }, offset2)

  $("#harga .content-desain-interior .card-3").waypoint(function(){
    $(this.element).addClass(animate_fadeInLeft)
  }, offset2)


});