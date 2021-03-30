// Load json data as d3 object
d3.json("././data/samples.json").then(function(data) {
    // Grab values from the response json object to build the plots
    var ids = data.names;
    var metadata = data.metadata;
    // Print the names of the columns
    console.log(ids);
    // Print the data for each day
    console.log(metadata);
  });