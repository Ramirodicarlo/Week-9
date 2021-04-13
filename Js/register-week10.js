console.log('Runnig js to validate the diferents inputs');
var fnameElement = document.getElementById('fname');
var emailElement = document.getElementById('email');
var passElement = document.getElementById('password');
var conPassElement = document.getElementById('confirm-password');

fnameElement.onblur = function validateFullName(){
    var fname = fnameElement.value;
    var space = fname.match(/ /g);
    var length = fname.length;
    if(space !== null){
        var pSpace ="";
    }
    else{
        var pSpace = "Full name need to contain First Name and Last Name.</br>" ;
    }
    if (length > 6){
        var pLength =""
    }
    else{
        var pLength = "Full name need to contain at least 6 characters.";
    }
    document.getElementById("pfname").innerHTML = pSpace + pLength
}
fnameElement.onfocus = function removeFullName(){
    document.getElementById("pfname").innerHTML = "";
};

emailElement.onblur = function validateEmail(){
    var email = emailElement.value;
    var aEmail = email.match(/@/g);
    var dotCom = email.match(/.com/g);
    if(aEmail !== null){
        var eAEmail ="";
    }
    else{
        var eAEmail = "Email must have an \"@\" to be a valid email.</br>" ;
    }
    if (dotCom !== null){
        var eLength =""
    }
    else{
        var eLength = "Email must have a \".com\" to be a valid email.";
    }
    document.getElementById("pemail").innerHTML = eAEmail + eLength
}
emailElement.onfocus = function removeEmail(){
    document.getElementById("pemail").innerHTML = "";
};

passElement.onblur = function validatePassword(){
    var passwordE = passElement.value;
    var validatePass = passwordE.match(/([A-z]|[0-9])/g);
    var lengthPass = passwordE.length;
    if(validatePass !== null){
        var pValiPass ="";
    }
    else{
        var pValiPass = "Password must contein numbers or letters.</br>" ;
    }
    if (lengthPass > 7){
        var paLength =""
    }
    else{
        var paLength = "Password need to contain at least 8 characters.";
    }
    document.getElementById("ppassword").innerHTML = pValiPass + paLength
}
passElement.onfocus = function removeFullName(){
    document.getElementById("ppassword").innerHTML = "";
};

conPassElement.onblur = function validatePassword(){
    var passwordC = conPassElement.value;
    var passwordA = passElement.value;
    if(passwordA == passwordC){
        var pValiCon ="";
    }
    else{
        var pValiCon = "Passwords must be the same." ;
    }
   
    document.getElementById("cpassword").innerHTML = pValiCon;
}
conPassElement.onfocus = function removeFullName(){
    document.getElementById("cpassword").innerHTML = "";
};