let div = document.querySelector("div");
console.log(div);
console.log(div.innerHTML); //This provides all the elements inside the div element
console.log(div.innerText); //This provides all the text content without tag names

let allP = document.querySelectorAll("p");
console.log(allP); //NodeList(2) [p, p]

let idTag = document.getElementById("subHeading");
console.log(idTag); //<h2 id="subHeading">About</h2>
