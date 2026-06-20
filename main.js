document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Header and Footer
  injectHeader();
  injectFooter();
  setupMobileMenu();
  setupCartCount();
  setupScrollEffect();

  // 2. Page-Specific Handlers
  const path = window.location.pathname;
  const pageName = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  if (pageName === 'index.html') {
    initHomePage();
  } else if (['new.html', 'hot.html', 'women.html', 'men.html', 'sports.html', 'kids.html'].includes(pageName)) {
    initListingPage(pageName);
  } else if (pageName === 'product.html') {
    initDetailPage();
  } else if (pageName === 'contact.html') {
    initContactPage();
  }
});

/* --- GLOBAL INJECTIONS --- */

function injectHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

  const navItems = [
    { name: '首頁', file: 'index.html' },
    { name: '公司簡介', file: 'about.html' },
    { name: '本季新品', file: 'new.html' },
    { name: '熱銷排行', file: 'hot.html' },
    { name: '流行女鞋', file: 'women.html' },
    { name: '時尚男鞋', file: 'men.html' },
    { name: '機能運動', file: 'sports.html' },
    { name: '兒童童鞋', file: 'kids.html' },
    { name: '聯絡我們', file: 'contact.html' }
  ];

  let navLinksHTML = '';
  let mobileLinksHTML = '';

  navItems.forEach(item => {
    const isActive = pageName === item.file ? 'active' : '';
    navLinksHTML += `<a href="${item.file}" class="${isActive}">${item.name}</a>`;
    mobileLinksHTML += `<a href="${item.file}" class="${isActive}">${item.name}</a>`;
  });

  header.innerHTML = `
    <div class="container header-container">
      <a href="index.html" class="logo">
        <img src="assets/images/logo.png" alt="SOLE VIBE Logo">
        <span>SOLE VIBE</span>
      </a>
      <nav class="nav-links">
        ${navLinksHTML}
      </nav>
      <div class="header-actions">
        <button class="cart-btn" aria-label="購物車">
          <i class="ri-shopping-bag-line"></i>
          <span class="cart-count" id="cartCounter">0</span>
        </button>
        <button class="menu-toggle" id="menuToggle" aria-label="選單">
          <i class="ri-menu-line"></i>
        </button>
      </div>
    </div>
    <div class="mobile-nav" id="mobileNav">
      ${mobileLinksHTML}
    </div>
  `;
}

function injectFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">SOLE <span>VIBE</span></div>
          <p class="footer-about">
            SOLE VIBE 舒步脈動致力於研發最極致舒適與潮流美學兼具的鞋款。我們堅持使用高品質環保材質與職人手工工藝，為您的每一步注入動能。
          </p>
          <div class="social-links">
            <a href="#" class="social-btn"><i class="ri-facebook-fill"></i></a>
            <a href="#" class="social-btn"><i class="ri-instagram-line"></i></a>
            <a href="#" class="social-btn"><i class="ri-youtube-fill"></i></a>
          </div>
        </div>
        <div>
          <h4 class="footer-heading">產品類別</h4>
          <ul class="footer-links">
            <li><a href="new.html">本季新品</a></li>
            <li><a href="women.html">流行女鞋</a></li>
            <li><a href="men.html">時尚男鞋</a></li>
            <li><a href="sports.html">機能運動</a></li>
            <li><a href="kids.html">兒童童鞋</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">關於我們</h4>
          <ul class="footer-links">
            <li><a href="about.html">品牌故事</a></li>
            <li><a href="about.html#craftsmanship">職人工藝</a></li>
            <li><a href="contact.html">門市資訊</a></li>
            <li><a href="contact.html#faq">常見問題</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">聯絡資訊</h4>
          <div class="footer-contact-info">
            <div class="footer-contact-item">
              <i class="ri-map-pin-line"></i>
              <p>台北市大安區忠孝東路四段 88 號 1 樓</p>
            </div>
            <div class="footer-contact-item">
              <i class="ri-phone-line"></i>
              <p>02-2777-8888 (10:00 - 22:00)</p>
            </div>
            <div class="footer-contact-item">
              <i class="ri-mail-line"></i>
              <p>service@solevibe.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 SOLE VIBE 舒步脈動. 版權所有. Design by Antigravity.</p>
        <div class="footer-bottom-links">
          <a href="#">使用條款</a>
          <a href="#">隱私權政策</a>
        </div>
      </div>
    </div>
  `;
}

function setupMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mobileNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('open');
    const icon = toggle.querySelector('i');
    if (nav.classList.contains('open')) {
      icon.className = 'ri-close-line';
    } else {
      icon.className = 'ri-menu-line';
    }
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== toggle) {
      nav.classList.remove('open');
      toggle.querySelector('i').className = 'ri-menu-line';
    }
  });
}

function setupCartCount() {
  let count = localStorage.getItem('cartCount') || 0;
  const counter = document.getElementById('cartCounter');
  if (counter) {
    counter.innerText = count;
  }
}

function updateCartCount(val) {
  let count = parseInt(localStorage.getItem('cartCount') || 0);
  count += val;
  localStorage.setItem('cartCount', count);
  setupCartCount();
  
  // Custom toast notification
  showToast(`已成功將商品加入購物車！`);
}

function setupScrollEffect() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #0f172a;
    color: white;
    padding: 16px 28px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    z-index: 9999;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-left: 4px solid #d97706;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  `;
  toast.innerHTML = `<i class="ri-checkbox-circle-fill" style="color: #10b981; font-size: 20px;"></i> ${message}`;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* --- HOME PAGE LOGIC --- */

function initHomePage() {
  // Render featured new products (first 4 elements where isNew = true)
  const newGrid = document.getElementById('newArrivalsGrid');
  if (newGrid) {
    const newItems = products.filter(p => p.isNew).slice(0, 4);
    newGrid.innerHTML = newItems.map(p => generateProductCardHTML(p)).join('');
  }

  // Render hot products (first 4 elements where isHot = true)
  const hotGrid = document.getElementById('hotSellersGrid');
  if (hotGrid) {
    const hotItems = products.filter(p => p.isHot).slice(0, 4);
    hotGrid.innerHTML = hotItems.map(p => generateProductCardHTML(p)).join('');
  }
}

/* --- LISTING PAGES LOGIC (CATEGORIES, NEW, HOT) --- */

let currentFilteredProducts = [];

function initListingPage(pageName) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  // Filter based on page name
  let filtered = [];
  if (pageName === 'women.html') filtered = products.filter(p => p.category === 'women');
  else if (pageName === 'men.html') filtered = products.filter(p => p.category === 'men');
  else if (pageName === 'sports.html') filtered = products.filter(p => p.category === 'sports');
  else if (pageName === 'kids.html') filtered = products.filter(p => p.category === 'kids');
  else if (pageName === 'new.html') filtered = products.filter(p => p.isNew);
  else if (pageName === 'hot.html') filtered = products.filter(p => p.isHot).sort((a,b) => a.salesRank - b.salesRank);

  currentFilteredProducts = [...filtered];
  renderListing(currentFilteredProducts);

  // Setup Sorting dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      let sorted = [...currentFilteredProducts];
      if (val === 'price-asc') {
        sorted.sort((a, b) => a.price - b.price);
      } else if (val === 'price-desc') {
        sorted.sort((a, b) => b.price - a.price);
      } else if (val === 'rating') {
        sorted.sort((a, b) => b.rating - a.rating);
      } else {
        // default restore
        sorted = [...currentFilteredProducts];
      }
      renderListing(sorted);
    });
  }

  // Setup Price Filter Slider
  const priceSlider = document.getElementById('priceRange');
  const priceValLabel = document.getElementById('priceVal');
  if (priceSlider && priceValLabel) {
    priceSlider.addEventListener('input', (e) => {
      const maxVal = parseInt(e.target.value);
      priceValLabel.innerText = `$${maxVal.toLocaleString()}`;
      
      const filteredByPrice = currentFilteredProducts.filter(p => p.price <= maxVal);
      renderListing(filteredByPrice);
    });
  }
}

function renderListing(items) {
  const grid = document.getElementById('productGrid');
  const countLabel = document.getElementById('resultsCount');
  
  if (countLabel) {
    countLabel.innerText = `顯示所有 ${items.length} 項結果`;
  }
  
  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: var(--color-text-muted);">
        <i class="ri-information-line" style="font-size: 48px; color: var(--color-accent); display: block; margin-bottom: 16px;"></i>
        <h3>找不到符合篩選條件的商品</h3>
        <p style="margin-top: 8px;">請嘗試調整您的篩選條件。</p>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = items.map(p => generateProductCardHTML(p)).join('');
}

function generateProductCardHTML(p) {
  let badgeHTML = '';
  if (p.isNew) badgeHTML += `<span class="p-badge p-badge-new">新品</span>`;
  if (p.isHot) badgeHTML += `<span class="p-badge p-badge-hot">熱銷</span>`;
  if (p.salesRank > 0) badgeHTML += `<span class="p-badge p-badge-rank"><i class="ri-fire-fill"></i> Rank ${p.salesRank}</span>`;

  return `
    <article class="product-card">
      <div class="product-img-box">
        <div class="product-badges">${badgeHTML}</div>
        <button class="product-fav-btn" aria-label="收藏商品"><i class="ri-heart-line"></i></button>
        <a href="product.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}">
        </a>
      </div>
      <div class="product-info">
        <span class="product-cat">${p.categoryName}</span>
        <a href="product.html?id=${p.id}">
          <h3 class="product-name">${p.name}</h3>
        </a>
        <div class="product-meta">
          <span class="product-price">NT$ ${p.price.toLocaleString()}</span>
          <span class="product-rating"><i class="ri-star-fill"></i> ${p.rating.toFixed(1)}</span>
        </div>
      </div>
    </article>
  `;
}

/* --- PRODUCT DETAIL HYDRATION --- */

function initDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  
  if (isNaN(id)) {
    window.location.href = 'index.html';
    return;
  }

  const p = products.find(item => item.id === id);
  if (!p) {
    window.location.href = 'index.html';
    return;
  }

  // Set page meta details
  document.title = `${p.name} | SOLE VIBE 舒步脈動`;
  
  // Hydrate image
  const imgBox = document.getElementById('detailImgBox');
  if (imgBox) {
    imgBox.innerHTML = `<img src="${p.image}" alt="${p.name}">`;
  }

  // Hydrate titles & info
  document.getElementById('detailCategory').innerText = p.categoryName;
  document.getElementById('detailTitle').innerText = p.name;
  document.getElementById('detailPrice').innerText = `NT$ ${p.price.toLocaleString()}`;
  document.getElementById('detailRating').innerHTML = `<i class="ri-star-fill" style="color:#fbbf24;"></i> ${p.rating.toFixed(1)} (客戶評分)`;
  document.getElementById('detailDesc').innerText = p.desc;

  // Hydrate features
  const featUl = document.getElementById('detailFeatures');
  if (featUl) {
    featUl.innerHTML = p.features.map(f => `<li style="display:flex; align-items:center; gap:8px; margin-bottom:10px;"><i class="ri-checkbox-circle-line" style="color:var(--color-success);"></i> ${f}</li>`).join('');
  }

  // Hydrate specs
  const specsTable = document.getElementById('detailSpecs');
  if (specsTable) {
    let rowsHTML = '';
    for (const [key, val] of Object.entries(p.specifications)) {
      rowsHTML += `
        <tr>
          <td>${key}</td>
          <td>${val}</td>
        </tr>
      `;
    }
    specsTable.innerHTML = rowsHTML;
  }

  // Setup sizes click
  const sizeBtns = document.querySelectorAll('.size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Setup quantity increments
  const qtyInput = document.getElementById('qtyInput');
  const btnMinus = document.getElementById('qtyMinus');
  const btnPlus = document.getElementById('qtyPlus');
  
  if (qtyInput && btnMinus && btnPlus) {
    btnMinus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value);
      if (val > 1) qtyInput.value = val - 1;
    });

    btnPlus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value);
      qtyInput.value = val + 1;
    });
  }

  // Setup Add To Cart
  const addCartBtn = document.getElementById('addCartBtn');
  if (addCartBtn) {
    addCartBtn.addEventListener('click', () => {
      // Find active size
      const activeSize = document.querySelector('.size-btn.active');
      if (!activeSize && sizeBtns.length > 0) {
        showToastAlert('請先選擇您的尺寸！');
        return;
      }
      
      const qty = parseInt(qtyInput.value) || 1;
      updateCartCount(qty);
    });
  }

  // Render "You May Also Like"
  const recommendationGrid = document.getElementById('recommendationsGrid');
  if (recommendationGrid) {
    const recommended = products.filter(item => item.id !== p.id && item.category === p.category).slice(0, 4);
    recommendationGrid.innerHTML = recommended.map(item => generateProductCardHTML(item)).join('');
  }
}

function showToastAlert(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #ef4444;
    color: white;
    padding: 16px 28px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    z-index: 9999;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-left: 4px solid #b91c1c;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  `;
  toast.innerHTML = `<i class="ri-error-warning-fill" style="color: white; font-size: 20px;"></i> ${message}`;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* --- CONTACT PAGE LOGIC --- */

function initContactPage() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate API request
    const btn = form.querySelector('button[type="submit"]');
    const origText = btn.innerText;
    btn.innerText = '傳送中...';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerText = origText;
      btn.disabled = false;
      
      // Clear form
      form.reset();

      // Show success modal overlay
      showModalSuccess();
    }, 1500);
  });
}

function showModalSuccess() {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  
  const modal = document.createElement('div');
  modal.style.cssText = `
    background-color: white;
    border-radius: 20px;
    padding: 40px;
    max-width: 480px;
    width: 90%;
    text-align: center;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transform: scale(0.8);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-top: 5px solid #d97706;
  `;
  
  modal.innerHTML = `
    <div style="width: 72px; height: 72px; border-radius: 50%; background-color: rgba(16, 185, 129, 0.1); display: flex; justify-content: center; align-items: center; margin: 0 auto 24px;">
      <i class="ri-checkbox-circle-fill" style="color: #10b981; font-size: 40px;"></i>
    </div>
    <h3 style="font-family: 'Outfit', sans-serif; font-size: 24px; font-weight: 800; margin-bottom: 12px; color: #0f172a;">留言已成功送出！</h3>
    <p style="color: #64748b; font-size: 15px; line-height: 1.6; margin-bottom: 30px;">
      感謝您的聯絡！我們的客服專員將於 24 小時內與您聯繫，請隨時留意您的電子信箱或行動電話。
    </p>
    <button id="closeModalBtn" class="btn btn-primary" style="width: 100%;">我知道了</button>
  `;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  // animate show
  setTimeout(() => {
    overlay.style.opacity = '1';
    modal.style.transform = 'scale(1)';
  }, 50);

  const close = () => {
    overlay.style.opacity = '0';
    modal.style.transform = 'scale(0.8)';
    setTimeout(() => overlay.remove(), 300);
  };

  modal.querySelector('#closeModalBtn').addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
}
