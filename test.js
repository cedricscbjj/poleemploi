function validerFormulaire(event) {

    event.preventDefault();
    var nom = document.getElementById("fname").value;
    var prenom = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var metier = document.getElementById("taf").value;

    // Vérification si tous les champs sont remplis
    if (nom === "" || prenom === "" || email === "" || metier === ""  ) {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }

    // Vérification si l'email contient le caractère "@"
    if (email.indexOf("@") === -1) {
      alert("L'adresse email doit contenir le caractère '@'.");
      return;
    }

    // Si toutes les conditions sont remplies, le formulaire peut être soumis
    //document.getElementById("contactForm").submit();

    
resultat()
  }
  
  
  
  
  function resultat() {
    window.location.href = "bolos.html";
}




  document.getElementById('fname').addEventListener('input', function() {
    localStorage.setItem('userNameprank', this.value);
  });



 document.getElementById('taf').addEventListener('input', function() {
    localStorage.setItem('userTafprank', this.value);
  });
