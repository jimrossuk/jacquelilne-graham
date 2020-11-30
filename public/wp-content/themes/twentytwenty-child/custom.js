
var $j = jQuery.noConflict();

console.log("now");

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


$j(document).ready(function () {
    // $j(this).append($j("p.jacqInfo"));
    // alert("jimmmmm");

    $j("grid__itemj").hover(
        function () {
            $j(this).addClass("jacqInfo");
        }, function () {
            $j(this).removeClass("jacqInfo");
        }
    );
    // alert("jimmmmm");
});

