const getHaversineDistance = require('./')

const p1 = {
  lat: 11,
  lng: 12
}

const p2 = {
  lat: 13,
  lng: 14
}

const p3 = {
  x: 11,
  y: 12
}

const p4 = {
  x: 13,
  y: 14
}

console.log(getHaversineDistance(p1, p2)) // 311.08025949241477
console.log(getHaversineDistance(p1, p2, {inMiles: true})) // 193.29679215853378
console.log(getHaversineDistance(p3, p4, {latName: 'x', lngName: 'y'})) // 311.08025949241477
