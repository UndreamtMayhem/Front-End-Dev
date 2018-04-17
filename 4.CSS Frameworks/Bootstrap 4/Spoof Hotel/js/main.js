(function () {
	
	'use strict';

	var counter = function() {
		$('.stat-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#stat-counter').length > 0 ) {
			$('#stat-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var range = function () {
		// With JQuery
		$('#ex1').slider({
			formatter: function (value) {
				return 'Current value: ' + value;
			}
		});
	}

	
	$(function(){	
		counterWayPoint();
		range();
		
	});
	
}());

//slider
var slider = document.getElementById("myRange");
var output = document.getElementById("price");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
} 
