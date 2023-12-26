let first = prompt("chose what u need : 7 sign-up, login, forget password");

if (first == "7") {
    // let fullName = prompt("enter your FullName")
    // while (fullName.length < 5) {
    //     fullName = prompt("enter your FullName")
    // }
    
    // if (fullName.match("regex")) {
    //     fullName = prompt("enter your FullName")
    // }

    // console.log(fullName.trim().charAt(0).toUpperCase() + fullName.slice(1).replace(/[^\w ]/g, ''));
    let mail = prompt("insert your mail!")
    if (mail.indexOf(` `)) {
        mail = prompt("enleve l'espace")
    }
   

    console.log(mail.trim().toLowerCase());

}
