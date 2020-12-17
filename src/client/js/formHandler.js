import { checkUrl } from "..";

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("article").value;

  Client.checkUrl(formText);
  if(checkUrl(formText){
      console.log(true);
  } else {
      console.log(false)
  }
  
  fetch("http://localhost:8081/review", formText)
    .then((res) => {
      return res.json();
    })
    .then(function (data) {
      document.getElementById("results").innerHTML = data.message;
    });
}

export { handleSubmit };
