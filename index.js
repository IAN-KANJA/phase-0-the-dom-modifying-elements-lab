// Write your code here!
// const element = document.createElement("div");
// document.body.append(element);
// const ul = document.createElement("ul");
// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }
// element.append(ul);
// li.textContent = "Hi there!";
// console.log(li.textContent);
// const main = document.getElementById("main");
// main.innerHTML =
//   "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

document.getElementById('main').remove()

const newHeader =
document.createElement(`h1`)

newHeader.id=`victory`

newHeader.innerHTML = `Njau is the champion`