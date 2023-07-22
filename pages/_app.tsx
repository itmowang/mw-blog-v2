import '../styles/tailwind.css'
import '../styles/iconfont/iconfont.css'
// 公共样式
import '../styles/public.less'

const App = ({ Component, pageProps }) => {
    return (
            <Component {...pageProps} />
    );
};

export default App;
