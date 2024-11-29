// * Noder

// * Uppgift: Byt ut textinnehåll
// document.querySelector("h1").textContent = "Hello World!";
// * Uppgift: Byt ut HTML-Innehåll
// document.querySelector("h1").innerHTML = "Hello <u>World</u>!";

// * Uppgift: Sätt ett atribut
// document.querySelector("ol").setAttribute("type", "i");

// * Uppgift: Sätt style-egenskap
// document.querySelector("ol").lastElementChild.style.color = "#c00 ";

// * Uppgift: Lägg till HTML-innehåll i flera element (VG)

console.log(document.querySelector("ol").children);
for (let li of document.querySelector("ol").children) {
  li.innerHTML += '<span class="credits">100 credits</span>';
}
