function myFunction() {
    window.location = "/HomePage.html";
}
function contactPage() {
    window.location = "/ContactPage.html";
}
function passwordCheck() {
    
    if (document.getElementById("pass").value == "Admin")
    {
        
       var homePageButton= document.getElementById("HomePage");
        var contactPageButton= document.getElementById("ContactPage");
        homePageButton.style.display = "block"; 
        contactPageButton.style.display = "block"; 
    }
    else
    {
        alert("Password Incorrect");
    }
}

function close_window() {
    if (confirm("Close Window?")) {
      close();
    }
  }
