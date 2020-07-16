/* eslint-env jest */
const stripArrayDuplicates = require('./stripArrayDuplicates')

describe('04. - stripArrayDuplicates', () => {
  it('limit case: empty array returns empty array', () => {
    expect(stripArrayDuplicates([])).toStrictEqual([])
  })

  it('returns array of digits from random string of numbers', () => {
    const expectedAfterOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const hasAllWantedItems = buildTestHasAllWantedItems(expectedAfterOrder)
    let randomItemsBuild = ''
    while (!hasAllWantedItems(randomItemsBuild)) {
      randomItemsBuild += Math.random()
    }

    const inputArray = randomItemsBuild.split('.').join('').split('')

    const strippedDuplicates = stripArrayDuplicates(inputArray)
    strippedDuplicates.sort()

    expect(strippedDuplicates.map(Number)).toStrictEqual(expectedAfterOrder)
  })
})

function buildTestHasAllWantedItems (items) {
  return function hasAllWantedItems (tested) {
    let itemIndex
    for (itemIndex = 0; itemIndex < items.length; itemIndex++) {
      const lookFor = items[itemIndex].toString()
      if (!tested.includes(lookFor)) return false
    }

    console.log(`Tested string: ${tested} has all wanted items: [${items.join(', ')}]`)
    return true
  }
}
