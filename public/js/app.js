let first = prompt("chose what u need :  signup, login, forgetpassword");
let userDb=[];
if (first == "signup") {
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
    let userEmail = prompt("Entrez votre adresse e-mail ?").trim().toLowerCase();

    if (userDb.includes(userEmail)) {
        alert("Cette adresse e-mail est déjà utilisée. Veuillez choisir une autre adresse e-mail.");
    } else if (userEmail.includes(' ')) {
        alert("L'adresse e-mail ne doit pas contenir d'espaces au milieu.");
    } else {
        let atpos = userEmail.indexOf("@");
        let dotpos = userEmail.lastIndexOf(".");
        
        if (userEmail.replace(/\s/g, '').length < 10) {
            alert("L'adresse e-mail doit contenir au moins 10 caractères (en excluant les espaces).");
        } else if (atpos !== userEmail.lastIndexOf("@") || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
            alert("Adresse e-mail non valide.");
        } else {
            userDb.push(userEmail);
            alert("Adresse e-mail valide et unique !");
            console.log(userEmail);
            console.log(userDb);
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
// ! mdp
let mdp=prompt("insert your mdp")
mdp = mdp.trim()
while (mdp.includes(` `) ||!(/[@#*+\-\/]/.test(mdp) && mdp.length >= 7)) {
    mdp=prompt("entrer encore une fois ton mdp")
}
// !confmdp
let confmdp=prompt("repert your mdp")
while (mdp!== confmdp) {
    alert("incorect")
    confmdp=prompt("repert your mdp")
}
}else if(first == "login"){
    let logEmail = prompt("Entrez votre adresse e-mail ?").trim().toLowerCase();
    let logMdp=prompt("entrez votre mdp")
    let userlogin=userDb.find(user => user.email=== logEmail)
    if (userlogin && userlogin.password === logMdp) {
        console.log("Bienvenue !");
    } else {
        console.log("Veuillez vérifier votre e-mail ou votre mot de passe.");
    }
// !forget
}else if (first== forgetpassword){
    let forgetpassword = prompt("Entrez votre adresse e-mail ?")
    while (forgetpassword == userDb) {
        let forgetpassword = prompt("Entrez votre adresse e-mail ?")
    }

}else if(first==="login"){
    let logEmail=prompt("insert ur mail")
    let logMdp=prompt("insert ur mdp")
    let userlogin=userDb.find(user => user.email=== logEmail)
    if (userlogin && userlogin.password === logMdp) {
        console.log("Bienvenue !");
        // !soldebank
        let soldebank=1000;
        alert("votre solde et "+ soldebank + "dh")
        let serviceChoice= prompt("écrivez votre besoin : Se déconnecter,Retirer de l'argent, Déposer de l'argent, Prendre un prêt, Investir, Histoire: ")
    if (serviceChoice == "se déconnecter") {
        let first = prompt("chose what u need :  signup, login, forgetpassword");
        // !retirer l'argent
    }else if (serviceChoice === "Retirer de l'argent"){
        let montanRéduit=parseInt.prompt("entrez le monton que vous voulez retirer") 
        if (montanRéduit <= soldebank ) {
            let result= montanRéduit-=soldebank
            alert("retrait validé, votre nouveau solde:" + result + "dh")
        }else{
            alert("l'operation invalide")
        }
    }
    }
    
}
