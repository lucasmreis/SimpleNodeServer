var obj = require('../lib/object');

describe('object generation', function () {
  it('should generate an object with the default name Lucas Reis', function () {
    var o = obj();
    expect(o.id).toBe(1);
    expect(o.name).toBe('Lucas Reis');
    expect(o.dogs).toBeDefined();
  });
  
  it('should generate an onbject with the given name', function() {
    var o = obj('Christina Reis');
    expect(o.id).toBe(1);
    expect(o.name).toBe('Christina Reis');
    expect(o.dogs).toBeDefined();
  });
});