var IndexPage = (function () {
	
	init = function() {
		$('#current-year').html((new Date()).getFullYear());
		$('.club-location-name').html('The Central pub');

		var map = new GMaps({
			div: '#club-location',
			lat: 54.9654151,
			lng: -1.605158,
			zoom: 15
		});
		map.addMarker({
			lat: 54.965436,
			lng: -1.604646,
			title: 'The Central',
			infoWindow: {
				content: '<address>The Central,<br/> Half Moon Ln,<br/> Gateshead<br/> NE8 2AN</address>'
			}
		});
	}

	initDiscord = function() {
		$.ajax({
			url: "https://discordapp.com/api/guilds/488799358402297857/widget.json",
			type: 'GET',
			success: function(res) {
				console.log(res);
			}
		});
	}

	return {
		init: init,
		initDiscord: initDiscord
	};
})();

$( document ).ready(function() {
	IndexPage.init();
	IndexPage.initDiscord();
});