
let Name,Email,Phone;

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }


async function validation() {
    let user = document.getElementById('userName').value
    let email = document.getElementById('email').value
    let pwd = document.getElementById('pwd').value
    let copwd = document.getElementById('coPwd').value
    let phone = document.getElementById('phoneNo').value

    if(!validationofPhone(phone)) {
        return false
    }
    if (!validationOfPass(pwd)) {
        return false;
    }
    if (pwd=="") {
        alert("password field should not be empty")
        return false
    }
    if (copwd=="") {
        alert("confirm_password field should not be empty")
        return false
    }
    if (pwd!=copwd) {
        alert("Password and confirm pass must be same.")
        return false;
    }
    swal({
        title: "Registered",
        text: "Successfully..!",
        icon: "success",
      });
    localStorage.setItem(user,pwd)
    localStorage.setItem(user+"Email",email)
    localStorage.setItem(user+"Phone",phone)
    let delayres = await delay(2000);
    window.open("./home.html")
    return true;
}

function validationofPhone(n) {
    var phoneno = /^\d{10}$/;
    if((n.match(phoneno))) return true
    swal({
        title: "Phone Number",
        text: "is not valid",
        icon: "warning",
      });
    return false
}

function validationOfPass(str) {
	let f1=false,f2=false,f3=false;
	for (let i = 0; i < str.length; i++) {
		if (str[i]>='A' && str[i]<='Z') f1=true;
		if (str[i]>='a' && str[i]<='z') f2=true;
		if (str[i]>='0' && str[i]<='9') f3=true;
	}
	if (str.length<8) {
        swal({
            title: "Password must contain",
            text: "eight characters.",
            icon: "warning",
          });
		return false;	
	}
	if (!f1 || !f2 || !f3) {
        swal({
            title: "Password must contain",
            text: "at least one uppercase,lowercase and digit.",
            icon: "warning",
          });
		return false;
	}
	return true;	
}