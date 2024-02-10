import {foodItems} from './foodItems.js'

let user = localStorage.getItem('login')
console.log(user)

if (user != 'null') {
    var log = document.getElementById('logged')
    log.onclick = removeUser
    log.innerText = 'Logged'
}

function removeUser() {
    swal({
        title: 'Thank you visiting!',
        text: "Logged out",
        icon: "warning",
      });
    localStorage.setItem('login',null)
}

if (user == 'null') {
    var log = document.getElementById('logged')
    log.innerText = 'Login'
    log.href = 'login.html'
}

function displayItems() {

    var gujarati = document.getElementById('gujaratiCards');
    var punjabi = document.getElementById('punjabiCards');
    var southCards = document.getElementById('southCards');

    const gujaratiData = foodItems.filter((item)=>item.category=='gujarati');
    const punjabiData = foodItems.filter((item)=>item.category=='punjabi');
    const southData = foodItems.filter((item)=>item.category=='south');

    gujaratiData.map(item=>{

        var itemName= document.createElement('p');

        var itemCard= document.createElement('div');
        itemCard.setAttribute('class','card')
        itemCard.setAttribute('id',item.id)

        var img= document.createElement('img');
        img.src=item.img;

        itemName.innerText= item.name;
        // localStorage.setItem(item.name,JSON.stringify(0))
        var price = document.createElement('button')
        price.innerText = 'Price : ₹' + item.Price

        var cen = document.createElement('div')
        cen.setAttribute('class','cen')
        var but=document.createElement('button')
        but.setAttribute('class','cart')
        but.onclick=addToCart
    
        var it=document.createElement('i')
        it.setAttribute('class','fa-solid fa-cart-shopping fa-beat cart')
        but.appendChild(it)

        cen.appendChild(price)
        cen.appendChild(but)

        itemCard.appendChild(itemName);
        itemCard.appendChild(img);
        itemCard.appendChild(cen)

        gujarati.appendChild(itemCard);

    })

    punjabiData.map(item=>{

        var itemName= document.createElement('p');

        var itemCard= document.createElement('div');
        itemCard.setAttribute('class','card')
        itemCard.setAttribute('id',item.id)

        var img= document.createElement('img');
        img.src=item.img;

        itemName.innerText= item.name;
        // localStorage.setItem(item.name,JSON.stringify(0))
        var price = document.createElement('button')
        price.innerText = 'Price : ₹' + item.Price

        var cen = document.createElement('div')
        cen.setAttribute('class','cen')
        var but=document.createElement('button')
        but.setAttribute('class','cart')
        but.onclick=addToCart
        var it=document.createElement('i')
        it.setAttribute('class','fa-solid fa-cart-shopping fa-beat cart')
        but.appendChild(it)

        cen.appendChild(price)
        cen.appendChild(but)

        itemCard.appendChild(itemName);
        itemCard.appendChild(img);
        itemCard.appendChild(cen);
        
        punjabi.appendChild(itemCard);

    })

    southData.map(item=>{

        var itemName= document.createElement('p');

        var itemCard= document.createElement('div');
        itemCard.setAttribute('class','card')
        itemCard.setAttribute('id',item.id)

        var img= document.createElement('img');
        img.src=item.img;

        itemName.innerText= item.name;
        // localStorage.setItem(item.name,JSON.stringify(0))
        var price = document.createElement('button')
        price.innerText = 'Price : ₹' + item.Price

        var cen = document.createElement('div')
        cen.setAttribute('class','cen')
        var but=document.createElement('button')
        but.setAttribute('class','cart')
        but.onclick=addToCart
        var it=document.createElement('i')
        it.setAttribute('class','fa-solid fa-cart-shopping fa-beat cart')
        but.appendChild(it)

        cen.appendChild(price)
        cen.appendChild(but)

        itemCard.appendChild(itemName);
        itemCard.appendChild(img);
        itemCard.appendChild(cen);
        
        southCards.appendChild(itemCard);

    })
}

displayItems()

function addToCart(e) {
    var itemToAdd = this.parentNode.parentNode.id
    console.log(itemToAdd)
    var item = foodItems.filter((item)=>item.id==itemToAdd);
    // console.log(item[0].name)
    item=item[0]
    let cnt =JSON.parse(localStorage.getItem(item.name));
    // console.log(localStorage.getItem(item[0].name))

    if (cnt == 0) {
        cnt=1
        localStorage.setItem(item.name,JSON.stringify(cnt))
        swal({
            title: item.name + " Added",
            text: "To cart Successfully..!",
            icon: "success",
          });
    } else {
        swal({
            title: item.name + " Already in cart",
            text: "Try something new!",
            icon: "warning",
          });
    }
    e.stopPropagation();
    e.preventDefault()
}

let count = 0
let totalAmount = 0
let totalItems = 0

document.querySelector('.cartBtn').addEventListener('click',createCart)

function createCart() {

    count=0
    totalAmount=0
    totalItems=0
    let main = document.getElementById('main')
    let food = document.getElementById('food')
    let cards = document.getElementById('gujaratiCards')

    main.innerHTML=''
    food.innerHTML=''
    cards.innerHTML=''

    for (let i=1; i<=30; i++) {

        var item = foodItems.filter((item)=>item.id==i)
        item=item[0]
        let cnt = JSON.parse(localStorage.getItem(item.name))
        if (cnt==0) continue

        count++
        totalItems += cnt
        totalAmount += item.Price * cnt
        var itemName= document.createElement('p');
        var itemCard= document.createElement('div');
        itemCard.setAttribute('class','card')
        itemCard.setAttribute('id',item.id)

        var img= document.createElement('img');
        img.src=item.img;

        itemName.innerText= item.name;
        var price = document.createElement('button')
        price.innerText = 'Price : ₹' + item.Price

        var cen = document.createElement('div')
        cen.setAttribute('class','cen')
        var but=document.createElement('button')
        but.setAttribute('class','del')
        but.onclick=removeCart
        var it=document.createElement('i')
        it.setAttribute('class','fa-solid fa-trash-can fa-bounce')
        but.appendChild(it)

        cen.appendChild(price)
        cen.appendChild(but)

        var qua = document.createElement('button')
        qua.innerText = cnt
        qua.setAttribute('class','qua')

        var addMin = document.createElement('div')
        addMin.setAttribute('class','addMin')

        var plusBtn = document.createElement('button')
        var plus = document.createElement('i')
        plus.setAttribute('class','fa-solid fa-plus fa-beat')
        plusBtn.appendChild(plus)
        plusBtn.onclick = increment

        var minusBtn = document.createElement('button')
        var minus = document.createElement('i')
        minus.setAttribute('class','fa-solid fa-minus fa-beat')
        minusBtn.appendChild(minus)
        minusBtn.onclick = decrement

        addMin.appendChild(plusBtn)
        addMin.appendChild(qua)
        addMin.appendChild(minusBtn)

        itemCard.appendChild(itemName);
        itemCard.appendChild(img);
        itemCard.appendChild(cen);
        itemCard.appendChild(addMin)

        console.log(itemCard)

        cards.appendChild(itemCard)
    }

    var ce = document.createElement('div')
    ce.setAttribute('class','cen')

    var top = document.createElement('a')
    top.innerText = 'Total Products: ' + count

    var tot = document.createElement('a') 
    tot.innerText = 'Total Amount: ₹' + totalAmount

    var toi = document.createElement('a')
    toi.innerText = 'Total Items: ' + totalItems

    var dor = document.createElement('div')
    var order = document.createElement('a') 
    order.innerText = 'Order'
    order.href = 'order.html'
    dor.setAttribute('class','order')
    dor.appendChild(order)

    ce.appendChild(top)
    ce.appendChild(tot)
    ce.appendChild(toi)

    food.appendChild(cards)
    main.appendChild(ce)
    main.appendChild(food)
    main.appendChild(dor)

    localStorage.setItem('totalProduct',JSON.stringify(totalItems))
    localStorage.setItem('totalAmount',JSON.stringify(totalAmount))

}

function removeCart() {
    var rem = this.parentNode.parentNode.id
    var item = foodItems.filter((item)=>item.id==rem)
    // console.log(item[0].name)
    count=0
    totalAmount=0
    localStorage.removeItem(item[0].name)
    localStorage.setItem(item[0].name,JSON.stringify(0))
    swal({
        title: item[0].name + " Removed",
        text: "From Cart Successfully..!",
        icon: "success",
      });
    createCart()
}

function increment() {
    var itemId = this.parentNode.parentNode.id
    var item = foodItems.filter((item)=>item.id==itemId)
    item=item[0]
    // console.log(item.name)
    let cnt = JSON.parse(localStorage.getItem(item.name))
    cnt++
    localStorage.setItem(item.name,JSON.stringify(cnt))
    createCart()
}

function decrement() {
    var itemId = this.parentNode.parentNode.id
    var item = foodItems.filter((item)=>item.id==itemId)
    item=item[0]
    // console.log(item)
    let cnt = JSON.parse(localStorage.getItem(item.name))
    cnt--
    if (cnt==0) {
        localStorage.setItem(item.name,JSON.stringify(0))
        swal({
            title: item.name + " Removed",
            text: "From Cart Successfully..!",
            icon: "success",
          });
    } else {
        localStorage.setItem(item.name,JSON.stringify(cnt))
    }
    createCart()
}

