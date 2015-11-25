function createTable() {

    // Get the data
	var excelData = document.getElementById('csv').value;
	
    // split into rows. Charcode 10 = new line
    excelRow = excelData.split(String.fromCharCode(10));

    // split rows into columns. Charcode 9 = tab
    for (i=0; i<excelRow.length; i++) {
        excelRow[i] = excelRow[i].split(String.fromCharCode(9));

    }
	
	// start to create the HTML table
	var myTable = document.createElement("table");
	myTable.className = "table";
	var myTbody = document.createElement("tbody");
	
	// Loop over the rows
    for (i=0; i<excelRow.length - 1; i++) {

		// create a row in the HTML table
		var myRow = document.createElement("tr");
		
		// Loop over the columns and add TD to the TR
		for (j=0; j<excelRow[i].length; j++) {
			// Loop over the row columns
			if (excelRow[i][j].length != 0) {
					var myCell = document.createElement("td");
					myCell.innerHTML = excelRow[i][j];
            }			
			myRow.appendChild(myCell);			
		}
		myTbody.appendChild(myRow);	
	}
		myTable.appendChild(myTbody);

    document.getElementsByClassName('container')[0].appendChild(myTable);

    makeEditable();
    document.getElementById('csv').value = '';
    $('.alert').show();
}

function removeTable(){
	if ($('.table').length > 0) {
		$('.table').remove();
	} else {
		alert('To remove a table one must exist.')
	}
}

function copyTable(){
	alert('Copy table')
}
