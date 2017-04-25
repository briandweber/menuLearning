//slightly enlarge the hamburger icon on mouseover
$(document).ready(function(){
  $("#menu").mouseenter(function(){
    $("#menu").animate({
      height: '+=16',
      top: '-=8'
    }, 100, "linear")
  })

//reduce size of hamburger icon on mouseleave
  $("#menu").mouseleave(function(){
    $("#menu").animate({
      height: '-=16',
      top: '+=8'
    }, 100, "linear")
  })

  //display menu choices via slideDown
  $("#menu").click(function(){
    $("#slideMenu").slideDown(500)
  })
  $("#menu").click(function(){
    $(".quote").css({
      display: "none"
    }, 1, 'linear')
  })

//change burger to X
  $("#menu").click(function(){
    $(".exit").css({
      display: "block"
    }, 200, 'linear')
  })

//change X back to hamburger
  $(".exit").click(function(){
    $(".exit").css({
      display: "none"
    }, 200, "linear")
  })

//disappear menu choices via slideUp
  $(".exit").click(function(){
    $("#slideMenu").slideUp(500)
  })
  $(".exit").click(function(){
    $(".quote").css({
      display: "block"
    }, 1, 'linear')
  })

  // $(".menuItem").mouseenter(function(){
  //   $(".menuItem").css({
  //     opacity: "0.8",
  //     backgroundColor: "#605b5b"
  //   }, 1000, 'linear')
  // })
  //
  // $(".menuItem").mouseleave(function(){
  //   $(".menuItem").css({
  //     opacity: "1.0",
  //     backgroundColor: "#000"
  //   }, 1000, 'linear')
  // })

})

//testing testing 1, 2, ....3?
console.log("connected");
