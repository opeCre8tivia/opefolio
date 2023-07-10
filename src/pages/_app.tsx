import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { Fira_Code } from "next/font/google"
import Script from "next/script"

const firaCode = Fira_Code({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="g-tag-script"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-CWQ7Q46ZK4"
      ></Script>

      <Script id="g-2-tag-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config','G-CWQ7Q46ZK4',{page_path:window.location.pathname});
        `}
      </Script>

      <main className={firaCode.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
