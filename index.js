var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name) 
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  }
  var name = katzDeli.shift()
  return `Currently serving ${name}.`
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  var result = "The line is currently: "
  for (var i = 0; i < katzDeliLine.length; i++) {
    result = result + "1. Ada"
  }
  return result
}