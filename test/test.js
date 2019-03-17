const request = require("supertest");
const app = require("../server.js");

describe("GET /", function() {
  it("Server running", function(done) {
    // Navigate to root and check the the response is "Server is running"
    request(app)
      .get("/")
      .expect("Server is running", done);
  });
});
