let first = prompt("chose what u need : 7 sign-up, login, forget password");

if (first == "7") {
// !fullname
    let fullName = prompt("enter your FullName")
    while (fullName.length < 5) {
        fullName = prompt("enter your FullName")
    }
    
    if (fullName.match("regex")) {
        fullName = prompt("enter your FullName")
    }

    console.log(fullName.trim().charAt(0).toUpperCase() + fullName.slice(1).replace(/[^\w ]/g, ''));
    
// !mail
    // let mail = prompt("insert your mail!")
    // if (mail.indexOf(` `)) {
    //     mail = prompt("enleve l'espace")
    // }
    // // if (mail.length < 10) {
    // //     while (mail.length < 10) {
    // //         mail = prompt("insert your mail!")
    // //     }
    // // }

    // console.log(mail.trim().toLowerCase());
    let userEmail = prompt("Entrez votre adresse e-mail ?");
userEmail = userEmail.trim().toLowerCase();

if (userEmail.includes(' ')) {
    alert("L'adresse e-mail ne doit pas contenir d'espaces au milieu.");
} else {
    let atpos = userEmail.indexOf("@");
    let dotpos = userEmail.lastIndexOf(".");
    
    if (userEmail.replace(/\s/g, '').length < 10) {
        alert("L'adresse e-mail doit contenir au moins 10 caractères (en excluant les espaces).");
    } else if (atpos !== userEmail.lastIndexOf("@") || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        alert("Adresse e-mail non valide.");
    } else {
        alert("Adresse e-mail valide et unique !");
        console.log(userEmail);
    }
}
// !age
let userAge=prompt("insert your age!")
userAge=parseInt (userAge.trim());
while (isNaN(userAge) || userAge.toString().length === 0 || userAge.toString().length >= 3) {
    userAge=prompt("insert only numbers!")
    userAge=parseInt (userAge.trim());
}
console.log(userAge);



}


// - Vérifiez les espaces de début, de fin ou du milieu.
//              - Vérifiez que seuls des chiffres sont saisis.
//              - Ne sauvegardez pas l'âge s'il comporte 0 caractère ou s'il comporte 3 caractères ou plus.