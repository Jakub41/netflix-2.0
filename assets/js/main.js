/**
 *
 * Animated Enter Message Container
 *
 */
// We set a timeout to show the div
console.log("Am I running??");
setTimeout(function() {
    $("#n-animation").show();
    centerDiv();
}, 3000);

// We center the div in the page
function centerDiv() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var divWidth = $("#n-animation").width();
    var divHeight = $("#n-animation").height();

    $("#n-animation")
        .css("top", windowHeight / 2 - divHeight / 2)
        .css("left", windowWidth / 2 - divWidth / 2);
}

// Resize called every time we try to resize the window
$(window).resize(function() {
    centerDiv();
});
