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
