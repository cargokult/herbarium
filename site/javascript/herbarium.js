$(document).ready(function() {
    
    (function($) {
    $.fn.showtime = function() {

    var $canvas = this;
    var rParam = getParameterByName('r');
    var r;
    if (rParam != '') {
        r = rParam;
    } else {
        r = 'AbandonedPorn+adporn+adrenalineporn+albumartporn+animalporn+ArchitecturePorn+bookporn+botanicalporn+cityporn+CountrysidePorn+DesignPorn+DessertPorn+destructionporn+EarthPorn+fireporn+FoodPorn+geekporn+historyporn+humanporn+InfrastructurePorn+LighthousePorn+machineporn+mapporn+militaryporn+movieposterporn+newsporn+postapocalyptic+quotesporn+roomporn+skyporn+spaceporn+VillagePorn+wallpaper+wallpapers+waterporn+windowshots';
    }
    var url = 'http://www.reddit.com/r/' + r + '/.json?jsonp=?';
    $.getJSON(url, function(json) {
        $.each(json.data.children, function(i,item){
            if (item.data.domain != 'flickr.com') {
                $canvas.queue(function(next) {
                    $canvas.css('height', $(document).height());     
                    $canvas.css('width', $(document).width());
		            $canvas.css('background', 'url(' + item.data.url + ') no-repeat');
                    next();
	            });
	            $canvas.fadeIn(800);
	            $canvas.delay(12000);
	            $canvas.fadeOut(400);
            }
        });
    });
    return this;

    };
    }(jQuery));


$('#wallpaper').showtime();

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
