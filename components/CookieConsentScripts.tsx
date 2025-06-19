import Script from 'next/script';

export function CookieConsentScripts() {
  return (
    <>
      {/* Cookiebot (Usercentrics) Consent Platform */}
      <Script
        src="https://web.cmp.usercentrics.eu/modules/autoblocker.js"
        strategy="afterInteractive"
      />
      <Script
        id="usercentrics-cmp"
        src="https://web.cmp.usercentrics.eu/ui/loader.js"
        data-settings-id="1Whz1yxHwMcHuI"
        strategy="afterInteractive"
      />
    </>
  );
}
