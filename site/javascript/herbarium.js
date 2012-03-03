$(document).ready(function() {
    $.getJSON('http://www.reddit.com/r/EarthPorn/.json?jsonp=?', function(json) {
        var $canvas = $('#wallpaper');
        $.each(json.data.children, function(i,item){
            //$canvas.fadeIn(600);
	    $canvas.queue(function(next) {
        	$canvas.css('height', $(document).height());
	        $canvas.css('width', $(document).width());
		$canvas.css('background', 'url(' + item.data.url + ') no-repeat');
	    	next();
	    });
	    $canvas.delay(1500);
	    //$canvas.fadeOut(400);
        });
    });
});
