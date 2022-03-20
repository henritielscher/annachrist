const additionalMore = document.querySelectorAll(".additional-title");

additionalMore.forEach((btn) => {
	const symbol = btn.querySelector("i");
	btn.addEventListener("click", (e) => {
		btn.parentElement.classList.toggle("active-additional");
		if (symbol.classList.contains("fa-plus")) {
			symbol.classList.remove("fa-plus");
			symbol.classList.add("fa-minus");
		} else {
			symbol.classList.remove("fa-minus");
			symbol.classList.add("fa-plus");
		}
	});
});
