// Code your solution in this file
function findMatching(drivers, string) {
  // drivers.filter(function (name) {return name.toLowerCase() === string.toLowerCase()});
  let names = []
  for (const name of drivers) {
    if (name.toLowerCase() === string.toLowerCase()) {
      names.push(name)
    }
  }
  return names
}

function fuzzyMatch(drivers, string) {
  let names = [] 
  for (const name of drivers) {
    if (name.slice(0, string.length) === string) {
      names.push(name)
    } 
  }
  return names 
}
