function createTable() {
	if ($('table').length <= 0) {
		if ($('.csv').val().length > 0) {
		    // Get the data
			var excelData = document.getElementsByClassName('csv')[0].value;
			
		    // split into rows. Charcode 10 = new line
		    excelRow = excelData.split(String.fromCharCode(10));

		    // split rows into columns. Charcode 9 = tab
		    for (i=0; i<excelRow.length; i++) {
		        excelRow[i] = excelRow[i].split(String.fromCharCode(9));

		    }
			
			// start to create the HTML table
			var tableDiv = document.createElement("div");
			var myTable = document.createElement("table");
			var myTbody = document.createElement("tbody");

			tableDiv.className = "table-responsive";
			myTable.className = "table";
			
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

		    document.getElementsByClassName('container')[0].appendChild(tableDiv);
		    document.getElementsByClassName('table-responsive')[0].appendChild(myTable);    

		    document.getElementsByClassName('csv')[0].value = '';
		    $('tr:nth-child(1)').addClass('header');
		    showHtml();
		} else {
			alert('To create a table please enter CSV data.')
		}
	} else {
		alert('Please remove current table first.')
	}
}

function removeTable(){
	if ($('table').length > 0) {
		$('.table-responsive').remove();
	} else {
		alert('To remove a table one must exist.')
	}
}

function showHtml(){
	if ($('table').length > 0) {
		var table = $('table').parent().html();
		var tableString = table.replace('class="table"','');
		var tableString2 = tableString.replace('class="header"','');

		$('.csv').val(tableString2)

	} else {
		alert('To copy a table one must exist.')
	}
}

function toggleCss(){
	var table = $('table')

	if ($('table').hasClass('table')) {
		$(table).removeClass('table')
		$(table).find('tr:nth-child(1)').removeClass('header')
	} else {
		$(table).addClass('table')
		$(table).find('tr:nth-child(1)').addClass('header')
	}
}


function clearBox(){
	$('.csv').val('')
}