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

  searchButton.addEventListener('enter', ()=>{
    const entering = input.ent();
    if(entering === 'enter'){
      searchButton = InputEvent();
    }
  }
  );