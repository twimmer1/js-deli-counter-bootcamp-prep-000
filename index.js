//var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  for (var i = 0; i < 7; i++) {
    alert('katzDeliLine of i is '+katzDeliLine[i]+" name is "+name)
    if (katzDeliLine[i] === name) {
    return `Welcome, ${name}. You are number ${i + 1} in line.`
    }
  }
}