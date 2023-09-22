let slider_items = $('.slider-items li');
let slider_next = $('.slider-nav.next');
let slider_prev = $('.slider-nav.prev');
let selected_item = 0;
const nav = document.querySelector('.Nav-content');

function setItemsSlider(index) {
  selected_item = index;

  slider_items.each(function (slide) {
    let offset = slide - selected_item;
    if (offset < 0) offset += slider_items.length;

    for (let i = 0; i < slider_items.length + 1; i++) {
      $(this)
        .removeClass(`item-${i}`)
        .addClass(`item-${offset + 1}`);
    }
  });
}



slider_items.click(function () {
  setItemsSlider($(this).index());
});

slider_prev.click(function () {
  selected_item = selected_item < slider_items.length - 1 ? ++selected_item : 0;
  setItemsSlider(selected_item);
});

slider_next.click(function () {
  selected_item = selected_item >= 1 ? --selected_item : slider_items.length - 1;
  setItemsSlider(selected_item);
});



function search() {
  const searchbox = document.getElementById('search-input').value.toUpperCase();
  const product = document.querySelectorAll('.product-search');

  for (let i = 0; i < product.length; i++) {
    let match = product[i].querySelector('h4');

    if (match) {
      let textValue = match.textContent || match.innerText;

      if (textValue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = '';
      } else {
        product[i].style.display = 'none';
      }
    }
  }
}


const openBtn = document.getElementById('open_cart_btn');
const cart = document.getElementById('sidecart');
const closeBtn = document.getElementById('close_btn');
const Backdrop = document.querySelector('.backdrop');
let itemsEl = document.querySelector('.items');
let cartItems = document.querySelector('.cart_items');
const itemsNum = document.getElementById('items_num')
const Total = document.getElementById('subtotal_price')
const sideSearch = document.querySelector('.sideSearch')
let cart_data = []


$('#login-btn').click(function () {
  $('.side-sign-up').addClass('open')

  Backdrop.style.display = 'block';

  setTimeout(() => {
    Backdrop.classList.add('show');
  }, 0);
})

$(Backdrop).on('click', function() {
  $('.side-sign-up').removeClass('open');
});




$('#Search').click(function () {
  $('.sideSearch').addClass('open')

  Backdrop.style.display = 'block';

  setTimeout(() => {
    Backdrop.classList.add('show');
  }, 0);
  })

$(Backdrop).on('click', function() {
  $('.sideSearch').removeClass('open');
});


function closeSearch() {
  $('.sideSearch').removeClass('open');
  Backdrop.classList.remove('show');

  setTimeout(() => {
    Backdrop.style.display = 'none';
  }, 500);
  
}


openBtn.addEventListener('click', openCart);
closeBtn.addEventListener('click', closeCart);
Backdrop.addEventListener('click', closeCart);

function openCart() {
  cart.classList.add('open');
  Backdrop.style.display = 'block';

  setTimeout(() => {
    Backdrop.classList.add('show');
  }, 0);
}

function closeCart() {
  cart.classList.remove('open');
  Backdrop.classList.remove('show');

  setTimeout(() => {
    Backdrop.style.display = 'none';
  }, 500);
}

function addItemShoes(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(Shoes_items[idx]);
  }

  updateCart();
  openCart();
}

function addItemTShirts(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(tShirt_items[idx]);
  }

  updateCart();
  openCart();
}

function addItemPants(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(Pants_items[idx]);
  }

  updateCart();
  openCart();
}

function addItemAdditional(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(Additional_items[idx]);
  }

  updateCart();
  openCart();
}

function addItemNewArrival(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(newArrival_items[idx]);
  }

  updateCart();
  openCart();
}


function addItemTop(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(top_items[idx]);
  }
  updateCart();
  openCart();
}

function removeCartItem(itemId) {
  cart_data = cart_data.filter((item) => item.id !== itemId);

  updateCart();
}


function IncreaseQty(itemId) {
  cart_data = cart_data.map(item => item.id.toString() === itemId.toString() ? {...item, qty: item.qty + 1} : item)
  updateCart()
}

function DecreaseQty(itemId) {
  cart_data = cart_data.map(item => item.id.toString() === itemId.toString() ? {...item, qty: item.qty > 1 ? item.qty - 1  : item.qty}: item)
  updateCart()
}


function CalcItemsNum() {
  let itemsCount = 0

  cart_data.forEach((item) => (itemsCount += item.qty))
  itemsNum.innerHTML = itemsCount
}


function calcSubtotalPrice() {
  let subtotal = 0

  cart_data.forEach((item) => (subtotal+= item.price * item.qty))

  Total.innerHTML = subtotal
}


const tShirt_items = [
  {
    id: 1,
    name: 'T-shirt',
    price: 899,
    sale:494,
    Brand:'Gucci',
    image: 'img/img/product-1-1.jpg',
    qty:1,
  },
  {
    
    id:2,
    name: 'T-shirt',
    price: 400,
    sale:350,
    Brand:'Adidas',
    image: 'img/img/product-2-1.jpg',
    qty:1,
  },
  {
    id:3,
    name: 'T-shirt',
    price: 1000,
    sale:499,
    Brand:'Adidas',
    image: 'img/img/product-8-1.jpg',
    qty:1,
  },
  {
    id:4,
    name: 'T-shirt',
    price: 899,
    sale:600,
    Brand:'Gucci',
    image: 'img/img/product-9-1.jpg',
    qty:1,
  },
  {
    id:5,
    name: 'T-shirt',
    price: 800,
    sale:494,
    Brand:'Gucci',
    image: 'img/img/product-12-2.jpg',
    qty:1,
  },
  {
    id: 6,
    name: 'T-shirt',
    price: 4099,
    sale:600,
    Brand:'Gucci',
    image: 'img/img/product-6-1.jpg',
    qty: 1,
  },
  {
    id: 7,
    name: 'T-shirt',
    price: 5099,
    sale:1200,
    Brand:'Adidas',
    image: 'img/img/showcase-img-6.jpg',
    qty: 1,
  }
];


const Shoes_items = [
  {
    id: 8,
    name: 'Shoes',
    price: 1099,
    Brand:'Adidas',
    image: 'img/img/product-3-1.jpg',
    qty: 1,
  },
  {
    id: 9,
    name: 'Shoes',
    price: 2099,
    Brand:'Gucci',
    image: 'img/img/product-10-2.jpg',
    qty: 1,
  },
  {
    id: 10,
    name: 'Shoes',
    price: 2099,
    Brand:'Nike',
    image: 'img/img/product-3-2.jpg',
    qty: 1,
  },
  {
    id: 11,
    name: 'Shoes',
    price: 3099,
    Brand:'Gucci',
    image: 'img/img/product-10-1.jpg',
    qty: 1,
  },

];


const Pants_items = [
  {
    id: 12,
    name: 'Pants',
    price: 8999,
    image: 'img/img/product-4-1.jpg',
    Brand:'Adidas',
    qty: 1,
  },
  {
    id: 13,
    name: 'Pants',
    price: 12099,
    image: 'img/img/product-4-2.jpg',
    Brand:'Gucci',
    qty: 1,
  },
  {
    id: 14,
    name: 'Pants',
    price: 11099,
    image: 'img/img/product-11-1.jpg',
    Brand:'Gucci',
    qty: 1,
  },
  {
    id: 15,
    name: 'Pants',
    price: 2099,
    image: 'img/img/product-11-2.jpg',
    Brand:'Gucci',
    qty: 1,
  },
  {
    id: 16,
    name: 'Pants',
    price: 8399,
    image: 'img/img/category-7.jpg',
    Brand:'Channel',
    qty: 1,
  },

];





const Additional_items = [
  {
    id: 17,
    name: 'Gucci Bag',
    price: 899,
    sale:200,
    image: 'img/img/category-2.jpg',
    qty:1,
  },
  {
    
    id:18,
    name: 'Beach cap',
    price: 400,
    sale:250,
    image: 'img/img/category-4.jpg',
    qty:1,
  },
  {
    id:19,
    name: 'Cushion',
    price: 1000,
    sale:399,
    image: 'img/img/category-6.jpg',
    qty:1,
  },
  {
    id:20,
    name: 'Cap',
    price: 899,
    sale:100,
    image: 'img/img/category-8.jpg',
    qty:1,
  },
  {
    id:21,
    name: 'Bag',
    price: 800,
    sale:324,
    image:'img/img/showcase-img-1.jpg',
    qty:1,
  },
  {
    id: 22,
    name: 'Louis Vuitton Bag',
    price: 4099,
    sale:1300,
    image:'img/img/showcase-img-3.jpg',
    qty: 1,
  },
  {
    id: 23,
    name: 'Gucci Bag',
    price: 5099,
    sale:1200,
    image:'img/img/product-13-1.jpg',
    qty: 1,
  }
];




const newArrival_items = [
  {
    id: 29,
    name: 'Pants ',
    price: 8999,
    image: 'img/img/product-11-1.jpg',
    Brand:'Gucci',
    qty: 1,
  },
  {
    id: 30,
    name: 'Pants',
    price: 12099,
    image: 'img/img/product-4-2.jpg',
    Brand:'Gucci',
    qty: 1,
  },
  {
    id: 31,
    name: 'Shoes',
    price: 11099,
    image: 'img/img/product-3-2.jpg',
    Brand:'Adidas',
    qty: 1,
  },
  {
    id: 32,
    name: 'T-shirt',
    price: 2099,
    image: 'img/img/product-6-1.jpg',
    Brand:'Gucci',
    qty: 1,
  },
  {
    id: 33,
    name: 'Shoes',
    price: 8399,
    image: 'img/img/product-3-1.jpg',
    Brand:'Adidas',
    qty: 1,
  },

];









function onSale() {
  let carousel_item = document.querySelector('.carousel-rows');

  Additional_items.forEach((item) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row' , 'text-center'  , 'hover-img' );
    itemEl.innerHTML = `
      <img src="${item.image}" alt="">
      <div class="price">
        <h4>${item.name}</h4>
        <p class="sale fw-bold">
          <span>$${item.sale}</span>
          <span class="text-dark sale-old-price text-decoration-line-through">
          <small>$</small>${item.price}
        </span>
        </p>
      </div>
    </div>`;

    carousel_item.appendChild(itemEl);
  });
}

onSale();


function searchInput(items) {
  $('#Search').click(function () {
    $('.sideSearch').addClass('open');
    Backdrop.style.display = 'block';
    setTimeout(() => {
      Backdrop.classList.add('show');
    }, 0);
  });

  const sideSearch = document.querySelector('.search-contents');

  items.forEach((item) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('row' , 'product-all' , 'product-search' ,   'hover-img');
    itemElement.innerHTML = `
    <img  src="${item.image}" alt="">
    <div class="price pt-2 fw-bold d-flex justify-content-between">
      <h4 class="search-name w-75">${item.name}</h4>
      <p class="search-price"><small>$</small>${item.price.toFixed(2)}</p>
    </div>
    `;
    sideSearch.appendChild(itemElement);
  });
}

searchInput(newArrival_items)
searchInput(Shoes_items);
searchInput(tShirt_items);
searchInput(Pants_items);
searchInput(Additional_items);









function renderItemsNewArrival() {
  newArrival_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'newArrival' , 'd-none');
    itemEl.onclick = () => addItemNewArrival(idx , item.id)
    itemEl.innerHTML = `
    <div class="card" style="width: 16rem;">
    <img src="${item.image}" class="card-img-top " alt="...">
    <div class="card-body price">
      <h4 class="card-title text-muted">${item.Brand}</h4>
      <div class="d-flex justify-content-between">
          <p class="card-text name "> <strong> ${item.name}</strong> </p>
          <p class="card-text  text-muted"> <strong>$${item.price}</strong></p> 
        </div>      
    </div>
  </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsNewArrival();




function renderItemsAdditional() {
  Additional_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'Additional' , 'd-none');
    itemEl.onclick = () => addItemAdditional(idx , item.id)
    itemEl.innerHTML = `
    <div class="card" style="width: 16rem;">
    <img src="${item.image}" class="card-img-top " alt="...">
    <div class="card-body price">
      <div class="d-flex justify-content-between mt-2">
          <p class="card-text name "> <strong> ${item.name}</strong> </p>
          <p class="card-text  text-muted"> <strong>$${item.price}</strong></p> 
        </div>         
    </div>
  </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsAdditional();



function renderItemsTShirts() {
  tShirt_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'TShirts');
    itemEl.onclick = () => addItemTShirts(idx , item.id)
    itemEl.innerHTML = `
    <div class="card" style="width: 16rem;">
    <img src="${item.image}" class="card-img-top " alt="...">
    <div class="card-body price">
      <h4 class="card-title text-muted">${item.Brand}</h4>
        <div class="d-flex justify-content-between">
          <p class="card-text name"> <strong> ${item.name}</strong> </p>
          <p class="card-text  text-muted"> <strong>$${item.price}</strong></p> 
        </div>      
    </div>
  </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsTShirts();





function newArrivalFilter() {
  $('.newArrival').removeClass('d-none')
  $('.TShirts').addClass('d-none')
  $('.Additional').addClass('d-none')
  $('.top').addClass('d-none')
  $('.Pants').addClass('d-none')
  $('.Shoes').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.newArrival-btn').addClass('active')
}





function AdditionalFilter() {
  $('.Additional').removeClass('d-none')
  $('.TShirts').addClass('d-none')
  $('.Pants').addClass('d-none')
    $('.top').addClass('d-none')
  $('.Shoes').addClass('d-none')
  $('.newArrival').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.Additional-btn').addClass('active')
}


function ShoesFilter() {
  $('.Shoes').removeClass('d-none')
  $('.TShirts').addClass('d-none')
  $('.Pants').addClass('d-none')
    $('.top').addClass('d-none')
  $('.newArrival').addClass('d-none')
  $('.Additional').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.Shoes-btn').addClass('active')
}

function PantsFilter() {
  $('.Pants').removeClass('d-none')
  $('.TShirts').addClass('d-none')
  $('.Shoes').addClass('d-none')
  $('.Additional').addClass('d-none')
  $('.top').addClass('d-none')
  $('.newArrival').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.Pants-btn').addClass('active')
}


function TShirtsFilter() {
  $('.TShirts').removeClass('d-none')
  $('.Shoes').addClass('d-none')
  $('.Pants').addClass('d-none')
  $('.top').addClass('d-none')
  $('.Additional').addClass('d-none')
  $('.newArrival').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.TShirts-btn').addClass('active')
}

TShirtsFilter()


function renderItemsShoes() {
  Shoes_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'Shoes' , 'd-none');
    itemEl.onclick = () => addItemShoes(idx , item.id)
    itemEl.innerHTML = `
    <div class="card" style="width: 16rem;">
    <img src="${item.image}" class="card-img-top " alt="...">
    <div class="card-body price">
      <h4 class="card-title text-muted">${item.Brand}</h4>
      <div class="d-flex justify-content-between">
          <p class="card-text name"> <strong> ${item.name}</strong> </p>
          <p class="card-text  text-muted"> <strong>$${item.price}</strong></p> 
        </div>      
    </div>
  </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsShoes();
renderCartItems()

function renderItemsPants() {
  Pants_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'Pants' , 'd-none');
    itemEl.onclick = () => addItemPants(idx , item.id)
    itemEl.innerHTML = `
    <div class="card" style="width: 16rem;">
    <img src="${item.image}" class="card-img-top " alt="...">
    <div class="card-body price">
      <h4 class="card-title text-muted">${item.Brand}</h4>
      <div class="d-flex justify-content-between">
          <p class="card-text name"> <strong> ${item.name}</strong> </p>
          <p class="card-text  text-muted"> <strong>$${item.price}</strong></p> 
        </div>      
    </div>
  </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsPants();


function renderCartItems() 
{
  cartItems.innerHTML = ''

  cart_data.forEach(item => {
    const cartItem = document.createElement("div")
    cartItem.classList.add('cart_item' )
    cartItem.innerHTML=`
      <div class="remove_item position-absolute z-3 p-2" onclick="removeCartItem(${item.id})">
        <span style="color:black">&times;</span>
      </div>
      <div class="item_img">
        <img src="${item.image}" alt="">
      </div>
      <div class="item_details ms-3">
        <p>${item.name}</p>
        <p class="sale  fw-bold"><small>EGP</small> ${item.price} </p>
        <div class="qty">
          <span onclick="DecreaseQty(${item.id})">-</span>
          <strong>${item.qty}</strong>
          <span onclick="IncreaseQty(${item.id})">+</span>
        </div>
      </div>
    `;

    cartItems.appendChild(cartItem);
  });
}


function updateCart() {
  renderCartItems();
  CalcItemsNum();
  calcSubtotalPrice();
}

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(usernameValue === '' ) {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}





const NewUpdate = [
  {
    id: 1,
    name: 'Find a Store',
    image: "img/blog-1.jpg",
    paragraph: 'Our Store',
    qty: 1,
  },
  {
    id: 2,
    name: 'From your Blog',
    image: "img/blog-2.jpg",
    paragraph: 'Our Store',
    qty: 1,
  },
  {
    id: 3,
    name: 'From your Blog',
    image: "img/blog-3.jpg",
    paragraph: 'Our Store',
    qty: 1,
  },
];



function newUpdates() {
  let newUpdates_item = document.querySelector('.newUpdates');

  NewUpdate.forEach((item) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('col-md-4');
    itemEl.innerHTML = `
      <div class="update-info">
        <div class="image">
          <img src="${item.image}" alt="">
        </div>
        <div class="info mt-3 mt-md-4 ">
          <h5>${item.name}</h5>
          <a href="#"><p>${item.paragraph} <i class=" fa-solid fa-arrow-right"></i></p></a>
        </div>
      </div>`;

    newUpdates_item.appendChild(itemEl);
  });
}

newUpdates();





