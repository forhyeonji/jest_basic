const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('init with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.set(1);
    cal.add(3);
    expect(cal.value).toBe(4);
  });

  it('add should throw an error if value is greater than 100', () => {
    expect(() => {
      cal.add(101);
    }).toThrow('Value can not be greater than 100');
  });

  it('subtract', () => {
    cal.set(3);
    cal.subtract(1);
    expect(cal.value).toBe(2);
  });

  it('multiply', () => {
    cal.set(3);
    cal.multiply(2);
    expect(cal.value).toBe(6);
  });

  describe('divides', () => {
    it('0/0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('0/1 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('divide', () => {
      cal.set(3);
      cal.divide(3);
      expect(cal.value).toBe(1);
    });
  });
});
