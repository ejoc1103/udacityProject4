import { setScore } from "../src/client/js/formHandler";

test("Should return positive", () => {
  const score_tag = "P+";
  expect(setScore(score_tag)).toBe("Strong Positive");
});
