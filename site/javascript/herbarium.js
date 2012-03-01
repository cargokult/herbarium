$(document).ready(function() {
    $.getJSON('http://www.reddit.com/r/CityPorn/.json?jsonp=?', function(json) {
        console.log(json);
        $.each(json.data.children, function(i,item){
            $('#wallpaper').delay(1500).fadeOut(500);
	    var img = $('<img/>').attr('src', item.data.url);
	    $('#wallpaper').empty().append(img);
	    $('#wallpaper').fadeIn(400);
        });
    });
});
