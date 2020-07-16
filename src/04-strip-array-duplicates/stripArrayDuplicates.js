/**
 * @module 04 - stripArrayDuplicates
 * @description Incidentally works with any array of scalars
 * like strings or booleans. It uses native ES6 Set object
 * that naturally strips any duplicated element on construction
 * or trying to add again items already in the set.
 */

/**
 * It uses native Set object, we could use a custom class or object as
 * a map to keep register of found items and every new item being checked
 * accessed at constant time "O(1)", therefore whole function runs at
 * linear time "O(n)". See linked gist if need example of user land implementation.
 *
 * @summary Returns a new array stripping away scalar duplicated items.
 *
 * @see gist (YAGNI with ES6 Set): {@link https://gist.github.com/tzkmx/f6cab192b8615711605f|Custom dictionary Set before ES6}
 * @see {@link https://wiki.developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set#Using_the_Set_object|Using the Set Object (MDN)}
 *
 * @param {number[]} unorderedInput array with possibly duplicated items
 * @return {Array} array without any duplicate
 */
module.exports = function stripArrayDuplicates (unorderedInput) {
  const mySet = new Set(unorderedInput)
  return [...mySet.values()]
}
