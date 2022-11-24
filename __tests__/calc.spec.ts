import calc from '../src'

test('The calculation result shoule be 996.', () => {
  expect(calc(1024, 28)).toBe(996)
})
