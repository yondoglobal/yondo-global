/* Yondo visit counter: no cookies, no storage, nothing about you is kept. It tells the Yondo team that a page was opened,
   from which site you came and whether you are on a phone. It respects "Do Not Track" and Global Privacy Control. */
(function () {
  try {
    var n = navigator, s = document.currentScript && document.currentScript.getAttribute('data-site');
    if (!s || n.doNotTrack === '1' || window.doNotTrack === '1' || n.globalPrivacyControl === true) return;
    var r = ''; try { r = document.referrer ? new URL(document.referrer).hostname : ''; } catch (e) {}
    if (r === location.hostname) r = '';
    var u = new URLSearchParams(location.search).get('utm_source') || '';
    var a = n.userAgent || '', d = /iPad|Tablet/i.test(a) ? 'tablet' : /Mobi|Android|iPhone/i.test(a) ? 'mobile' : 'desktop';
    var i = new Image(1, 1); i.referrerPolicy = 'origin';
    i.src = 'https://qutniscdrelryowbkpdl.supabase.co/functions/v1/yondo-alerts/v?s=' + s + '&p=' + encodeURIComponent(location.pathname)
      + '&r=' + encodeURIComponent((u || r).slice(0, 100)) + '&d=' + d;
  } catch (e) {}
})();
