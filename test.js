const assert = require("chai").assert;
const serverRunning = require("./server").serverIsRunning();

describe("Server", () => {
  it('Server should return "Server running'),
    () => {
      assert.equal(serverRunning, "Server running");
    };
});
