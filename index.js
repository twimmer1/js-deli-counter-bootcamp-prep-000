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
  return name
}