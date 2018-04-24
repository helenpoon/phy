$(document).ready(function() {
	const distanceToNextImage = -600;
	let currentImageNumber = 0;
	$("#lightbox").hide();

	$(".item").click(function() {
		currentImageNumber = parseInt($(this).attr("id"), 10);
		let newLeft = distanceToNextImage * currentImageNumber;
		$("#carousel-strip").css("left", newLeft);
		$("#lightbox").show();
	});

	$("#right").click(function() {
		currentImageNumber = (currentImageNumber + 1) % 8;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");

	})

	$("#left").click(function() {
		currentImageNumber = currentImageNumber == 0 ? 7 : (currentImageNumber - 1);
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");
	})

	

	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
	})
});