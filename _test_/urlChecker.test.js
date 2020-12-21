import { urlChecker } from "../src/client/js/urlChecker";

describe("check url", () => {
  test("Testing URL", () => {
    const url = "http://api.meaningcloud.com/";
    expect(urlChecker(url)).toBe(true);
  });
});
