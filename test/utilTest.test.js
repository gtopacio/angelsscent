const fn = require('../util/successfulTest');

test("Successful Test", () => {
    expect(fn()).toEqual(1);
});