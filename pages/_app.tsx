import nightwind from "nightwind/helper";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
