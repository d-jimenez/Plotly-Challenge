// Initializes the page with a default plot and drop down list
function init() {
  // Load json data as d3 object
  d3.json("././data/samples.json").then(data=>{
    // Grab values from the response json object to build the plots
    var subj_ids = data.names;
    var metadata = data.metadata;
    var samples = data.samples;

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

    // Create Data Table 
    // Get a reference to the table body
    var tbody = d3.select("tbody");
    Object.entries(metadata[0]).forEach(([key, value]) => {
      var row = tbody.append("tr");
      row.text(`${key}: ${value}`);
    });

    // Create Bar Chart of top 10 OTUs
    var data_bar = [{
      type: 'bar',
      x: samples[0].sample_values.slice(0,10).reverse(),
      y: samples[0].otu_ids.slice(0,10).map(otu=>`OTU ${otu}`),
      text:samples[0].otu_labels.slice(0,10),
      orientation: 'h'
    }];


    var layout_bar = {
      title:{
        text: ` Top 10 OTUs found in Test Subject`
      } ,
      xaxis: {
        title: `Sample Values`
      }
    };

    Plotly.newPlot('bar', data_bar,layout_bar);

    // Create Bubble Chart
    var data_bubble = [{
      x: samples[0].otu_ids,
      y: samples[0].sample_values,
      text:samples[0].otu_labels.slice(0,10),
      mode: 'markers',
      marker: {
        size: samples[0].sample_values,
        color: samples[0].otu_ids
      }
    }];

    // Bubble Chart Layout
    var layout_bubble = {
      title:{
        text: ` OTU IDs and Corresponding Sample Values`
      } ,
      xaxis: {
        title: `OTU ID`
      },
      yaxis: {
        title: `Sample Value`
      }
    };

    Plotly.newPlot('bubble', data_bubble,layout_bubble);
  })
};

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Load json data as d3 object
  d3.json("././data/samples.json").then(data=>{
    // Grab values from the response json object to build the plots
    var subj_ids = data.names;
    var metadata = data.metadata;
    var samples = data.samples;

    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var sel_sample = dropdownMenu.property("value");
 
    // Console log the first 10 oyt_ids and sample_values based on selection
    console.log(samples[(subj_ids.indexOf(sel_sample))].otu_ids.slice(0,10))
    console.log(samples[(subj_ids.indexOf(sel_sample))].sample_values.slice(0,10))

    // Restyle the bar chart based on the text subject id selection
    // This process can be improved, this assumes the names are in outlined in the same order in the samples array
    Plotly.restyle("bar", "x", [samples[(subj_ids.indexOf(sel_sample))].sample_values.slice(0,10).reverse()]);
    Plotly.restyle("bar", "y", [samples[(subj_ids.indexOf(sel_sample))].otu_ids.slice(0,10).map(otu=>`OTU ${otu}`)]);
    Plotly.restyle("bar", "text", [samples[(subj_ids.indexOf(sel_sample))].otu_labels.slice(0,10)]);

    //Restyle Bubble Chart Based on Selection

    Plotly.restyle("bubble", "x", [samples[(subj_ids.indexOf(sel_sample))].otu_ids]);
    Plotly.restyle("bubble", "y", [samples[(subj_ids.indexOf(sel_sample))].sample_values]);
    Plotly.restyle("bubble", "text", [samples[(subj_ids.indexOf(sel_sample))].otu_labels]);

    // Update Demographic info table based on selection
    // Then, select the unordered tbofy element by class name
    var tbody = d3.select("tbody");
    // remove any children from the tbody
    tbody.html("");

    // Ceate Demographics table based on selection
    Object.entries(metadata[(subj_ids.indexOf(sel_sample))]).forEach(([key, value]) => {
      var row = tbody.append("tr");
      row.text(`${key}: ${value}`);
    });
    

  }); 
}

init();
