/* eslint-env jest */
const stripArrayDuplicates = require('./stripArrayDuplicates')

describe('04. - stripArrayDuplicates', () => {
  it('limit case: empty array returns empty array', () => {
    expect(stripArrayDuplicates([])).toStrictEqual([])
  })

  it('simple duplicates case', () => {
    const justDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const expected = [...justDigits].reverse()

    const input = expected.concat(justDigits).concat(justDigits)

    expect(stripArrayDuplicates(input)).toStrictEqual(expected)
  })

  it('strips string of duplicates', () => {
    expect(stripArrayDuplicates('firefox'))
      .toStrictEqual('fireox'.split(''))
  })

  it('returns array of digits from random string of numbers', () => {
    const expectedAfterOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const hasAllWantedItems = buildTestHasAllWantedItems(expectedAfterOrder)
    let randomItemsBuild = ''
    while (!hasAllWantedItems(randomItemsBuild)) {
      randomItemsBuild += Math.random()
    }

    const inputArray = randomItemsBuild.split('.')
      .join('').split('')

    const strippedDuplicates = stripArrayDuplicates(inputArray)
    strippedDuplicates.sort()

    expect(strippedDuplicates.map(Number)).toStrictEqual(expectedAfterOrder)
  })
})

/**
 * Builds a closure allowing builder test if every wanted item is included.
 * @private
 * @param {string|string[]|number[]} items to test include
 * @param {boolean|undefined} verbose helps to see math to debug test
 * @return {function} closure to reuse test rather than build the tests every time.
 */
function buildTestHasAllWantedItems (items, verbose) {
  return function hasAllWantedItems (tested) {
    let itemIndex
    for (itemIndex = 0; itemIndex < items.length; itemIndex++) {
      const lookFor = items[itemIndex].toString()
      if (!tested.includes(lookFor)) return false
    }
    if (verbose) {
      console.log(`Tested string: ${tested} has all wanted items: [${items.join(', ')}]`)
    }
    return true
  }
}
