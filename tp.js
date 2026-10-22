// Q1 : creer un tableau d'objet de 5 utilisateurs et pour chaque utilisateur on a : prenom,nom, age, status,role
//Q2 : creer une fontion flechee getdmin qui retourne la liste des utlisateursayant le role admin et qui sont actifs 
//Q3 :  creer une fonction qui recoit en parametre un utilisateur et affiche ses informations, son prenom ,son role
// Q4 : creer un nouveau tableau contenant uniquement des objets simplifies: prenom,nom ,role(map et destruction)
//Q5 : transformer le tableau pour obtenir un seul objet dont les cles correspondent au role et les valeurs sont des tableaux contenant les utilisateurs associes
//Q6 : creer une fonction qui affiche le premier utilisateur age de 25ans en utilisant find
// Q7 : ajouter un nouvel utilisateur dans un nouveau tableau appele equipe qui contient tout les utilisateurs du premier tableau utiliser les spread operator


// Q1 : creer un tableau d'objet de 5 utilisateurs et pour chaque utilisateur on a : prenom,nom, age, status,role
const utilisateurs = [
    { prenom: "Alice", nom: "Dupont", age: 30, status: 1, role: "admin" },
    { prenom: "Bob", nom: "Martin", age: 25, status: 0, role: "user" },
    { prenom: "Jack", nom: "Dupont", age: 13, status: 1, role: "admin" },
    { prenom: "Margo", nom: "Martin", age: 34, status: 0, role: "user" },
    { prenom: "Maurice", nom: "Dupont", age: 20, status: 1, role: "admin" },
];

// Q2 : creer une fontion flechee qui retourne la liste des utlisateurs ayant le role admin et qui sont actifs 
const getAdmin1 = () => {
    return utilisateurs.filter(user => user.role === "admin" && user.status === 1);
}
//autre methode pour faire la meme chose
const getAdmin2 = () => {
    let tab = [];
    for (let i = 0; i < utilisateurs.length; i++) {
        if (utilisateurs[i].role === "admin" && utilisateurs[i].status === 1) {
            tab.push(utilisateurs[i]);
        }
    }
    return tab;
};
console.log(getAdmin2());

// Q3 : creer une fonction qui recoit en parametre un utilisateur et affiche ses informations, son prenom ,son nom et son role
const getInfo = (user) => { 
    let prenom = user.prenom;
    let nom = user.nom;
    let role = user.role;
    console.log(`Prenom: ${prenom}, Nom: ${nom}, Role: ${role}`);
};
// par destructuration
const getInfo2 = (user) => {
    let { prenom, nom, role } = user;
    console.log(`${prenom} ${nom} ${role}`);
};
getInfo(utilisateurs[0]);
getInfo2(utilisateurs[4]);

// Q4 : creer un nouveau tableau contenant uniquement des objets simplifies: prenom,nom ,role(map et destruction)
const utilisateurs1 = [
    { prenom: "Alice", nom: "Dupont", age: 30, status: 1, role: "admin" },
    { prenom: "Bob", nom: "Martin", age: 25, status: 0, role: "user" },
    { prenom: "Jack", nom: "Dupont", age: 13, status: 1, role: "admin" },
    { prenom: "Margo", nom: "Martin", age: 34, status: 0, role: "user" },
    { prenom: "Maurice", nom: "Dupont", age: 20, status: 1, role: "admin" },
];
const utilisateursSimplifies = utilisateurs1.map(({ prenom, nom, role }) => ({ prenom, nom, role }));
console.log(utilisateursSimplifies);

//Q5 : transformer le tableau pour obtenir un seul objet dont les cles correspondent au role et les valeurs sont des tableaux contenant les utilisateurs associes

const utilisateursParRole = utilisateursSimplifies.reduce((acc, user) => {
    if (!acc[user.role]) {
        acc[user.role] = [];
    }
    acc[user.role].push(user);
    return acc;
}, {});
console.log(utilisateursParRole);

//Q6 : creer une fonction qui affiche le premier utilisateur age de 25ans en utilisant find
const getutilisateur25 = () => {
    const user = utilisateurs.find(user => user.age === 25);
    console.log(user);
};
getutilisateur25();

// Q7 : ajouter un nouvel utilisateur dans un nouveau tableau appele equipe qui contient tout les utilisateurs du premier tableau utiliser les spread operator
const nouvelUtilisateur = { prenom: "Sophie", nom: "Durand", age: 28, status: 1, role: "user" };
const equipe = [...utilisateurs, nouvelUtilisateur];
console.log(equipe);
