$(document).ready(function() {
    var rParam = getParameterByName('r');
    var r;
    if (rParam != '') {
        r = rParam;
    } else {
        r = 'AbandonedPorn+ArchitecturePorn+CountrysidePorn+DesignPorn+DessertPorn+FoodPorn+InfrastructurePorn+LighthousePorn+postapocalyptic+spaceporn+VillagePorn+wallpaper+wallpapers+EarthPorn';
    }
    var url = 'http://www.reddit.com/r/' + r + '/.json?jsonp=?';
    console.log('Fetching ' + url);
    $.getJSON(url, function(json) {
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
	            $canvas.fadeIn(800);
	            $canvas.delay(12000);
	            $canvas.fadeOut(400);
            }
        });
    });
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}
