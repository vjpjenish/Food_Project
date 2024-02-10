const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }


async function validation(e) {

    let user = document.getElementById('userName').value
    let pass = document.getElementById('pwd').value

    let correct = localStorage.getItem(user)

    if (correct == null) {
        swal({
            title: "Username not found!",
            text: "Login failed!",
            icon: "warning",
        });
        return false
    }

    if (correct!=pass) {
        swal({
            title: "Incorrect Password!",
            text: "Login failed!",
            icon: "warning",
        });
        return false
    }

    swal({
        title: "Welcome "+ user,
        text: "Logged Successfully.!",
        icon: "success",
    });

    localStorage.setItem('login',user)

    let delayres = await delay(2000);
    window.open("./home.html")
    console.log('me')
    e.stopPropagation();
    e.preventDefault()
}