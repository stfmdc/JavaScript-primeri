function createTable(rows, columns) {
    
    var body = document.getElementsByTagName("body")[0];
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var i = 0; i < rows; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < columns; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode("Red-" + (i + 1) + " Kolona-" + (j + 1));
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    body.appendChild(table);
}
