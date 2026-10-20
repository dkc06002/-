/* ==========================================================================
   LUEUR NAIL (뤼에르 네일) - STORE JAVASCRIPT ENGINE
   Full Interactive Experience: Curation, Sizing, Cart, Wishlist, Detail Modal
   ========================================================================== */

// --- 1. Products Database ---
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "밀키 블러썸 핑크 수제 네일팁",
    subtitle: "물먹은 벚꽃 시럽 베이스에 은은하게 흩날리는 글리터 펄",
    price: 16800,
    originPrice: 21000,
    discount: "20%",
    rating: 4.9,
    reviewCount: 384,
    category: "러블리",
    shape: "숏 오벌",
    tone: "핑크",
    badge: "BEST",
    isBest: true,
    isNew: false,
    isSale: true,
    images: [
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80"
    ],
    featureDesc: "투명하고 맑은 수채화 발색의 핑크 젤을 3회 레이어링하여 자연 손톱의 붉은 기를 가장 건강하고 청순하게 보정해줍니다. 일상생활에 걸림 없는 숏 오벌 쉐입으로 자연스러운 내 손톱 같은 핏을 선사합니다."
  },
  {
    id: 2,
    name: "오로라 누드 글리터 앤 파츠 네일팁",
    subtitle: "빛의 각도에 따라 영롱하게 반짝이는 프리미엄 홀로그램 파츠",
    price: 19800,
    originPrice: 26000,
    discount: "24%",
    rating: 5.0,
    reviewCount: 512,
    category: "글리터",
    shape: "미디엄 아몬드",
    tone: "누드",
    badge: "BEST",
    isBest: true,
    isNew: false,
    isSale: true,
    images: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80"
    ],
    featureDesc: "빛의 방향에 따라 샴페인 골드와 은은한 바이올렛 광채를 뿜어내는 수제 오로라 파우더 시술 팁입니다. 스와로브스키 급 컷팅 스톤이 단단한 오버레이 젤에 감싸여 머리카락 걸림이 전혀 없습니다."
  },
  {
    id: 3,
    name: "프렌치 라일락 시럽 네일팁",
    subtitle: "우아하고 깨끗한 화이트 라인과 파스텔 라벤더의 부드러운 만남",
    price: 17500,
    originPrice: 22000,
    discount: "20%",
    rating: 4.9,
    reviewCount: 298,
    category: "프렌치",
    shape: "숏 스퀘어",
    tone: "라벤더",
    badge: "BEST",
    isBest: true,
    isNew: false,
    isSale: false,
    images: [
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=700&q=80"
    ],
    featureDesc: "손가락이 정갈하고 단정해 보이는 마이크로 프렌치 라인 디자인. 쿨톤/웜톤 가리지 않고 손을 뽀얗게 밝혀주는 라일락 밀크 젤이 가미되어 직장인, 학생 데일리 룩으로 강력 추천합니다."
  },
  {
    id: 4,
    name: "모던 에스프레소 실버 마그넷 네일팁",
    subtitle: "신비로운 자석 캣아이 빔과 다크 모카 시럽의 감각적인 조화",
    price: 18900,
    originPrice: 25000,
    discount: "24%",
    rating: 4.8,
    reviewCount: 215,
    category: "시크",
    shape: "코핀",
    tone: "블랙",
    badge: "BEST",
    isBest: true,
    isNew: false,
    isSale: true,
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80"
    ],
    featureDesc: "고급스러운 캣아이 마그넷 입자가 손동작마다 은빛 물결처럼 흐릅니다. 롱 앤 슬림 코핀 쉐입으로 시크하고 세련된 손끝 무드를 완성해 주며, 재킷과 니트 패션에 찰떡궁합입니다."
  },
  {
    id: 5,
    name: "퓨어 베이비 피치 스킨 네일팁",
    subtitle: "자연 손톱인 듯 투명하고 맑은 혈색을 채워주는 꾸안꾸 데일리 팁",
    price: 15400,
    originPrice: 19000,
    discount: "18%",
    rating: 4.9,
    reviewCount: 442,
    category: "데일리",
    shape: "숏 오벌",
    tone: "핑크",
    badge: "NEW",
    isBest: false,
    isNew: true,
    isSale: false,
    images: [
      "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=700&q=80"
    ],
    featureDesc: "과한 네일아트가 부담스러운 날, 손톱 본연의 예쁜 분홍빛만 맑게 살려주는 내추럴 핏 팁입니다. 티 나지 않는 자연스러움으로 면접, 웨딩 촬영, 데일리 출근용으로 재구매율 1위입니다."
  },
  {
    id: 6,
    name: "클리어 펄 웨딩 티아라 네일팁",
    subtitle: "순백의 실크 드레스와 어울리는 영롱한 진주 스톤 & 마블 아트",
    price: 22000,
    originPrice: 28000,
    discount: "21%",
    rating: 5.0,
    reviewCount: 164,
    category: "웨딩",
    shape: "미디엄 아몬드",
    tone: "화이트",
    badge: "NEW",
    isBest: false,
    isNew: true,
    isSale: true,
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80"
    ],
    featureDesc: "웨딩 스튜디오 촬영과 본식, 파티를 위해 특별히 디자인된 스페셜 에디션. 미세한 화이트 펄 입자와 정교한 마블링이 어우러져 어떤 조명 아래서도 신부의 손을 가장 돋보이게 합니다."
  },
  {
    id: 7,
    name: "스윗 하트 리본 시럽 핑크 네일팁",
    subtitle: "소녀 감성을 담은 입체 리본 파츠와 딸기 우유 시럽 그라데이션",
    price: 18500,
    originPrice: 23000,
    discount: "19%",
    rating: 4.9,
    reviewCount: 182,
    category: "러블리",
    shape: "숏 스퀘어",
    tone: "핑크",
    badge: "NEW",
    isBest: false,
    isNew: true,
    isSale: false,
    images: [
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=700&q=80"
    ],
    featureDesc: "입체적으로 얹어진 반투명 리본 오브제와 사랑스러운 딸기우유 그라데이션 젤. 모서리를 둥글게 굴린 숏 스퀘어로 귀여우면서도 편안한 착용감을 구현했습니다."
  },
  {
    id: 8,
    name: "밀키 바닐라 화이트 시럽 네일팁",
    subtitle: "따뜻한 크림빛이 감도는 부드럽고 맑은 미니멀 시럽 네일",
    price: 14800,
    originPrice: 19000,
    discount: "22%",
    rating: 4.8,
    reviewCount: 310,
    category: "데일리",
    shape: "숏 오벌",
    tone: "화이트",
    badge: "SALE",
    isBest: false,
    isNew: false,
    isSale: true,
    images: [
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80"
    ],
    featureDesc: "하얗게 뜨지 않고 피부에 착 감기는 포근한 바닐라 크림 컬러. 얇지만 단단한 강도를 유지하여 손톱이 쉽게 깨지는 분들의 보호용 팁으로도 훌륭합니다."
  }
];

// --- 2. Real Customer Reviews Database ---
const REVIEWS_DATA = [
  {
    id: 1,
    user: "김*진 님 (S사이즈 착용)",
    rating: 5,
    product: "밀키 블러썸 핑크 수제 네일팁",
    badge: "BEST PHOTO",
    type: "photo",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80",
    content: "처음 사보는 네일팁이라 사이즈 안 맞을까 봐 걱정했는데 가이드대로 재서 S 주문하니까 진짜 제 손톱인 줄 알았어요! 회사 동료들이 샵 어디 다니냐고 물어볼 정도로 자연스러워요 ㅠㅠ♡ 물 닿아도 일주일 넘게 짱짱하게 붙어있네요!"
  },
  {
    id: 2,
    user: "이*영 님 (M사이즈 착용)",
    rating: 5,
    product: "오로라 누드 글리터 앤 파츠 네일팁",
    badge: "포토리뷰",
    type: "photo",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80",
    content: "주말 데이트 때 붙였는데 햇빛 받을 때마다 오로라 광채 장난 아닙니다. 파츠 뾰족한 곳 없이 도톰한 젤로 매끄럽게 마감되어 있어서 니트 올 뜯길 걱정 없어서 너무 좋아요."
  },
  {
    id: 3,
    user: "박*희 님 (S사이즈 착용)",
    rating: 5,
    product: "프렌치 라일락 시럽 네일팁",
    badge: "포토리뷰",
    type: "photo",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80",
    content: "라일락 컬러 톤다운된 연보라라 피부가 엄청 뽀얘 보여요! 숏 스퀘어 쉐입이라 타자치거나 스마트폰할 때 이물감 0%입니다. 재사용 가능한 스티커라 떼어내고 다음 주에 또 쓰려구요!"
  },
  {
    id: 4,
    user: "정*원 님 (XS사이즈 착용)",
    rating: 5,
    product: "퓨어 베이비 피치 스킨 네일팁",
    badge: "BEST PHOTO",
    type: "photo",
    image: "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=600&q=80",
    content: "손톱 바디가 워낙 작아서 올리브영 팁들은 다 컸는데, 뤼에르는 XS 사이즈가 있어서 감동 ㅠㅠ 손톱에 착 감기는 곡률이 다른 브랜드랑 차원이 다릅니다."
  },
  {
    id: 5,
    user: "최*린 님 (M사이즈 착용)",
    rating: 5,
    product: "모던 에스프레소 실버 마그넷 네일팁",
    badge: "포토리뷰",
    type: "photo",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    content: "시크하고 힙한 무드 끝판왕... 자석 펄 움직일 때마다 진짜 샵에서 10만원 주고 받은 고급 아트 같아요. 코핀 쉐입 처음인데 손가락 두 배는 길어 보입니다 강추해요!"
  },
  {
    id: 6,
    user: "송*아 님 (S사이즈 착용)",
    rating: 5,
    product: "클리어 펄 웨딩 티아라 네일팁",
    badge: "포토리뷰",
    type: "photo",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    content: "웨딩 촬영 때 착용하려고 급하게 주문했는데 하루 만에 배송 와서 무사히 마쳤습니다. 작가님이 손끝 클로즈업 사진 너무 예쁘다고 칭찬해주셨어요!"
  }
];

// --- 3. Global App State ---
const state = {
  cart: [],
  wishlist: [1, 2], // Default sample wishes
  currentView: "home",
  shopFilters: {
    category: "all",
    shape: "all",
    tone: "all",
    price: "all",
    sort: "popular"
  },
  activeModalProduct: null,
  activeModalQty: 1
};

// --- 4. Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Load Saved Cart & Wishlist from LocalStorage if available
  try {
    const savedCart = localStorage.getItem("lueur_cart");
    if (savedCart) state.cart = JSON.parse(savedCart);
    const savedWish = localStorage.getItem("lueur_wishlist");
    if (savedWish) state.wishlist = JSON.parse(savedWish);
  } catch (e) {
    console.error("Storage load error", e);
  }

  // Initial Renders
  renderHomeProducts();
  renderShopProducts();
  renderReviews();
  updateWishlistUI();
  updateCartUI();

  // Attach Header Events
  initHeaderEvents();
  initCurationChips();

  // Check Hash on Load
  const hash = window.location.hash.replace("#", "");
  if (hash && ["home", "shop", "style", "sizeguide", "howtouse", "review", "about"].includes(hash)) {
    navigateTo(hash);
  }
});

// --- 5. Navigation & View Routing ---
function navigateTo(viewId) {
  // Hide all views
  document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
  
  // Show target view
  const targetSec = document.getElementById(`view-${viewId}`);
  if (targetSec) {
    targetSec.classList.add("active");
    state.currentView = viewId;
  }

  // Update desktop nav link active state
  document.querySelectorAll(".desktop-nav .nav-link").forEach(link => {
    if (link.getAttribute("data-target") === viewId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Update mobile bottom nav active state
  document.querySelectorAll(".mobile-bottom-bar .m-nav-item").forEach((btn, idx) => {
    btn.classList.remove("active");
    if (viewId === "home" && idx === 0) btn.classList.add("active");
    if (viewId === "shop" && idx === 1) btn.classList.add("active");
  });

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Update URL hash
  window.history.pushState(null, null, `#${viewId}`);
}

function initHeaderEvents() {
  // Mobile Drawer Open/Close
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileDrawerOverlay = document.getElementById("mobileDrawerOverlay");
  const mobileDrawerClose = document.getElementById("mobileDrawerClose");

  if (mobileMenuBtn && mobileDrawer && mobileDrawerOverlay) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileDrawer.classList.add("active");
      mobileDrawerOverlay.classList.add("active");
    });

    const closeDrawer = () => {
      mobileDrawer.classList.remove("active");
      mobileDrawerOverlay.classList.remove("active");
    };

    if (mobileDrawerClose) mobileDrawerClose.addEventListener("click", closeDrawer);
    mobileDrawerOverlay.addEventListener("click", closeDrawer);
    window.closeDrawer = closeDrawer;
  }

  // Triggers for Cart, Wishlist, Search, MyPage
  document.getElementById("cartTriggerBtn")?.addEventListener("click", openCartDrawer);
  document.getElementById("wishlistTriggerBtn")?.addEventListener("click", openWishlistModal);
  document.getElementById("searchTriggerBtn")?.addEventListener("click", openSearchModal);
  document.getElementById("myPageTriggerBtn")?.addEventListener("click", openMyPageModal);

  // Shop Category Tabs Click
  document.querySelectorAll(".shop-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".shop-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.shopFilters.category = btn.getAttribute("data-cat");
      applyShopFilters();
    });
  });
}

// --- 6. Curation Chips ("오늘 어떤 무드가 어울릴까?") ---
function initCurationChips() {
  const chips = document.querySelectorAll(".curation-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");

      const filter = chip.getAttribute("data-filter");
      renderBestSellers(filter);
    });
  });
}

function openStyleCategory(catName) {
  state.shopFilters.category = catName;
  navigateTo("shop");
  
  // Update shop tabs
  document.querySelectorAll(".shop-tab-btn").forEach(b => {
    b.classList.remove("active");
    if (b.getAttribute("data-cat") === catName) b.classList.add("active");
  });

  applyShopFilters();
}

function filterByStyleAndGoShop(styleName) {
  openStyleCategory(styleName);
}

// --- 7. Product Rendering Logic ---
function renderHomeProducts() {
  renderBestSellers("all");
  renderNewArrivals();
  renderHomeReviews();
}

function renderBestSellers(filter) {
  const grid = document.getElementById("bestSellerGrid");
  if (!grid) return;

  let items = PRODUCTS_DATA.filter(p => p.isBest);
  if (filter && filter !== "all") {
    items = PRODUCTS_DATA.filter(p => p.category === filter);
  }

  grid.innerHTML = items.slice(0, 4).map(product => createProductCardHTML(product)).join("");
  if (window.lucide) window.lucide.createIcons();
}

function renderNewArrivals() {
  const grid = document.getElementById("newArrivalGrid");
  if (!grid) return;

  const items = PRODUCTS_DATA.filter(p => p.isNew);
  grid.innerHTML = items.slice(0, 4).map(product => createProductCardHTML(product)).join("");
  if (window.lucide) window.lucide.createIcons();
}

function renderHomeReviews() {
  const grid = document.getElementById("homeReviewGrid");
  if (!grid) return;

  grid.innerHTML = REVIEWS_DATA.slice(0, 3).map(rev => `
    <div class="review-card">
      <div class="review-img-box">
        <img src="${rev.image}" alt="${rev.product} 착용샷" loading="lazy">
      </div>
      <div class="review-body">
        <div class="review-meta">
          <span class="stars-gold">${"★".repeat(rev.rating)}</span>
          <span class="review-user">${rev.user}</span>
        </div>
        <div class="review-prod-name">${rev.product}</div>
        <p class="review-content">"${rev.content}"</p>
        <span class="review-badge">${rev.badge}</span>
      </div>
    </div>
  `).join("");
}

function createProductCardHTML(prod) {
  const isWished = state.wishlist.includes(prod.id);
  const hoverImg = prod.images[1] || prod.images[0];

  return `
    <div class="product-card" data-id="${prod.id}">
      <div class="card-media" onclick="openProductModal(${prod.id})">
        <img src="${prod.images[0]}" alt="${prod.name}" class="card-img-primary" loading="lazy">
        <img src="${hoverImg}" alt="${prod.name} 착용컷" class="card-img-hover" loading="lazy">
        ${prod.badge ? `<span class="card-badge ${prod.badge.toLowerCase()}">${prod.badge}</span>` : ""}
        <button class="card-wish-btn ${isWished ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${prod.id})" aria-label="찜하기">
          <i data-lucide="heart" ${isWished ? 'style="fill:#FF5A5F"' : ''}></i>
        </button>
        <div class="card-quick-cart" onclick="event.stopPropagation(); quickAddToCart(${prod.id})">
          + 장바구니 바로담기
        </div>
      </div>
      <div class="card-info">
        <span class="card-tag">${prod.category} • ${prod.shape}</span>
        <h4 class="card-title" onclick="openProductModal(${prod.id})">${prod.name}</h4>
        <div class="card-rating">
          <span class="stars-gold">★</span>
          <span>${prod.rating}</span>
          <span>(${prod.reviewCount})</span>
        </div>
        <div class="card-price-row">
          <span class="card-discount">${prod.discount}</span>
          <span class="card-price">${prod.price.toLocaleString()}원</span>
          <span class="card-origin-price">${prod.originPrice.toLocaleString()}원</span>
        </div>
      </div>
    </div>
  `;
}

// --- 8. SHOP Filtering & Sorting ---
function renderShopProducts() {
  applyShopFilters();
}

function applyShopFilters() {
  const shapeVal = document.getElementById("shapeFilter") ? document.getElementById("shapeFilter").value : "all";
  const toneVal = document.getElementById("toneFilter") ? document.getElementById("toneFilter").value : "all";
  const priceVal = document.getElementById("priceFilter") ? document.getElementById("priceFilter").value : "all";
  const sortVal = document.getElementById("sortOrder") ? document.getElementById("sortOrder").value : "popular";

  let filtered = [...PRODUCTS_DATA];

  // 1. Category Filter
  const cat = state.shopFilters.category;
  if (cat === "best") {
    filtered = filtered.filter(p => p.isBest);
  } else if (cat === "new") {
    filtered = filtered.filter(p => p.isNew);
  } else if (cat === "sale") {
    filtered = filtered.filter(p => p.isSale);
  } else if (cat !== "all") {
    filtered = filtered.filter(p => p.category === cat);
  }

  // 2. Shape Filter
  if (shapeVal !== "all") {
    filtered = filtered.filter(p => p.shape === shapeVal);
  }

  // 3. Tone Filter
  if (toneVal !== "all") {
    filtered = filtered.filter(p => p.tone === toneVal);
  }

  // 4. Price Filter
  if (priceVal === "under15") {
    filtered = filtered.filter(p => p.price <= 15000);
  } else if (priceVal === "15to20") {
    filtered = filtered.filter(p => p.price > 15000 && p.price <= 20000);
  } else if (priceVal === "over20") {
    filtered = filtered.filter(p => p.price > 20000);
  }

  // 5. Sort
  if (sortVal === "popular") {
    filtered.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
  } else if (sortVal === "new") {
    filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  } else if (sortVal === "review") {
    filtered.sort((a, b) => b.reviewCount - a.reviewCount);
  } else if (sortVal === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortVal === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  // Render to DOM
  const grid = document.getElementById("shopProductGrid");
  const countEl = document.getElementById("shopProductCount");
  const emptyState = document.getElementById("emptyShopState");

  if (countEl) countEl.innerText = filtered.length;

  if (grid) {
    if (filtered.length === 0) {
      grid.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
    } else {
      if (emptyState) emptyState.style.display = "none";
      grid.innerHTML = filtered.map(prod => createProductCardHTML(prod)).join("");
    }
    if (window.lucide) window.lucide.createIcons();
  }
}

function resetShopFilters() {
  document.getElementById("shapeFilter").value = "all";
  document.getElementById("toneFilter").value = "all";
  document.getElementById("priceFilter").value = "all";
  document.getElementById("sortOrder").value = "popular";
  state.shopFilters.category = "all";

  document.querySelectorAll(".shop-tab-btn").forEach(b => {
    b.classList.remove("active");
    if (b.getAttribute("data-cat") === "all") b.classList.add("active");
  });

  applyShopFilters();
}

// --- 9. Product Detail Modal Engine ---
function openProductModal(prodId) {
  const prod = PRODUCTS_DATA.find(p => p.id === prodId);
  if (!prod) return;

  state.activeModalProduct = prod;
  state.activeModalQty = 1;

  // DOM Elements
  document.getElementById("modalMainImg").src = prod.images[0];
  document.getElementById("modalTitle").innerText = prod.name;
  document.getElementById("modalSubtitle").innerText = prod.subtitle;
  document.getElementById("modalPrice").innerText = prod.price.toLocaleString() + "원";
  document.getElementById("modalOriginPrice").innerText = prod.originPrice.toLocaleString() + "원";
  document.getElementById("modalDiscount").innerText = prod.discount;
  document.getElementById("modalRating").innerText = prod.rating;
  document.getElementById("modalReviewCount").innerText = `(리뷰 ${prod.reviewCount}개)`;
  document.getElementById("modalBadge").innerText = prod.badge || prod.category;
  document.getElementById("modalQty").value = "1";
  document.getElementById("modalFeatureDesc").innerHTML = `<p>${prod.featureDesc}</p>`;

  // Thumbnails
  const thumbsContainer = document.getElementById("modalThumbs");
  thumbsContainer.innerHTML = prod.images.map((img, index) => `
    <div class="thumb-item ${index === 0 ? 'active' : ''}" onclick="switchModalThumb('${img}', this)">
      <img src="${img}" alt="썸네일 ${index + 1}">
    </div>
  `).join("");

  // Wish Button State in Modal
  const modalWishBtn = document.getElementById("modalWishBtn");
  const isWished = state.wishlist.includes(prod.id);
  if (isWished) {
    modalWishBtn.classList.add("active");
    modalWishBtn.innerHTML = '<i data-lucide="heart" style="fill:#FF5A5F"></i>';
  } else {
    modalWishBtn.classList.remove("active");
    modalWishBtn.innerHTML = '<i data-lucide="heart"></i>';
  }

  // Update total price calculation
  updateModalPrice();

  // Show Modal
  document.getElementById("productModalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";

  if (window.lucide) window.lucide.createIcons();
}

function switchModalThumb(imgSrc, thumbEl) {
  document.getElementById("modalMainImg").src = imgSrc;
  document.querySelectorAll(".thumb-item").forEach(t => t.classList.remove("active"));
  thumbEl.classList.add("active");
}

function closeProductModal(e) {
  if (e && e.target && e.target.id !== "productModalOverlay" && !e.target.closest(".modal-close-btn")) {
    return;
  }
  document.getElementById("productModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function changeModalQty(delta) {
  let qty = state.activeModalQty + delta;
  if (qty < 1) qty = 1;
  if (qty > 10) {
    showToast("수제 제작 특성상 1회 최대 10개까지 주문 가능합니다.");
    qty = 10;
  }
  state.activeModalQty = qty;
  document.getElementById("modalQty").value = qty;
  updateModalPrice();
}

function updateModalPrice() {
  if (!state.activeModalProduct) return;

  const basePrice = state.activeModalProduct.price;
  const shape = document.getElementById("optShape").value;
  const kit = document.getElementById("optKit").value;

  let extra = 0;
  if (shape === "미디엄 아몬드" || shape === "코핀") extra += 1000;
  if (kit === "glue") extra += 2500;
  if (kit === "sticker") extra += 1500;

  const total = (basePrice + extra) * state.activeModalQty;
  document.getElementById("modalTotalPrice").innerText = total.toLocaleString() + "원";
}

function openSizeGuideQuickModal() {
  closeProductModal();
  navigateTo("sizeguide");
}

function toggleModalWish() {
  if (!state.activeModalProduct) return;
  toggleWishlist(state.activeModalProduct.id);
  const isWished = state.wishlist.includes(state.activeModalProduct.id);
  const btn = document.getElementById("modalWishBtn");
  if (isWished) {
    btn.classList.add("active");
    btn.innerHTML = '<i data-lucide="heart" style="fill:#FF5A5F"></i>';
  } else {
    btn.classList.remove("active");
    btn.innerHTML = '<i data-lucide="heart"></i>';
  }
  if (window.lucide) window.lucide.createIcons();
}

// --- 10. Cart Drawer & Purchase Engine ---
function addModalToCart() {
  if (!state.activeModalProduct) return;

  const shape = document.getElementById("optShape").value;
  const size = document.getElementById("optSize").value;
  const kit = document.getElementById("optKit").value;

  let kitName = "기본 무료 키트";
  let kitPrice = 0;
  if (kit === "glue") { kitName = "방수 젤글루 추가"; kitPrice = 2500; }
  if (kit === "sticker") { kitName = "젤스티커 2회분 추가"; kitPrice = 1500; }

  let shapeExtra = (shape === "미디엄 아몬드" || shape === "코핀") ? 1000 : 0;
  const itemUnitPrice = state.activeModalProduct.price + shapeExtra + kitPrice;

  const cartItem = {
    id: Date.now(),
    productId: state.activeModalProduct.id,
    name: state.activeModalProduct.name,
    image: state.activeModalProduct.images[0],
    shape: shape,
    size: size,
    kitName: kitName,
    unitPrice: itemUnitPrice,
    qty: state.activeModalQty
  };

  addToCart(cartItem);
  closeProductModal();
  openCartDrawer();
}

function quickAddToCart(prodId) {
  const prod = PRODUCTS_DATA.find(p => p.id === prodId);
  if (!prod) return;

  const cartItem = {
    id: Date.now(),
    productId: prod.id,
    name: prod.name,
    image: prod.images[0],
    shape: prod.shape,
    size: "S",
    kitName: "기본 무료 키트",
    unitPrice: prod.price,
    qty: 1
  };

  addToCart(cartItem);
  openCartDrawer();
}

function buyModalNow() {
  addModalToCart();
  closeCartDrawer();
  openCheckoutModal();
}

function addToCart(item) {
  // Check if identical item already exists
  const existing = state.cart.find(c => 
    c.productId === item.productId && 
    c.shape === item.shape && 
    c.size === item.size && 
    c.kitName === item.kitName
  );

  if (existing) {
    existing.qty += item.qty;
  } else {
    state.cart.unshift(item);
  }

  saveCart();
  updateCartUI();
  showToast("장바구니에 상품을 담았습니다. 🛍️");
}

function saveCart() {
  try {
    localStorage.setItem("lueur_cart", JSON.stringify(state.cart));
  } catch (e) {}
}

function updateCartUI() {
  const countEls = document.querySelectorAll(".cart-count");
  const totalItemsCount = state.cart.reduce((sum, item) => sum + item.qty, 0);

  countEls.forEach(el => {
    el.innerText = totalItemsCount;
    el.style.display = totalItemsCount > 0 ? "flex" : "none";
  });

  const cartItemsCountTitle = document.getElementById("cartTotalItemsCount");
  if (cartItemsCountTitle) cartItemsCountTitle.innerText = totalItemsCount;

  // Render items in drawer
  const container = document.getElementById("cartItemsList");
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-msg">
        <i data-lucide="shopping-bag"></i>
        <p>장바구니가 비어 있습니다.<br>마음에 드는 네일팁을 담아보세요!</p>
      </div>
    `;
  } else {
    container.innerHTML = state.cart.map((item, index) => `
      <div class="cart-item-card">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-opt">${item.shape} / ${item.size}호 / ${item.kitName}</span>
          <div class="cart-item-bottom">
            <div class="qty-stepper">
              <button onclick="changeCartQty(${index}, -1)">-</button>
              <input type="text" value="${item.qty}" readonly>
              <button onclick="changeCartQty(${index}, 1)">+</button>
            </div>
            <span class="cart-item-price">${(item.unitPrice * item.qty).toLocaleString()}원</span>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${index})" aria-label="삭제">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    `).join("");
  }

  // Calculate Totals & Free Delivery Bar
  const subtotal = state.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  const freeThreshold = 30000;
  const shippingFee = (subtotal >= freeThreshold || subtotal === 0) ? 0 : 3000;
  const finalTotal = subtotal + shippingFee;

  document.getElementById("cartSubtotal").innerText = subtotal.toLocaleString() + "원";
  document.getElementById("cartShippingFee").innerText = (shippingFee === 0 && subtotal > 0) ? "무료배송" : (shippingFee.toLocaleString() + "원");
  document.getElementById("cartFinalTotal").innerText = finalTotal.toLocaleString() + "원";
  document.getElementById("checkoutTotalAmount").innerText = finalTotal.toLocaleString() + "원";

  // Progress Bar
  const freeShipText = document.getElementById("freeShipText");
  const freeShipProgress = document.getElementById("freeShipProgress");
  if (subtotal >= freeThreshold) {
    freeShipText.innerHTML = "🎉 <strong>무료배송</strong> 혜택이 적용되었습니다!";
    freeShipProgress.style.width = "100%";
    freeShipProgress.style.backgroundColor = "#3B7258";
  } else {
    const diff = freeThreshold - subtotal;
    freeShipText.innerHTML = `<strong>${diff.toLocaleString()}원</strong> 더 담으면 무료배송!`;
    const percent = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
    freeShipProgress.style.width = `${percent}%`;
    freeShipProgress.style.backgroundColor = "var(--primary-rose)";
  }

  if (window.lucide) window.lucide.createIcons();
}

function changeCartQty(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast("상품이 장바구니에서 삭제되었습니다.");
}

function openCartDrawer() {
  document.getElementById("cartDrawer").classList.add("active");
  document.getElementById("cartOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  document.getElementById("cartDrawer").classList.remove("active");
  document.getElementById("cartOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// --- 11. Checkout & Order Engine ---
function openCheckoutFromCart() {
  if (state.cart.length === 0) {
    showToast("장바구니에 담긴 상품이 없습니다.");
    return;
  }
  closeCartDrawer();
  openCheckoutModal();
}

function openCheckoutModal() {
  recalculateCheckout();
  document.getElementById("checkoutModalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
  if (window.lucide) window.lucide.createIcons();
}

function closeCheckoutModal() {
  document.getElementById("checkoutModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function recalculateCheckout() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  const couponDiscount = parseInt(document.getElementById("couponSelect").value || 0, 10);
  const shippingFee = (subtotal >= 30000 || subtotal === 0) ? 0 : 3000;
  const finalAmount = Math.max(0, subtotal - couponDiscount + shippingFee);

  document.getElementById("chkSubtotal").innerText = subtotal.toLocaleString() + "원";
  document.getElementById("chkDiscount").innerText = couponDiscount > 0 ? `-${couponDiscount.toLocaleString()}원` : "0원";
  document.getElementById("chkDelivery").innerText = shippingFee === 0 ? "무료배송" : `${shippingFee.toLocaleString()}원`;
  document.getElementById("chkFinalAmount").innerText = finalAmount.toLocaleString() + "원";
}

function completeCheckout() {
  const orderName = document.getElementById("orderName").value.trim();
  const orderPhone = document.getElementById("orderPhone").value.trim();
  const orderAddress = document.getElementById("orderAddress").value.trim();

  if (!orderName || !orderPhone || !orderAddress) {
    alert("받으시는 분의 성함, 연락처, 주소를 모두 입력해주세요.");
    return;
  }

  // Clear Cart
  state.cart = [];
  saveCart();
  updateCartUI();

  // Close Checkout Modal & Open Success Modal
  closeCheckoutModal();
  document.getElementById("orderSuccessModal").classList.add("active");
  if (window.lucide) window.lucide.createIcons();
}

function closeOrderSuccessModal() {
  document.getElementById("orderSuccessModal").classList.remove("active");
}

// --- 12. Wishlist Management ---
function toggleWishlist(prodId) {
  const index = state.wishlist.indexOf(prodId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast("찜 목록에서 제외되었습니다.");
  } else {
    state.wishlist.push(prodId);
    showToast("찜 목록에 추가되었습니다. 💗");
  }

  try {
    localStorage.setItem("lueur_wishlist", JSON.stringify(state.wishlist));
  } catch (e) {}

  updateWishlistUI();

  // Update hearts in view
  document.querySelectorAll(`.product-card[data-id="${prodId}"] .card-wish-btn`).forEach(btn => {
    const isWished = state.wishlist.includes(prodId);
    if (isWished) {
      btn.classList.add("active");
      btn.innerHTML = '<i data-lucide="heart" style="fill:#FF5A5F"></i>';
    } else {
      btn.classList.remove("active");
      btn.innerHTML = '<i data-lucide="heart"></i>';
    }
  });

  if (window.lucide) window.lucide.createIcons();
}

function updateWishlistUI() {
  const count = state.wishlist.length;
  document.querySelectorAll(".wishlist-count").forEach(el => {
    el.innerText = `${count}${el.tagName === 'SPAN' && el.parentElement.classList.contains('stat-box') ? '개' : ''}`;
    if (!el.parentElement.classList.contains('stat-box')) {
      el.style.display = count > 0 ? "flex" : "none";
    }
  });

  const modalCount = document.getElementById("wishlistCountModal");
  if (modalCount) modalCount.innerText = count;

  // Render items in wishlist modal
  const container = document.getElementById("wishlistItemsList");
  if (!container) return;

  const wishedProducts = PRODUCTS_DATA.filter(p => state.wishlist.includes(p.id));
  if (wishedProducts.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-msg">
        <i data-lucide="heart"></i>
        <p>찜한 네일팁이 없습니다.<br>하트 아이콘을 눌러 관심 상품을 모아보세요!</p>
      </div>
    `;
  } else {
    container.innerHTML = wishedProducts.map(prod => `
      <div class="cart-item-card">
        <div class="cart-item-img" onclick="closeWishlistModal(); openProductModal(${prod.id});" style="cursor:pointer">
          <img src="${prod.images[0]}" alt="${prod.name}">
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-title" onclick="closeWishlistModal(); openProductModal(${prod.id});" style="cursor:pointer">${prod.name}</h4>
          <span class="cart-item-opt">${prod.category} • ${prod.shape}</span>
          <div class="cart-item-bottom">
            <span class="cart-item-price">${prod.price.toLocaleString()}원</span>
            <button class="btn btn-primary btn-sm" onclick="quickAddToCart(${prod.id}); closeWishlistModal();">
              장바구니 담기
            </button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="toggleWishlist(${prod.id})" aria-label="삭제">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    `).join("");
  }

  if (window.lucide) window.lucide.createIcons();
}

function openWishlistModal() {
  updateWishlistUI();
  document.getElementById("wishlistModalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
  if (window.lucide) window.lucide.createIcons();
}

function closeWishlistModal(e) {
  if (e && e.target && e.target.id !== "wishlistModalOverlay" && !e.target.closest(".modal-close-btn")) {
    return;
  }
  document.getElementById("wishlistModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// --- 13. Smart Size Calculator Engine ---
function calculateMySize() {
  const thumb = parseFloat(document.getElementById("thumbMm").value) || 15;
  const index = parseFloat(document.getElementById("indexMm").value) || 11.5;
  const middle = parseFloat(document.getElementById("middleMm").value) || 12;
  const ring = parseFloat(document.getElementById("ringMm").value) || 11;
  const pinky = parseFloat(document.getElementById("pinkyMm").value) || 8.5;

  // Standard Finger Sizes:
  // XS: 14, 10.5, 11, 10, 7.5
  // S:  15, 11.5, 12, 11, 8.5
  // M:  16, 12.5, 13, 12, 9.5
  // L:  17, 13.5, 14, 13, 10.5

  const standards = {
    "XS": [14, 10.5, 11, 10, 7.5],
    "S": [15, 11.5, 12, 11, 8.5],
    "M": [16, 12.5, 13, 12, 9.5],
    "L": [17, 13.5, 14, 13, 10.5]
  };

  const userSizes = [thumb, index, middle, ring, pinky];
  let closestSize = "S";
  let minDiff = 999;

  for (const [sizeName, arr] of Object.entries(standards)) {
    let diff = 0;
    for (let i = 0; i < 5; i++) {
      diff += Math.abs(userSizes[i] - arr[i]);
    }
    if (diff < minDiff) {
      minDiff = diff;
      closestSize = sizeName;
    }
  }

  const resultBox = document.getElementById("calcResultBox");
  const resultTitle = document.getElementById("calcResultTitle");
  const resultDesc = document.getElementById("calcResultDesc");

  resultTitle.innerHTML = `고객님께 가장 잘 맞는 사이즈는 <strong>[ ${closestSize} (${getSizeLabel(closestSize)}) ]</strong> 입니다!`;
  resultDesc.innerHTML = `입력하신 규격(엄지 ${thumb}mm, 검지 ${index}mm, 중지 ${middle}mm, 약지 ${ring}mm, 소지 ${pinky}mm)을 분석한 결과, 표준 <strong>${closestSize} 호수</strong>와 가장 적합합니다.`;
  
  resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  showToast(`추천 사이즈 [${closestSize}] 진단이 완료되었습니다 ✨`);
}

function getSizeLabel(size) {
  switch (size) {
    case "XS": return "Extra Small";
    case "S": return "Small - 대중적 표준";
    case "M": return "Medium";
    case "L": return "Large";
    default: return "";
  }
}

function loadDefaultSize(size) {
  if (size === "S") {
    document.getElementById("thumbMm").value = 15;
    document.getElementById("indexMm").value = 11.5;
    document.getElementById("middleMm").value = 12;
    document.getElementById("ringMm").value = 11;
    document.getElementById("pinkyMm").value = 8.5;
  } else if (size === "M") {
    document.getElementById("thumbMm").value = 16;
    document.getElementById("indexMm").value = 12.5;
    document.getElementById("middleMm").value = 13;
    document.getElementById("ringMm").value = 12;
    document.getElementById("pinkyMm").value = 9.5;
  }
  calculateMySize();
}

// --- 14. Global Search Modal Engine ---
function openSearchModal() {
  document.getElementById("searchModalOverlay").classList.add("active");
  document.getElementById("globalSearchInput").focus();
  document.body.style.overflow = "hidden";
  if (window.lucide) window.lucide.createIcons();
}

function closeSearchModal(e) {
  if (e && e.target && e.target.id !== "searchModalOverlay" && !e.target.closest(".search-clear-btn")) {
    return;
  }
  document.getElementById("searchModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function clearSearchInput() {
  document.getElementById("globalSearchInput").value = "";
  handleSearchInput();
}

function quickSearch(word) {
  const input = document.getElementById("globalSearchInput");
  input.value = word;
  handleSearchInput();
}

function handleSearchInput() {
  const query = document.getElementById("globalSearchInput").value.trim().toLowerCase();
  const resultsContainer = document.getElementById("searchResultsArea");

  if (!query) {
    resultsContainer.innerHTML = `<p class="search-placeholder-text">검색어를 입력하시면 실시간으로 매칭되는 네일팁을 보여드립니다.</p>`;
    return;
  }

  const matches = PRODUCTS_DATA.filter(p => 
    p.name.toLowerCase().includes(query) ||
    p.subtitle.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.shape.toLowerCase().includes(query) ||
    p.tone.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div class="empty-product-state" style="padding:30px 0;">
        <i data-lucide="search-x"></i>
        <h3>'${query}'에 대한 검색 결과가 없습니다.</h3>
        <p>인기 키워드: 핑크, 프렌치, 글리터, 숏스퀘어</p>
      </div>
    `;
  } else {
    resultsContainer.innerHTML = matches.map(prod => `
      <div class="cart-item-card" onclick="closeSearchModal(); openProductModal(${prod.id});" style="cursor:pointer">
        <div class="cart-item-img">
          <img src="${prod.images[0]}" alt="${prod.name}">
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-title">${prod.name}</h4>
          <span class="cart-item-opt">${prod.category} • ${prod.shape} • ${prod.tone}</span>
          <div class="cart-item-bottom">
            <span class="card-discount">${prod.discount}</span>
            <span class="cart-item-price">${prod.price.toLocaleString()}원</span>
          </div>
        </div>
      </div>
    `).join("");
  }

  if (window.lucide) window.lucide.createIcons();
}

// --- 15. Reviews Filter & Submission ---
function renderReviews(filterType = "all") {
  const listEl = document.getElementById("fullReviewList");
  if (!listEl) return;

  let filtered = [...REVIEWS_DATA];
  if (filterType === "photo") {
    filtered = filtered.filter(r => r.type === "photo");
  } else if (filterType === "best") {
    filtered = filtered.filter(r => r.badge.includes("BEST"));
  }

  listEl.innerHTML = filtered.map(rev => `
    <div class="review-card">
      <div class="review-img-box">
        <img src="${rev.image}" alt="${rev.product} 착용 후기" loading="lazy">
      </div>
      <div class="review-body">
        <div class="review-meta">
          <span class="stars-gold">${"★".repeat(rev.rating)}</span>
          <span class="review-user">${rev.user}</span>
        </div>
        <div class="review-prod-name">${rev.product}</div>
        <p class="review-content">"${rev.content}"</p>
        <span class="review-badge">${rev.badge}</span>
      </div>
    </div>
  `).join("");
}

function filterReviews(type, btnEl) {
  document.querySelectorAll(".rf-chip").forEach(b => b.classList.remove("active"));
  btnEl.classList.add("active");
  renderReviews(type);
}

function openReviewModal() {
  document.getElementById("writeReviewModalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeReviewModal(e) {
  if (e && e.target && e.target.id !== "writeReviewModalOverlay" && !e.target.closest(".modal-close-btn")) {
    return;
  }
  document.getElementById("writeReviewModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function selectStar(score) {
  const stars = document.querySelectorAll(".star-rating-select .star-btn");
  stars.forEach((s, idx) => {
    if (idx < score) s.classList.add("active");
    else s.classList.remove("active");
  });
}

function submitReview() {
  const prodName = document.getElementById("reviewProdSelect").value;
  const content = document.getElementById("reviewText").value.trim();
  const customImg = document.getElementById("reviewImgUrl").value.trim();

  if (!content) {
    alert("리뷰 내용을 한 줄 이상 입력해주세요.");
    return;
  }

  const newRev = {
    id: Date.now(),
    user: "안*진 님 (방금 작성)",
    rating: 5,
    product: prodName,
    badge: "NEW REVIEW",
    type: "photo",
    image: customImg || "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80",
    content: content
  };

  REVIEWS_DATA.unshift(newRev);
  renderReviews("all");
  closeReviewModal();
  showToast("리뷰가 등록되어 적립금 1,000원이 지급되었습니다! 🌸");
}

// --- 16. Policy & FAQ Modal Engine ---
function openPolicyModal(type) {
  const overlay = document.getElementById("policyModalOverlay");
  const title = document.getElementById("policyModalTitle");
  const content = document.getElementById("policyModalContent");

  if (type === "delivery") {
    title.innerText = "우체국 택배 안전 배송 안내";
    content.innerHTML = `
      <h4>1. 배송 기간 및 출고 안내</h4>
      <p>뤼에르의 모든 네일팁은 전문 네일리스트가 정성스럽게 큐어링하는 100% 수제 젤 시술 제품입니다. 주문 접수 후 제작되어 <strong>영업일 기준 1~2일 이내</strong> 안전하게 발송됩니다.</p>
      <h4>2. 배송비 혜택</h4>
      <p>기본 배송비는 3,000원(우체국 택배)이며, <strong>30,000원 이상 결제 시 전 상품 무료배송</strong>을 제공합니다. (제주 및 도서산간 추가 비용 없음)</p>
    `;
  } else if (type === "exchange") {
    title.innerText = "교환 및 반품 규정 (1회 안심 케어)";
    content.innerHTML = `
      <h4>1. 첫 구매 사이즈 안심 교환 케어</h4>
      <p>네일팁을 처음 구매하시는 고객님의 걱정을 덜어드리고자, 미개봉 및 미착용 상태에서 사이즈가 맞지 않을 경우 <strong>1회 왕복 배송비 전액 지원으로 무료 사이즈 교환</strong>을 도와드립니다.</p>
      <h4>2. 교환/반품 불가 사유</h4>
      <p>- 밀봉된 위생 비닐 씰을 개봉하거나 착용한 흔적이 있는 경우<br>- 고객 부주의로 팁이 훼손되거나 구성품(스틱, 파일 등)이 분실된 경우</p>
    `;
  } else if (type === "faq") {
    title.innerText = "자주 묻는 질문 (FAQ)";
    content.innerHTML = `
      <h4>Q. 네일팁을 여러 번 재사용할 수 있나요?</h4>
      <p>네, 가능합니다! 동봉된 프리미엄 젤 스티커로 부착하시면 팁 손상 없이 5~10회 이상 반영구적으로 재사용하실 수 있습니다.</p>
      <h4>Q. 붙이고 손을 씻거나 샤워해도 되나요?</h4>
      <p>부착 후 2시간 정도 물 접촉을 피해주시면 완전 밀착되어 머리 감기, 설거지, 샤워 모두 편안하게 가능합니다.</p>
      <h4>Q. 손톱이 많이 작은 편인데 맞을까요?</h4>
      <p>뤼에르는 아담한 손톱을 위한 XS(14mm) 규격부터 준비되어 있습니다. 사이즈 가이드를 참고하여 측정 후 주문해주세요!</p>
    `;
  } else if (type === "terms") {
    title.innerText = "이용약관";
    content.innerHTML = `<p>본 약관은 (주)뤼에르 뷰티랩이 운영하는 전자상거래 서비스를 이용함에 있어 쇼핑몰과 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>`;
  } else if (type === "privacy") {
    title.innerText = "개인정보처리방침";
    content.innerHTML = `<p>(주)뤼에르 뷰티랩은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령에 따라 이용자의 소중한 개인정보를 안전하게 보호하고 있습니다.</p>`;
  }

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  if (window.lucide) window.lucide.createIcons();
}

function closePolicyModal(e) {
  if (e && e.target && e.target.id !== "policyModalOverlay" && !e.target.closest(".modal-close-btn")) {
    return;
  }
  document.getElementById("policyModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function openFaqModal() {
  openPolicyModal("faq");
}

// --- 17. My Page Modal ---
function openMyPageModal() {
  document.getElementById("myPageModalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
  if (window.lucide) window.lucide.createIcons();
}

function closeMyPageModal(e) {
  if (e && e.target && e.target.id !== "myPageModalOverlay" && !e.target.closest(".modal-close-btn")) {
    return;
  }
  document.getElementById("myPageModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// --- 18. Toast Notification Utility ---
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);
}
