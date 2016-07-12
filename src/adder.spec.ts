import Adder from "./adder";

describe("test adder", () => {
  it("should add", () => {
    let adder = new Adder(1);
    expect(adder.add(1)).toBe(2);
  });
});
