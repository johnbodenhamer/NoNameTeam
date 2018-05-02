/*
	menu add item to cart
*/

addEvent(window, "load", setupOrders, false);

function addOrder() {
	var expiryDate = new Date();
	expiryDate.setHours(expiryDate.getHours() + 48);

	var itemCount = 1;
	if (document.cookie) {
		var cookies = document.cookie.split("; ");
		for(var i = 0; i < cookies.length; i++) {
			var cookieName = cookies[i].split("=")[0];
			if(cookieName.indexOf("cartItem") != -1) {
				var cartItemNumber = parseInt(cookieName.slice(8));
				if (cartItemNumber >= itemCount) itemCount = cartItemNumber + 1;
			}
		}
	}
	var newItem = "cartItem" + itemCount;
	setCookie(newItem, "", expiryDate);

	setField(newItem, "product", document.forms[0].product.value, expiryDate);

	setField(newItem, "price", document.forms[0].price.value, expiryDate);

	var allSelects = document.getElementsByTagName("select");
	for(var i = 0; i < allSelects.length; i++){
		var optionIndex = allSelects[i].selectedIndex;
		var optionText = allSelects[i].options[optionIndex].text;
		setField(newItem, allSelects[i].id, optionText, expiryDate);
	}

	alert(getField(newItem, "quantity") + " " + getField(newItem, "product") + " added to your shopping cart.");
}
