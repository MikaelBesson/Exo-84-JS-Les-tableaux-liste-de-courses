// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :
let ul = document.getElementById("listeCourse");




for(let item of articles){
    let li = document.createElement("li");
    let cache = document.createElement("button");
    let suprime = document.createElement("button");
    cache.innerHTML = "cache";
    suprime.innerHTML = "suprime";
    li.innerHTML = item;
    li.appendChild(cache);
    li.appendChild(suprime);
    ul.appendChild(li);
    cache.addEventListener("click")

}














