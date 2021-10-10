import nightwind from "nightwind/helper";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
						const theme = window.localStorage.getItem('nightwind-mode');
						if (!theme) {
							if (window.matchMedia('(prefers-color-scheme: light)').matches) {
								window.localStorage.setItem('nightwind-mode', 'dark');
								document.documentElement.classList.remove('light')
							} else {
								window.localStorage.setItem('nightwind-mode', 'light');
							}
						}`,
          }}
        />
      
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
