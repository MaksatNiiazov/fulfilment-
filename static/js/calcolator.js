 // Находим элементы таблицы и их содержимое
 const table = document.getElementById("services");
 const tbody = table.querySelector("tbody");
 const rows = tbody.querySelectorAll("tr");
 
 // Находим элементы для вывода итоговых результатов
 const totalElement = document.getElementById("total");
 const averageElement = document.getElementById("average");
 
 // Находим элементы кнопок увеличения и уменьшения количества услуг
 const decrementButtons = document.querySelectorAll(".decrement");
 const incrementButtons = document.querySelectorAll(".increment");
 
 // Объявляем переменные для хранения общей стоимости и количества услуг
 let total = 0;
 let count = 0;
 
 // Создаем функцию для обновления итоговых результатов
 function updateTotals() {
   totalElement.textContent = `Общая стоимость: ${total}`;
   averageElement.textContent = `Средняя стоимость: ${total / count}`;
 }
 
 // Добавляем обработчики событий для кнопок увеличения и уменьшения количества услуг
 decrementButtons.forEach(button => {
   button.addEventListener("click", event => {
     const input = event.target.parentNode.querySelector("input");
     const value = parseInt(input.value);
     if (value > 0) {
       input.value = value - 1;
       const row = event.target.closest("tr");
       const price = parseInt(row.querySelector("td:nth-of-type(3)").textContent.slice(1));
       total -= price;
       count -= 1;
       updateTotals();
     }
   });
 });
 
 incrementButtons.forEach(button => {
   button.addEventListener("click", event => {
     const input = event.target.parentNode.querySelector("input");
     const value = parseInt(input.value);
     input.value = value + 1;
     const row = event.target.closest("tr");
     const price = parseInt(row.querySelector("td:nth-of-type(3)").textContent.slice(1));
     total += price;
     count += 1;
     updateTotals();
   });
 });
 
 // Добавляем обработчики событий для изменения полей ввода количества услуг
 rows.forEach(row => {
   const input = row.querySelector("input");
   input.addEventListener("input", event => {
     const value = parseInt(input.value);
     if (value >= 0) {
       const price = parseInt(row.querySelector("td:nth-of-type(3)").textContent.slice(1));
       const prevValue = parseInt(input.getAttribute("data-prev-value"));
       total -= price * (prevValue || 0);
       total += price * value;
       count += value - (prevValue || 0);
       input.setAttribute("data-prev-value", value);
       updateTotals();
     } else {
       input.value = input.getAttribute("data-prev-value") || 0;
     }
   });
 });
 