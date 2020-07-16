/* eslint-env jest */
const isBalancedExpression = require('./isBalancedExpression')

describe('05. - isBalancedExpression', () => {
  it('exercise case 1: isBalancedExpression("([])") === true', () => {
    expect(isBalancedExpression('([])')).toStrictEqual(true)
  })
  it('exercise case 2: isBalancedExpression("[()[]]") === true', () => {
    expect(isBalancedExpression('[()[]]')).toStrictEqual(true)
  })
  it('exercise case 3: isBalancedExpression("([)]") === false', () => {
    expect(isBalancedExpression('([)]')).toStrictEqual(false)
  })
  it('extra chars balanced: isBalancedExpression("[,(.);]") === true', () => {
    expect(isBalancedExpression('[,(.);]')).toStrictEqual(true)
  })
  it('extra chars not balanced: isBalancedExpression("([a(]z);]") === false', () => {
    expect(isBalancedExpression('([a(]z);]')).toStrictEqual(false)
  })
  it('open bracket but never closed: isBalancedExpression("([()]<-not closing paren") === false', () => {
    expect(isBalancedExpression('([()]<-not closing paren')).toStrictEqual(false)
  })
  it('close bracket without open level: isBalancedExpression("(1[2]fine)wrong:)") === false', () => {
    expect(isBalancedExpression('(1[2]fine)wrong:)')).toStrictEqual(false)
  })
})
