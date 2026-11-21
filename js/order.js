/* =======================================================
   LumiBelle Beauty Demo — Level 1 order-by-message flow
   Adapted from the original cosmetics build's telegram.js (reviewed and cleaned):
   builds a readable order summary and hands it to Telegram (or Messenger).
   The shop owner confirms the order, delivery and payment by chat.
   No payment is processed on the website.
   ======================================================= */
const TG_URL_SAFE_LEN = 1800;   // encoded-text length above which we stop relying on ?text=

function getCustomerInfo(){
  const v = id => (document.getElementById(id)||{}).value || "";
  return { name: v("o-name").trim(), contact: v("o-contact").trim(), address: v("o-address").trim(), note: v("o-note").trim() };
}

function buildOrderSummaryText(customer, items){
  const lines = [];
  lines.push("New order — " + LB_CONFIG.storeName);
  lines.push("");
  lines.push("Customer: " + (customer.name || "-"));
  lines.push("Phone / Telegram: " + (customer.contact || "-"));
  lines.push("Delivery location: " + (customer.address || "-"));
  lines.push("");
  lines.push("Items:");
  let subtotal = 0, units = 0;
  items.forEach((i, n)=>{
    const p = i.product;
    const name = getLang()==="km" ? p.nameKm : p.name;
    const unit = p.sale || p.price;
    const line = unit * i.qty;
    subtotal += line; units += i.qty;
    lines.push(`${n+1}. ${name} (${p.sku}) — ${money(unit)} × ${i.qty} = ${money(line)}`);
  });
  lines.push("");
  lines.push(`Total items: ${units}`);
  lines.push(`Subtotal: ${money(subtotal)}`);
  lines.push("Delivery fee: to be confirmed in chat");
  lines.push("Payment: to be confirmed in chat");
  lines.push("");
  lines.push("Note: " + (customer.note || "-"));
  return lines.join("\n");
}

function telegramChatLink(){ return `https://t.me/${LB_CONFIG.telegramUsername}`; }
function telegramPrefillLink(text){ return `${telegramChatLink()}?text=${encodeURIComponent(text)}`; }
function messengerLink(){ return `https://m.me/${LB_CONFIG.facebookPage}`; }

function showToast(message){
  let el = document.getElementById("app-toast");
  if (!el){ el = document.createElement("div"); el.id = "app-toast"; el.className = "toast"; el.setAttribute("role","status"); document.body.appendChild(el); }
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(()=> el.classList.remove("show"), 3200);
}
function fallbackCopy(text){
  const ta = document.createElement("textarea");
  ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta); ta.select();
  let ok = false;
  try{ ok = document.execCommand("copy"); }catch(e){}
  document.body.removeChild(ta);
  return ok;
}
function copyText(text){
  if (navigator.clipboard && navigator.clipboard.writeText){
    return navigator.clipboard.writeText(text).then(()=>true).catch(()=>fallbackCopy(text));
  }
  return Promise.resolve(fallbackCopy(text));
}
function openExternal(url){
  const w = window.open(url, "_blank", "noopener");
  if (!w) window.location.assign(url);
}

/* Returns the summary, or null (and shows a message) when required details are missing. */
function readyOrderSummary(){
  const items = cartDetailed();
  const c = getCustomerInfo();
  if (!items.length) return null;
  if (!c.name || !c.contact){
    showToast(t("ord_need_fields"));
    (!c.name ? document.getElementById("o-name") : document.getElementById("o-contact")).focus();
    return null;
  }
  return buildOrderSummaryText(c, items);
}

function selectPreview(){
  const pre = document.getElementById("order-preview-text");
  if (!pre) return;
  const d = pre.closest("details"); if (d) d.open = true;
  try{ const r = document.createRange(); r.selectNodeContents(pre); const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r); }catch(e){}
  pre.focus();
}
function showDemoResult(kind, summary, copied){
  const box = document.getElementById("demo-result");
  if (!box) return;
  const enc = encodeURIComponent(summary);
  const example = kind==="tg" ? `https://t.me/<shop_username>?text=${enc}` : "https://m.me/<shop_page>";
  const status = copied ? `<p class="copy-ok"><b>${t("ord_copied")}</b> — ${t("ord_demo_copy_ok")}</p>` : `<p class="copy-fail" role="alert"><b>${t("ord_copy_failed_title")}</b> ${t("ord_demo_copy_fail")}</p>`;
  box.innerHTML = `<b>${t("ord_demo_result_title")}</b>${status}<p>${t(kind==="tg" ? "ord_demo_result_tg" : "ord_demo_result_fb")}</p>` +
    `<div class="demo-link-label">${t("ord_demo_link_label")} (${enc.length})</div><code></code>`;
  box.querySelector("code").textContent = example.length > 260 ? example.slice(0,260) + "…" : example;
  box.hidden = false;
  box.scrollIntoView({behavior:"smooth", block:"nearest"});
}

function sendViaTelegram(){
  const summary = readyOrderSummary();
  if (!summary) return;
  if (lbIsDemoMode()){
    copyText(summary).then(ok=>{ showToast(ok ? t("ord_copied") : t("ord_copy_failed")); showDemoResult("tg", summary, ok); if (!ok) selectPreview(); });
    return;
  }
  copyText(summary);                                   // safety net: always on the clipboard
  const link = telegramPrefillLink(summary);
  if (encodeURIComponent(summary).length > TG_URL_SAFE_LEN){
    showToast(t("ord_long_fallback"));
    openExternal(telegramChatLink());
  } else {
    showToast(t("ord_tg_opening"));
    openExternal(link);
  }
}
function copySummaryOnly(){
  const summary = readyOrderSummary();
  if (!summary) return;
  copyText(summary).then(ok=>{ showToast(ok ? t("ord_copied") : t("ord_copy_failed")); if (!ok) selectPreview(); });
}
function sendViaMessenger(){
  const summary = readyOrderSummary();
  if (!summary) return;
  if (lbIsDemoMode() || !LB_CONFIG.facebookPage){
    copyText(summary).then(ok=>{ showToast(ok ? t("ord_copied") : t("ord_copy_failed")); showDemoResult("fb", summary, ok); if (!ok) selectPreview(); });
    return;
  }
  copyText(summary).then(ok=>{
    showToast(ok ? t("ord_fb_copied") : t("ord_copy_failed"));
    if (!ok) selectPreview();
    openExternal(messengerLink());
  });
}
