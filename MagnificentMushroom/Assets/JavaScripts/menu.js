/*
	menuCart cookies functions
*/


addEvent(window, "load", setupOrders, false);

function setupOrders() {
	document.getElementById("td2").addEventListeneron("click",addOrder());
}

function addOrder() {
	alert(" added to yout shopping cart.");
}
