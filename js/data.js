/* =======================================================
   LumiBelle Beauty Demo — Demo Data
   All names, prices, stock levels, customers and orders below are
   FICTIONAL sample data for presentation only. Product photos are
   AI-generated sample images supplied for demo use.
   ======================================================= */

/* ---------- Placeholder image (used only for products added in the demo admin) ---------- */
function placeholderImg(category, label){
  const initials = (label||"").split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase() || "LB";
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#fbe9ea'/><stop offset='1' stop-color='#f2d3d6'/></linearGradient></defs>
    <rect width='400' height='400' fill='url(#g)'/>
    <circle cx='200' cy='180' r='62' fill='none' stroke='#b76e79' stroke-width='3'/>
    <text x='200' y='192' font-size='38' text-anchor='middle' font-family='Georgia, serif' font-weight='700' fill='#8a4753'>${initials}</text>
    <text x='200' y='290' font-size='15' text-anchor='middle' font-family='Arial, sans-serif' fill='#8a4753'>LumiBelle demo image</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

/* ---------- Categories (6) ---------- */
const CATEGORIES = [
  {id:"skincare",    key:"cat_skincare",    icon:"✦", cover:"images/shea-body-butter.jpg"},
  {id:"serum",       key:"cat_serum",       icon:"✦", cover:"images/hydrating-serum.jpg"},
  {id:"moisturizer", key:"cat_moisturizer", icon:"✦", cover:"images/velvet-moisture-cream.jpg"},
  {id:"cleanser",    key:"cat_cleanser",    icon:"✦", cover:"images/soft-cream-cleanser.jpg"},
  {id:"toner",       key:"cat_toner",       icon:"✦", cover:"images/silk-veil-toner.jpg"},
  {id:"essentials",  key:"cat_essentials",  icon:"✦", cover:"images/serum-roller-set.jpg"},
];

/* ---------- Product copy templates (neutral wording — no clinical or benefit claims) ---------- */
const COPY = {
  serum:   {en:"A lightweight daily serum in a frosted glass dropper bottle.",
            km:"សេរ៉ូមស្រាលសម្រាប់ប្រើប្រចាំថ្ងៃ ក្នុងដបកញ្ចក់ស្រអាប់មានបំពង់ដំណក់។"},
  toner:   {en:"A light, easy-to-use formula in a frosted glass bottle with a rose-gold cap.",
            km:"ផលិតផលស្រាល ងាយស្រួលប្រើ ក្នុងដបកញ្ចក់ស្រអាប់ មានគម្របពណ៌មាសផ្កាឈូក។"},
  mist:    {en:"A fine-spray face mist in a frosted glass bottle.",
            km:"ទឹកបាញ់មុខម្សៅល្អិត ក្នុងដបកញ្ចក់ស្រអាប់។"},
  cream:   {en:"A soft-textured face cream in a frosted glass jar with a rose-gold lid.",
            km:"ក្រែមមុខវាយនភាពទន់ ក្នុងកំប៉ុងកញ្ចក់ស្រអាប់ មានគម្របពណ៌មាសផ្កាឈូក។"},
  cleanser:{en:"A creamy facial cleanser in a squeeze tube.",
            km:"ក្រែមលាងមុខក្នុងបំពង់ច្របាច់។"},
  sun:     {en:"A sunscreen lotion in a squeeze tube, labelled SPF 50. Demo listing only.",
            km:"ឡូសិនការពារកម្តៅថ្ងៃក្នុងបំពង់ច្របាច់ ដែលមានសរសេរ SPF 50 លើស្លាក។ ជាទិន្នន័យគំរូប៉ុណ្ណោះ។"},
  butter:  {en:"A rich body butter in a wide jar with a rose-gold lid.",
            km:"ប៊ឺរតួខ្លួនវាយនភាពក្រាស់ ក្នុងកំប៉ុងធំ មានគម្របពណ៌មាសផ្កាឈូក។"},
  roller:  {en:"A facial roller with a pale pink stone-style head and a rose-gold finish.",
            km:"ឧបករណ៍រំកិលមុខ ក្បាលរូបថ្មពណ៌ផ្កាឈូកស្រាល និងស៊ុមពណ៌មាសផ្កាឈូក។"},
  set:     {en:"A gift-ready set of LumiBelle demo products presented together.",
            km:"ឈុតផលិតផលគំរូ LumiBelle រៀបចំជាកញ្ចប់កាដូ។"},
};

/* ---------- Products (18) — each maps to one distinct photo in /images ---------- */
const PRODUCTS = [
  {id:"LB001", sku:"LB-SR-001", name:"Hydrating Facial Serum 30ml", nameKm:"សេរ៉ូមមុខ Hydrating ៣០មល", category:"serum", price:18.90, sale:null, stock:42, badge:"new", size:"30ml", copy:"serum", photo:"hydrating-serum.jpg"},
  {id:"LB002", sku:"LB-SR-002", name:"Vitamin C Glow Serum 30ml", nameKm:"សេរ៉ូម Vitamin C Glow ៣០មល", category:"serum", price:22.50, sale:19.90, stock:27, badge:"sale", size:"30ml", copy:"serum", photo:"vitamin-c-serum.jpg"},
  {id:"LB003", sku:"LB-SR-003", name:"Petal Drop Serum 30ml", nameKm:"សេរ៉ូម Petal Drop ៣០មល", category:"serum", price:19.90, sale:null, stock:18, badge:null, size:"30ml", copy:"serum", photo:"petal-drop-serum.jpg", extra:["serum-roller-set.jpg"]},
  {id:"LB004", sku:"LB-TN-001", name:"Brightening Essence 50ml", nameKm:"អេសសិនស៍ Brightening ៥០មល", category:"toner", price:16.50, sale:null, stock:35, badge:null, size:"50ml", copy:"serum", photo:"brightening-essence.jpg"},
  {id:"LB005", sku:"LB-TN-002", name:"Silk Veil Toner 120ml", nameKm:"ថូនឺ Silk Veil ១២០មល", category:"toner", price:14.50, sale:null, stock:50, badge:null, size:"120ml", copy:"toner", photo:"silk-veil-toner.jpg"},
  {id:"LB006", sku:"LB-TN-003", name:"Rose Water Face Mist 100ml", nameKm:"ទឹកបាញ់មុខ Rose Water ១០០មល", category:"toner", price:12.50, sale:10.90, stock:60, badge:"sale", size:"100ml", copy:"mist", photo:"rose-water-mist.jpg", extra:["rose-petal-mist.jpg"]},
  {id:"LB007", sku:"LB-CL-001", name:"Soft Cream Cleanser 100ml", nameKm:"ក្រែមលាងមុខ Soft Cream ១០០មល", category:"cleanser", price:11.90, sale:null, stock:48, badge:null, size:"100ml", copy:"cleanser", photo:"soft-cream-cleanser.jpg"},
  {id:"LB008", sku:"LB-MO-001", name:"Velvet Moisture Face Cream 50g", nameKm:"ក្រែមមុខ Velvet Moisture ៥០ក្រ", category:"moisturizer", price:20.00, sale:null, stock:33, badge:null, size:"50g", copy:"cream", photo:"velvet-moisture-cream.jpg"},
  {id:"LB009", sku:"LB-MO-002", name:"Centella Soothing Cream 50g", nameKm:"ក្រែម Centella Soothing ៥០ក្រ", category:"moisturizer", price:21.50, sale:null, stock:3, badge:null, size:"50g", copy:"cream", photo:"centella-cream.jpg"},
  {id:"LB010", sku:"LB-MO-003", name:"Silk Cloud Day Cream 50g", nameKm:"ក្រែមថ្ងៃ Silk Cloud ៥០ក្រ", category:"moisturizer", price:19.50, sale:null, stock:24, badge:null, size:"50g", copy:"cream", photo:"silk-cloud-cream.jpg"},
  {id:"LB011", sku:"LB-MO-004", name:"Coconut Whip Cream 50g", nameKm:"ក្រែម Coconut Whip ៥០ក្រ", category:"moisturizer", price:17.50, sale:null, stock:19, badge:"new", size:"50g", copy:"cream", photo:"coconut-whip-cream.jpg"},
  {id:"LB012", sku:"LB-SK-001", name:"Sunscreen Lotion SPF 50 50ml", nameKm:"ឡូសិនការពារកម្តៅថ្ងៃ SPF 50 ៥០មល", category:"skincare", price:13.90, sale:null, stock:55, badge:null, size:"50ml", copy:"sun", photo:"sunscreen-lotion.jpg"},
  {id:"LB013", sku:"LB-SK-002", name:"Citrus Pearl Mist 100ml", nameKm:"ទឹកបាញ់ Citrus Pearl ១០០មល", category:"skincare", price:13.50, sale:null, stock:0, badge:null, size:"100ml", copy:"mist", photo:"citrus-pearl-mist.jpg"},
  {id:"LB014", sku:"LB-SK-003", name:"Shea Body Butter 150g", nameKm:"ប៊ឺរតួខ្លួន Shea ១៥០ក្រ", category:"skincare", price:15.90, sale:13.90, stock:30, badge:"sale", size:"150g", copy:"butter", photo:"shea-body-butter.jpg"},
  {id:"LB015", sku:"LB-ES-001", name:"Rose Facial Roller", nameKm:"ឧបករណ៍រំកិលមុខ Rose", category:"essentials", price:11.90, sale:null, stock:38, badge:null, size:"1 pc", copy:"roller", photo:"rose-quartz-roller.jpg"},
  {id:"LB016", sku:"LB-ES-002", name:"Serum & Roller Gift Set", nameKm:"កញ្ចប់កាដូ សេរ៉ូម និងឧបករណ៍រំកិលមុខ", category:"essentials", price:29.90, sale:26.90, stock:14, badge:"sale", size:"2 pcs", copy:"set", photo:"serum-roller-set.jpg"},
  {id:"LB017", sku:"LB-ES-003", name:"Ritual Trio Mini Set", nameKm:"ឈុតតូច Ritual Trio", category:"essentials", price:39.00, sale:null, stock:9, badge:"new", size:"3 pcs", copy:"set", photo:"ritual-trio.jpg"},
  {id:"LB018", sku:"LB-ES-004", name:"Signature Collection Set", nameKm:"ឈុត Signature Collection", category:"essentials", price:64.00, sale:null, stock:6, badge:"new", size:"5 pcs", copy:"set", photo:"collection-set.jpg"},
];
const HERO_IMAGE = "images/collection-set.jpg";
PRODUCTS.forEach(p=>{
  const c = COPY[p.copy];
  p.desc = c.en;
  p.descKm = c.km;
  p.img = "images/" + p.photo;
  p.images = [p.img].concat((p.extra||[]).map(x=>"images/"+x));
});
// Pages inside sub-folders (shop/, product/ ...) need "../" in front of image paths.
function imgSrc(src){
  if (!src || src.startsWith("data:") || src.startsWith("http")) return src;
  const sub = /\/(shop|product|cart|checkout|payment|order-success|admin)\//.test(location.pathname);
  return (sub ? "../" : "") + src;
}

/* ---------- Demo customers (8) — fictional ---------- */
const CUSTOMERS = [
  {id:"C01", name:"Sok Dara", phone:"012 000 101", email:"sok.dara@example.com", province:"Phnom Penh"},
  {id:"C02", name:"Chan Sreymom", phone:"016 000 102", email:"srey.mom@example.com", province:"Siem Reap"},
  {id:"C03", name:"Pich Vibol", phone:"017 000 103", email:"vibol.p@example.com", province:"Battambang"},
  {id:"C04", name:"Heng Sopha", phone:"098 000 104", email:"sopha.h@example.com", province:"Phnom Penh"},
  {id:"C05", name:"Ly Chenda", phone:"070 000 105", email:"chenda.ly@example.com", province:"Kandal"},
  {id:"C06", name:"Kim Sovann", phone:"011 000 106", email:"sovann.kim@example.com", province:"Kampong Cham"},
  {id:"C07", name:"Ros Panha", phone:"093 000 107", email:"panha.ros@example.com", province:"Phnom Penh"},
  {id:"C08", name:"Meas Bopha", phone:"015 000 108", email:"bopha.meas@example.com", province:"Sihanoukville"},
];

/* ---------- Provinces ---------- */
const PROVINCES = ["Phnom Penh","Siem Reap","Battambang","Kandal","Kampong Cham","Kampong Speu","Sihanoukville","Kampot","Takeo","Prey Veng","Other"];

/* ---------- Order status flow ---------- */
const ORDER_STATUSES = ["new","confirmed","preparing","completed","cancelled"];
const PAYMENT_STATUSES = ["pending","paid","failed"];

/* ---------- Demo orders (13) generated from products/customers (fictional) ---------- */
function buildDemoOrders(){
  const seed = [
    {id:"ORD-1001", cust:"C01", items:[["LB001",1],["LB007",1]], pay:"khqr", payStatus:"paid", status:"completed", day:-9},
    {id:"ORD-1002", cust:"C02", items:[["LB012",2]], pay:"cod", payStatus:"pending", status:"new", day:-1},
    {id:"ORD-1003", cust:"C03", items:[["LB008",1],["LB005",1]], pay:"khqr", payStatus:"paid", status:"completed", day:-3},
    {id:"ORD-1004", cust:"C04", items:[["LB016",1]], pay:"khqr", payStatus:"paid", status:"confirmed", day:-2},
    {id:"ORD-1005", cust:"C05", items:[["LB006",2],["LB015",1]], pay:"bank", payStatus:"pending", status:"new", day:0},
    {id:"ORD-1006", cust:"C06", items:[["LB018",1]], pay:"khqr", payStatus:"failed", status:"cancelled", day:-6},
    {id:"ORD-1007", cust:"C07", items:[["LB002",1],["LB010",1]], pay:"khqr", payStatus:"paid", status:"preparing", day:-1},
    {id:"ORD-1008", cust:"C08", items:[["LB014",2]], pay:"cod", payStatus:"pending", status:"confirmed", day:-2},
    {id:"ORD-1009", cust:"C01", items:[["LB011",1],["LB003",1]], pay:"khqr", payStatus:"paid", status:"completed", day:-14},
    {id:"ORD-1010", cust:"C02", items:[["LB017",1]], pay:"khqr", payStatus:"paid", status:"preparing", day:-1},
    {id:"ORD-1011", cust:"C03", items:[["LB004",1],["LB009",1]], pay:"bank", payStatus:"paid", status:"completed", day:-4},
    {id:"ORD-1012", cust:"C05", items:[["LB001",2],["LB012",1]], pay:"khqr", payStatus:"pending", status:"new", day:0},
    {id:"ORD-1013", cust:"C06", items:[["LB002",1]], pay:"khqr", payStatus:"paid", status:"completed", day:-11},
  ];
  const productMap = Object.fromEntries(PRODUCTS.map(p=>[p.id,p]));
  const custMap = Object.fromEntries(CUSTOMERS.map(c=>[c.id,c]));
  return seed.map(o=>{
    const cust = custMap[o.cust];
    const items = o.items.map(([pid,qty])=>{
      const p = productMap[pid];
      const price = p.sale || p.price;
      return {id:p.id, name:p.name, nameKm:p.nameKm, qty, price, img:p.img};
    });
    const subtotal = items.reduce((s,i)=>s+i.price*i.qty,0);
    const delivery = o.pay==="cod" ? 1.5 : 1.0;
    const total = +(subtotal+delivery).toFixed(2);
    const d = new Date(); d.setDate(d.getDate()+o.day);
    return {
      id:o.id, customer:cust.name, phone:cust.phone, email:cust.email, province:cust.province,
      address: (o.cust.charCodeAt(1)%2===0?"#12, St. 240, ":"House 45, St. 63, ") + cust.province,
      items, subtotal:+subtotal.toFixed(2), delivery, total,
      payment:o.pay, paymentStatus:o.payStatus, status:o.status,
      date: d.toISOString(), note: ""
    };
  });
}
const ORDERS = buildDemoOrders();

/* ---------- Demo payments derived from orders (SIMULATED — no real transactions) ---------- */
function buildDemoPayments(){
  return ORDERS.map((o,i)=>({
    id:"PAY-"+(2001+i),
    orderId:o.id,
    customer:o.customer,
    method:o.payment,
    amount:o.total,
    status:o.paymentStatus,
    date:o.date
  }));
}
const PAYMENTS = buildDemoPayments();

/* ---------- Helpers ---------- */
function money(n){ return "$" + Number(n).toFixed(2); }
function fmtDate(iso, lang){
  const d = new Date(iso);
  return d.toLocaleDateString(lang==="km" ? "en-GB" : "en-US", {year:"numeric", month:"short", day:"2-digit"});
}
function statusLabel(s){ return t("status_"+s); }
function payLabel(s){ return t("pay_"+s); }
