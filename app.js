// Variable Declaration
let tbody = d3.select("tbody");
// From data.js
var tableData = data;

// Build Table
function buildTable(data){
    // Start By Clearing Existing Data
    tbody.html(""); 
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    })
}

function handleClick(){
   
    d3.event.preventDefault();
    
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    
    if(date) {
       
        filterData = filterData.filter((row) => row.datetime === date);
    }
    
    buildTable(filterData);
}
//Create filter 
d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
