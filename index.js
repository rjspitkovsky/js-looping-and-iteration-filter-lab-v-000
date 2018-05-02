// Code your solution in this file
function findMathching(drivers, string) {
  drivers.filter(function (name) {return string.toLowerCase() === name.toLowerCase()});
}
