$(".scroll-link").click(function() {
	var containerName = $(this)
		.attr("href")
		.replace("#", ".");
	var containerPosition =
		$(containerName).offset().top - $(".top-bar").outerHeight(true);
	console.log(containerPosition);
	window.scrollTo(0, containerPosition);
});

//console.log($(".myContent"))
$(".myContent").css("margin-top", $(".top-bar").outerHeight(true));
