/* eslint-env jest */
const { cycleTest } = require('./esl')

describe('cycleTest', () => {
  it('minus 0', () => {
    expect(cycleTest(Math.random() * (-1))).toBe('negative')
  })
  it('zero', () => {
    expect(cycleTest(0)).toBe('zero')
  })
  it('positive', () => {
    expect(cycleTest(Math.random() + 1)).toBe('positive')
  })
  it('what', () => {
    expect(cycleTest('test')).toBeNaN()
  })
})
