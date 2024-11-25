
 const htmlDiv = document.querySelector('.div')

 
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
   <div class='w-[193px] h-[100px] shadow-lg border-2 border-[#E3E3E3] rounded-[10px] py-[10px] px-[10px] relative'>
   <img src='${market.img}'>
    <h1 class='text-[12px] mt-[30px] text-[#405D99] text-center'>${market.tea}</h1>
    <div class='w-[175px] h-[100px] m-auto absolute top-[260px]'>
    <ul class='text-center'>
    <li class='text-[18px] text-[#E0040B] font-bold	'>${market.price}</li>
    <li class='text-[#008000]'>В наличии ${market.inStock} шт.</li>
    </ul>
    <div class='flex ml-[10px] mt-[10px]'>
      <input type="number" class='w-[51px] h-[30px] border-2 rounded-[7px]'>
    <button class='w-[80px] h-[29px] ml-[5px] bg-[#F99C3B] rounded-[7px]'>Добавить</button>
    </div>
    </div>
    </div>
    `;
    htmlDiv.appendChild(div)
  })

  
