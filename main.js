const ctx = document.querySelector(".chart");


new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: `$`,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: [
          " hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
        ],
        borderColor: "#fff",
        borderRadius: 4,
        hoverBackgroundColor: [
          "hsl(10, 79%, 75%)",
          "hsl(10, 79%, 75%)",
          "hsl(187, 22%, 75%)",
          "hsl(10, 79%, 75%)",
          "hsl(10, 79%, 75%)",
          "hsl(10, 79%, 75%)",
          "hsl(10, 79%, 75%)",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      }
    },
    plugins: {
      legend: {
        display :false,
      },
    }
  },
});
