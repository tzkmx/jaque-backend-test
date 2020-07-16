/**
 * @module 04 - stripArrayDuplicates
 * @description Only works with array of scalar values,
 * composite (i.e. objects) should be iterated and
 * comparated with deeper equality first, but that is
 * an expensive algorithm, compare for example
 * {@link https://ramdajs.com/docs/#equals|Ramda} code for it.
 */

/**
 * Returns a new array stripping away scalar duplicated items.
 *
 * @see {@link https://wiki.developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set}
 *
 * @param {scalar[]} unorderedInput array with possibly duplicated items
 * @return {Array} array without any duplicate
 */
module.exports = function stripArrayDuplicates (unorderedInput) {
  const mySet = new Set(unorderedInput)
  return [...mySet.values()]
}
