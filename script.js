//1. Pick DOM Element
const input = document.getElementById('input');
const searchButton = document.querySelector('.search-button');
const overlay = document.getElementById('overlay');
const submitBtn = document.getElementById('submitBtn');



//2. Add Event Listener
submitBtn.addEventListener('click', function(){
  overlay.style.display = 'none';
}) 
searchButton.addEventListener('click', ()=> {
  const submitting = input.value.trim();
  if(submitting === ""){
    overlay.style.display = 'flex';
  }else{
     searchResult.textContent = `You searched for: "${query}"`;
  }
});

//Create Menu
const menuItems2 = [
  {
    category: "Starters", img: "logo/starters.jpg", name:"Papaya Salad", price: 12.95, 
  },
  {
    category: "Main Course", img: "logo/main-course.jpg", name:"Stuffed Turkey", price: 25.95 
  },
  {
    category: "Sides & Salads", img: "logo/sides.jpg", name:"Mashed Potatoes", price: 16.25, name1: ""
  },
  {
    category: "Beverages", img: "logo/beverages (2).jpg", 
  },
  {
    category: "Desserts", img: "logo/desserts.jpg", name: ""
  }
]
 const menuItems = [
  {name: "Stuffed Turkey", calories:"190 kcal", price: 25.95, image:"logo/turkey.png", paragraph:"A roasted whole turkey seasoned with herbs, butter, and spices, with Asian-style stuffing and buttery gravy"},
  {name: "Mashed Potatoes", calories:"230 kcal", price: 16.25, image:"logo/mashed-potatoes.jpg", paragraph:"Boiled potatoes blended and mashed with butter, milk or cream, and salted until smooth and fluffy, topped with vegetable herbs and gravy"},
  {name: "Grilled Steak", calories:"550 kcal", price: 30.95, image:"logo/steak.jpg", paragraph:"A tender cut of beef—seasoned with salt, pepper, and herbs,  for a smoky, caramelized flavor and juicy interior."}, {name: "Banana Ice Cream", calories:"180 kcal", price: 23.99, image:"logo/banana.png", paragraph:"A smooth and creamy frozen dessert made from ripe bananas, milk, and a touch of sugar for natural sweetness."},
  {name: "Strawberry Gelato", calories:"160 kcal", price: 19.99, image:"logo/strawberry.png", paragraph:"Strawberry Gelato is a creamy Italian-style frozen dessert made with ripe, sun-sweetened strawberries, fresh whole milk, and cream."},
  {name: "Greek Yogurt Delight", calories:"150 kcal", price: 17.49, image:"logo/greek.png", paragraph:"A rich and tangy dessert made with thick Greek yogurt, honey, and fresh fruits like berries or nuts for added flavor and texture."}
];


const section = document.getElementById('section_menu');

menuItems.forEach(item => {
  const article = document.createElement('article');
  article.innerHTML = 
  `<div class="bc_menu">
  <h3>${item.name}</h3>
    <img src="${item.image}" class="menu-image">
    <p>$${item.price}</p>
    <p class="menu_description">${item.paragraph}</p>
    <button class="menuBtn">Add to cart</button>
    </div>
    `;
    section.appendChild(article);
})

