function showCategories() {
  const container = document.querySelector('.categories');

  for (let i = 0; i < data.length; i++) {
    const elem = document.createElement('div');
    elem.textContent = data[i].name;
    elem.setAttribute('data-category', i);
    elem.addEventListener('click', showProducts);
    container.appendChild(elem);
  }
}

// handler of click on categories
function showProducts(event) {
  const categoryIndex = event.target.getAttribute('data-category');
  const products = data[categoryIndex].products;
  const container = document.querySelector('.products');
  container.innerHTML = '';

  for(let i = 0; i < products.length; i++) {
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
  container.innerHTML='';


  const elemName = document.createElement('div');
  elemName.textContent = productInf.name;
  elemName.classList.add('nameProduct');
  container.appendChild(elemName);

  const elemPrice = document.createElement('div');
  elemPrice.textContent ="Ціна: " + productInf.price + "$";
  container.appendChild(elemPrice);

  const elemDescription = document.createElement('div');
  elemDescription.textContent ="Опис товару: " + productInf.description;
  container.appendChild(elemDescription);

  const buttonBuy = document.createElement('button');
  buttonBuy.classList.add('btnBuy');
  buttonBuy.textContent = 'Купити';
  container.appendChild(buttonBuy);

  buttonBuy.addEventListener('click', showMessage);
}

function showMessage(){
  const  elem = document.createElement('div');
  elem.classList.add('results');
  elem.textContent = 'Товар куплено!';
  document.body.appendChild(elem);

  const containerSecond = document.querySelector('.products');
  const containerThird = document.querySelector('.details');
  containerSecond.innerHTML='';
  containerThird.innerHTML='';

  const buttonClose = document.createElement('button');
  buttonClose.classList.add('btnClose');
  buttonClose.textContent = 'X';
  elem.appendChild(buttonClose);

  buttonClose.addEventListener('click', clickClose);
}

function clickClose(){
  document.querySelector('.results').remove();
}

showCategories();