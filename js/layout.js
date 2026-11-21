/* =======================================================
   LumiBelle Beauty Demo — Shared Header / Footer
   Usage: <div id="site-header" data-root="../"></div>
          <div id="site-footer" data-root="../"></div>
   data-root = relative path back to the site root (e.g. "" for /index.html, "../" for /shop/index.html)
   ======================================================= */

const ICON_SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
const ICON_CART = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6h15l-1.6 8.2a2 2 0 0 1-2 1.6H8.2a2 2 0 0 1-2-1.6L4 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>';

function renderHeader(root, activePage){
  const el = document.getElementById("site-header");
  if (!el) return;
  el.innerHTML = `
  <div class="demo-banner"><b>DEMO</b> — <span data-i18n="foot_demo_note">Sample products and a simulated checkout. No real payments or orders.</span></div>
  <div class="pub-notice" data-i18n="pub_notice">Public BizWeb KH sales demo.</div>
  <div class="topbar">
    <div class="container">
      <span data-i18n="topbar_tagline">Your Beauty, Your Confidence.</span>
      <div class="flex items-center gap-12">
        <a href="tel:+85500000000" class="hide-mobile">+855 00 000 000</a>
        <div class="lang-switch">
          <button data-lang="km">ខ្មែរ</button>
          <button data-lang="en">EN</button>
        </div>
      </div>
    </div>
  </div>
  <header class="site-header">
    <div class="header-row">
      <a href="${root}index.html" class="logo">
        <span class="mark">LB</span>
        <span>
          <span data-i18n="brand_name">LumiBelle Beauty</span>
          <span class="sub" data-i18n="brand_sub">Your Beauty, Your Confidence.</span>
        </span>
      </a>
      <form class="search-bar">
        <input type="text" data-i18n-ph="search_ph" placeholder="Search beauty products...">
        <button type="submit" aria-label="Search">${ICON_SEARCH}</button>
      </form>
      <nav class="main-nav">
        <a href="${root}shop/index.html" ${activePage==='shop'?'class="active"':''} data-i18n="nav_shop">All Products</a>
        <a href="${root}shop/index.html?promo=1" data-i18n="nav_promo">Offers</a>
        <a href="${root}index.html#contact" data-i18n="nav_contact">Contact</a>
      </nav>
      <div class="header-actions">
        <button class="mobile-toggle" aria-label="Menu">☰</button>
        <a href="${root}cart/index.html" class="cart-btn" aria-label="Cart">
          ${ICON_CART} <span class="hide-mobile" data-i18n="cart">Cart</span>
          <span class="count cart-count">0</span>
        </a>
      </div>
    </div>
    <div class="categories-strip">
      <div class="container">
        <a href="${root}shop/index.html?cat=skincare" data-i18n="cat_skincare">Skincare</a>
        <a href="${root}shop/index.html?cat=serum" data-i18n="cat_serum">Facial Serum</a>
        <a href="${root}shop/index.html?cat=moisturizer" data-i18n="cat_moisturizer">Moisturizer</a>
        <a href="${root}shop/index.html?cat=cleanser" data-i18n="cat_cleanser">Facial Cleanser</a>
        <a href="${root}shop/index.html?cat=toner" data-i18n="cat_toner">Toner & Mists</a>
        <a href="${root}shop/index.html?cat=essentials" data-i18n="cat_essentials">Beauty Essentials</a>
      </div>
    </div>
  </header>`;
}

function renderFooter(root){
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
  <footer class="site-footer" id="contact">
    <div class="container">
      <div>
        <div class="logo" style="margin-bottom:12px;">
          <span class="mark">LB</span>
          <span style="color:#fff;font-weight:700;" data-i18n="brand_name">LumiBelle Beauty</span>
        </div>
        <p data-i18n="foot_about">LumiBelle Beauty is a fictional skincare and cosmetics store used as a demo template by BizWeb KH.</p>
        <div class="social-row">
          <span class="social-ph" title="Telegram (demo)" aria-label="Telegram (demo, not linked)">TG</span>
          <span class="social-ph" title="Facebook (demo)" aria-label="Facebook (demo, not linked)">FB</span>
        </div>
      </div>
      <div>
        <h4 data-i18n="foot_contact">Contact</h4>
        <ul>
          <li>St. 000, Phnom Penh, Cambodia (demo address)</li>
          <li>+855 00 000 000</li>
          <li>hello@lumibelle.example</li>
          <li>Telegram / Facebook: <span data-i18n="foot_contact_demo">set per client (demo)</span></li>
        </ul>
      </div>
      <div>
        <h4 data-i18n="foot_links">Quick Links</h4>
        <ul>
          <li><a href="${root}index.html" data-i18n="foot_link_home">Home</a></li>
          <li><a href="${root}shop/index.html" data-i18n="foot_link_shop">Shop</a></li>
          <li><a href="${root}cart/index.html" data-i18n="foot_link_cart">Cart</a></li>
        </ul>
      </div>
      <div>
        <h4 data-i18n="foot_policy">Policies</h4>
        <ul>
          <li><a href="#" data-i18n="foot_policy_return">Return &amp; Exchange</a></li>
          <li><a href="#" data-i18n="foot_policy_shipping">Shipping Policy</a></li>
          <li><a href="#" data-i18n="foot_policy_privacy">Privacy Policy</a></li>
          <li><a href="#" data-i18n="foot_policy_terms">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 LumiBelle Beauty — <span data-i18n="foot_rights">All rights reserved. Demo template for presentation only.</span></span>
      <span><a href="${root}scope/index.html" style="color:inherit;text-decoration:underline;" data-i18n="scope_link">What is included in the $500 package?</a></span>
    </div>
  </footer>`;
}

/* ---------- Floating mini-cart ----------
   Shown on browsing pages (home / shop / product) after the customer adds an
   item, so they get quick feedback + a way to jump to checkout without being
   redirected away from what they were browsing. Hidden on cart/checkout/
   payment/order-success since the cart is already the main content there. */
const FLOATING_CART_HIDDEN_ON = ["/cart/", "/checkout/", "/payment/", "/order-success/", "/admin/", "/scope/"];
function shouldShowFloatingCart(){
  return !FLOATING_CART_HIDDEN_ON.some(seg => location.pathname.includes(seg));
}
function renderFloatingCart(root){
  if (!shouldShowFloatingCart()) return;
  if (document.getElementById("floating-cart")) return;
  const el = document.createElement("div");
  el.id = "floating-cart";
  el.className = "floating-cart";
  el.innerHTML = `
    <a href="${root}cart/index.html" class="fc-link">
      <span class="fc-icon">${ICON_CART}<span class="fc-count">0</span></span>
      <span class="fc-info">
        <span class="fc-items-text">0 <span data-i18n="cart">Cart</span></span>
        <span class="fc-subtotal">$0.00</span>
      </span>
      <span class="btn btn-primary btn-sm fc-view" data-i18n="cart_checkout">View Cart</span>
    </a>
  `;
  document.body.appendChild(el);
}

document.addEventListener("DOMContentLoaded", ()=>{
  const hdr = document.getElementById("site-header");
  const ftr = document.getElementById("site-footer");
  const root = (hdr && hdr.dataset.root) || (ftr && ftr.dataset.root) || "";
  const active = (hdr && hdr.dataset.active) || "";
  renderHeader(root, active);
  renderFooter(root);
  renderFloatingCart(root);
  applyI18n();
  updateCartCount();
  updateFloatingCart();
});
