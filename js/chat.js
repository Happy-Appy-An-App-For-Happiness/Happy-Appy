


const postMessage = ()=> {

  let message_arr = ["Hi!", "I hope you are doing great today!", "You've got this!", "Everything's going to be okay!"];

  let message = document.querySelector("#input").value;
  document.querySelector("#input").value = "";
  let div_elem = document.createElement("div");
  div_elem.className = "user";
  let p_elem = document.createElement("p");
  div_elem.appendChild(p_elem);

  document.querySelector("#messages").appendChild(div_elem);
  p_elem.innerText= message;

  let response_div = document.createElement("div");
  let response_p = document.createElement("p");
  response_div.className = "response";
  response_div.appendChild(response_p);

  let rand_c = Math.floor(Math.random() * message_arr.length);
  document.querySelector("#messages").appendChild(response_div);
  response_p.innerText = message_arr[rand_c];
};

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#input").onkeyup = ev => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
      ev.preventDefault();
      postMessage();
    }
  }
});


