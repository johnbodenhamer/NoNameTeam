

addEventListener(window, "load", retrieveOrder, false);

function retrieveOrder() {



	if(document.cookie) {
		var itemsInCart = new Array();
		var cookies = document.cookie.split("; ");

		for (var i = 0; i < cookies.length; i++){
			if (cookies[i].split("=")[0].indexOf("cartItem") != -1) {
				itemsInCart.push(cookies[i].split("=")[0]);
			}
		}

		if (itemsInCart.length > 0) {
			cartTable = document.createElement("table");
			cartTable.id = "cartTable";
			shoppingCart = document.getElementById("cartStatus");
			shoppingCart.replaceChild(cartTable, shoppingCart.firstChild);

			var thead = document.createElement("thead");
			cartTable.appendChild(thead);

			var headRow = document.createElement("tr");
			var productHead = document.createElement("th");
			productHead.innerHTML - "Product";
			var descriptionHead = document.createElement("th");
			descriptionHead.innerHTML = "Description";
			var quantityHead = document.createElement("th");
			quantityHead.innerHTML = "Qty";
			var priceHead = document.createElement("th");
			priceHead.innerHTML = "Price";
			var alterHead = document.createElement("th");
			alterHead.innerHTML = "Change";

			headRow.appendChild(productHead);
			headRow.appendChild(descriptionHead);
			headRow.appendChild(quantityHead);
			headRow.appendChild(priceHead);
			headRow.appendChild(alterHead);

			thead.appendChild(headRow);

			var tbody = document.createElement("tbody");
			cartTable.appendChild(tbody);

			for (var i = 0; i < itemsInCart.length; i++) {
				var newRow = document.createElement("tr");

				var productCell = document.createElement("td");
				productCell.style.backgroundColor = "rgb(255, 255, 191)";
				productCell.innerHTML = getField(itemsInCart[i], "product");
				newRow.appendChild(productCell);

				/*
				var productDescription = "";
				if(getField(itemsInCart[i], "gender") != null)
					productDescription += getField(itemsInCart[i], "gender") + " ";
				if(getField(itemsInCart[i], "size") != null)
					productDescription += getField(itemsInCart[i], "size") + " ";
				if(getField(itemsInCart[i], "color") != null)
					productDescription += getField(itemsInCart[i], "color") + " ";
				var descriptionCell = document.createElement("td");
				descriptionCell.innerHTML = productDescription;
				newRow.appendChild(descriptionCell);
				*/

				var quantityCell = document.createElement("td");
				quantityCell.style.textAlign = "right";
				quantityCell.innerHTML = getField(itemsInCart[i], "quantity");
				newRow.appendChild(quantityCell);

				var priceCell = document.createElement("td");
				priceCell.style.textAlign = "right";
				priceCell.innerHTML = getField(itemsInCart[i], "price");
				newRow.appendChild(priceCell);

				var alterCell = document.createElement("td");
				var changeButton = document.createElement("input");
				changeButton.type = "button";
				changeButton.id = itemsInCart[i];
				changeButton.className = "deleteItem";
				changeButton.value = "Remove Item";

				changeButton.onclick = function() {
					delCookie(this.id);
					window.location.reload();
				}

				alterCell.appendChild(changeButton);
				newRow.appendChild(alterCell);

				tbody.appendChild(newRow);
			}
		}
	}
}
