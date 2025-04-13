
let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#0000CD';

let item = "";

const itemTexts = {
  btn1: "Её нельзя обменять.",
  btn2: "Как этим вообще играть?",
  btn3: "Зачем тебе это?",
  btn4: "Вряд ли это можно использовать.",
  btn5: "Из этого можно есть?",
  btn6: "Отличный выбор!",
};

const buttons = document.querySelectorAll('.btn');
const orderPopup = document.getElementById("orderPopup");
const orderNowBtn = document.getElementById("orderNowBtn");

buttons.forEach(button => {
	button.addEventListener('click', () => {
	  const id = button.id;
	  const itemId = id.replace("btn", "");
	  const currentText = button.textContent;
  
	  if (currentText === "Добавить") {
		button.textContent = "+ / -";
		selectedItems.push(itemId);
	  } else {
		button.textContent = "Добавить";
		selectedItems = selectedItems.filter(i => i !== itemId);
	  }
  
	
	  if (selectedItems.length > 0) {
		orderPopup.style.display = "block";
	  } else {
		orderPopup.style.display = "none";
	  }
	});
  });
  
  
  orderNowBtn.addEventListener("click", () => {
	tg.MainButton.setText("Оформить заказ");
	tg.MainButton.show();
  });
  

  Telegram.WebApp.onEvent("mainButtonClicked", function(){
	const orderData = {
	  items: selectedItems
	};
	tg.sendData(JSON.stringify(orderData));
  });
  