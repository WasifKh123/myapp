import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorState from './colorState';
import ColorContext from './colorContext';
function MyApp({ Component, pageProps }) {
  
  return(
  <ColorState> 
  <Component {...pageProps} />
  </ColorState>
  )
}

export default MyApp
