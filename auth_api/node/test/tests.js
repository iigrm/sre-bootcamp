import chai from "chai";
import { loginFunction } from "../services/login";
import { verifyToken } from "../utils/verifyToken";
process.env.TOKEN_SECRET = "my2w7wjd7yXF64FIADfJxNs1oupTGAuW";

const expect = chai.expect;

describe("loginFunction()", function () {
  it("Test login", async function () {
    const token = await loginFunction("admin", "secret");

    expect("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9").to.be.equal(
      token.split(".")[0]
    );
  });
});

describe("verifyToken", function () {
  it("Test protected", function () {
    expect("admin").to.be.equal(
      verifyToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MzAyNjgzMjl9.JkJiheXYRP5K6EYLTIqbTMKZ396Q2dvnuBYQ_akTXWc"
      ).role
    );
  });
});
