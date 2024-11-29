const ctx = document.querySelector("#myChart");

let ages = {
  rudolf: 25,
  kalle: 30,
  philip: 4,
  tindra: 18,
  annika: 52,
  joel: 54,
};

new Chart(ctx, {
  type: "bar",
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
