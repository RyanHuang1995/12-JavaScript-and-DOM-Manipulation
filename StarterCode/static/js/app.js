// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!

// tableData.forEach((ufo) => {
//     var row = tbody.append("tr");
//     Object.entries(ufo).forEach(([key,value]) => {
//         var cell = tbody.append("td");
//         cell.text(value);
//     })
// });


var button = d3.select("#filter-btn");

var inputField = d3.select("#datetime");

function handleClick() {
    d3.event.preventDefault();
    console.log("A button was clicked!");
    console.log(d3.event.target);
};

// inputField.on("change",function(){
//     // Prevent the page from refreshing
//     d3.event.preventDefault();

//     var newdate = d3.event.target.value;

//     var filtereddate = tableData.filter(data => data.datetime === newdate);

//     console.log(filtereddate);
//     console.log(newdate);


// });


button.on("click",function(){
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var newdate = inputElement.property("value");

    var filtereddate = tableData.filter(data => data.datetime === newdate);

    console.log(filtereddate);
    console.log(newdate);

    filtereddate.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key,value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        })
    })
    });


