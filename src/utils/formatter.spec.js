import { currencyFormatter } from "./formatter";

describe("utils/formatter", () => {
  describe("currencyFormatter", () => {
    it("should return formatted currency value", () => {
      expect(currencyFormatter(14.567)).toBe("$ 14.57");
      expect(currencyFormatter(23456)).toBe("$ 23,456.00");
    });
  });
});
