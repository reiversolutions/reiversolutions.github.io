var IndexPage = (function () {
	
	init = function() {
		$('#current-year').html((new Date()).getFullYear());
	}

	return {
		init: init
	};
})();

$( document ).ready(function() {
	IndexPage.init();
});