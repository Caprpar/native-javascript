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

browser.log("Hej");
