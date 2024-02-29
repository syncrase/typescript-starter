import { DoubleEqual } from "../src/DoubleEqual.ts";

describe("Test the JavaScript's double equals", () => {

  const equalityTester: DoubleEqual = new DoubleEqual();

  it("Using side effect in defineProperty method", () => {
    // let _a = {
    //   _a: "10",
    // };
    // Object.defineProperty(a, 'a', {
    //   get() {
    //     a.value = (+_a._a) + 6 + '';
    //     return _a.value;
    //   }
    // })
    // expect(equalityTester.checkEquality([a, a, a], [10, 10, 10])).toBeTruthy();
    // expect(equalityTester.checkEquality([a, a, a], ["34", "40", "46"])).toBeTruthy();
  });



});