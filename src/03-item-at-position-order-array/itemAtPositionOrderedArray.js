/** @module 03 - getItemAtPositionOrderedArray */

/**
 * Given an unordered array of numbers, returns the item
 * at asked position, noting that the item at index 2 is
 * not the 3rd member of the array as in zero based
 * numbering, but the 2nd greater item of the
 * ordered array.
 *
 * @summary Return item at asked position after ordering array.
 *
 * @example getItemAtPositionOrderedArray([7,2,5,9,8,3], 2) === 8
 *
 * @param {number[]} numbers unordered array to scan
 * @param {number} itemAt position of desired item
 * @return {number} item found (if any) at desired item.
 */
module.exports = function getItemAtPositionOrderedArray (numbers, itemAt) {
  if (itemAt > numbers.length) {
    throw new RangeError(`item position [${itemAt}] is larger than size of set: [${numbers.length}]`)
  }

  if (numbers.length === 0) return []

  numbers.sort(function (left, right) {
    if (left === right) return 0
    return left < right
      ? -1
      : 1
  })

  const indexWanted = numbers.length - itemAt
  return numbers[indexWanted]
}
