/** @module 01 - getGreaterAscendingSubset */

/**
 * Return the biggest array of consecutive numbers in ascending order
 * found in the input array.
 *
 * @example getGreaterAscendingSubset([3,2,5,9,1,3]) === [2,5,9]
 *
 * @param {number[]} numbers array of numbers to scan
 * @returns {number[]}
 */
module.exports = function getGreaterAscendingSubset (numbers) {
  if (numbers.length <= 1) {
    return numbers
  }

  const initialItem = numbers.shift()

  const initialRegistry = {
    greaterSubset: [initialItem],
    currentSubset: [initialItem],
    previousNumber: initialItem
  }

  const ascendingSubsetRegistry = numbers.reduce(iteratorOnNumbers, initialRegistry)

  return ascendingSubsetRegistry.greaterSubset
}

/**
 * @typedef {Object} AscendingSubsetRegistry
 * @property {number[]} greaterSubset last greater subset of ascending numbers in input array
 * @property {number[]} currentSubset current subset of ascending numbers
 * @property {number} previousNumber number from last iteration to compare with current item
 * @private
 */

/**
 * @private
 * @param {AscendingSubsetRegistry} carry
 * @param {number} item current item in the array being iterated
 * @param _idx ignored as irrelevant for iteration
 * @return {AscendingSubsetRegistry}
 */
function iteratorOnNumbers (carry, item, _idx) {
  const { greaterSubset, currentSubset, previousNumber } = carry
  if (item < previousNumber) {
    return {
      greaterSubset,
      currentSubset: [item],
      previousNumber: item
    }
  }

  currentSubset.push(item)
  if (currentSubset.length >= greaterSubset.length) {
    return {
      greaterSubset: currentSubset,
      currentSubset,
      previousNumber: item
    }
  }

  return {
    greaterSubset,
    currentSubset,
    previousNumber: item
  }
}
