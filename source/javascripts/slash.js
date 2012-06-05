(function($){
	/* external.js */
	var host = location.host;

	$('a').on('click', function(e){
		var href = $(this).attr('href'),
			link = href.replace(/(https?:\/\/)(.*)\/(.*)/, '$2');

		if (href.match('https?') && link != host){
			window.open(href);
			e.preventDefault();
		}
	});

	/* caption.js */
	$('.entry').each(function(i){
		var _i = i;
		$(this).find('img').each(function(){
			var alt = $(this).attr('alt');

			if (alt == '' || typeof alt == 'undefined'){
				$(this).wrap('<a href="'+$(this).attr('src')+'" class="fancybox" rel="gallery'+_i+'" />');
			} else {
				$(this).after('<span class="caption">'+alt+'</span>').wrap('<a href="'+$(this).attr('src')+'" class="fancybox" title="'+alt+'" rel="gallery'+_i+'" />');
			}
		});
	});
	$('.fancybox').fancybox();
})(jQuery);