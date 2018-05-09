
$(document).ready(function(){
	$(".umassMath").on({
		click: function(){
			window.open("https://mail.math.umass.edu/webmail/src/login.php");
			$(this).blur();
		}
	});
	$(".otherlink").on({
		mouseenter: function(){
			$(this).toggleClass("mouseMove");
		},
		mouseleave: function(){
			$(this).toggleClass("mouseMove");
		}
	});
});


