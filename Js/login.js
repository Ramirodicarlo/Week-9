 document.getElementById("validationbutton").onclick = validation;
function validation (){
    console.log("Validation run");
    var myLabelObjet = document.getElementsByTagName("label");
    var labelLength= myLabelObjet.length;
    if(labelLength != 0){
        var makeString = document.getElementById("email");
        if( makeString != null){
            var mEmail = makeString.firstChild;
            var myEmail = mEmail.data;
            var comparationE = myEmail == "Email";
            if (comparationE){
                var compE = "It has an Email label";
            }
            else{
                var compE = "It doesn't have an Email label";
            }
        } 
        else{
            var compE = "It doesn't have an Email label";
        }
    
        var makeString1 = document.getElementById("password");
        if( makeString1 != null){
            var mPassword = makeString1.firstChild;
            var myPassword = mPassword.data;
            var comparationP = myPassword == "Password";
            if (comparationP){
                var compP = "It has a Password label";
            }
            else{
                var compP = "It doesn't have a Password label";
            }
        }
        else{
            var compP = "It doesn't have a Password label";
        }
    } 
    else{
    };
    var myInputObjet = document.getElementsByTagName("input");
    var inputLength = myInputObjet.length;

    if(inputLength != 0){
        var makeString2 = document.getElementsByName("email");
        if( makeString2 != null){
            var iEmail = makeString2[0].type;
            var comparationE = iEmail == "email";
            if (comparationE){
                var inpE = "It has an Email input";
            }
            else{
                var inpE = "It doesn't have an Email input";
            }
        } 
        else{
            var inpE = "It doesn't have an Email input";
        }
    
        var makeString3 = document.getElementsByName("password");
        if( makeString3 != null){
            var iPassword = makeString3[0].type;
            var comparationP = iPassword == "password";
            if (comparationP){
                var inpP = "It has a Password input";
            }
            else{
                var inpP = "It doesn't have a Password input";
            }
        }
        else{
            var inpP = "It doesn't have a Password input";
        }
    } 
    else{         
    };
document.getElementById("validation").style.display = "block";
document.getElementById("validation").innerHTML = "<p>"+ compE + "</p>" +
"<p>" + compP + "</p>" +"<p>"+ inpE + "</p>" +
"<p>" + inpP + "</p>";
}
