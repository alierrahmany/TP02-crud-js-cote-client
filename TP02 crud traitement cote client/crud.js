// Fonction pour afficher le formulaire d'ajout
function displayBlock() {
    document.querySelector(".blockadd").style.display = "block";
}

// Liste des stagiaires
let Data = [
    { num: "0733435345", nom: "alex", prenom: "walker", email: "alex@gmail.com", Filier: "dev 101" },
    { num: "0633435289", nom: "ali", prenom: "err", email: "ali@gmail.com", Filier: "dev 201" },
    { num: "0735673237", nom: "alan", prenom: "walker", email: "alan@gmail.com", Filier: "dev 201" },
    { num: "0645679048", nom: "alix", prenom: "err", email: "alix@gmail.com", Filier: "dev 101" }
];

// Fonction pour afficher les stagiaires dans le tableau
function getAll() {
    let tableBody = document.getElementById("table-body");
    
    tableBody.innerHTML = ""; 
    Data.forEach(function (person, index) {
        let row = `<tr>
                    <td>${index + 1}</td>
                    <td>${person.num}</td>
                    <td>${person.nom}</td>
                    <td>${person.prenom}</td>
                    <td>${person.email}</td>
                    <td>${person.Filier}</td>
                    <td>
                        <button class="btn btn-danger" onclick="deleteStg(${index})">Supprimer</button>
                        <button class="btn btn-warning" onclick="editStg(${index})">Modifier</button>
                    </td>
                  </tr>`;
        tableBody.innerHTML += row;
    });
}

// Fonction pour ajouter un nouveau stagiaire
function addStg() {
    if (!document.getElementById('stagiaireForm').checkValidity()) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return; 
    }
    // Récupérer les valeurs du formulaire
    let num = document.getElementById('num').value;
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let email = document.getElementById('email').value;
    let filier = document.getElementById('filier').value;

    // Ajouter le nouveau stagiaire dans le tableau Data
    let newStg = { num: num, nom: nom, prenom: prenom, email: email, Filier: filier };
    Data.push(newStg);

    // Réafficher les stagiaires
    getAll();

    // Masquer le formulaire
    document.querySelector(".blockadd").style.display = "none";

    // Réinitialiser le formulaire
    document.getElementById("stagiaireForm").reset();
}

// Fonction pour supprimer un stagiaire
function deleteStg(index) {
    Data.splice(index, 1); // Supprimer l'élément à l'index donné
    getAll(); // Réafficher les données
}

// Fonction pour modifier un stagiaire
function editStg(index) {
    let person = Data[index];
    document.getElementById('num').value = person.num;
    document.getElementById('nom').value = person.nom;
    document.getElementById('prenom').value = person.prenom;
    document.getElementById('email').value = person.email;
    document.getElementById('filier').value = person.Filier;

    // Afficher le formulaire
    displayBlock();

    // Modifier la fonction Valider pour mettre à jour l'élément existant
    document.querySelector(".btn-success").setAttribute("onclick", `updateStg(${index})`);
}
// Fonction pour mettre à jour un stagiaire existant
function updateStg(index) {
    // Mettre à jour les valeurs dans l'objet Data
    Data[index].num = document.getElementById('num').value;
    Data[index].nom = document.getElementById('nom').value;
    Data[index].prenom = document.getElementById('prenom').value;
    Data[index].email = document.getElementById('email').value;
    Data[index].Filier = document.getElementById('filier').value;

    // Réafficher les données
    getAll();

    // Masquer le formulaire
    document.querySelector(".blockadd").style.display = "none";

    // Réinitialiser le formulaire
    document.getElementById("stagiaireForm").reset();

    // Remettre le bouton à "Ajouter" après la mise à jour
    document.querySelector(".btn-success").setAttribute("onclick", "addStg()");
}

// Afficher les stagiaires au chargement de la page
getAll();

// Afficher le nombre total de stagiaires
document.getElementById("count").innerText = "Nombre total de stagiaires: " + Data.length;

