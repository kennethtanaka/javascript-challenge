// from data.js
var tableData = data;
console.log(tableData);

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Loop Through `data` and console.log each sighting
tableData.forEach(function (sighting) {
  console.log(sighting);

  //Step 2:Append one table row `tr` for each sighting object
  var row = tbody.append("tr");

  //Step 3: Use `Object.entries` to console.log each sighting value
  Object.entries(sighting).forEach(function ([key, value]) {
    console.log(key, value);

    //Step 4: Append a cell to the row for each value
    var cell = row.append("td");

    //Step 5: Use d3 to update each cell's text with
    //sighting values (datetime, city, state, country, shape, durationMinutes, comments)
    cell.text(value);
  });
});


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {

  // clear table of prior data 
  tbody.html("");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  //Filter Data 
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

  // Loop Through selected filtered data and console.log each sighting
  filteredData.forEach(function (selectedSighting) {
    console.log(selectedSighting);

    //Step 2:Append one table row `tr` for each sighting object
    var row = tbody.append("tr");

    //Step 3: Use `Object.entries` to console.log each sighting value
    Object.entries(selectedSighting).forEach(function ([key, value]) {
      console.log(key, value);

      //Step 4: Append a cell to the row for each value
      var cell = row.append("td");

      //Step 5: Use d3 to update each cell's text with
      //sighting values (datetime, city, state, country, shape, durationMinutes, comments)
      cell.text(value);
    });
  });
});