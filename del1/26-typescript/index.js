// * Ett lokalt värde
sessionStorage.setItem("color", "green");

// * Ett globalt värde
localStorage.setItem("color", "green");

// * två värden
localStorage.setItem("a", "caspar");
sessionStorage.setItem("b", "caspar");

// * ett sammansatt värde
let users = [
  {
    name: "Alice",
  },
];
sessionStorage.setItem("users", JSON.stringify(users));

// * städer
fetch("https://avancera.app/cities/")
  .then((response) => response.json())
  .then((result) => {
    localStorage.setItem("cities", JSON.stringify(result));
  });

let cities = localStorage.getItem("cities") ? JSON.parse(localStorage.getItem("cities")) : undefined;
console.log(cities);
