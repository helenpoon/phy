$(document).ready(function() {

// jQuery Function Number 1
	$(".img").mouseover(function() {
		if (this.id == "1") {
			// jQuery Function Number 2
			$(this).css("width", "45%").css("height", "420px");
			$("#2, #3, #4").css("width", "13%").css("height", "420px");
		} else if (this.id == "2") {
			$(this).css("width", "45%").css("height", "420px");
			$("#1, #3, #4").css("width", "13%").css("height", "420px");
		} else if (this.id == "3") {
			$(this).css("width", "45%").css("height", "420px");
			$("#1, #2, #4").css("width", "13%").css("height", "420px");
		} else {
			$(this).css("width", "45%").css("height", "420px");
			$("#1, #2, #3").css("width", "13%").css("height", "420px");
		}
	})

// jQuery Function Number 3
	$(".img").mouseout(function() {
		if (this.id == "1") {
			$(this).css("width", "250px").css("height", "420px");
			$("#2, #3, #4").css("width", "250px").css("height", "420px");
		} else if (this.id == "2") {
			$(this).css("width", "250px").css("height", "420px");
			$("#1, #3, #4").css("width", "250px").css("height", "420px");
		} else if (this.id == "3") {
			$(this).css("width", "250px").css("height", "420px");
			$("#1, #2, #4").css("width", "250px").css("height", "420px");
		} else {
			$(this).css("width", "250px").css("height", "420px");
			$("#1, #2, #3").css("width", "250px").css("height", "420px");
		}
	})

	

	});

