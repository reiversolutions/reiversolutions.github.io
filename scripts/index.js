var IndexPage = (function () {
	
	init = function() {
		$('#current-year').html((new Date()).getFullYear());
		$('.club-location-name').html('The Bridge Hotel pub');
	}

	return {
		init: init
	};
})();

$( document ).ready(function() {
	IndexPage.init();
});