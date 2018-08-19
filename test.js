const getHaversineDistance = require('./')

test('should export function', () => {
  expect(getHaversineDistance).toBeDefined()
  expect(typeof getHaversineDistance).toBe('function')
})

test('should get distance between points', () => {
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

  expect(getHaversineDistance(p1, p2)).toBe(311.08025949241477)
  expect(getHaversineDistance(p1, p2, {inMiles: true})).toBe(193.29679215853378)
  expect(getHaversineDistance(p3, p4, {latName: 'x', lngName: 'y'})).toBe(311.08025949241477)
})
