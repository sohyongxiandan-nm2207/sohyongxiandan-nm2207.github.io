
// Graph 1: Pets in Japan
// shows distribution of pets in Japan, changes to cats and dogs only when clicked

// declaring statistic variables
const labelPets = [
  "Amphibians (frogs, etc.)",
  "Cat (excl. strays and community cats)",
  "Dog",
  "Ferret",
  "Goldfish",
  "Guinea pig",
  "Hamster",
  "Japanese rice fish",
  "Koi fish",
  "Rabbit",
  "Reptiles (snakes, lizards, etc.)",
  "Saltwater fishes",
  "Small birds",
  "Tropical fishes",
  "Turtle",
  "Other fishes",
  "Other pets",
]

const allPetsDistribution = [
  0.20,
  9.60,
  11.10,
  0.10,
  2.20,
  0.10,
  0.60,
  3.50,
  0.40,
  0.70,
  0.30,
  0.40,
  1.50,
  1.40,
  1.60,
  0.50,
  0.50,
]

const labelCatsDogs = [
  "Cat (excl. strays and community cats)",
  "Dog"
]

const catDogDistribution = [
  9.60,
  11.10
]

// rendering the graphs
// credits to Wi En (and chatGPT) for helping with the appendchild method to switch the graphs on button click

// declaring the button id in html
var specifyCatsDogsButton = document.getElementById('specifyCatsDogsButton');
var showAllPetsButton = document.getElementById('showAllPetsButton');
// declaring the canvas in html
var canvasContainer1 = document.getElementById('canvas-container-1');
// making variables for the charts so that they can be called using the appendchild
var allPets = document.createElement('canvas');
var onlyCatsDogs = document.createElement('canvas');
allPets.id = 'allPetsChart';
onlyCatsDogs.id = 'onlyCatsDogsChart';
// making the first chart
var ctx1 = allPets.getContext('2d');
var allPetsChart = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: labelPets,
    datasets: [{
      label: 'Percentage (%)',
      data: allPetsDistribution,
      fill: false,
      backgroundColor: "rgb(0, 189, 255, 1)",
      borderColor: "rgb(0, 0, 0, 1)",
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
// Add the first chart to the chart container
canvasContainer1.appendChild(allPets);
// Add event listener to the button
specifyCatsDogsButton.addEventListener('click', function () {
  // Remove the first chart and create a new canvas for chart 2
  canvasContainer1.removeChild(allPets);
  canvasContainer1.appendChild(onlyCatsDogs);
  // Create a new chart object for chart 2
  var ctx2 = onlyCatsDogs.getContext('2d');
  var onlyCatsDogsChart = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: labelCatsDogs,
      datasets: [{
        label: 'Percentage (%)',
        data: catDogDistribution,
        backgroundColor: "rgb(0, 189, 255, 1)",
        borderColor: "rgb(0, 0, 0, 1)",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
});
// second button to create interchangeability of graphs
showAllPetsButton.addEventListener('click', function () {
  // Remove the second chart and reinstate the first chart
  canvasContainer1.removeChild(onlyCatsDogs);
  canvasContainer1.appendChild(allPets);
})




// Graph 2: Pet cat and dog population in Japan
// same concept using appendchild as above, buttons to switch between cat and dog population data in the line graph
// extra bar graph to compare both cat and dog population

// declaring statistic variables
const labelYear = [
  "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"
]

const catPopulationStats = [
  8.41, 8.43, 8.30, 8.33, 8.67, 8.85, 8.76, 8.63, 8.95, 8.84
]

const dogPopulationStats = [
  8.71, 8.20, 7.99, 8.01, 7.68, 7.62, 7.58, 7.34, 7.11, 7.05
]

const catsDogsPopulation = {
  labels: labelYear,
  datasets: [
    {
      label: "Cats (in millions)",
      data: catPopulationStats,
      borderWidth: 2,
      backgroundColor: "rgb(255, 0, 0, 1)",
      borderColor: "rgb(0, 0, 0, 1)"
    },
    {
      label: "Dogs (in millions)",
      data: dogPopulationStats,
      borderWidth: 2,
      backgroundColor: "rgb(251, 255, 0, 1)",
      borderColor: "rgb(0, 0, 0, 1)"
    }
  ]
};


// rendering the graphs

// declaring the button id in html
var showCatPopulationButton = document.getElementById('showCatPopulationButton');
var showDogPopulationButton = document.getElementById('showDogPopulationButton');
// declaring the canvas in html
var canvasContainer2 = document.getElementById('canvas-container-2');
// making variables for the charts so that they can be called using the appendchild
var catPopulation = document.createElement('canvas');
var dogPopulation = document.createElement('canvas');
catPopulation.id = 'catPopulationChart';
dogPopulation.id = 'dogPopulationChart';

// creating the first chart
var ctx3 = catPopulation.getContext('2d');
var catPopulatonChart = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: labelYear,
    datasets: [{
      label: 'Cats (in millions)',
      data: catPopulationStats,
      fill: false,
      backgroundColor: "rgb(255, 0, 0, 1)",
      borderColor: "rgb(0, 0, 0, 1)",
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// Add the first chart to the chart container
canvasContainer2.appendChild(catPopulation);

// Add event listener to the button
showDogPopulationButton.addEventListener('click', function () {
  // Remove the first chart and create a new canvas for chart 2
  canvasContainer2.removeChild(catPopulation);
  canvasContainer2.appendChild(dogPopulation);

  // Create a new chart object for chart 2
  var ctx4 = dogPopulation.getContext('2d');
  var dogPopulationChart = new Chart(ctx4, {
    type: 'line',
    data: {
      labels: labelYear,
      datasets: [{
        label: 'Dogs (in millions)',
        data: dogPopulationStats,
        backgroundColor: "rgb(251, 250, 0, 1)",
        borderColor: "rgb(0, 0, 0, 1)",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

});
// second button to create interchangeability of graphs
showCatPopulationButton.addEventListener('click', function () {
  // Remove the second chart and reinstate the first chart
  canvasContainer2.removeChild(dogPopulation);
  canvasContainer2.appendChild(catPopulation);
});

// bar chart to compare both cat and dog populations

new Chart("cat-dog-population-by-year-bar-chart",
  {
    type: "bar",
    data: catsDogsPopulation,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      title: {
        display: true,
        text: ["Population of Pet Cats and Dogs from years 2013 to 2022"],
        fontFamily: "Raleway",
        fontSize: 24,
        fontColor: 'rgb(255, 13, 0, 1)',
      }

    }

  });


// Graph 3: Pet ownership in Japan

// declaring statistical variables
const labelYear2021 = [
  "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"
]

const catOwnership = [
  8.99, 8.76, 8.59, 8.54, 8.72, 8.88, 8.76, 8.77, 8.94
]

const dogOwnership = [
  12.85, 12.10, 11.73, 11.64, 11.12, 10.80, 10.82, 10.26, 9.78
]

const ccatDogOwnership = {
  labels: labelYear2021,
  datasets: [
    {
      label: "Cat Ownership Rate (%)",
      data: catOwnership,
      borderWidth: 2,
      backgroundColor: "rgb(1, 255, 0, 1)",
      borderColor: "rgb(0, 0, 0, 1)"
    },
    {
      label: "Dog Ownerhsip Rate (%)",
      data: dogOwnership,
      borderWidth: 2,
      backgroundColor: "rgb(0, 37, 255, 1)",
      borderColor: "rgb(0, 0, 0, 1)"
    }
  ]
};
// rendering line chart
new Chart("ownership-by-year-line-chart",
  {
    type: "line",
    data: ccatDogOwnership,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      title: {
        display: true,
        text: ["Population and Ownership Rate of Pet Cats and Dogs over time"],
        fontFamily: "Raleway",
        fontSize: 24,
        fontColor: 'rgb(255, 13, 0, 1)',
      }

    }

  });

// Graph 4: Top reasons for getting pets
// FetchAPI and table pushing, adapted from session 11 challenges (lost a lot of brain cells here)

// declaring variables
// limiting the number of data points shown initially
var maxDisplayReasons = 5;
// declaring the 2 charts
let catChart;
let dogChart;
// declaring the data table
const dataTable = [];
// declaring the min threshold for the graph
const dogThreshold = 4.90;
const catThreshold = 4.20;
// declaring the index, this is for indicating the number of data points on the graph for the updatechartdata to work later
let lastCatIndex = 0;
let lastDogIndex = 0;

// processing the data from the fetchAPI
const processData = function (data) {
  const rows = data.split("\r\n");
  rows.forEach((row, index) => {
    const item = row.split(",");
    dataTable.push(item);
  });
}

// creating the 2 charts
const createReasonsCharts = function () {
  const catLabels = [];
  const catData = [];
  const dogLabels = [];
  const dogData = [];


  // pushing the data from the fetchAPI
  for (let i = 0; i < dataTable.length; i++) {
    if (dataTable[i][1] == "Cat" && dataTable[i][2] >= catThreshold && catData.length < maxDisplayReasons) {
      catLabels.push(dataTable[i][0]);
      catData.push(dataTable[i][2]);
      // updating the last index here, because otherwise the updatechartdata function will take the default as 0 and start pushing data from the beginning, resulting in duplicated data in the chart
      lastCatIndex = i + 1;
    }
    if (dataTable[i][1] == "Dog" && dataTable[i][2] >= dogThreshold && dogData.length < maxDisplayReasons) {
      dogLabels.push(dataTable[i][0]);
      dogData.push(dataTable[i][2]);
      // upating last index
      lastDogIndex = i + 1;
    }

  }

  const catDataObj = {
    labels: catLabels,
    datasets: [{
      label: "Reason for keeping pet cats (%)",
      data: catData,
      borderWidth: 2,
      backgroundColor: "rgb(255, 0, 0, 1)"
    }]
  };
  // creating the cat chart
  // data limit set such that only 10 data points will be shown in the graph out of 20
  catChart = new Chart("catreasons-bar-chart", {
    type: "bar",
    data: catDataObj,
    options: {
      scales: {
        xAxes: [{
          display: true,
          ticks: {
            max: 35,
            min: 4.2,
          }
        }]
      },
      responsive: false,
      legend: { display: false },
      title: {
        display: true,
        text: ['Top reasons for keeping pet cats in Japan 2022'],
        fontFamily: "TrebuchetMS",
        fontSize: 24,
        fontColor: 'rgb(0,120,0)',
      }
    }
  });

  const dogDataObj = {
    labels: dogLabels,
    datasets: [{
      label: "Reason for keeping pet dogs (%)",
      data: dogData,
      borderWidth: 2,
      backgroundColor: "rgb(0, 37, 255, 1)"
    }]
  };
  // creating the dog chart
  // data limit set such that only 10 data points will be shown in the graph out of 20
  dogChart = new Chart("dogreasons-bar-chart", {
    type: "bar",
    data: dogDataObj,
    options: {
      scales: {
        xAxes: [{
          display: true,
          ticks: {
            min: 4.9,
            max: 30
          }
        }]
      },
      responsive: false,
      legend: { display: false },
      title: {
        display: true,
        text: ['Top reasons for keeping pet dogs in Japan 2022'],
        fontFamily: "TrebuchetMS",
        fontSize: 24,
        fontColor: 'rgb(0,120,0)',
      }
    }
  });
}

// loaddata function, calling fetchAPI
const loadData = function () {
  // your fetch api call and all the subsequent data processing calls go here.
  const data = fetch("https://2207-resources.s3.ap-southeast-1.amazonaws.com/reasons_for_keeping_pets.csv")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      processData(data);
      createReasonsCharts();
    })
}

// update data function that runs when button is clicked
const updateData = function () {

  if (catChart !== null && dogChart !== null) {
    // increase word display
    maxDisplayReasons++;

    // update charts without destroying them
    updateChartData(catChart, "Cat");
    updateChartData(dogChart, "Dog");
  }
  else {
    loadData();
  }
  // console.log(maxDisplayReasons);
};

// uopdatechartdata function to push more data points into the chart
function updateChartData(chart, type) {
  // declaring threshold and index variables, to check whether it is cat or dog graph
  const threshold = type === "Cat" ? catThreshold : dogThreshold;
  const startingIndex = type === "Cat" ? lastCatIndex : lastDogIndex;
  // pushing data points into the charts
  // because the lastcat and lastdog index has been declared earlier under createcharts, they have been updated to the number of data points on the graph already, so the updatechartdata function will not push duplicate data points into the graphs
  for (let i = startingIndex; i < dataTable.length && chart.data.labels.length < maxDisplayReasons; i++) {
    if (dataTable[i][1] === type && dataTable[i][2] >= threshold) {
      chart.data.labels.push(dataTable[i][0]);
      chart.data.datasets[0].data.push(dataTable[i][2]);
      if (type === "Cat") {
        lastCatIndex = i + 1;
      } else {
        lastDogIndex = i + 1;
      }
    }
  }
  chart.update();
}


loadData();

// eventlistener for button on click
const moreButton = document.getElementById("topReasonsForPets");
moreButton.addEventListener("click", updateData);



