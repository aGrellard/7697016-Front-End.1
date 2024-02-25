function createElement_innerText(message, type = "p") {
    const elementP = document.createElement(type);
    elementP.innerText = message;
    return elementP;
}

// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
// Création des balises 
const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
//Rattachement de nos balises au DOM
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(createElement_innerText( article.nom, "h2"));
sectionFiches.appendChild(createElement_innerText(`Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`));
sectionFiches.appendChild(createElement_innerText(article.categorie?? "(aucune catégorie)"));
sectionFiches.appendChild(createElement_innerText(article.description?? "(aucune description)"));

