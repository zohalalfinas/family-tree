const parallax = document.getElementById("form")
window.addEventListener('scroll', function () {
	let offset = window.pageYOffset;
	console.log('offset :' + offset);
	parallax.style.backgroundPositionY = offset * 0.5 +"px";

	})


	
