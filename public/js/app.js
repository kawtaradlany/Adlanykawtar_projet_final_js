let first = prompt("chose what u need : 7 sign-up, login, forget password");

if (first == "7") {
// !fullname
//     let fullName = prompt("enter your FullName")
//     while (fullName.length < 5) {
//         fullName = prompt("enter your FullName")
//     }
    
//     if (fullName.match("regex")) {
//         fullName = prompt("enter your FullName")
//     }

//     console.log(fullName.trim().charAt(0).toUpperCase() + fullName.slice(1).replace(/[^\w ]/g, ''));
    
// // !mail
//     // let mail = prompt("insert your mail!")
//     // if (mail.indexOf(` `)) {
//     //     mail = prompt("enleve l'espace")
//     // }
//     // // if (mail.length < 10) {
//     // //     while (mail.length < 10) {
//     // //         mail = prompt("insert your mail!")
//     // //     }
//     // // }

//     // console.log(mail.trim().toLowerCase());
//     let userEmail = prompt("Entrez votre adresse e-mail ?");
// userEmail = userEmail.trim().toLowerCase();

// if (userEmail.includes(' ')) {
//     alert("L'adresse e-mail ne doit pas contenir d'espaces au milieu.");
// } else {
//     let atpos = userEmail.indexOf("@");
//     let dotpos = userEmail.lastIndexOf(".");
    
//     if (userEmail.replace(/\s/g, '').length < 10) {
//         alert("L'adresse e-mail doit contenir au moins 10 caractères (en excluant les espaces).");
//     } else if (atpos !== userEmail.lastIndexOf("@") || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
//         alert("Adresse e-mail non valide.");
//     } else {
//         alert("Adresse e-mail valide et unique !");
//         console.log(userEmail);
//     }
// }
// // !age
// let userAge=prompt("insert your age!")
// userAge=parseInt (userAge.trim());
// // if (isNaN(userAge) || userAge.toString().length === 0 || userAge.toString().length >= 3) {
    
// // }
// while (isNaN(userAge) || userAge.toString().length === 0 || userAge.toString().length >= 3) {
//     userAge=prompt("insert only numbers!")
//     userAge=parseInt (userAge.trim());
// }
// console.log(userAge);
// ! mdp
let mdp=prompt("insert your mdp")
mdp = mdp.trim()
while (mdp.includes(` `) ||!(/[@#*+\-\/]/.test(mdp) && mdp.length >= 7)) {
    mdp=prompt("entrer encore une fois ton mdp")
}
let confmdp=prompt("repert your mdp")
while (mdp!== confmdp) {
    alert("incorect")
    confmdp=prompt("repert your mdp")
}

}


// # Mot de passe:
//              - Vérifiez les espaces de début ou de fin.
//              - N'enregistrez pas le mot de passe s'il comporte des espaces au milieu.
//              - Exiger au moins un caractère spécial de l'ensemble : ["@", "#", "-", "+", "*", "/"].
//              - Exiger au moins 7 caractères pour confirmer le mot de passe.