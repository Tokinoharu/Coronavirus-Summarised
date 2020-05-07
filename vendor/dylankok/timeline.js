$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll === 0) {
        $("#navbar").addClass("navbar-transparent");
        $("#navbar").removeClass("is-black");
    } else {
        $("#navbar").addClass("is-black");
        $("#navbar").removeClass("navbar-transparent");
    }
});

$.getJSON("https://api.covid19api.com/world/total", function(data) {
  $( "#numberOfCases" ).text(parseFloat(data.TotalConfirmed).toLocaleString("eng"));
  $( "#numberOfCases2" ).text(parseFloat(data.TotalConfirmed).toLocaleString("eng"));
});

// Handles 'goto top' button
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll === 0) {
        $(".backtotop").fadeOut(200);
    } else {
        $(".backtotop").fadeIn(200);
    }
});
