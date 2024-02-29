export class DoubleEqual {
  constructor(private greetingMessage = "TS says hello, default message :)") {
  }

  checkEquality(objects: any[], expectedEqualityWith: any[]) {
    if (objects.length !== expectedEqualityWith.length) return;
    const [a, b, c] = objects;
    const [aExpect, bExpect, cExpect] = expectedEqualityWith;
    return a == aExpect && b == bExpect && c == cExpect;
  }

  checkAllEquals(a: any, b: any, c: any) {
    return a == b && b == c && c == a;
  }
}
