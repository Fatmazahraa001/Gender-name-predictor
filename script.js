// variable declaration this variable is used add elements the page 
let wrapper = document.getElementById("wrapper");
/*the above function is used  to help predict the gender
 of a person based on their name and the API_KEY 
 is used to retrieve the gender information*/
let predictGender = () => {
  let name = document.getElementById("name").value;
  let error = document.getElementById("error");
  let finalURL = `https://gender-api.com/get?name=${name}&key=${API_KEY}`;
  console.log(name);
  console.log(finalURL);
  wrapper.innerHTML = "";
  error.innerHTML = "";
   /*this function is used to fetch data fro m an API 
    and displays it on the page*/

  if (name.length > 0) {
    fetch(finalURL)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        let div = document.createElement("div");
        div.setAttribute("id", "info");
        div.innerHTML = `<h2 id="result-name">${data.name}</h2><img src="" id="gender-icon"/> <h1 id="gender">${data.gender}</h1><h4 id="prob">Accuracy: ${data.accuracy}</h4>`;
        wrapper.append(div);
        /*it checks the response from the API based on the gender ,
          sets the src atrribute of the genger icon to either
          lady.svg or Male.svg*/ 
        if (data.gender == "female") {
          div.classList.add("female");
          document
            .getElementById("gender-icon")
            .setAttribute("src", "lady.svg");
        } else {
          div.classList.add("male");
          document
            .getElementById("gender-icon")
            .setAttribute("src", "male.svg");
        }
      });
   /* this is function that is used to clear the input field 
    after the user enters their name and clicks the submit button
    otherwise an error message is displayed which btells the user to enter a valid name.*/
    document.getElementById("name").value = "";
  } else {
    error.innerHTML = "Enter a valid name with no spaces";
  }
};
/*the eventlistener listens to the click on the submit button and
calls for a gender predict function when the page loads*/
document.getElementById("submit").addEventListener("click", predictGender);
window.addEventListener("load", predictGender);
