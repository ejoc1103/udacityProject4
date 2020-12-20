import { getArticle } from "../src/client/js/formHandler";

test("Should return data", getArticle(), async () => {
  const data = await fetch();
  expect(data.toBeDefined());
});
