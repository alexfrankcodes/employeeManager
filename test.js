const assert = require("chai").assert;
const app = require("./server");

describe("Basic Mocha test", function() {
  it("Should pass if the server is initialized", function() {
    assert.exists(app);
  });
});
