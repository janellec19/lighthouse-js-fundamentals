const urlEncode = function(text) {
let newText = " ";
let percent = "%20";
for (let i = 0; i < text.length; i++) {
  if (text[i] === " ") {
newText += percent;
  } else {
    newText += text[i];
  }
  }
for (let j = 0; j < text.length; j++) {
  if ((text.charAt(0) || text.length() - 1) === " ") {
  let withoutFirstLast = newText.slice();
    return withoutFirstLast.slice(0, -3);
  } else {
    return newText;
  }
  } 
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"))