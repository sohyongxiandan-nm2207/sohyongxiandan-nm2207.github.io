console.log("hello world");


// distribution of pets in Japan chart, change to cats and dogs only when clicked

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

const distribution = [
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

var specifyCatsDogsButton = document.getElementById('specifyCatsDogsButton'); // declaring the button id in html\
var showAllPetsButton = document.getElementById('showAllPetsButton');
var canvasContainer1 = document.getElementById('canvas-container-1'); // declaring the canvas in html
var allPets = document.createElement('canvas'); 
var onlyCatsDogs = document.createElement('canvas');
allPets.id = 'allPetsChart';
onlyCatsDogs.id = 'onlyCatsDogsChart';
// Create the first chart object
var ctx1 = allPets.getContext('2d');
var allPetsChart = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: labelPets,
    datasets: [{
      label: 'Percentage (%)',
      data: distribution,
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
specifyCatsDogsButton.addEventListener('click', function() {
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
showAllPetsButton.addEventListener('click', function() {
    // Remove the second chart and reinstate the first chart
    canvasContainer1.removeChild(onlyCatsDogs);
    canvasContainer1.appendChild(allPets);
})




// pet population chart

// can be reused later
const labelYear = [
   "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"
]

const catPopulation = [
    8.41, 8.43, 8.30, 8.33, 8.67, 8.85, 8.76, 8.63, 8.95, 8.84
]

const dogPopulation = [
    8.71, 8.20, 7.99, 8.01, 7.68, 7.62, 7.58, 7.34, 7.11, 7.05
]

const catsDogsPopulation = {
    labels: labelYear,
    datasets: [
        {
            label: "Cats (in millions)",
            data: catPopulation,
            borderWidth: 2,
            backgroundColor: "rgb(255, 0, 0, 1)",
            borderColor: "rgb(0, 0, 0, 1)"
        },
        {
            label: "Dogs (in millions)",
            data: dogPopulation,
            borderWidth: 2,
            backgroundColor: "rgb(251, 255, 0, 1)",
            borderColor: "rgb(0, 0, 0, 1)"
        }
    ]
};

new Chart("population-trends-by-year-bar-chart",
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


// ownership line chart

const catOwnership = [
    8.99, 8.76, 8.59, 8.54, 8.72, 8.88, 8.76, 8.77, 8.94
]

const dogOwnership = [
    12.85, 12.10, 11.73, 11.64, 11.12, 10.80, 10.82, 10.26, 9.78
]

const ccatDogOwnership = {
    labels: labelYear,
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


// trying out the fetchapi thing

var maxDisplayWords = 5;
let positiveChart;
let negativeChart;
const dataTable = [];
const positiveThreshold = 0.66;
const negativeThreshold = -0.66;
let lastNegativeIndex = 0;
let lastPositiveIndex = 0;

const processData = function(data) {
    const rows = data.split("\r\n");
    rows.forEach((row, index) => {
        const item = row.split(",");
        dataTable.push(item);
    });
}

const createCharts = function() {
    const negativeLabels = [];
    const negativeData = [];
    const positiveLabels = [];
    const positiveData = [];
        
    

    for (let i = 0; i < dataTable.length; i++) {
        if (dataTable[i][3] <= negativeThreshold && negativeData.length < maxDisplayWords) {
            negativeLabels.push(dataTable[i][1]);
            negativeData.push(dataTable[i][3]);
        }
        if (dataTable[i][3] >= positiveThreshold && positiveData.length < maxDisplayWords) {
            positiveLabels.push(dataTable[i][1]);
            positiveData.push(dataTable[i][3]);
        }
    }

    const negativeDataObj = {
        labels: negativeLabels,
        datasets: [{
            label: "Words",
            data: negativeData,
            borderWidth: 2,
        }]
    };
    negativeChart = new Chart("negwords-bar-chart", {
        type: "horizontalBar",
        data: negativeDataObj,
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        max: -0.659,
                        min: -0.670,
                    }
                }]
            },
            responsive: false,
            legend: { display: false },
            title: {
                display: true,
                text: ['The most negative phrases in the Singlish vocabulary', 'According to research'],
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            }            
        }
    });

    const positiveDataObj = {
        labels: positiveLabels,
        datasets: [{
            label: "Words",
            data: positiveData,
            borderWidth: 2,
        }]
    };
    positiveChart = new Chart("positive-bar-chart", {
        type: "horizontalBar",
        data: positiveDataObj,
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        min: 0.659,
                        max: 0.670
                    }
                }]
            },
            responsive: false,
            legend: { display: false },
            title: {
                display: true,
                text: ['The most positive phrases in the Singlish vocabulary', 'According to research'],
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            }            
        }
    });
}

const loadData = function() {
    // your fetch api call and all the subsequent data processing calls go here.
    const data = fetch("https://2207-resources.s3.ap-southeast-1.amazonaws.com/senticnet_sg.csv")
    .then(function (response){
        return response.text();
    })
    .then(function(data){
        processData(data);
        createCharts();
    })
}


const updateData = function() {
   // the button has been clicked, so now you need to update the data. But you love functions so you call this function first as kind of 
   // the command centre for your code. in the future, if you have other charts, you can call all of them from here.
    document.getElementById("moreButton").innerHTML = "More words please!";
    if (negativeChart !== null && positiveChart !== null){
        // increase word display
        maxDisplayWords++;

        // update charts without destroying them
        updateChartData(negativeChart, "neg");
        updateChartData(positiveChart, "pos");
    }
    else {
        loadData();
    }
    // console.log(maxDisplayWords);
};


function updateChartData(chart, type) {

// first check if it's been called for a positive or a negative chart, and set the appropriate sentiment value threshold. This is a ternary operator.
  const threshold = type === "neg" ? negativeThreshold : positiveThreshold;

// first check if it's been called for a positive or a negative chart, and set the appropriate dataTable starting index 
// so that you don't recheck words you've already checked. This is a ternary operator.
  const startingIndex = type === "neg" ? lastNegativeIndex : lastPositiveIndex;

  for (let i = startingIndex; i < dataTable.length && chart.data.labels.length < maxDisplayWords; i++) {
    if ((type === "neg" && dataTable[i][3] <= threshold) || (type === "pos" && dataTable[i][3] >= threshold)) {
     // do something here
    chart.data.labels.push(dataTable[i][1]);
    chart.data.datasets[0].data.push(dataTable[i][3]);
     //keep track of where you left off examining the data in dataTable. What happens if you comment out 141-146?
       if (type === "neg") {
        lastNegativeIndex = i + 1;
      } else {
        lastPositiveIndex = i + 1;
      }
    }
  }

  //do something here. at this point, you should have pushed all the new data from dataTable into your chart things, within the for loop and be ready to update the chart.
  chart.update();
}


loadData();

const moreButton = document.getElementById("moreButton");
moreButton.addEventListener("click", updateData);


// top reasons for getting cats

const labelAllReasons = [
    "A family member apart from my child/my grandchild begged me for it",
    "A friend/an acquaintance asked me to take care of it",
    "I am in a situation where I can take care of a pet every day",
    "I do not have to take care of my child anymore",
    "I envied people around me who were keeping pets",
    "I got interested after seeing about it on TV/in magazines/on the internet",
    "I have the financial capabilities",
    "I moved away from a family member who had a pet allergy",
    "I moved away from my family who was against me keeping pets",
    "I moved into a house",
    "I moved to a place that allows pets",
    "I moved to a place with a suitable environment to keep pets",
    "I picked it up/It came to me",
    "I saw it in a pet shop and desired it",
    "It was my last chance to start keeping a pet due to my age",
    "Members of my family are home more frequently",
    "My child has become independent",
    "My child is at an age to be able to care for a pet",
    "My child/my grandchild begged me for it",
    "My previous pet passed away"
]

const reasonCats = [
    0.60, 20, 6.60, 2.10, 2.90, 2.50, 2.60, 1.10, 0.40, 4.50, 3.30, 5.80, 30.50, 7.70, 7.40, 4.30, 0.60, 1.40, 5, 20.20
]

const reasonDogs = [
    2.20, 12.10, 10.90, 4.20, 4.30, 2.90, 4.80, 0.60, 0.80, 8.40, 2.90, 7.50, 1.80, 15.70, 11.40, 5, 2.30, 5.10, 11, 26
]

// const reasonCatsChart = {
//     labels: labelAllReasons,
//     datasets: [
//         {
//             label: "Cats (%)",
//             data: reasonCats,
//             borderWidth: 2,
//             backgroundColor: "rgb(255, 0, 0, 1)",
//             borderColor: "rgb(0, 0, 0, 1)"
//         }
//     ]
// }

// new Chart("reasons-for-cats-bar-chart",
// {
//     type: "bar",
//     data: reasonCatsChart,
//     options: {
//         maintainAspectRatio: false,
//         legend: {
//             display: false
//         },
//         title: {
//             display: true,
//             text: ["Reason for keeping Cats"],
//             fontFamily: "Raleway",
//             fontSize: 24,
//             fontColor: 'rgb(255, 13, 0, 1)',
//         }

//     }
    
// });

// // top reasons for getting dogs

// const reasonDogsChart = {
//     labels: labelAllReasons,
//     datasets: [
//         {
//             label: "Dogs (%)",
//             data: reasonDogs,
//             borderWidth: 2,
//             backgroundColor: "rgb(0, 37, 255, 1)",
//             borderColor: "rgb(0, 0, 0, 1)"
//         }
//     ]
// }

// new Chart("reasons-for-dogs-bar-chart",
// {
//     type: "bar",
//     data: reasonDogsChart,
//     options: {
//         maintainAspectRatio: false,
//         legend: {
//             display: false
//         },
//         title: {
//             display: true,
//             text: ["Reason for keeping "],
//             fontFamily: "Raleway",
//             fontSize: 24,
//             fontColor: 'rgb(255, 13, 0, 1)',
//         }

//     }
    
// });

// all reasons for getting pets



const reasonPetsAll = {
    labels: labelAllReasons,
    datasets: [
        {
            label: "Cats (%)",
            data: reasonCats,
            borderWidth: 2,
            backgroundColor: "rgb(255, 0, 0, 1)",
            borderColor: "rgb(0, 0, 0, 1)"
        },
        {
            label: "Dogs (%)",
            data: reasonDogs,
            borderWidth: 2,
            backgroundColor: "rgb(0, 37, 255, 1)",
            borderColor: "rgb(0, 0, 0, 1)"
        }
    ]
}

new Chart("reasons-for-pets-bar-chart",
{
    type: "bar",
    data: reasonPetsAll,
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: ["Reason for keeping Cats and Dogs"],
            fontFamily: "Raleway",
            fontSize: 24,
            fontColor: 'rgb(255, 13, 0, 1)',
        }

    }
    
});

// const updateData = function() {

//     console.log("This function works")
// }
// const updateChartData = function(chart,type) {
    

// }
  
// loadOverallData();




  // Toggle between showing and hiding the sidebar when clicking the menu icon
//   var mySidebar = document.getElementById("mySidebar");
  
//   function w3_open() {
//     if (mySidebar.style.display === 'block') {
//       mySidebar.style.display = 'none';
//     } else {
//       mySidebar.style.display = 'block';
//     }
//   }
  
//   // Close the sidebar with the close button
//   function w3_close() {
//       mySidebar.style.display = "none";
//   }