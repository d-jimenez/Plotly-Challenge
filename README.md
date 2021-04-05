# Plotly-Challenge

## Overview
The Plotly-Challenge repository is made up of codes used to build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The interactive dashboard leverages html, javascript and Plotly to cleanly display the Belly Button Biodiversity dataset for analysis. The selection of a new Test Subject ID No. automaticaly updates all of the charts and table within the dashboard. 

The interactive dashboard is then published on GitHub Pages (https://d-jimenez.github.io/Plotly-Challenge/).

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Repository Structure
The **Plotly-Challeneg** repository has the following structure:
- README.md
- index.html
- data
    - samples.json
- static
    - js
        - app.js

## Interactive Dahsboard Components
1. Selection drop down menu used to sleenformation for the selected Test Subject ID.
3. A horizontal bar chart of the top 10 Operational Taxonomic Units, or OTUs, found in the selected Test Subject ID and their respective sample values. 
4. A Bubble Chart displating the OTU IDs as well as the corresponding OTU Sample Values.
5. A Gauge Chrat, displaying the Weekly Washing Frequency (wfreq) of the selected Test Subject ID.


### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

- - -

© 2019 Trilogy Education Services