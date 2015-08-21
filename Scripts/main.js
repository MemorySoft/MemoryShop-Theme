$(document).ready(function(){

	// Price range
	$('#sl2').slider();
	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};	

	// Visibilidad en pantallas pequeñas
	if (document.documentElement.clientWidth < 640) {

		// Controla la visibilidad de los filtros del catálogo
		$('.product-selectors-toggle').click(function() {
			$('.product-selectors').toggle();
		});
		// Controla la visibilidad de los enlaces del footer
		$('.single-widget h2 a').append(' <i class="fa fa-plus"></i>');
		$('.single-widget ul').addClass('collapse');
	};
});

