/* eslint-env jest */
const getSumNumbersRange = require('./sumNumbersRange')

describe('02. - getSumNumbersRange', () => {
  it('return any param if upper limit equal to lower', () => {
    const input = Math.ceil(Math.random() * 10)
    expect(getSumNumbersRange(input, input)).toStrictEqual(input)
  })

  it('should reject upper limit is minor than lower param', () => {
    expect(() => {
      getSumNumbersRange(8, 4)
    })
      .toThrow('input error: upper limit [4] is minor than lower [8]')
  })

  it('resolves exercise getSumNumbersRange(3, 6) === 18', () => {
    expect(getSumNumbersRange(3, 6)).toStrictEqual(18)
  })
})
