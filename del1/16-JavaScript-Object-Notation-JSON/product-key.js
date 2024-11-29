function getKey() {
  let chars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let charsArr = chars.split("");
  let randomChar = (array, max) => array[Math.floor(Math.random() * max)];
  let randInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
  let key = "";
  for (let _ = 0; _ < 5; _++) {
    for (let section = 0; section <= randInt(4, 7); section++) {
      key += randomChar(charsArr, charsArr.length);
    }
    key += _ != 4 ? "-" : "";
  }
  return key;
}

let products = ["jacket", "boots", "glasses", "socks", "pins", "t-shirts"];
for (let product of products) {
  console.log(`${product}: ${getKey()}`);
}
