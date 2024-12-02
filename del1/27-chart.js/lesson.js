const ctx = document.querySelector("#myChart");

let ages = {
  elinore: 21,
  rudolf: 25,
  kalle: 10,
  philip: 4,
  tindra: 18,
  annika: 52,
  joel: 54,
};

new Chart(ctx, {
  type: "pie",
  data: {
    labels: Object.keys(ages),
    datasets: [
      {
        label: "# of votes",
        data: Object.values(ages),
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
