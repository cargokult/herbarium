$(document).ready(function() {
    $.getJSON('http://www.reddit.com/r/EarthPorn/.json?jsonp=?', function(json) {
        var $canvas = $('#wallpaper');
        $.each(json.data.children, function(i,item){
            if (item.data.domain != 'flickr.com') {
                $canvas.queue(function(next) {
                    $canvas.css('height', $(document).height());     
                    $canvas.css('width', $(document).width());
		            $canvas.css('background', 'url(' + item.data.url + ') no-repeat');
                    $canvas.text(item.data.url);
                    next();
	            });
            }
	        $canvas.fadeIn(800);
	        $canvas.delay(5000);
	        $canvas.fadeOut(400);
        });
    });
});
