// * Noder;

let browser = {
  log: function (...args) {
    let parent = document.getElementById("log");
    let child = document.createElement("p");

    if (args.length > 1) {
      let array = "[";
      args.forEach((arg) => {
        array += `${arg}, `;
      });
      args = `${array}]`;
    }

    child.innerHTML = `>> ${args}`;
    parent.append(child);
    console.log(args);
    return args;
  },
};

/*
document.getElementById  // Element
document.getElementsByTagName // "Arraylike" med element
document.getElementsByClassName // "ArrayLike" med element
document.querySelector // Element
document.querySelectorAll // "Array-like" med element
 */

// * Hämtar htlm element
/*
console.log(document.getElementById("heading"));
console.log(document.getElementsByClassName("introduction"));

console.log(document.querySelector(".introduction"));
console.log(document.querySelector("#heading"));

console.log(document.getElementsByTagName("p"));
console.log(document.querySelector("body > p"));
console.log(document.querySelectorAll("body > p"));
*/

// * document.body är samma som document.querySelector("body")
/*
console.log(document.body);
console.log(document.querySelector("body"));
 */

// * Loopa igenom elements med tagname
/*
let elements = document.querySelectorAll("p");
console.log(elements.length);
for (let element of elements) {
  console.log(element.innerText);
}
 */
let children = document.querySelector("body");
console.log(children.childNodes);
console.log(children.children);
