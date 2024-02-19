// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const list = document.createElement("ul");
document.body.appendChild(list);

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const li = document.createElement("li");
  li.textContent = country;
  list.appendChild(li);
}

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const fnDelete = document.querySelector(".fn-remove-me");
fnDelete.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const div = document.querySelector("[data-function='printHere']");
const ul = document.createElement("ul");
div.appendChild(ul);

for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;
  ul.appendChild(li);
}

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.

const countriesTwo = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" }
];

for (const country of countriesTwo) {
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  const img = document.createElement("img");

  h4.textContent = country.title;
  img.src = country.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

const deleteButton = document.createElement("button");
deleteButton.textContent = "Elimina el último Div";

function deleteDiv() {
  const allDivs = document.querySelectorAll("div");
  allDivs[allDivs.length - 1].remove();
}
deleteButton.addEventListener("click", deleteDiv);
document.body.appendChild(deleteButton);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

const allDivs2 = document.querySelectorAll("div");
for (const div of allDivs2) {
  const button = document.createElement("button");
  button.textContent = "Eliminar Img";
  button.addEventListener("click", (del) => del.target.parentElement.remove());
  div.appendChild(button);
}
