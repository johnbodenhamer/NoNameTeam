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
			productHead.innerHTML = "Product";
			var quantityHead = document.createElement("th");
			quantityHead.innerHTML = "Qty";
			var priceHead = document.createElement("th");
			priceHead.innerHTML = "Price";
			var alterHead = document.createElement("th");
			alterHead.innerHTML = "Remove Item";
			alterHead.style.textAlign = "right";


			headRow.appendChild(productHead);
			headRow.appendChild(quantityHead);
			headRow.appendChild(priceHead);
			headRow.appendChild(alterHead);

			thead.appendChild(headRow);

			var tbody = document.createElement("tbody");
			cartTable.appendChild(tbody);
			var t
			var num
			var tot = 0;

			for (var i = 0; i < itemsInCart.length; i++) {
				var newRow = document.createElement("tr");

				var productCell = document.createElement("td");
				productCell.style.backgroundColor = "rgb(255, 255, 191)";
				productCell.innerHTML = getField(itemsInCart[i], "product");
				newRow.appendChild(productCell);

				var quantityCell = document.createElement("td");
				quantityCell.style.textAlign = "center";
				var q = getField(itemsInCart[i], "quantity");
				quantityCell.innerHTML = q;
				newRow.appendChild(quantityCell);

				var priceCell = document.createElement("td");
				priceCell.style.textAlign = "center";
				num = getField(itemsInCart[i], "price");
				t = parseFloat(num.substring(1)) * q;
				priceCell.innerHTML = "$" + t.toFixed(2);
				tot += t;
				newRow.appendChild(priceCell);

				var alterCell = document.createElement("td");
				var changeButton = document.createElement("input");
				changeButton.style.float = "right";
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
			}//end of for-loop
			 document.getElementById("cartTotal").innerHTML = tot.toFixed(2);
			 document.getElementById("ctotal").value = tot.toFixed(2);
			 var cartPosition = document.getElementById("cartPosition");
			 cartPosition.style.fontSize = "25px"
			 cartPosition.style.float = "right";
			 cartPosition.style.marginRight = "250px"
			 cartPosition.style.color = "green";
			 cartPosition.style.fontWeight = "bold";
		}
	}
}
