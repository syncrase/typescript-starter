import { DoubleEqual } from "../src/DoubleEqual.ts";

describe("Test the JavaScript's double equals", () => {

  const equalityTester: DoubleEqual = new DoubleEqual();
  let a = {
    value: 10,
    toString() {
      return "1";
    }
  };
  let b = {
    value: 11,
    toString() {
      return "2";
    }
  };
  let c = {
    value: 12,
    toString() {
      return "3";
    }
  };

  it("JavaScript conversion mechanism is used (toString) in order to compare object and string or number", () => {
    expect(equalityTester.checkEquality([a, b, c], [1, 2, 3])).toBeTruthy();
    expect(equalityTester.checkEquality([a, b, c], ["1", "2", "3"])).toBeTruthy();
  });

  it("valueOf method have precedence over toString method", () => {
    a = {
      ...a,
      valueOf: () => {
        return 4;
      },
    } as any;

    b = {
      ...b,
      valueOf() {
        return 5;
      },
    } as any;
    c = {
      ...c,
      valueOf() {
        return 6;
      },
    } as any;
    expect(equalityTester.checkEquality([a, b, c], [4, 5, 6])).toBeTruthy();
    expect(equalityTester.checkEquality([a, b, c], ["4", "5", "6"])).toBeTruthy();
  });

  it("The Symbol.toPrimitive method  have precedence over valueOf method", () => {
    a = {
      ...a,
      [Symbol.toPrimitive]() {
        return 7;
      },
    } as any;

    b = {
      ...b,
      [Symbol.toPrimitive]() {
        return 8;
      },
    } as any;
    c = {
      ...c,
      [Symbol.toPrimitive]() {
        return 9;
      },
    } as any;
    expect(equalityTester.checkEquality([a, b, c], [7, 8, 9])).toBeTruthy();
    expect(equalityTester.checkEquality([a, b, c], ["7", "8", "9"])).toBeTruthy();
  });

  it("Using side effect in valueOf method", () => {
    let a = {
      value: "10",
      valueOf: function () {
        a.value = (+a.value) + 6 + '';
        return a.value;
      },
    };

    expect(equalityTester.checkEquality([a, a, a], [16, 22, 28])).toBeTruthy();
    expect(equalityTester.checkEquality([a, a, a], ["34", "40", "46"])).toBeTruthy();
  });

  it("Use of join and shift to solve the equality", () => {
    let a = new Proxy({ i: 1 }, {
      get(target) {
        return () => target.i++
      }
    });
    expect(equalityTester.checkEquality([a, a, a], [1, 2, 3])).toBeTruthy();
  });

  it("Use of join and shift to solve the equality", () => {

  });

  /*
  Basic topic : '+' usage
   */
  it("String over number, addition is concatenation", () => {
    const a = "5";
    const b = 5;
    //
    expect(a + b).toEqual("55");
    expect(b + a).toEqual("55");

    expect(b + +a).toEqual(10);
    expect(+a + b).toEqual(10);
  });

});