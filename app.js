// ========================================
// PHARMACY PRO - Complete Application
// ========================================

// ===== PRODUCT DATA (20 Real Products) =====
const PRODUCTS = [
  { id: 1, name: "Paracetamol 500mg Tablets", category: "medicines", price: 45, oldPrice: 60, discount: 25, rating: 4.8, reviews: 1240, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop", badge: "best", description: "Effective pain relief and fever reduction. 500mg paracetamol tablets." },
  { id: 2, name: "Vitamin C 1000mg", category: "vitamins", price: 299, oldPrice: 450, discount: 33, rating: 4.7, reviews: 890, image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&auto=format&fit=crop", badge: "sale", description: "Immunity booster with 1000mg Vitamin C. 60 tablets per bottle." },
  { id: 3, name: "Digital BP Monitor", category: "health-devices", price: 1299, oldPrice: 1999, discount: 35, rating: 4.6, reviews: 560, image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&auto=format&fit=crop", badge: "sale", description: "Accurate blood pressure monitoring with large LCD display." },
  { id: 4, name: "Hand Sanitizer 500ml", category: "personal-care", price: 149, oldPrice: 250, discount: 40, rating: 4.5, reviews: 2100, image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400&auto=format&fit=crop", badge: "best", description: "Kills 99.9% germs. Alcohol-based hand sanitizer with moisturizer." },
  { id: 5, name: "Baby Diapers Large (Pack of 40)", category: "baby-care", price: 599, oldPrice: 799, discount: 25, rating: 4.9, reviews: 3200, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop", badge: "best", description: "Ultra-soft, absorbent diapers with wetness indicator." },
  { id: 6, name: "Ashwagandha Capsules", category: "ayurveda", price: 349, oldPrice: 499, discount: 30, rating: 4.6, reviews: 780, image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400&auto=format&fit=crop", badge: "new", description: "Pure Ashwagandha extract for stress relief and vitality." },
  { id: 7, name: "Cetirizine 10mg (10 Tablets)", category: "medicines", price: 35, oldPrice: 50, discount: 30, rating: 4.4, reviews: 1500, image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&auto=format&fit=crop", badge: "", description: "Anti-allergy tablets for hay fever and skin allergies." },
  { id: 8, name: "Multivitamin Tablets", category: "vitamins", price: 399, oldPrice: 550, discount: 27, rating: 4.7, reviews: 1100, image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&auto=format&fit=crop", badge: "sale", description: "Complete daily multivitamin with 23 essential nutrients." },
  { id: 9, name: "Digital Thermometer", category: "health-devices", price: 249, oldPrice: 399, discount: 38, rating: 4.5, reviews: 920, image: "https://images.unsplash.com/photo-1584515933487-9bdb5f8df3dc?w=400&auto=format&fit=crop", badge: "", description: "Fast and accurate temperature reading in 10 seconds." },
  { id: 10, name: "Face Wash - Neem & Tulsi", category: "personal-care", price: 199, oldPrice: 280, discount: 29, rating: 4.3, reviews: 670, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&auto=format&fit=crop", badge: "", description: "Natural face wash for acne-prone and oily skin." },
  { id: 11, name: "Baby Lotion 200ml", category: "baby-care", price: 179, oldPrice: 250, discount: 28, rating: 4.8, reviews: 890, image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&auto=format&fit=crop", badge: "new", description: "Gentle, hypoallergenic baby lotion with aloe vera." },
  { id: 12, name: "Triphala Churna 100g", category: "ayurveda", price: 129, oldPrice: 180, discount: 28, rating: 4.5, reviews: 450, image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400&auto=format&fit=crop", badge: "", description: "Traditional Ayurvedic digestive tonic and detoxifier." },
  { id: 13, name: "Ibuprofen 400mg (10 Tablets)", category: "medicines", price: 55, oldPrice: 75, discount: 27, rating: 4.6, reviews: 1800, image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=400&auto=format&fit=crop", badge: "best", description: "Pain relief for headaches, muscle pain, and inflammation." },
  { id: 14, name: "Omega-3 Fish Oil Capsules", category: "vitamins", price: 499, oldPrice: 699, discount: 29, rating: 4.8, reviews: 640, image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&auto=format&fit=crop", badge: "sale", description: "High-strength Omega-3 for heart and brain health." },
  { id: 15, name: "Glucometer Kit", category: "health-devices", price: 799, oldPrice: 1199, discount: 33, rating: 4.7, reviews: 430, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&auto=format&fit=crop", badge: "sale", description: "Complete blood glucose monitoring kit with 25 strips." },
  { id: 16, name: "Shampoo - Anti-Dandruff", category: "personal-care", price: 249, oldPrice: 349, discount: 29, rating: 4.4, reviews: 1100, image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&auto=format&fit=crop", badge: "", description: "Clinically proven anti-dandruff shampoo with zinc pyrithione." },
  { id: 17, name: "Baby Wipes (Pack of 80)", category: "baby-care", price: 149, oldPrice: 199, discount: 25, rating: 4.6, reviews: 1500, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop", badge: "", description: "Alcohol-free, gentle baby wipes with aloe and vitamin E." },
  { id: 18, name: "Amla Juice 500ml", category: "ayurveda", price: 199, oldPrice: 299, discount: 33, rating: 4.3, reviews: 320, image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400&auto=format&fit=crop", badge: "new", description: "Pure Amla juice for immunity, hair, and skin health." },
  { id: 19, name: "Cough Syrup 100ml", category: "medicines", price: 89, oldPrice: 120, discount: 26, rating: 4.5, reviews: 2100, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop", badge: "", description: "Effective relief from dry and productive cough." },
  { id: 20, name: "Protein Powder 1kg", category: "vitamins", price: 1299, oldPrice: 1799, discount: 28, rating: 4.7, reviews: 780, image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&auto=format&fit=crop", badge: "sale", description: "Whey protein powder for muscle building and recovery." }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('pharmacy_cart')) || [];
let orders = JSON.parse(localStorage.getItem('pharmacy_orders')) || [];
let wishlist = JSON.parse(localStorage.getItem('pharmacy_wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('pharmacy_user')) || null;
let currentOrder = null;

// ===== UTILITIES =====
function formatPrice(p) { return '₹' + p.toLocaleString('en-IN'); }
function saveCart() { localStorage.setItem('pharmacy_cart', JSON.stringify(cart)); updateCartBadge(); }
function saveOrders() { localStorage.setItem('pharmacy_orders', JSON.stringify(orders)); }
function saveWishlist() { localStorage.setItem('pharmacy_wishlist', JSON.stringify(wishlist)); }

function showToast(msg, type='success') {
  const c = document.getElementById('toastContainer');
  if(!c) return;
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.innerHTML = '<span>' + (type==='success'?'✅':type==='error'?'❌':'⚠️') + '</span><span>' + msg + '</span>';
  c.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function updateCartBadge() {
  const b = document.getElementById('cartBadge');
  if(b) b.textContent = cart.reduce((a,i)=>a+i.qty,0);
}

function getProductCard(p) {
  const inWish = wishlist.includes(p.id);
  return `<div class="product-card" data-id="${p.id}">
    ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge==='sale'?'SALE':p.badge==='new'?'NEW':'BEST'}</span>` : ''}
    <div class="product-wishlist ${inWish?'active':''}" onclick="toggleWishlist(${p.id},this)">❤</div>
    <div class="product-image">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="product-overlay">
        <button onclick="openQuickView(${p.id})" title="Quick View">👁</button>
        <button onclick="addToCart(${p.id})" title="Add to Cart">🛒</button>
      </div>
    </div>
    <div class="product-info">
      <div class="product-category">${p.category.replace('-',' ').toUpperCase()}</div>
      <h3 class="product-title">${p.name}</h3>
      <div class="product-rating"><span class="stars">⭐⭐⭐⭐⭐</span><span class="rating-count">(${p.reviews})</span></div>
      <div class="product-price">
        <span class="price-current">${formatPrice(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
        ${p.discount ? `<span class="price-discount">-${p.discount}%</span>` : ''}
      </div>
      <div class="product-actions">
        <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">Add to Cart</button>
        <button class="btn btn-outline btn-sm" onclick="openQuickView(${p.id})">View</button>
      </div>
    </div>
  </div>`;
}

// ===== CART FUNCTIONS =====
function addToCart(id, qty=1) {
  const item = cart.find(i=>i.id===id);
  if(item) item.qty += qty;
  else cart.push({id, qty});
  saveCart();
  showToast('Added to cart!');
}

function removeFromCart(id) {
  cart = cart.filter(i=>i.id!==id);
  saveCart();
  renderCart();
}

function updateQty(id, delta) {
  const item = cart.find(i=>i.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty < 1) item.qty = 1;
  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
  showToast('Cart cleared');
}

function getCartTotals() {
  let subtotal=0, discount=0, delivery=0;
  cart.forEach(i=>{
    const p = PRODUCTS.find(x=>x.id===i.id);
    if(p) { subtotal += p.oldPrice*i.qty; discount += (p.oldPrice-p.price)*i.qty; }
  });
  const total = subtotal - discount;
  if(total < 500) delivery = 49;
  return {subtotal, discount, delivery, total: total + delivery};
}

// ===== RENDER FUNCTIONS =====
function renderFeaturedProducts() {
  const el = document.getElementById('featuredProducts');
  if(!el) return;
  const featured = PRODUCTS.slice(0, 8);
  el.innerHTML = featured.map(getProductCard).join('');
}

function renderAllProducts() {
  const el = document.getElementById('productsGrid');
  if(!el) return;
  const url = new URLSearchParams(location.search);
  let list = [...PRODUCTS];
  const cat = url.get('cat');
  const search = url.get('search');
  if(cat && cat!=='all') list = list.filter(p=>p.category===cat);
  if(search) list = list.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()));

  const catFilter = document.getElementById('categoryFilter');
  const sortFilter = document.getElementById('sortFilter');
  const searchInput = document.getElementById('productSearch');

  if(catFilter) { catFilter.value = cat||'all'; catFilter.onchange = ()=>filterProducts(); }
  if(sortFilter) sortFilter.onchange = ()=>filterProducts();
  if(searchInput) { searchInput.value = search||''; searchInput.oninput = debounce(()=>filterProducts(), 300); }

  el.innerHTML = list.length ? list.map(getProductCard).join('') : '<div class="empty-state" style="grid-column:1/-1"><i>🔍</i><h3>No products found</h3><p>Try different search terms or filters</p></div>';
}

function filterProducts() {
  const cat = document.getElementById('categoryFilter')?.value || 'all';
  const sort = document.getElementById('sortFilter')?.value || 'default';
  const search = document.getElementById('productSearch')?.value || '';
  let list = [...PRODUCTS];
  if(cat!=='all') list = list.filter(p=>p.category===cat);
  if(search) list = list.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()));
  if(sort==='price-low') list.sort((a,b)=>a.price-b.price);
  if(sort==='price-high') list.sort((a,b)=>b.price-a.price);
  if(sort==='rating') list.sort((a,b)=>b.rating-a.rating);
  if(sort==='discount') list.sort((a,b)=>b.discount-a.discount);
  const el = document.getElementById('productsGrid');
  if(el) el.innerHTML = list.map(getProductCard).join('');
}

function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const summaryEl = document.getElementById('cartSummary');
  if(!itemsEl) return;
  if(!cart.length) {
    itemsEl.innerHTML = '<div class="empty-state"><i>🛒</i><h3>Your cart is empty</h3><p>Browse our products and add items to your cart</p><a href="products.html" class="btn btn-primary" style="margin-top:20px">Start Shopping</a></div>';
    if(summaryEl) summaryEl.style.display = 'none';
    return;
  }
  const t = getCartTotals();
  let html = '';
  cart.forEach(i=>{
    const p = PRODUCTS.find(x=>x.id===i.id);
    if(!p) return;
    html += `<div class="cart-item">
      <div class="cart-item-img"><img src="${p.image}" alt="${p.name}"></div>
      <div class="cart-item-details">
        <h4>${p.name}</h4>
        <p>${p.category.replace('-',' ')}</p>
        <div class="qty-control">
          <button onclick="updateQty(${p.id},-1)">−</button>
          <span>${i.qty}</span>
          <button onclick="updateQty(${p.id},1)">+</button>
        </div>
      </div>
      <div class="cart-item-price">${formatPrice(p.price*i.qty)}</div>
      <button onclick="removeFromCart(${p.id})" style="background:none;color:var(--danger);font-size:1.2rem;cursor:pointer">🗑</button>
    </div>`;
  });
  itemsEl.innerHTML = html;
  if(summaryEl) {
    summaryEl.style.display = 'block';
    document.getElementById('subtotal').textContent = formatPrice(t.subtotal);
    document.getElementById('discount').textContent = '-' + formatPrice(t.discount);
    document.getElementById('delivery').textContent = t.delivery ? formatPrice(t.delivery) : 'FREE';
    document.getElementById('total').textContent = formatPrice(t.total);
  }
}

function renderOrders() {
  const el = document.getElementById('ordersList');
  if(!el) return;
  if(!orders.length) {
    el.innerHTML = '<div class="empty-state"><i>📦</i><h3>No orders yet</h3><p>Your order history will appear here</p><a href="products.html" class="btn btn-primary" style="margin-top:20px">Start Shopping</a></div>';
    return;
  }
  el.innerHTML = orders.slice().reverse().map(o=>{
    const date = new Date(o.date).toLocaleDateString('en-IN');
    return `<div class="order-card">
      <div class="order-header">
        <div><span class="order-id">${o.id}</span> <span class="order-date">| ${date}</span></div>
        <span class="order-status status-${o.status}">${o.status.toUpperCase()}</span>
      </div>
      <div class="order-items">${o.items.map(i=>{
        const p = PRODUCTS.find(x=>x.id===i.id);
        return `<div class="order-item-img"><img src="${p?.image||''}"></div><div class="order-item-info"><h4>${p?.name||''}</h4><p>Qty: ${i.qty}</p></div>`;
      }).join('')}</div>
      <div class="order-footer">
        <span class="order-total">Total: ${formatPrice(o.total)}</span>
        <div class="order-actions">
          <a href="bill.html?order=${o.id}" class="btn btn-outline btn-sm">View Bill</a>
          ${o.status==='delivered' ? '<button class="btn btn-primary btn-sm">Reorder</button>' : ''}
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderBill() {
  const url = new URLSearchParams(location.search);
  const orderId = url.get('order');
  let order = orders.find(o=>o.id===orderId);
  if(!order && currentOrder) order = currentOrder;
  if(!order) {
    document.getElementById('billContainer').innerHTML = '<div class="empty-state" style="padding:60px"><i>📄</i><h3>No bill found</h3></div>';
    return;
  }
  document.getElementById('billId').textContent = order.id;
  document.getElementById('billDate').textContent = new Date(order.date).toLocaleDateString('en-IN');
  document.getElementById('billCustomer').textContent = order.customer?.name || 'Customer';
  document.getElementById('billAddress').textContent = order.customer?.address || '';
  let html = '';
  order.items.forEach(i=>{
    const p = PRODUCTS.find(x=>x.id===i.id);
    if(p) html += `<tr><td>${p.name}</td><td>${i.qty}</td><td>${formatPrice(p.price)}</td><td class="text-right">${formatPrice(p.price*i.qty)}</td></tr>`;
  });
  document.getElementById('billItems').innerHTML = html;
  document.getElementById('billSubtotal').textContent = formatPrice(order.subtotal);
  document.getElementById('billDiscount').textContent = '-' + formatPrice(order.discount);
  document.getElementById('billDelivery').textContent = order.delivery ? formatPrice(order.delivery) : 'FREE';
  document.getElementById('billTotal').textContent = formatPrice(order.total);
}

// ===== CHECKOUT =====
function initCheckout() {
  if(!cart.length) { location.href='cart.html'; return; }
  const t = getCartTotals();
  if(t.total <= 0) { location.href='cart.html'; }
}

function goToPayment(e) {
  e.preventDefault();
  document.getElementById('shippingForm').style.display = 'none';
  document.getElementById('paymentForm').style.display = 'block';
  document.getElementById('step1').className = 'step completed';
  document.getElementById('step2').className = 'step active';
}

function goBackToShipping() {
  document.getElementById('shippingForm').style.display = 'block';
  document.getElementById('paymentForm').style.display = 'none';
  document.getElementById('step1').className = 'step active';
  document.getElementById('step2').className = 'step';
}

function selectPayment(el, method) {
  document.querySelectorAll('.payment-method').forEach(x=>x.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('cardFields').style.display = method==='card'?'block':'none';
}

function confirmOrder(e) {
  e.preventDefault();
  const t = getCartTotals();
  const order = {
    id: 'ORD-' + Date.now().toString().slice(-8),
    date: new Date().toISOString(),
    status: 'processing',
    items: [...cart],
    subtotal: t.subtotal,
    discount: t.discount,
    delivery: t.delivery,
    total: t.total,
    customer: {
      name: document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      address: document.getElementById('address').value + ', ' + document.getElementById('city').value + ', ' + document.getElementById('state').value + ' - ' + document.getElementById('pincode').value
    }
  };
  orders.push(order);
  saveOrders();
  currentOrder = order;
  cart = [];
  saveCart();
  document.getElementById('paymentForm').style.display = 'none';
  document.getElementById('orderSuccess').style.display = 'block';
  document.getElementById('orderIdDisplay').textContent = order.id;
  document.getElementById('billLink').href = 'bill.html?order=' + order.id;
  document.getElementById('step2').className = 'step completed';
  document.getElementById('step3').className = 'step active';
  showToast('Order placed successfully!');
}

// ===== AUTH =====
function toggleAuthMode() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const text = document.getElementById('authToggleText');
  if(loginForm.style.display === 'none') {
    loginForm.style.display = 'block'; registerForm.style.display = 'none';
    text.innerHTML = 'Don't have an account? <a href="#" onclick="toggleAuthMode()">Sign Up</a>';
  } else {
    loginForm.style.display = 'none'; registerForm.style.display = 'block';
    text.innerHTML = 'Already have an account? <a href="#" onclick="toggleAuthMode()">Sign In</a>';
  }
}

function emailLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const user = { name: email.split('@')[0], email: email, photo: null };
  localStorage.setItem('pharmacy_user', JSON.stringify(user));
  showToast('Welcome back, ' + user.name + '!');
  setTimeout(()=>location.href='index.html', 1000);
}

function emailRegister(e) {
  e.preventDefault();
  const pass = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;
  if(pass !== confirm) { showToast('Passwords do not match!', 'error'); return; }
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const user = { name, email, photo: null };
  localStorage.setItem('pharmacy_user', JSON.stringify(user));
  showToast('Account created successfully!');
  setTimeout(()=>location.href='index.html', 1000);
}

function googleSignIn() {
  // Simulated Google Sign In (replace with actual Firebase auth)
  const user = { name: 'Google User', email: 'user@gmail.com', photo: null };
  localStorage.setItem('pharmacy_user', JSON.stringify(user));
  showToast('Signed in with Google!');
  setTimeout(()=>location.href='index.html', 1000);
}

function checkAuthRedirect() {
  if(currentUser) location.href = 'index.html';
}

function logout() {
  localStorage.removeItem('pharmacy_user');
  currentUser = null;
  showToast('Logged out successfully');
  setTimeout(()=>location.href='index.html', 1000);
}

function updateUserUI() {
  const user = JSON.parse(localStorage.getItem('pharmacy_user'));
  const authBtn = document.getElementById('authBtn');
  const userMenu = document.getElementById('userMenu');
  const userName = document.getElementById('userName');
  const userAvatar = document.getElementById('userAvatar');
  if(user && userMenu) {
    if(authBtn) authBtn.style.display = 'none';
    userMenu.style.display = 'flex';
    userMenu.classList.remove('hidden');
    if(userName) userName.textContent = user.name;
    if(userAvatar) userAvatar.textContent = user.name.charAt(0).toUpperCase();
    userMenu.onclick = ()=>{ if(confirm('Logout?')) logout(); };
  }
}

// ===== WISHLIST =====
function toggleWishlist(id, el) {
  const idx = wishlist.indexOf(id);
  if(idx > -1) { wishlist.splice(idx,1); el.classList.remove('active'); showToast('Removed from wishlist'); }
  else { wishlist.push(id); el.classList.add('active'); showToast('Added to wishlist'); }
  saveWishlist();
}

// ===== QUICK VIEW =====
function openQuickView(id) {
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const modal = document.getElementById('quickViewModal');
  const body = document.getElementById('modalBody');
  if(!modal || !body) return;
  body.innerHTML = `<div class="quick-view">
    <div class="quick-view-img"><img src="${p.image}" alt="${p.name}"></div>
    <div class="quick-view-info">
      <div class="product-category">${p.category.replace('-',' ').toUpperCase()}</div>
      <h2>${p.name}</h2>
      <div class="product-rating"><span class="stars">⭐⭐⭐⭐⭐</span><span class="rating-count">${p.rating} (${p.reviews} reviews)</span></div>
      <div class="price">${formatPrice(p.price)} ${p.oldPrice ? `<span style="text-decoration:line-through;color:var(--gray);font-size:1rem;font-weight:400">${formatPrice(p.oldPrice)}</span>` : ''}</div>
      <p class="desc">${p.description}</p>
      <div style="display:flex;gap:12px"><button class="btn btn-primary btn-lg" onclick="addToCart(${p.id});closeModal();">Add to Cart</button><button class="btn btn-outline btn-lg" onclick="closeModal()">Close</button></div>
    </div>
  </div>`;
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('quickViewModal')?.classList.remove('active');
}

// ===== ADMIN =====
function renderAdminDashboard() {
  const totalRev = orders.reduce((a,o)=>a+o.total,0);
  const totalOrd = orders.length;
  const uniqueCust = new Set(orders.map(o=>o.customer?.email)).size;
  document.getElementById('adminRevenue').textContent = formatPrice(totalRev);
  document.getElementById('adminOrders').textContent = totalOrd;
  document.getElementById('adminCustomers').textContent = uniqueCust;
  const tbody = document.getElementById('adminOrdersTable');
  if(tbody) {
    tbody.innerHTML = orders.slice().reverse().map(o=>`
      <tr><td>${o.id}</td><td>${o.customer?.name||'N/A'}</td><td>${new Date(o.date).toLocaleDateString('en-IN')}</td><td>${formatPrice(o.total)}</td>
      <td><span class="badge status-${o.status}">${o.status}</span></td>
      <td><a href="bill.html?order=${o.id}" target="_blank" style="color:var(--primary)">View</a></td></tr>
    `).join('') || '<tr><td colspan="6" style="text-align:center;padding:24px">No orders yet</td></tr>';
  }
}

function showTab(tab, el) {
  document.querySelectorAll('.admin-nav a').forEach(a=>a.classList.remove('active'));
  el.classList.add('active');
  // In a full app, this would switch between dashboard sections
}

// ===== CONTACT =====
function submitContact(e) {
  e.preventDefault();
  showToast('Message sent successfully! We will get back to you soon.');
  e.target.reset();
}

// ===== GLOBAL SEARCH =====
function initGlobalSearch() {
  const input = document.getElementById('globalSearch');
  if(!input) return;
  input.addEventListener('keypress', e=>{
    if(e.key==='Enter' && input.value.trim()) {
      location.href = 'products.html?search=' + encodeURIComponent(input.value.trim());
    }
  });
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  const nav = document.querySelector('.nav-links');
  if(nav) nav.style.display = nav.style.display==='flex'?'none':'flex';
}

// ===== DEBOUNCE =====
function debounce(fn, ms) {
  let t;
  return (...args)=>{ clearTimeout(t); t=setTimeout(()=>fn(...args),ms); };
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', ()=>{
  updateCartBadge();
  updateUserUI();
  initGlobalSearch();
  // Header scroll effect
  window.addEventListener('scroll', ()=>{
    document.querySelector('.header')?.classList.toggle('scrolled', window.scrollY > 50);
  });
  // Close modal on overlay click
  document.getElementById('quickViewModal')?.addEventListener('click', e=>{
    if(e.target===e.currentTarget) closeModal();
  });
});
