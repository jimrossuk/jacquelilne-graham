
var $j = jQuery.noConflict();

console.log("Thur");

// This kinda works.. delete if you dont use it
// $j(document).ready(function () {
//     $j(".grid__itemj").mouseenter(function () {
//         alert("You entered p1!");
//         // $j(".x").mouseleave(function () {
//         // alert("bye");
//         // }

//     });

// });

// $j(document).ready(function () {
//     $j(".grid__itemj").html("<p>Is</p>")
// })

// $j(document).ready(function () {
//     $j(".grid__itemj").mouseenter.text("hello!")
// })

// $j(document).ready(function () {
//     $j("#jacqInfo").hover();


// })

// $j(".grid__itemj").append(
//     function () {
//         // alert("jimmmmm");
//         $j(this).append($j("<span> ***</span>"));
//         // }
//     });

// $j(".grid__itemj").text("kjdf");


// $j(document).ready(function () {
//     // $j(this).append($j("p.jacqInfo"));
//     // alert("jimmmmm");

//     $j(".grid__itemj").hover(
//         function () {
//             // $j().addClass("grid__itemTest")
//         // GeTTING THERE
//              $j("a").append("<div> Started off my journey into Finance as a Civil Servant within HMRC</div>");
//          }, function () {
//              $j("p").addClass("reverseTest");
//         }
//     ); 
// });

$j(document).ready(function(){
    $j(".grid__itemj").click(function(){
      $j("#jacqInfo").show("#jacqInfo");
    },);
    $j(document).click(function(){
      $j().hide();
    });
  });

  console.log("post");


$j(document).ready(function(){
    $j(".grid__itemg").click(function(){
      $j("#grahamInfo").show("#grahamInfo");
    },);
    $j(document).click(function(){
      $j("p").hide();
    });
  });

  console.log("Graham")