/**
 * @param {Node} element - document.querySelecotr("#my-chart")
 * @param {List} data - myObj = [{caspar: 25}, {olle: 45}, {peder: 22}]
 */
function drawChart(element, data) {
  let desktop = window.matchMedia("(min-width:1024px)").matches;
  // desktop = true;
  if (desktop) {
    let myChart = new Chart(element, {
      type: "bar",
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            label: "DRI values",
            backgroundColor: ["#3e95cd66", "#8e5ea266", "#3cba9f66", "#e8c3b966", "#c4585066"],
            data: Object.values(data),
          },
        ],
      },
      options: {
        barThickness: 20,
        indexAxis: "x",
        title: {
          display: true,
          text: "Predicted world population (millions) in 2050",
        },
      },
    });
  } else {
    let myChart = new Chart(element, {
      type: "bar",
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            label: "DRI values",
            backgroundColor: ["#3e95cd66", "#8e5ea266", "#3cba9f66", "#e8c3b966", "#c4585066"],
            data: Object.values(data),
          },
        ],
      },
      options: {
        barThickness: 12,
        aspectRatio: 0.5,
        indexAxis: "y",
        title: {
          display: true,
          text: "Predicted world population (millions) in 2050",
        },
      },
    });
  }
}

function getDriValues(batch) {
  let driBatch = {};
  for (const ingredient of Object.values(batch)) {
    driBatch[ingredient.name] = ingredient.dri;
  }
  return driBatch;
}

function createGraphCard(dish) {
  const parent = document.querySelector("#card-holder");
  const chartCard = document.createElement("div");
  chartCard.classList = "chart-card";
  addElementToParent("h2", dish.name, chartCard);
  addElementToParent("canvas", "", chartCard, "chart", dish.id);
  parent.appendChild(chartCard);

  let data = getDriValues(getBatchTotalValues(dish.recipe));

  drawChart(document.querySelector(`#${dish.id}`), data);
}

/**
 * @param {Object} dish
 */
function drawChartFromDish(batch) {
  // Grab dishdata and draw chart
  let data = getDriValues;
  drawChart;
}

document.addEventListener("DOMContentLoaded", (event) => {
  savedDishes = getDishListFromLocalStorage();
  for (const dish of Object.values(savedDishes)) {
    createGraphCard(dish);
    console.log(dish);
    const batch = getBatchTotalValues(dish.recipe);
    let data = getDriValues(batch);
  }
});

// TODO make eventlistener for desktop and change chart to horizontal for desk and vertical on phone
