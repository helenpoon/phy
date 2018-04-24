$(document).ready(function() {
	const distanceToNextImage = -600;
	let currentImageNumber = 0;
	// jQuery Function Number 4
	$("#lightbox").hide();

// jQuery Function Number 5
	$(".item").click(function() {
		currentImageNumber = parseInt($(this).attr("id"), 10);
		let newLeft = distanceToNextImage * currentImageNumber;
		$("#carousel-strip").css("left", newLeft);
		// jQuery Function Number 6
		$("#lightbox").show();
	});

	$("#right").click(function() {
		currentImageNumber = (currentImageNumber + 1) % 14;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");

	})

	$("#left").click(function() {
		currentImageNumber = currentImageNumber == 0 ? 13 : (currentImageNumber - 1);
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");
	})

	

	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
	})
});