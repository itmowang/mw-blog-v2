import NextAuth, { Awaitable, RequestInternal, User } from "next-auth";
import Providers,{Credentials} from "next-auth/providers";
import Login from "../login";

// Next 用户登录
export default NextAuth({
  providers: [
    Providers.Credentials({
      name:'login',
      credentials:{
        email:{label:'邮箱',type:'email',placeholder:'请输入邮箱'},
        password:{label:'密码',type:'password',placeholder:'请输入密码'}
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const res = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }), 
        });
        const user = await res.json();
        if (res.status === 200 && user.success) {
          return user;
        } else {
          return null;
        }
      }
    })
  ]
});