function truncate(str, maxlength) {
  let s = str.substr(0, maxlength);
  if (str.length>maxlength) s+="...";
  return s;
}

let str = prompt("enter string");
console.log(truncate(str,10));