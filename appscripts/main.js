console.log("hello world");



// Modal Image Gallery, for the pop up image
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }



// Overall pets bar chart

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

const overallPets = {
    labels: labelPets,
    datasets: [
        {
            label: "Percentage (%)",
            data: distribution,
            borderWidth: 2,
            backgroundColor: "rgb(0, 189, 255, 1)",
            borderColor: "rgb(0, 0, 0, 1)"
        }
    ]
}

new Chart("overall-pets-bar-chart",
{
    type: "bar",
    data: overallPets,
    options: { 
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: ["Distribution of pet ownership in Japan as of October 2022, by species"],
            fontFamily: "Raleway",
            fontSize: 24,
            fontColor: 'rgb(255, 13, 0, 1)',
        }
        // scales: {
        //     y: {
        //         text: ["Percentage of distribution"]
        //     }
        // }

    }
    
});

// specific bar chart just for cats and dogs
const labelCatsDogs = [
    "Cat (excl. strays and community cats)",
    "Dog"
]

const catDogDistribution = [
    9.60,
    11.10
]

const catsDogs = {
    labels: labelCatsDogs,
    datasets: [
        {
            label: "Percentage (%)",
            data: catDogDistribution,
            borderWidth: 2,
            backgroundColor: "rgb(0, 189, 255, 1)",
            borderColor: "rgb(0, 0, 0, 1)"
        }
    ]
}

new Chart("cats-dogs-bar-chart",
{
    type: "bar",
    data: catsDogs,
    options: { 
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: ["Distribution of pet ownership in Japan as of October 2022, by species"],
            fontFamily: "Raleway",
            fontSize: 24,
            fontColor: 'rgb(255, 13, 0, 1)',
        }


    }
    
});


// Update data in charts - ask in tutorial next week how to do

const updateData = function() {
    console.log("This function works")
    // Update overall pet distribution chart to just cats and dogs
    document.getElementById("canvas-container-1").id = "cats-dogs-bar-chart";
}
 
const updateChartData = function(chart,type) {
    

}
  
loadOverallData();

const overallCatsDogsButton = document.getElementById("overallCatsDogsButton");
overallCatsDogsButton.addEventListener("click", updateData);

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