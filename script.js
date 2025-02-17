// Находим все элементы с классом "clickbox"
let box = document.querySelectorAll(".clickbox");

// Добавляем обработчик клика для каждого элемента
box.forEach(function(clickbox){
  clickbox.addEventListener("click", function(){
    // Используем getComputedStyle для получения вычисленного значения стиля
    let currentColor = window.getComputedStyle(clickbox).backgroundColor;
    
    // lightsteelblue вычисляется как rgb(176, 196, 222)
    if(currentColor = "rgb(176, 196, 222)"){
      clickbox.style.backgroundColor = "yellow";
      clickbox.style.margin = '2vw';
      console.log("change color");
    } else {
      clickbox.style.backgroundColor = "lightsteelblue";
      clickbox.style.margin = '1vw';
    }
  });
  
});

document.addEventListener("DOMContentLoaded", function() {
  const glassBtn = document.querySelector('.glass-btn');
  const neumoBtn = document.querySelector('.neumo-btn');

  glassBtn.addEventListener('click', function() {
    console.log('Стекломорфная кнопка нажата');
    alert('Стекломорфная кнопка нажата');
  });

  neumoBtn.addEventListener('click', function() {
    console.log('Неоморфная кнопка нажата');
    alert('Неоморфная кнопка нажата');
  });
});