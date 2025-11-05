 // 🎯 Contenu à afficher avec animation
const nom = "Bineta Faye";
const titre = "Étudiante en Licence Informatique";

// 🏷 Sélection des éléments HTML
const elementNom = document.getElementById("nom");
const elementTitre = document.getElementById("titre");

// ✨ Style du nom
elementNom.style.whiteSpace = "nowrap";
elementNom.style.overflow = "hidden";
elementNom.style.borderRight = "3px solid white";
elementNom.style.display = "inline-block";

// ✨ Style du titre
elementTitre.style.whiteSpace = "nowrap";
elementTitre.style.overflow = "hidden";
elementTitre.style.borderRight = "3px solid white";
elementTitre.style.display = "inline-block";
elementTitre.style.fontSize = "18px";
elementTitre.style.color = "lightgrey";

// ⌨️ Anim machine à écrire (nom)
let i = 0;
function typeNom() {
  if (i < nom.length) {
    elementNom.textContent = nom.substring(0, i + 1);
    i++;
    setTimeout(typeNom, 120);
  } else {
    elementNom.style.borderRight = "transparent";
    setTimeout(typeTitre, 300);
  }
}

// ⌨️ Anim machine à écrire (titre)
let j = 0;
function typeTitre() {
  if (j < titre.length) {
    elementTitre.textContent = titre.substring(0, j + 1);
    j++;
    setTimeout(typeTitre, 100);
  } else {
    elementTitre.style.borderRight =
      elementTitre.style.borderRight === "3px solid white"
        ? "3px solid transparent"
        : "3px solid white";
  }
}

typeNom();
