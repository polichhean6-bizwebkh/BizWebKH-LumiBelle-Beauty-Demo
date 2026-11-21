/* =======================================================
   LumiBelle Beauty Demo — Store contact configuration (Level 1)
   PUBLIC DEMO: no real Telegram/Messenger recipient is configured.
   While demoMode is true (or telegramUsername is empty) the order buttons only
   COPY the order summary and explain what a live shop would do; nothing is opened or sent.
   For a real client: set telegramUsername / facebookPage and demoMode:false.
   In the production package these values come from the admin Settings (database).
   ======================================================= */
const LB_CONFIG = {
  storeName: "LumiBelle Beauty",
  telegramUsername: "",   // client's real Telegram username (no @) — intentionally empty in the public demo
  telegramGroupLink: "",  // optional order-group invite link
  facebookPage: "",       // client's Facebook Page name/ID used as https://m.me/<page>
  phone: "+855 00 000 000",
  demoMode: true
};
function lbIsDemoMode(){ return LB_CONFIG.demoMode || !LB_CONFIG.telegramUsername; }
