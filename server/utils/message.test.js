var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var response = generateMessage("markp", "test")
    expect(response.from).toBe("markp");
    expect(response.text).toBe("test");
    expect(typeof response.createdAt).toBe('number')

  })
})

describe('generateLocationMessage', () => {
  it('should generate location object', () => {
    var from = 'Deb';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var response = generateLocationMessage(from, latitude, longitude);
      expect(typeof response.createdAt).toBe('number')
      expect(response.from).toBe("Deb");

  })


})
