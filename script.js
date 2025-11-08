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
 const menuItems = [
  { name: "Banana Ice Cream", price: 23.99 },
  { name: "Strawberry Gelato", price: 19.99 },
  { name: "Greek Yogurt Delight", price: 17.49 },
];

const section = document.getElementById('section_menu');
menuItems.forEach(item => {
  const article = document.createElement('article');
  article.innerHTML = `
  <div>
    <h3>${item.name}</h3>
    <p>$${item.price}</p>
    <button>Add to cart</button>
    </div>
    <div>
    <h3>${item.name}</h3>
    <p>$${item.price}</p>
    <button>Add to cart</button>
    </div>`;
    section.appendChild(article);
})