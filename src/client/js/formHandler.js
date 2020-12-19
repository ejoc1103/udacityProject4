function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("article").value;
  if (Client.urlChecker(formText)) {
    fetch("http://localhost:8081/article")
      .then((res) => res.json())
      .then(function (res) {
        getArticle(res.baseUrl, res.key, res.mid, formText);
      });
  } else {
    console.log("This isn't url");
  }
}

const getArticle = async (baseURL, key, mid, article) => {
  console.log("Did this get hit?");
  const res = await fetch(baseURL + key + mid + article);
  try {
    const data = await res.json();
    console.log(data.agreement);
    setUI(data);
  } catch (err) {
    console.log(err + "did this get entered?");
  }
};

const setUI = ({ score_tag, agreement, subjectivity, confidence, irony }) => {
  document.getElementById("score_tag").innerHTML = score_tag;
  document.getElementById("agreement").innerHTML = agreement;
  document.getElementById("subjectivity").innerHTML = subjectivity;
  document.getElementById("confidence").innerHTML = confidence;
  document.getElementById("irony").innerHTML = irony;
};

export { handleSubmit };
