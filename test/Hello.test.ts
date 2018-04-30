import { HelloTypescript } from "../src/Hello";

const chai = require("chai");
const expect = chai.expect;

describe("Say hello", () => {
  it("should display message", () => {
    (new HelloTypescript()).sayHello();
  });

  it("test should be green", () => {
    expect(true).to.be.true;
  });

  it("test should be red", () => {
    expect(true).to.be.false;
  });
});