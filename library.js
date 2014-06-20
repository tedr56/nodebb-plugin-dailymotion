(function(module) {
	"use strict";

	var Dailymotion = {},
		embed = '<iframe class="dailymotion-embed" frameborder="0" width="480" height="270" src="http://www.dailymotion.com/embed/video/$1"></iframe>';

	Dailymotion.parse = function(postContent, callback) {
		// modified from http://stackoverflow.com/questions/7168987/
		postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:www\.)?(?:dailymotion\.com)\/?(?:video)\/?(.+)<\/a>/g, embed);
		callback(null, postContent);
	};

	module.exports = Dailymotion;
}(module));
