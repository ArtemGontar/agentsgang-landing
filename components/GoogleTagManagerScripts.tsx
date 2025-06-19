import Script from 'next/script';

/**
 * GoogleTagManagerScripts
 * Loads Google Tag Manager and Google Analytics scripts, and provides helper for firing events.
 */
export function GoogleTagManagerScripts() {
  return (
    <>
      {/* Google Tag Manager (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W9C9875ENQ"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', 'G-W9C9875ENQ');
          `,
        }}
      />
    </>
  );
}

// Add gtag to window type for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Fire a Google Analytics event
 * @param {string} action - Event action (e.g. 'search', 'waitlist_signup')
 * @param {object} params - Event parameters
 */
export function fireGTMEvent(action: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
}
