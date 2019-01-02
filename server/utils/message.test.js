var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var response = generateMessage("markp", "test")
    expect(response.from).toBe("markp");
    expect(response.text).toBe("test");
    expect(typeof response.createdAt).toBe('number')

  })
})
