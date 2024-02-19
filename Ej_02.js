// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);
console.log(emptyDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divP = document.createElement("div");
const pDiv = document.createElement("p");
divP.appendChild(pDiv);
document.body.appendChild(divP);
console.log(divP);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

const divLoop = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  divLoop.appendChild(p);
}
console.log(divLoop);

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

const p = document.createElement("p");
document.body.appendChild(p);
p.innerHTML = "Soy dinámico!";
console.log(p);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";
console.log(h2);

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const list = document.createElement("ul");
document.body.appendChild(list);

for (let i = 0; i < apps.length; i++) {
  const app = apps[i];
  const li = document.createElement("li");
  li.textContent = app;
  list.appendChild(li);
}

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const supri = document.querySelectorAll(".fn-remove-me");

for (const sup of supri) {
  sup.remove();
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const divOne = document.querySelectorAll("div");
const pText = document.createElement("p");
p.textContent = "Voy en medio!";
document.body.insertBefore(pText, divOne[1]);

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

const divInsertHere = document.querySelectorAll("div.fn-insert-here");

for (const div of divInsertHere) {
  const p = document.createElement("p");
  p.textContent = "Voy dentro!";
  div.appendChild(p);
}
