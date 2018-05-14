function showItem(itemName) {
	resetVis();
	var item = document.getElementById(itemName);
	var itemtoggle = document.getElementById(itemName.concat("toggle"));
	item.style.display = "";
	itemtoggle.classList.add("active")
	if (itemtoggle.classList.contains("inactive")) {
		itemtoggle.classList.remove("inactive");
	}
	hideAll();
}

function resetVis() {
	var items = document.querySelectorAll(".active");
	for (var i in items) {
		if (items.hasOwnProperty(i)) {
			items[i].classList.remove("active");
			items[i].classList.add("inactive");
		}
	}
}

function hideAll() {
	var items = document.querySelectorAll(".inactive");
	for (var i in items) {
		if (items.hasOwnProperty(i)) {
			var idname = items[i].id.slice(0, -6);
			var item = document.getElementById(idname);
			item.style.display = "none";
		}
	}
}
