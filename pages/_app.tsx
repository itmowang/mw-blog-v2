// 公共样式
import '../styles/tailwind.css'
import '../styles/iconfont/iconfont.css'
import '../styles/public.css'


const App = ({ Component, pageProps }) => {
    return (
            <Component {...pageProps} />
    );
};

export default App;
