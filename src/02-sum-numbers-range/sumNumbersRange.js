/** @module 02 - getSumNumbersRange */

/**
 * Returns the sum of consecutive numbers from lower to
 * upper limit.
 *
 * @example getSumNumbersRange(3, 6) === 18
 *
 * @param {number} lower limit where to start the range to sum
 * @param {number} upper limit where to end (inclusive) the range
 * @returns {number} the sum of all integers from lower to upper limit
 */
module.exports = function getSumNumbersRange (lower, upper) {
  if (lower === upper) return lower

  if (upper < lower) {
    throw new RangeError(`input error: upper limit [${upper}] is minor than lower [${lower}]`)
  }

  let currentNumber
  let accum = 0
  for (currentNumber = lower; currentNumber < (upper + 1); currentNumber++) {
    accum += currentNumber
  }
  return accum
}
