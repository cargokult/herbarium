$(document).ready(function() {
    //$.getJSON('http://www.reddit.com/r/CityPorn/.json?callback=?', function(json) {
    $.getJSON('http://www.reddit.com/user/mercer/about.json?callback=?', function(json) {
        //$('#debug').text(json); 
        /*$.each(data.children, function(i,item){
            $("<img/>").attr("src", item.data.url).appendTo("#images");
        });*/
    });
});