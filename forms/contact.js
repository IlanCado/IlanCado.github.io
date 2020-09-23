function sendMail() {
    let name = document.getElementById('name');
    console.log(name.value);
    let email = document.getElementById('email');
    console.log(email.value);
    let sujet = document.getElementById('subject');
    console.log(sujet.value);
    let emailmessage = document.getElementById('emailmessage');
    console.log(emailmessage.value);

    /*let links = "mailto:me@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('myText').value);
    
    window.location.href = links;*/
}