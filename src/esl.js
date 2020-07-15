function cycleTest (arg) {
  if (arg === 0) return 'zero'
  if (arg < 0) return 'negative'
  if (arg > 0) return 'positive'
  return NaN
}

module.exports = {
  cycleTest
}
