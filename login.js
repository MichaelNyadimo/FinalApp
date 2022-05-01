function myfunction()
{
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    if(un=="admin" && pw=="password1234")
{
window.location.href="welcome.html";
}
else
{
    alert('invalid user or password');
}
}
