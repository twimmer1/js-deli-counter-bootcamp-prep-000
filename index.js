var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  for (var i = 0; i < 7; i++) {
    if (katzDeliLine === name) {
    return `Welcome, ${name}. You are number ${i + 1} in line.`
    }
  }
}