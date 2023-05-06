var cart = {};

function addToCart(serviceId) {
  var serviceName = document.querySelector('#' + serviceId + '_name').textContent;
  var servicePrice = parseInt(document.querySelector('#' + serviceId + '_price').textContent);

  if (cart.hasOwnProperty(serviceId)) {
    cart[serviceId]++;
  } else {
    cart[serviceId] = 1;
  }

  updateCart();
}

function updateCart() {
  var total = 0;
  var cartList = document.querySelector('#cart_list');
  cartList.innerHTML = '';

  for (var serviceId in cart) {
    var serviceName = document.querySelector('#' + serviceId + '_name').textContent;
    var servicePrice = parseInt(document.querySelector('#' + serviceId + '_price').textContent);
    var serviceQuantity = cart[serviceId];
    var cartItem = document.createElement('li');
    var cartItemQuantityInput = document.createElement('input');
    cartItemQuantityInput.type = 'number';
    cartItemQuantityInput.value = serviceQuantity;
    cartItemQuantityInput.min = '1';

    cartItemQuantityInput.addEventListener('input', function(event) {
      var quantity = parseInt(event.target.value);
      if (quantity > 0) {
        cart[serviceId] = quantity;
      } else {
        delete cart[serviceId];
      }
      updateCart();
    });

    var deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', function(event) {
      delete cart[serviceId];
      updateCart();
    });

    cartItem.textContent = serviceName + ': ';
    cartItem.appendChild(cartItemQuantityInput);
    cartItem.textContent += serviceQuantity + ' x ' + servicePrice + ' рублей = ' + serviceQuantity * servicePrice + ' рублей';
    cartItem.appendChild(deleteButton);

    cartList.appendChild(cartItem);

    total += serviceQuantity * servicePrice;
  }

  var averagePrice = total / Object.keys(cart).length; // вычисляем среднее арифметическое
  var totalWithAverage = total + ' рублей (среднее: ' + averagePrice.toFixed(2) + ' рублей)'; // добавляем среднее значение в общую сумму

  document.querySelector('#total').value = totalWithAverage;
}