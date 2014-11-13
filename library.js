(function(module) {
	"use strict";

	var Dailymotion = {},
		embed = '<iframe class="dailymotion-embed" frameborder="0" width="480" height="270" src="http://www.dailymotion.com/embed/video/$1"></iframe>'

    var embedUrl = /<a href="(?:https?:\/\/)?(?:www\.)dailymotion\.com\/video\/(.+)">.+<\/a>/g;
    
	Dailymotion.parse = function(data, callback) {
	    if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        
        if (data.postData.content.match(embedUrl)) {
           data.postData.content = data.postData.content.replace(embedUrl, embed);
        }
		callback(null, data);
	};

	module.exports = Dailymotion;
}(module));
