/* eslint-env jest */
const { getGreaterAscendingSubset } = require('./ascendingSubset')

describe('01. - getGreaterAscendingSubset', () => {
  it('returns empty array on empty input', () => {
    expect(getGreaterAscendingSubset([])).toStrictEqual([])
  })

  it('return same input if single item input', () => {
    const input = [Math.random()]
    expect(getGreaterAscendingSubset(input)).toStrictEqual(input)
  })

  it('resolves example in exercise description', () => {
    const input = [3, 2, 5, 9, 1, 3]
    const expected = [2, 5, 9]
    const actual = getGreaterAscendingSubset(input)

    expect(actual).toStrictEqual(expected)
  })

  it('passes fn([4, 7, 8, 9, 1, 2, 5, 3]) === [4,7,8,9]', () => {
    const input = [4, 7, 8, 9, 1, 2, 5, 3]
    const expected = [4, 7, 8, 9]
    const actual = getGreaterAscendingSubset(input)

    expect(actual).toStrictEqual(expected)
  })

  it('passes fn([4, 7, 8, 9, 1, 2, 5, 3, 9, 12, 15, 20]) === [3,9,12,15,20]', () => {
    const input = [4, 7, 8, 9, 1, 2, 5, 3, 9, 12, 15, 20]
    const expected = [3, 9, 12, 15, 20]
    const actual = getGreaterAscendingSubset(input)

    expect(actual).toStrictEqual(expected)
  })
})
