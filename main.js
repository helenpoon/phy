$(document).ready(function() {
	animate()
});


function animate() {
	var width = $(window).width();
	
// jQuery Function Number 1
	$(".column").mouseover(function() {
		if (width < 600) {
			$(".column").css("width", "100%");
		} else if (this.id == "1") {
			// jQuery Function Number 2
			$(this).css("width", "45%").css("height", "100%");
			$("#2, #3, #4").css("width", "18%").css("height", "100%");
		} else if (this.id == "2") {
			$(this).css("width", "45%").css("height", "100%");
			$("#1, #3, #4").css("width", "18%").css("height", "100%");
		} else if (this.id == "3") {
			$(this).css("width", "45%").css("height", "100%");
			$("#1, #2, #4").css("width", "18%").css("height", "100%");
		} else {
			$(this).css("width", "45%").css("height", "100%");
			$("#1, #2, #3").css("width", "18%").css("height", "100%");
		}
	})

// jQuery Function Number 3
	$(".column").mouseout(function() {
		if (width < 600) {
			$(".column").css("width", "100%");
		} else if (this.id == "1") {
			$(this).css("width", "25%").css("height", "100%");
			$("#2, #3, #4").css("width", "25%").css("height", "100%");
		} else if (this.id == "2") {
			$(this).css("width", "25%").css("height", "100%");
			$("#1, #3, #4").css("width", "25%").css("height", "100%");
		} else if (this.id == "3") {
			$(this).css("width", "25%").css("height", "100%");
			$("#1, #2, #4").css("width", "25%").css("height", "100%");
		} else {
			$(this).css("width", "25%").css("height", "100%");
			$("#1, #2, #3").css("width", "25%").css("height", "100%");
		}
	})

}

$(window).resize(function() {
	animate()
})

