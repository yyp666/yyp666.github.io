
$(document).ready(function(){
	$(".otherlink").on({
		mouseenter: function(){
			$(this).toggleClass("mouseMove");
		},
		mouseleave: function(){
			$(this).toggleClass("mouseMove");
		}
	});
});


