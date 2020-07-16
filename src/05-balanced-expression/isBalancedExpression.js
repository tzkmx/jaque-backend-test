/** @module 05 - isBalancedExpression */

/**
 * Determines if the string passed as expression or not.
 *
 * @example isBalancedExpression("[()[]]") === true
 * @example isBalancedExpression("([()]<-not closing paren") === false
 *
 * @param {string} expression to determine if is balanced
 * @return {boolean} is the expression balanced or not
 */
module.exports = function isBalancedExpression (expression) {
  /**
   * Open levels registry.
   * @private
   * @type {Map<number, string>}
   **/
  const levels = new Map()
  /**
   * Dictionary of open brackets and matching char.
   * @private
   * @type {Map<string, string>}
   **/
  const bracketPairs = new Map()
  bracketPairs.set('(', ')')
  bracketPairs.set('[', ']')

  const closingBrackets = [...bracketPairs.values()].join('')

  let currentLevel = 0
  let currentIndex
  for (currentIndex = 0; currentIndex < expression.length; currentIndex++) {
    const currentItem = expression[currentIndex]

    const hasFoundNewLevel = bracketPairs.has(currentItem)

    if (hasFoundNewLevel) { // "open" new level to look matching bracket
      levels.set(++currentLevel, currentItem)
      continue
    }

    // do nothing if char is not open or close bracket
    if (!closingBrackets.includes(currentItem)) continue

    // current char should be matching close bracket at this level
    const lookingForClosingBracket = bracketPairs.get(levels.get(currentLevel))

    if (lookingForClosingBracket !== currentItem) { // stop, expression not balanced
      return false
    }
    // "close" current level
    levels.delete(currentLevel--)
  }
  // not any level should remain "open"
  return levels.size === 0
}
