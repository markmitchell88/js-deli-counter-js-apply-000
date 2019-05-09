var katzDeliLine = []

function takeANumber(line, name){
  katzDeliLine.push(name,line)
  return `Welcome, ${name}. You are number ${line} in line.`
}
