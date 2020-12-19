function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("article").value;
  if (Client.urlChecker(formText)) {
    document.getElementById("assessmentTitle").innerHTML = `Loading`;
    fetch("http://localhost:8081/article")
      .then((res) => res.json())
      .then(function (res) {
        getArticle(res.baseUrl, res.key, res.mid, formText);
      });
  } else {
    document.getElementById(
      "assessmentTitle"
    ).innerHTML = `That wasn't a proper URL please try again`;
    document.getElementById("score_tag").innerHTML = ``;
    document.getElementById("agreement").innerHTML = ``;
    document.getElementById("subjectivity").innerHTML = ``;
    document.getElementById("confidence").innerHTML = ``;
    document.getElementById("irony").innerHTML = ``;
    console.log("This isn't a url");
  }
}

const getArticle = async (baseURL, key, mid, article) => {
  const res = await fetch(baseURL + key + mid + article);
  try {
    const data = await res.json();
    setUI(data);
  } catch (err) {
    console.log(err + "error");
  }
};

const setUI = ({ score_tag, agreement, subjectivity, confidence, irony }) => {
  document.getElementById("assessmentTitle").innerHTML = `Article Assessment`;
  let score;

  if (score_tag === "P+") {
    score = "Strong Positive";
  } else if (score_tag === "P") {
    score = "Positive";
  } else if (score_tag === "NEU") {
    score = "Neutral";
  } else if (score_tag === "N") {
    score = "Negative";
  } else if (score_tag === "N+") {
    score = "Strong Negative";
  } else {
    score = "Without sentiment";
  }

  document.getElementById(
    "score_tag"
  ).innerHTML = `The general tone of this article is ${score}`;
  document.getElementById(
    "agreement"
  ).innerHTML = `There seems to be ${agreement} between the different elements in this article`;
  document.getElementById(
    "subjectivity"
  ).innerHTML = `This article seems to be ${subjectivity} in nature`;
  document.getElementById(
    "confidence"
  ).innerHTML = `We have ${confidence}% confidence in this assessment`;
  document.getElementById(
    "irony"
  ).innerHTML = `The text in this article is ${irony}`;
};

export { handleSubmit, getArticle };
