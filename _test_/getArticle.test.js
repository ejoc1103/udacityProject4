import { getArticle } from "../src/client/js/formHandler";
import { jest } from "@jest/globals";

describe("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
    return jest
      .getArticle(
        "http://api.meaningcloud.com/sentiment-2.1?key=",
        "",
        "&lang=auto&url=",
        ""
      )
      .then((data) => {
        expect(data.scoreTag).toBeDefined();
      });
  });
});
