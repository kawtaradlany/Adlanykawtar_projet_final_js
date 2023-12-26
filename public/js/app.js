let first = prompt("chose what u need : sign-up, login, forget password");

if (first == "sign-up") {
    let fullName = prompt("enter your FullName")
    while (fullName.length < 5) {
        fullName = prompt("enter your FullName")
    }
    if (fullName.match("regex")) {
        fullName = prompt("enter your FullName")
    }
    
    console.log(fullName.trim().charAt(0).toUpperCase() + fullName.slice(1).replace(/[^\w ]/g, ''));

}
