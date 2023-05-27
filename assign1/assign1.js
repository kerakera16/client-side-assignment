function createTable() {
    // Get the input values from html for rows and columns
    var rnInput = document.getElementById('numRows');
    var cnInput = document.getElementById('numColumns');

    // Get the table element
    var table = document.getElementById('myTable');
  
    // Loop for each row
    for (var r = 1; r <= rnInput.value; r++) {

        // Create a row
        var row = table.insertRow(r - 1);

        // Loop through each column
        for (var c = 1; c <= cnInput.value; c++) {

        // Inserts a new cell in each row
          var cell = row.insertCell(c - 1);

          // Creates a content for the cell
          cell.innerHTML = r + "." + c;
        }
      }
    }