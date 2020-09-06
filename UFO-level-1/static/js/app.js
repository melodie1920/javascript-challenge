// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(ufoData) {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", dateselect);
form.on("submit", dateselect);

function dateselect() {

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    filteredData.forEach(function(ufoData) {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}