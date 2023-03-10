import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorState from './colorState';
import ColorContext from './colorContext';
import Header from './header';
import Auth from './authuser';
import Authenticate from './authenticate';
function MyApp({ Component, pageProps }) {
  
  return(
  <Authenticate>  
  
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" /> 
  <Component {...pageProps} />

  </Authenticate>
  )
}

export default MyApp
