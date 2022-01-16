function ucFirst(str) {
  let firstChar = str.length>0? str[0].toUpperCase() : "";
  return firstChar + str.slice(1);
}

let str = prompt("enter string");
console.log(ucFirst(str));