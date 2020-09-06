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

var filters = [];

// Create event handlers 
button.on("click", dateselect);
form.on("submit", dateselect);

function dateselect() {

    d3.event.preventDefault();

    var inputElementDate = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");

    var inputValueDate = inputElementDate.property("value");
    var inputValueCity = inputElementCity.property("value");
    var inputValueState = inputElementState.property("value");
    var inputValueCountry = inputElementCountry.property("value");
    var inputValueShape = inputElementShape.property("value");

    if (inputValueDate.length > 0) {
        filters.push({"datetime":inputValueDate});
    }

    if (inputValueCity.length > 0) {
        filters.push({"city":inputValueCity});
    }

    if (inputValueState.length > 0) {
        filters.push({"state":inputValueState});
    }

    if (inputValueCountry.length > 0) {
        filters.push({"country":inputValueCountry});
    }

    if (inputValueShape.length > 0) {
        filters.push({"shape":inputValueShape});
    }

    filteredData = tableData;

    filters.forEach((filter) => {
        Object.entries(filter).forEach(([key, value]) => {
            if (key === "datetime") {
                filteredData = filteredData.filter(filteredData => filteredData.datetime === value);
            }
            if (key === "city") {
                filteredData = filteredData.filter(filteredData => filteredData.city === value);
            }
            if (key === "state") {
                filteredData = filteredData.filter(filteredData => filteredData.state === value);
            }
            if (key === "country") {
                filteredData = filteredData.filter(filteredData => filteredData.country === value);
            }
            if (key === "shape") {
                filteredData = filteredData.filter(filteredData => filteredData.shape === value);
            }
        });
    });

    //console.log(filteredData);

    document.getElementsByTagName('tbody')[0].innerHTML = '';

    filteredData.forEach(function(ufoData) {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}