
var ordertable;
var filterCols;
var filterHead;
var filterBody;

addEvent(window, "load", init, false);

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

function isUnique(matchValue, arrList) {
   var joinArray = "^"+arrList.join("^")+"^";
   var index = joinArray.indexOf("^"+matchValue+"^");
   if (index == -1) return true
   else return false;
}

function init() {
   ordertable = document.getElementById("tbl1");
   filterCols = ordertable.getElementsByTagName("col");
   filterHead = ordertable.tHead;
   filterBody = ordertable.tBodies[0];

   addTotalsRow();

   var newRow = document.createElement("tr");

   for (var i = 0; i < filterCols.length; i++) {
      var newCell = document.createElement("th");
      newCell.style.textAlign = "left";
      newCell.style.backgroundColor = "tan";
      newCell.style.color = "black"

      if (filterCols[i].className == "filter") {
         var newSelect = createSelectionList(i);
         newCell.appendChild(newSelect);
      }


      newRow.appendChild(newCell);

   }


      filterHead.appendChild(newRow);
}

function createSelectionList(colIndex) {
   // Create a selection list for the column
   var newSelect = document.createElement("select");
   newSelect.cIndex = colIndex; // mark the table column containing the selection box

   var blankOption = document.createElement("option");
   blankOption.innerHTML = "";
   newSelect.appendChild(blankOption);

   // Populate the rest of the selection list with column values
   addUniqueOptions(newSelect, colIndex);

   // Append selection list to the table header cell
   newSelect.style.width = "100%";
   newSelect.onchange = doFilter;

   return newSelect;
}


function addUniqueOptions(selectionList, colIndex) {
   var uniqueList = new Array();

   for (var i = 0; i < filterBody.rows.length; i++) {
      var rowCell = filterBody.rows[i].cells[colIndex];
      var cellValue = rowCell.innerText || rowCell.textContent;

      if (isUnique(cellValue, uniqueList)) {
         uniqueList.push(cellValue);
      }
   }

   uniqueList.sort();


   for (var j = 0; j < uniqueList.length; j++) {
      var newOption = document.createElement("option");
      newOption.innerHTML = uniqueList[j];
      selectionList.appendChild(newOption);
   }
}

function countRecords() {
	   var rowCount=0;
	   for (var i=0; i < filterBody.rows.length; i++) {
		   if (filterBody.rows[i].style.display == "") rowCount++;
	   }
	   return rowCount;
   }

function addTotalsRow() {
	var newRow = document.createElement("tr");
	var newCell = document.createElement("td");
	newCell.colSpan = filterHead.rows[0].cells.length;
	newCell.innerHTML = "Meals Avalible: " + countRecords();

	newRow.appendChild(newCell);
	filterHead.insertBefore(newRow, filterHead.rows[0]);
}


function resetTable() {

	for (var i=0; i < filterBody.rows.length; i++) {
		filterBody.rows[i].style.display = "";
	}
}

function filterColumn(colIndex, fText) {


	for (var i = 0; i < filterBody.rows.length; i++) {
		rowCell = filterBody.rows[i].cells[colIndex];
		rowCellText = rowCell.innerText || rowCell.textContent;

		if(rowCellText !=fText) filterBody.rows[i].style.display = "none";
	}
}

function doFilter() {

	resetTable();

	var allSelects = filterHead.getElementsByTagName("select");
	for (var i = 0; i < allSelects.length; i++) {
		var filterIndex = allSelects[i].selectedIndex;
		var filterText = allSelects[i].options[filterIndex].text;
		colIndex = allSelects[i].cIndex;


		if(filterText !="") filterColumn(colIndex, filterText)
	}

		filterHead.rows[0].cells[0].innerHTML = "Meals Found: " + countRecords();
}
