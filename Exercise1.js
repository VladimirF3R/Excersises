let s = prompt("Enter your string");
let charSubstringMax = '';
let charSubstring = '';
for(var i=0;i<s.length;i++){
	let c = s[i];
  if ((charSubstring.length>0)&&(charSubstring[0]==c)) charSubstring += c;
  else  charSubstring = c;
  if (charSubstringMax.length<charSubstring.length) charSubstringMax=charSubstring;
}
alert(charSubstringMax);