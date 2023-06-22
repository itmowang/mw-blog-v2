import { AppProps } from 'next/app';
import '../styles/tailwind.css'
import '../styles/iconfont/iconfont.css'

const App = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
    );
  };
  
  export default App;
  