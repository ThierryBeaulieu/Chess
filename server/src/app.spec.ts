import assert from "assert";
import { add } from "./app.js";

describe("add", () => {
  it("should 1 + 2 = 3 ", () => {
    assert.strictEqual(add(1, 2), 3);
  });
});
