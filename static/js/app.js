

  // Initializes the page with a default plot and drop down list
function init() {
  // Load json data as d3 object
  d3.json("././data/samples.json").then(data=>{
    // Grab values from the response json object to build the plots
    var subj_ids = data.names;
    var metadata = data.metadata;
    var samples = data.samples;

    console.log(subj_ids);
    console.log(metadata);
    console.log(samples);

    // Insert the OTU IDs into the selection tag as options
    d3.select("select")
    .selectAll("option")
    .data(subj_ids)
    .text((ids) => ids)
    .enter()
    .append("option")
    .text((ids) => ids);

    // Console log the first 10 oyt_ids and sample_values
    console.log(samples[0].otu_ids.slice(0,10))
    console.log(samples[0].sample_values.slice(0,10))

    // Create Bar CHart of top 10 OTUs
    var data_bar = [{
      type: 'bar',
      x: samples[0].sample_values.slice(0,10).reverse(),
      y: samples[0].otu_ids.slice(0,10).map(otu=>`OTU ${otu}`),
      text:samples[0].otu_labels.slice(0,10),
      orientation: 'h'
    }];

    var layout_bar = {
      title: ` Top 10 OTUs found in Test Subject: ${samples[0].id}`,
    };

    Plotly.newPlot('bar', data_bar,layout_bar);

    // Create Bubble Chart

    var data_bubble = [{
      x: samples[0].otu_ids,
      y: samples[0].sample_values,
      mode: 'markers',
      marker: {
        size: samples[0].sample_values,
        color: samples[0].otu_ids
      }
    }];

    Plotly.newPlot('bubble', data_bubble);
  })
};

// // Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var sel_sample = dropdownMenu.property("value");

//   // Initialize x and y arrays
//   var x = [];
//   var y = [];

//   if (dataset === 'dataset1') {
//     x = [1, 2, 3, 4, 5];
//     y = [1, 2, 4, 8, 16];
//   }

//   else if (dataset === 'dataset2') {
//     x = [10, 20, 30, 40, 50];
//     y = [1, 10, 100, 1000, 10000];
//   }

//   // Note the extra brackets around 'x' and 'y'
//   Plotly.restyle("plot", "x", [x]);
//   Plotly.restyle("plot", "y", [y]);
// }

init();
