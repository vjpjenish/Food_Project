
let user = localStorage.getItem('login')

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }

if (user == 'null') {
    swal({
        title: "You should Login First",
        text: "Try After some time",
        icon: "warning",
    });
    window.open('login.html')
} else {
    document.getElementById('user').innerText = "Username: " + user
    document.getElementById('email').innerText = "Email: " + localStorage.getItem(user+"Email")
    document.getElementById('phone').innerText = "Phone no: " + localStorage.getItem(user+"Phone")
    document.getElementById('totalProduct').innerText = "Total Products: " + JSON.parse(localStorage.getItem("totalProduct"))
    document.getElementById('totalAmount').innerText = "Total Amount: " + JSON.parse(localStorage.getItem("totalAmount"))
}
async function validation() {

    let cardNo = document.getElementById('cardNo').value
    let cvv = document.getElementById('cvv').value

    if (!(cardNo >= 1e15 && cardNo <= 1e17)) {
        swal({
            title: "Card Number has 16 digits!",
            text: "Try Again!",
            icon: "warning",
        });
        return false
    }
    
    if (!(cvv > 0  && cvv < 1000)) {
        swal({
            title: "Invalid CVV NUmber",
            text: "Try Again!",
            icon: "warning",
        });
        return false
    }
    swal({
        title: "Thank you for Ordering.",
        text: "Enjoy your meal, "+ user,
        icon: "success",
    });
    let delayres = await delay(2000);
    window.open('home.html')
    return true
}