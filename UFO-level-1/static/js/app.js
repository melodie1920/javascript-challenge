// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(ufoData) {
    console.log(ufoData);
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});