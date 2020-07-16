/* eslint-env jest */
const getItemAtPositionOrderedArray = require('./itemAtPositionOrderedArray')

describe('03. - getItemAtPositionOrderedArray', () => {
  it('limit case 1: empty array and item position is zero => []', () => {
    expect(getItemAtPositionOrderedArray([], 0)).toStrictEqual([])
  })

  it('limit case 2: throws if item position is greater than length of given array', () => {
    expect(() => {
      getItemAtPositionOrderedArray([], 1)
    })
      .toThrow('item position [1] is larger than size of set: [0]')
  })

  it('resolves exercise getItemAtPositionOrderedArray([7,2,5,9,8,3], 2) === 8', () => {
    const inputArray = [7, 2, 5, 9, 8, 3]
    const itemAt = 2
    const expectedItem = 8
    expect(getItemAtPositionOrderedArray(inputArray, itemAt)).toStrictEqual(expectedItem)
  })
})
