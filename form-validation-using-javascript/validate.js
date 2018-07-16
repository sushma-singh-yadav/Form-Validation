function validateform(){
	var name = document.getElementById("name");
	var address = document.getElementById("address");
	var phone = document.getElementById("phone");
	var email = document.getElementById("email");
	var gender = document.getElementById("gender");

	if (name.value.length < 4) {
		alert("Fill the fields with atleast 4 characters");
		name.focus();
		name.style.border="3px solid red";
		return false;
	}

	if (address.value.length < 4) {
		alert("Fill the fields with atleast 4 characters");
		address.focus();
		address.style.border="3px solid red";
		return false;
	}
  
  var phoneid = phone.value;

	if (isNaN(phoneid)) {
		alert("Fill the fields with numbers");
		phone.focus();
		phone.style.border="3px solid red";
		return false;
	}

	if( phoneid.length < 10)
	{
		alert("Fill the fields with a valid phone number");
		phone.focus();
		phone.style.border="3px solid red";
		return false;
	}


      if (email.value =="") {   
      	alert("Fill the fields with a email");
		email.focus();
		email.style.border="3px solid red";
		return false;
      }

      if (email.value.indexOf("@", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf(".", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  



}


