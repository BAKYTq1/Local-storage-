const userList = document.querySelector('.div')

// async function fechData() {
//     console.log("Начало");
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       if (!res.ok) {
//         throw new Error("Ошибка сети" + res.status);
//       }
//       const data = await res.json();
//       data.forEach((user)  => {
//         const div = document.createElement("div")
//         div.innerHTML = `
//         <div>
//         <a href='./pages/users/index.html'>
//         <h1>name: ${user.name}</h1>
//         </a>
//         <a href='./pages/users/index.html'>
//         <h1>email: ${user.email}</h1>
//         </a>
//         </div>
//         `;
//         userList.appendChild(div)
//       });

//       console.log("Данные", data);
      
//     } catch (error) {
//       console.error("Произошла ошибка", error.message);
//     }
  
//     console.log("Конец");
//   }
  
  // localStorage.setItem("name" , "Bakyt")
  // localStorage.setItem("age" , "21")
  // const name = localStorage.getItem("name")
  // const age = localStorage.getItem("age")
// userList.innerHTML = `
//     <h1>name: ${name}</h1>
//     `;

const data = [
  {
    id: 1,
    img: "./img/4.svg",
    tea: 'Чай Greenfield Earl Grey Fantasy, черный с бергамотом, 100 пакетиков',
    price:485,
    inStock: 29
  },
  {
    id: 2,
    img: './img/3.svg',
    tea: 'Чай Tess Minty, черный, 100 пакетиков',
    price:  430,
    inStock: 27
  },
  {
    id: 3,
    img: './img/2.svg',
    tea: 'Чай Greenfield Flying Dragon, зеленый, 100 пакетиков',
    price: 485,
    inStock: 23
  },
  {
    id: 4,
    img: './img/212.svg',
    tea: 'Чай Tess Thyme, черный с чабрецом и цедрой лимона, 100 пакетиков',
    price: 430 ,
    inStock: 22
  },
  {
    id: 5,
    img: './img/1.svg',
    tea: 'Чай Greenfield Green Melissa, зеленый, с мятой, 100 пакетиков',
    price:  485,
    inStock: 21
  },
  {
    id: 6,
    img: './img/7.svg',
    tea: 'Чай Greenfield Earl Grey Fantasy, черный с бергамотом, 25 пакетиков',
    price:  160,
    inStock: 19
  },
  {
    id: 7,
    img: './img/8.svg',
    tea: 'Чай Richard Royal Ceylon, черный, 100 пакетиков',
    price: 425 ,
    inStock: 18
  },
  {
    id: 8,
    img: './img/5.svg',
    tea: 'Чай Tess Sunrise, черный, 100 пакетиков',
    price:  415,
    inStock: 17
  },
  {
    id: 9,
    img: './img/20.svg',
    tea: 'Чай Greenfield English Edition, черный, 100 пакетиков',
    price: 485 ,
    inStock: 16
  },
  {
    id: 10,
    img: './img/12.svg',
    tea: 'Чай Tess Breakfast, черный, 100 пакетиков',
    price:  395,
    inStock: 16
  },
  {
    id: 11,
    img: './img/6.svg',
    tea: 'Чай Greenfield Flying Dragon, зеленый, 25 пакетиков',
    price:  145,
    inStock: 14
  },
  {
    id: 12,
    img: './img/10img.svg',
    tea: 'Чай Greenfield Kenyan Sunrise, черный, 100 пакетиков',
    price: 485 ,
    inStock: 14
  },
  {
    id: 13,
    img: './img/21.svg',
    tea: 'Чай Greenfield Rich Ceylon, черный, 20 пирамидок',
    price: 145 ,
    inStock: 13
  },
  {
    id: 14,
    img: './img/22.svg',
    tea: 'Чай Tess Kenya, черный, 100 пакетиков',
    price: 430 ,
    inStock: 13
  },
  {
    id: 15,
    img: './img/23.svg',
    tea: 'Чай Tess High Ceylon, черный, 100 пакетиков',
    price:  430,
    inStock: 13
  },
  {
    id: 16,
    img: './img/24.svg',
    tea: 'Чай Greenfield Kenyan Sunrise, черный, 25 пакетиков',
    price:  145,
    inStock: 12
  },
  {
    id: 17,
    img: './img/11img.svg',
    tea: 'Чай Curtis Summer Berries, травяной, 20 пирамидок',
    price: 140,
    inStock: 12
  },
  {
    id: 18,
    img: './img/12img.svg',
    tea: 'Чай Curtis Blue Berries Blues, черный, 20 пирамидок',
    price: 135,
    inStock: 12
  },
  {
    id: 19,
    img: './img/13img.svg',
    tea: 'Чай Curtis Delicate Black, черный, 100 пакетиков',
    price: 470,
    inStock: 12
  },
  {
    id: 20,
    img: './img/25.svg',
    tea: 'Чай Curtis Elegant Earl Grey, черный, 100 пакетиков',
    price: 430,
    inStock: 12
  },
]

data.forEach((market) => {
  const div = document.createElement('div')
   div.innerHTML = `
 <div class='w-[193px] h-[370px] shadow-lg border-2 border-[#E3E3E3] rounded-[10px] py-[10px] px-[10px] relative'>
 <img src='${market.img}'>
  <h1 class='text-[12px] mt-[30px] text-[#405D99] text-center'>${market.tea}</h1>
  <div class='w-[175px] h-[100px] m-auto absolute top-[260px]'>
  <ul class='text-center'>
  <li class='text-[18px] text-[#E0040B] font-bold	'>${market.price}</li>
  <li class='text-[#008000]'>В наличии ${market.inStock} шт.</li>
  </ul>
  <div class='flex ml-[10px] mt-[10px]'>
    <button onclick="addToCart(${market.id})" class='w-[160px] h-[29px] m-auto bg-[#F99C3B] rounded-[7px]'>Добавить</button>
    </div>
    </div>
    </div>

    `;
  userList.appendChild(div)  
})

let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

function updateCartDisplay() {
  cartItemsList.innerHTML = '';
  let total = 0;

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.tea} - ${item.price} руб.
      <button onclick="removeFromCart(${item.id})" class='w-[20px] h-[20px]  text-red-500 text-[25px] rounded-[50%]'>x</button>
    `;
    cartItemsList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Итого: ${total} сом.`;
}

function addToCart(productId) {
  const product = data.find(item => item.id === productId);
  if (product) {
    cartItems.push(product);
    saveCartToLocalStorage();
    updateCartDisplay();
    setTimeout(() => {
      alert('Товар успешно добавлен в корзину!');
    }, -1000)
  }
}
updateCartDisplay();

function removeFromCart(productId) {
  const productIndex = cartItems.findIndex(item => item.id === productId);
  
  if (productIndex !== -1) {
    cartItems.splice(productIndex, 1);
    saveCartToLocalStorage();
    updateCartDisplay();
    // alert('Товар удален из корзины!');
  }
}
function showAlert(message) {

  const alertDiv = document.createElement('div');
  alertDiv.textContent = message;
  alertDiv.style.position = 'fixed';
  alertDiv.style.top = '20px';
  alertDiv.style.left = '50%';
  alertDiv.style.transform = 'translateX(-50%)';
  alertDiv.style.backgroundColor = '#f44336';
  alertDiv.style.color = 'white';
  alertDiv.style.padding = '10px 20px';
  alertDiv.style.borderRadius = '5px';
  alertDiv.style.fontSize = '16px';
  alertDiv.style.zIndex = '1000';
  
 
  document.body.appendChild(alertDiv);
  
  setTimeout(() => {
    alertDiv.remove();
  }, 1000);
}

function removeFromCart(productId) {
  const productIndex = cartItems.findIndex(item => item.id === productId);

  if (productIndex !== -1) {
    cartItems.splice(productIndex, 1); 
    saveCartToLocalStorage();
    updateCartDisplay();
    showAlert('Товар удален из корзины!');
  }
}
