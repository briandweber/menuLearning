$(document).ready(function(){
  $("#menu").mouseenter(function(){
    $("#menu").animate({
      height: '+=16',
      top: '-=8'
    }, 100, "linear")
  })

  $("#menu").mouseleave(function(){
    $("#menu").animate({
      height: '-=16',
      top: '+=8'
    }, 100, "linear")
  })
  $("#menu").click(function(){
    $("#slideMenu").slideDown(1000)
  })
  $("#menu").click(function(){
    $(".exit").css({
      display: "block"
    }, 200, 'linear')
  })
})
console.log("connected");
