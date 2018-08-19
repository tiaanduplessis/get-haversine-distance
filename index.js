function toRad (x) {
  return (x * Math.PI) / 180
}

function isNumbers (...args) {
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== 'number') {
      return false
    }
  }

  return true
}

const R = 6371 // km

// Based on: https://stackoverflow.com/a/30316500/7027045
function getHaversineDistance (coords1, coords2, {inMiles = false, latName = 'lat', lngName = 'lng'} = {}) {
  const {[lngName]: lng1, [latName]: lat1} = coords1
  const {[lngName]: lng2, [latName]: lat2} = coords2

  if (!isNumbers(lng1, lng2, lat1, lat2)) {
    throw new Error('Valid numbers not provided for points')
  }

  const x1 = lat2 - lat1
  const dLat = toRad(x1)
  const x2 = lng2 - lng1
  const dLon = toRad(x2)
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  let d = R * c

  if (inMiles) d /= 1.60934

  return d
}

module.exports = getHaversineDistance
