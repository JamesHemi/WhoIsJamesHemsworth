//All Works from here down.
// column is the column with values in it to total (first column is zero)
// Assume values are floats.
function addRows(tableId, column, resultId) {

    var table = document.getElementById("myTable");
    var rows = table.rows;
    var total = 0;
    var cell;

    // Assume first row is headers, adjust as required
    // Assume last row is footer, addjust as required
    for (var i=1, iLen=rows.length - 0; i<iLen; i++) {
        cell = rows[i].cells[column];
        total += Number(cell.textContent || cell.innerText);
    }
    document.getElementById(resultId).innerHTML = total.toFixed(2);
}




function myFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "<div class=test1 contenteditable>New Bill</div>";
  cell2.innerHTML = "<div class=test1 contenteditable>0</div>";
  cell3.innerHTML = "<div contenteditable>0</div>";
}


function todo() {
addRows('myTable', 2, 'totalValue2');
addRows('myTable', 1, 'totalValue');
}
//All works from here up.


