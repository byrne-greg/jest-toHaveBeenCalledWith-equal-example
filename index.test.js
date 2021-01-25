
const utils = require(".");

const data = { name: "Parent A", id: 1}

test('toHaveBeenCalledWith doesn\'t compare objects strictly', () => {
  utils.f2 = jest.fn()
  utils.f1(data)
  expect(utils.f2).toHaveBeenCalledWith(data) // passes
  expect(utils.f2.mock.calls[0][0]).toEqual(data) // passes
  expect(utils.f2.mock.calls[0][0]).toStrictEqual(data) // fails  
})
