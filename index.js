
let katzDeliLine = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ('Welcome, ' + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!";
  } else {
  for (var i = katzDeliLine.length; i >= 1; i --) {

  for (var i = 0; i < katzDeliLine.length; i += 1) {
    if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
    } else {
      return ('Currently serving ' + katzDeliLine.shift() + ".");
    }
  }
}
}
}

function currentLine(katzDeliLine) {
  let lineOrder = [];

  if (katzDeliLine.length === 0) {
   return "The line is currently empty." ;
 }

  for (var i = 0; i < katzDeliLine.length; i += 1) {
    let name = katzDeliLine[i];
   lineOrder.push(' ' + (i + 1) + '. ' + name);
  }
  return "The line is currently:" + lineOrder;
}


  var lineOrder = [];

  if (katzDeliLine.length === 0) {
   return "The line is curently empty." ;

  for (var i = 0; i < katzDeliLine.length; i += 1) {
    var name = katzDeliLine[i];
   lineOrder.push(' ' + (i + 1) + '. ' + name);
  }
  return "the line is currently:" + lineOrder;
}

console.log (takeANumber(katzDeliLine, "Ada"));
console.log (takeANumber(katzDeliLine, "Grace"));
console.log (takeANumber(katzDeliLine, 'joe'));
console.log (nowServing(katzDeliLine));
console.log (currentLine(katzDeliLine));
