const products = [
  {
    id: 1,
    name: "Diamond Set",
    price: 4999,
    image: "https://www.sarafrsjewellery.com/cdn/shop/files/SJNK1752.jpg?v=1748416248"
  },
  {
    id: 2,
    name: "Silver Chain",
    price: 1299,
    image: "https://assets.ajio.com/medias/sys_master/root/20231013/HjN4/6528ed72afa4cf41f540497c/-473Wx593H-6006390790-multi-MODEL.jpg"
  },
  {
    id: 3,
    name: "Diamond Ring",
    price: 8999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7E0eIv3tBTSBb9ePGCHCAc5hu7etxAtTo1g&s"
  },
  {
    
    id: 4,
    name: "Temple jewellery",
    price: 10999,
    image:"https://www.kantikundan.com/cdn/shop/files/rn-image_picker_lib_temp_24bab356-fb83-4aa3-8749-c4d6a61b76b5.jpg?v=1716221222"

  },
  {
    
    id: 5,
    name: "Bangles",
    price: 999,
    image:"https://i.etsystatic.com/9744826/r/il/cac084/6802567296/il_fullxfull.6802567296_ndab.jpg"
  },
  {
    
    id: 6,
    name: "Simple Studs",
    price: 799,
    image:"https://www.zavya.co/cdn/shop/products/EAR-20131_a9d23b26-57bf-4c3c-8417-27678e60b346.jpg?v=1747739935"
  },
  {
    
    id: 7,
    name: "Anklets",
    price: 599,
    image:"https://img.tatacliq.com/images/i11/437Wx649H/MP000000014856644_437Wx649H_202306201758101.jpeg"
  },
  {
    
    id: 8,
    name: "Nose pins",
    price: 389,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMIyz21ecuUBR4t6DvkRgVAPj-Bya5q1rDNbB8YuVgbdsSSNDwZhoAu0_tEyAMhOrA84&usqp=CAU"
  },
  {
    
    id: 9,
    name: "Blackbeeds Chain",
    price: 1899,
    image:"https://houseoftaamara.com/cdn/shop/files/Gold-polish-black-bead-mangalsutratali-style-long-chain-Silver-Neckpiece-CI_d3c0d14a.jpg?v=1741445583"
  },
  {
    
    id: 10,
    name: "Bracelet",
    price: 299,
    image:"https://nemichandjewels.com/cdn/shop/files/850_6373.jpg?v=1696763540&width=1946"
  },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} added to cart!`);
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

renderProducts();
updateCartCount();
