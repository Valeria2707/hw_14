let buy;
let myOrder = JSON.parse(localStorage.getItem('myOrder')) || [];

function showCategories() {
  const container = document.querySelector('.categories');
  const blockForElement = document.createElement('div');
  blockForElement.classList.add('element');
  container.appendChild(blockForElement);
  for (let i = 0; i < data.length; i++) {
    const elem = document.createElement('div');
    elem.textContent = data[i].name;
    elem.setAttribute('data-category', i);
    elem.addEventListener('click', showProducts);
    blockForElement.appendChild(elem);
  }
  const buttonMyOrder = document.createElement('button');
  buttonMyOrder.classList.add('btnOrder');
  buttonMyOrder.textContent = 'my Order';
  container.appendChild(buttonMyOrder);

  buttonMyOrder.addEventListener('click', showOrder);
}

// handler of click on categories
function showProducts(event) {
  const categoryIndex = event.target.getAttribute('data-category');
  const products = data[categoryIndex].products;
  const container = document.querySelector('.products');
  container.innerHTML = '';

  for (let i = 0; i < products.length; i++) {
    const elem = document.createElement('div');
    elem.textContent = products[i].name;
    elem.setAttribute('data-product', i);
    elem.setAttribute('data-category', categoryIndex);
    elem.addEventListener('click', showDetails);
    container.appendChild(elem);
  }
}

function showDetails(event) {
  const categoryIndex = event.target.getAttribute('data-category');
  const productIndex = event.target.getAttribute('data-product');
  const productInf = data[categoryIndex].products[productIndex];
  const container = document.querySelector('.details');
  container.innerHTML = '';

  const elemName = document.createElement('div');
  elemName.textContent = productInf.name;
  elemName.classList.add('nameProduct');
  container.appendChild(elemName);
  console.log(elemName.textContents);

  const elemPrice = document.createElement('div');
  elemPrice.textContent = "Ціна: " + productInf.price + "$";
  container.appendChild(elemPrice);

  const elemDescription = document.createElement('div');
  elemDescription.textContent = "Опис товару: " + productInf.description;
  container.appendChild(elemDescription);

  const buttonBuy = document.createElement('button');
  buttonBuy.classList.add('btnBuy');
  buttonBuy.textContent = 'Купити';
  container.appendChild(buttonBuy);

  buy = {
    name: elemName.innerHTML,
    price: elemPrice.innerHTML,
    description: elemDescription.innerHTML,
  }

  buttonBuy.addEventListener('click', showMessage);
}

function showMessage() {
  const elem = document.createElement('div');
  elem.classList.add('results');
  document.body.appendChild(elem);

  const containerSecond = document.querySelector('.products');
  const containerThird = document.querySelector('.details');
  containerSecond.innerHTML = '';
  containerThird.innerHTML = '';

  const buttonClose = document.createElement('button');
  buttonClose.classList.add('btnClose');
  buttonClose.textContent = 'X';
  elem.appendChild(buttonClose);

  buttonClose.addEventListener('click', clickClose);

  const titleOrder = document.createElement('h2');
  titleOrder.textContent = "Оформлення замовлення";
  titleOrder.classList.add('titleOrder');
  elem.appendChild(titleOrder);

  const formMain = document.createElement('form');
  formMain.classList.add('formMain');
  formMain.setAttribute('name', 'formMain');
  elem.appendChild(formMain);

  const textLastname = document.createElement('input');
  textLastname.setAttribute('name', 'Lastname');
  textLastname.setAttribute('type', 'text');
  textLastname.setAttribute('placeholder', 'Введіть своє прізвище');
  textLastname.classList.add('element_form');
  formMain.appendChild(textLastname);

  const textName = document.createElement('input');
  textName.setAttribute('name', 'name');
  textName.setAttribute('type', 'text');
  textName.setAttribute('placeholder', 'Введіть своє ім\'я');
  textName.classList.add('element_form');
  formMain.appendChild(textName);

  const textSurname = document.createElement('input');
  textSurname.setAttribute('name', 'Surname');
  textSurname.setAttribute('type', 'text');
  textSurname.setAttribute('placeholder', 'Введіть своє по-батькові');
  textSurname.classList.add('element_form');
  formMain.appendChild(textSurname);

  const textCity = document.createElement('p');
  textCity.textContent = "Виберіть місто відправки: ";
  textCity.classList.add('textForm');
  formMain.appendChild(textCity);

  const listCity = document.createElement('select');
  listCity.setAttribute('name', 'city');
  listCity.classList.add('element_form');
  formMain.appendChild(listCity);

  const cityKyiv = document.createElement('option');
  cityKyiv.setAttribute('value', 'Київ');
  cityKyiv.textContent = 'Київ';
  cityKyiv.classList.add('element_form');
  listCity.appendChild(cityKyiv);

  const cityIF = document.createElement('option');
  cityIF.setAttribute('value', 'Івано-Франківськ');
  cityIF.textContent = 'Івано-Франківськ';
  cityIF.classList.add('element_form');
  listCity.appendChild(cityIF);

  const cityOdessa = document.createElement('option');
  cityOdessa.setAttribute('value', 'Одеса');
  cityOdessa.textContent = 'Одеса';
  cityOdessa.classList.add('element_form');
  listCity.appendChild(cityOdessa);

  const textStorage = document.createElement('input');
  textStorage.setAttribute('name', 'storage');
  textStorage.setAttribute('type', 'text');
  textStorage.setAttribute('placeholder', 'Введіть склад нової пошти');
  textStorage.classList.add('element_form');
  formMain.appendChild(textStorage);

  const textPay = document.createElement('p');
  textPay.textContent = "Виберіть спосіб оплати: ";
  textPay.classList.add('textForm');
  formMain.appendChild(textPay);

  const textPOD = document.createElement('p');
  textPOD.classList.add('element_form_radio');
  textPOD.textContent = 'Накладенний платіж';
  formMain.appendChild(textPOD);
  const POD = document.createElement('input');
  POD.setAttribute('name', 'pay');
  POD.setAttribute('type', 'radio');
  POD.setAttribute('value', 'Накладенний платіж');
  textPOD.appendChild(POD);

  const textBankCard = document.createElement('p');
  textBankCard.textContent = 'Банківська карта';
  textBankCard.classList.add('element_form_radio');
  formMain.appendChild(textBankCard);
  const bankCard = document.createElement('input');
  bankCard.setAttribute('name', 'pay');
  bankCard.setAttribute('type', 'radio');
  bankCard.setAttribute('value', 'Банківська карта');
  textBankCard.appendChild(bankCard);

  const count = document.createElement('input');
  count.setAttribute('name', 'count');
  count.setAttribute('type', 'number');
  count.setAttribute('min', '1');
  count.setAttribute('placeholder', 'Введіть кількість товару');
  count.setAttribute('oninput', "validity.valid||(value='');");
  count.classList.add('element_form');
  formMain.appendChild(count);

  const comment = document.createElement('textarea');
  comment.setAttribute('name', 'description');
  comment.setAttribute('placeholder', 'Залиште коментарій')
  comment.classList.add('element_form');
  formMain.appendChild(comment);

  const btn = document.createElement('input');
  btn.setAttribute('value', 'Зберегти');
  btn.setAttribute('type', 'button');
  btn.setAttribute('class', 'saveBtn');
  formMain.appendChild(btn);

  btn.addEventListener('click', saveInformation);
}

function orderList() {
  const container = document.querySelector('.categories');
  container.innerHTML = ''

  const list = document.createElement('ol');
  list.classList.add('list');
  container.appendChild(list)
  for (let i =0; i < myOrder.length; i++){
    const itemPrice = document.createElement('li');
    itemPrice.textContent = myOrder[i].buyPrice;
    itemPrice.setAttribute('data-cat', i);
    itemPrice.classList.add('price');
    list.appendChild(itemPrice);
    itemPrice.addEventListener('click', showMore);

    const date = document.createElement('div');
    date.textContent = myOrder[i].date;
    itemPrice.appendChild(date);

    const itemName = document.createElement('div');
    itemName.textContent = myOrder[i].buyName;
    itemName.classList.add('namee');
    itemName.style.display = 'none';
    itemPrice.appendChild(itemName);
    
    const itemdelete = document.createElement('button');
    itemdelete.textContent = ' X';
    itemdelete.setAttribute('id', `${myOrder[i].id}`);
    itemdelete.classList.add('delete');
    itemPrice.appendChild(itemdelete);
    itemdelete.addEventListener('click', deleteOrder);
  } 
 }

 
 function showMore(){
  let text = this.closest('li').querySelector(".namee");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
 }
 

function showOrder(){
  document.querySelector('.element').remove();
  document.querySelector('.btnOrder').remove();
  const containerSecond = document.querySelector('.products');
  const containerThird = document.querySelector('.details');
  containerSecond.innerHTML = '';
  containerThird.innerHTML = '';
  orderList()
 }

 function deleteOrder(event){
  const id = event.target.getAttribute('id');
  const actualOrders = JSON.parse(localStorage.getItem('myOrder')).filter(item => item.id != id);
  myOrder = actualOrders;
  localStorage.setItem('myOrder', JSON.stringify(myOrder))
  orderList()
 }


function saveInformation() {
  const name = document.forms.formMain.name.value;
  const surname = document.forms.formMain.Surname.value;
  const lastname = document.forms.formMain.Lastname.value;
  const selectedCity = document.forms.formMain.city.value;
  const storage = document.forms.formMain.storage.value;
  const count = document.forms.formMain.count.value;
  let selectedPayValidate = document.querySelector('input[name="pay"]:checked');
  const comments = document.forms.formMain.description.value;
  var selectedPayValidate = document.querySelector('input[name="pay"]:checked');
  const buyName = buy.name;
  const buyPrice = buy.price;
  const buyDecription = buy.description;
  const datePeople = "<b>" + "Дані для доставки:" + "</b>" + lastname + '<br>' + name + '<br>' + surname + '<br>' + selectedCity + '<br>' + storage + '<br>' + selectedPay + '<br>' + count + '<br>' + comments + '<br>';
  const dateGoods = "<b>" + "Дані про товар:" + "</b>" + buyName + '<br>' + buyPrice + '<br>' + buyDecription;

  if (lastname === '' || name === '' || surname === '' || storage === '' || count === '' || selectedPayValidate === null) {
    alert("Заповніть всі поля");
  }
  else {
  let today = new Date();
  console.log(today);

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  const months = ['January', 'February', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'November', 'Dec'];
  console.log(`${day} ${months[month]} ${year} ${hours}:${minutes}:${seconds}`);
  let dateSave =  `${day} ${months[month]} ${year} ${hours}:${minutes}:${seconds}`;
  console.log(dateSave);

  const tel= {
    buyName: buy.name,
    buyPrice: buy.price,
    date: dateSave,
    id: +(Math.random() * 100000).toFixed(),
  };

  myOrder.push(tel);
  localStorage.setItem('myOrder', JSON.stringify(myOrder));
  clickClose();
  }
}

function clickClose() {
  document.querySelector('.results').remove();
}

showCategories();
