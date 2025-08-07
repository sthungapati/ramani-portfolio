import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ramani Thungapati - Full Stack Developer & AI Enthusiast',
  description: 'Portfolio of Ramani Thungapati, a passionate Computer Science graduate specializing in full-stack development, machine learning, and data analytics.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove Next.js development overlays and issue badges
              (function() {
                function removeNextJSOverlays() {
                  const selectors = [
                    '[data-nextjs-dialog-overlay]',
                    '[data-nextjs-toast]',
                    '[data-nextjs-portal]',
                    '.nextjs-toast-errors-parent',
                    '#__next-build-watcher',
                    '#__next-prerender-indicator',
                    '[data-nextjs-dialog]',
                    '[class*="nextjs"]',
                    '[class*="__next"]',
                    '[data-nextjs]',
                    '[data-nextjs-*]',
                    // Hide any element containing the letter N that might be Next.js branding
                    '[class*="N"]',
                    '[data-*="N"]',
                    // Hide development indicators
                    '[class*="dev"]',
                    '[class*="indicator"]',
                    '[class*="overlay"]',
                    '[class*="badge"]',
                    '[class*="notification"]',
                    '[class*="error"]',
                    '[class*="warning"]',
                    '[class*="issue"]',
                    // Hide specific Next.js elements
                    '#__next-dev-tools',
                    '#__next-error-overlay',
                    '#__next-build-indicator',
                    '#__next-toast',
                    '#__next-portal',
                    '#__next-dialog',
                    '#__next-overlay',
                    // Hide any red badges or notifications
                    '[class*="red"]',
                    '[class*="error"]',
                    '[class*="badge"]',
                    '[class*="notification"]',
                    '[class*="pill"]',
                    '[class*="indicator"]'
                  ];
                  
                  selectors.forEach(selector => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach(el => {
                      el.style.display = 'none';
                      el.style.visibility = 'hidden';
                      el.style.opacity = '0';
                      el.style.pointerEvents = 'none';
                      el.style.position = 'absolute';
                      el.style.left = '-9999px';
                      el.style.top = '-9999px';
                      el.style.zIndex = '-9999';
                    });
                  });
                  
                  // Also remove any elements that contain the letter N and look like Next.js branding
                  const allElements = document.querySelectorAll('*');
                  allElements.forEach(el => {
                    const text = el.textContent || '';
                    const className = el.className || '';
                    const id = el.id || '';
                    
                    if ((text.includes('N') && (className.includes('next') || className.includes('dev') || className.includes('indicator'))) ||
                        (id.includes('next') || id.includes('dev') || id.includes('indicator')) ||
                        (className.includes('red') && className.includes('badge')) ||
                        (className.includes('pill') && className.includes('notification'))) {
                      el.style.display = 'none';
                      el.style.visibility = 'hidden';
                      el.style.opacity = '0';
                      el.style.pointerEvents = 'none';
                      el.style.position = 'absolute';
                      el.style.left = '-9999px';
                      el.style.top = '-9999px';
                      el.style.zIndex = '-9999';
                    }
                  });
                }
                
                // Run immediately
                removeNextJSOverlays();
                
                // Run on DOM changes
                const observer = new MutationObserver(removeNextJSOverlays);
                observer.observe(document.body, { childList: true, subtree: true });
                
                // Run more frequently to catch any new elements
                setInterval(removeNextJSOverlays, 500);
                
                // Also run on window load
                window.addEventListener('load', removeNextJSOverlays);
                window.addEventListener('DOMContentLoaded', removeNextJSOverlays);
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
