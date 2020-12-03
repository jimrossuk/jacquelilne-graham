
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
//     $j("#jacqInfo").click();


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

//     $j(".grid__itemj").click(
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

  console.log("ji");


$j(document).ready(function(){
    $j(".grid__itemg").click(function(){
      $j("#grahamInfo").show("#grahamInfo");
    },);
    $j(document).click(function(){
      $j("p").hide();
    });
  });
  

  
  console.log("im");

  $j(document).ready(function(){
    $j(".grid__itemsum").click(function(){
      $j("#sumsInfo").show("#sumsInfo");
    },);
    $j(document).click(function(){
      $j("p").hide();
    });
  });


  $j(document).ready(function(){
    $j(".grid__itemSecEye").click(function(){
      $j("#secondEyeInfo").show("#secondEyeInfo");
    },);
    $j(document).click(function(){
      $j("p").hide();
    });
  });


  $j(document).ready(function(){
    $j(".grid__itemjoag").click(function(){
      $j("#joagInfo").show("#joagInfo");
    },);
    $j(document).click(function(){
      $j("p").hide();
    });
  });


  $j(document).ready(function(){
    $j(".grid__itemres").click(function(){
      $j("#respectInfo").show("#respectInfo");
    },);
    $j(document).click(function(){
      $j("p").hide();
    });
  });


  $j(document).ready(function(){
    $j(".grid__itempoint").click(function(){
      $j("#pointInfo").show("#pointInfo");
    },);
    $j(document).click(function(){
      $j("p").hide();
    });
  });

  $j(document).ready(function(){
    $j(".grid__itemcultra").click(function(){
      $j("#cultraInfo").show("#cultraInfo");
    },);
    $j(document).click(function(){
      $j("p").hide();
    });
  });

  $j(document).ready(function(){
    $j(".grid__itemomni").click(function(){
      $j("#omniInfo").show("#omniInfo");
    },);
    $j(document).click(function(){
      $j("p").hide();
    });
  });

  $j(document).ready(function(){
    $j(".grid__itemspace").click(function(){
      $j("#spaceInfo").show("#spaceInfo");
    },);
    $j(document).click(function(){
      $j("p").hide();
    });
  });
  


  console.log("done")