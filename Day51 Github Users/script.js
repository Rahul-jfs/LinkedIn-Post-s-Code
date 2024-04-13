let container = document.querySelector(".container");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let inp = document.querySelector("input");
  let inVal = inp.value;
  getImage(inVal);
});
let getImage = (inp) => {
  fetch(`https://api.github.com/users/${inp}`)
    .then((res) => res.json())
    .then((user) => {
      console.log(user);
      let name = document.createElement("h1");
      name.innerText = `Name: ${user.name} `;
      let followers = document.createElement("h1");
      followers.innerText = `Followers: ${user.followers} `;
      let following = document.createElement("h1");
      following.innerText = `Following: ${user.following} `;
      console.log(user.id);
      container.append(name);
      container.append(followers);
      container.append(following);

      let img = document.createElement("img");
      img.src = user.avatar_url;
      container.append(img);
    });
};
