//1. Pick DOM Element
const input = document.getElementById('input');
const searchButton = document.querySelector('.search-button');
const overlay = document.getElementById('overlay');
const submitBtn = document.getElementById('submitBtn');
const cartLogo= document.getElementById('cartLogo');

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


//Create Menu using arrays
const menuItems2 = [
  {
    category: "Starters", img: "logo/starters2.jpg", name:"Papaya Salad", price: 8.95, name1: "Baked Assorted Vegetables", price1: 11.67, name2: "Tom Yum Goong", price2: 12.99
  },
  {
    category: "Main Course", img: "logo/main-course.jpg", name:"Stuffed Turkey", price: 35.95, name1: "Grilled Steak", price1: 30.95, name2: "Steamed Fish", price2: 25.85
  },
  {
    category: "Sides & Salads", img: "logo/sides.jpg", name:"Mashed Potato Gravy", price: 24.95, name1: "Macaroni Cheese", price1: 15.65, name2: "Cranberry Spring Salad", price2: 13.87
  },
  {
    category: "Beverages", img: "logo/beverages (2).jpg", name: "Navam", price: 4.25, name1: "Strawberry Bourbon Cocktail", price1: 13.75, name2: "Lava Flow", price2: 16.95
  },
  {
    category: "Desserts", img: "logo/desserts.jpg", name: "Banana Ice Cream", price: 23.99, name1: "Strawberry Gelato", price1: 19.99, name2: "Greek Yogurt Delight", price2: 17.49
  }
]
 const menuItems = [
  {name: "Lava Flow", calories: 350, price: 16.95, image: "logo/lava_flow.jpg", paragraph: "A tropical blended cocktail made with rum, coconut cream, pineapple juice, and strawberries, creating a creamy and fruity drink with a vibrant presentation.",
  },{name: "Strawberry Bourbon Cocktail", calories: 300, price: 13.75, image: "logo/beverages (2).jpg", paragraph: "A refreshing cocktail made with bourbon, fresh strawberries, lemon juice, and simple syrup, served over ice and garnished with a strawberry slice.",},{name: "Navam", calories: 200, price: 4.25, image: "logo/navam.jpg", paragraph: "A traditional Thai sweet drink made from a blend of coconut and jelly, known for its health benefits and unique flavor profile of colorful jellies and assorted flavors.",},{name: "Cranberry Spring Salad", calories: 150, price: 13.87, image: "logo/cranberry-salad.jpg", paragraph: "A fresh salad made with mixed greens, dried cranberries, candied pecans, feta cheese, and a tangy vinaigrette dressing.",
  },{name: "Macaroni Cheese", calories: 400, price: 15.65, image: "logo/macaroni-cheese.jpg", paragraph: "A creamy and cheesy pasta dish made with elbow macaroni, cheddar cheese sauce, and topped with breadcrumbs for a crispy finish.",
  },{name: "Steamed Fish", calories: 300, price: 25.85, image: "logo/steamed-fish.jpg", paragraph: "A whole fish steamed with ginger, garlic, soy sauce, and scallions, resulting in tender, flavorful meat infused with aromatic seasonings.",
  },{name: "Tom Yum Goong", calories: 250, price: 12.99, image: "logo/tomyum.jpg", paragraph: "A spicy and sour Thai soup made with shrimp, lemongrass, kaffir lime leaves, galangal, chili, and lime juice, creating a bold and aromatic flavor profile."
  },{name: "Baked Assorted Vegetables", calories: 135, price: 11.67, image: "logo/baked-vegetables.jpg", paragraph: "A medley of roasted vegetables seasoned with herbs and spices, creating a flavorful and healthy side dish."},{name:"Papaya Salad", calories: 190, price: 8.95, image: "logo/starters2.jpg", paragraph: "A refreshing Thai salad made from shredded green papaya, tomatoes, carrots, chili, lime juice, fish sauce, and crushed peanuts for a spicy-sweet balance."
  },{name: "Stuffed Turkey", calories:330, price: 35.95, image:"logo/turkey.png", paragraph:"A roasted whole turkey seasoned with herbs, butter, and spices, with Asian-style stuffing and buttery gravy"},{name: "Mashed Potato Gravy", calories:250, price: 25.95, image:"logo/mashed-potatoes.jpg", paragraph:"Boiled potatoes blended and mashed with butter, milk or cream, and salted until smooth and fluffy, topped with vegetable herbs and gravy"},
  {name: "Grilled Steak", calories:550, price: 30.95, image:"logo/steak.jpg", paragraph:"A tender cut of beef—seasoned with salt, pepper, and herbs,  for a smoky, caramelized flavor and juicy interior."},{name: "Banana Ice Cream", calories:180, price: 23.99, image:"logo/banana.png", paragraph:"A smooth and creamy frozen dessert made from ripe bananas, milk, and a touch of sugar for natural sweetness."},{name: "Strawberry Gelato", calories:160, price: 19.99, image:"logo/strawberry.png", paragraph:"Strawberry Gelato is a creamy Italian-style frozen dessert made with ripe, sun-sweetened strawberries, fresh whole milk, and cream."},{name: "Greek Yogurt Delight", calories:150, price: 17.49, image:"logo/greek.png", paragraph:"A rich and tangy dessert made with thick Greek yogurt, honey, and fresh fruits like berries or nuts for added flavor and texture."}
];



