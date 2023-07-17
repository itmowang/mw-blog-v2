import React, { useState } from 'react';
// 引用router
import { useRouter } from 'next/router';
// 引用封装
import axios from '../../utils/fetch';



const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 在这里处理登录逻辑
    if (!email || !password) {
      alert("请输入邮箱和密码！")
    } else {
      const res = await axios.post('/api/login', { email, password }) as any;
      if (res.data.success) {
        console.log(res.data.data);
        
        alert("登录成功！")
        localStorage.setItem("token", res.data.data.token);
        // 记录缓存已经登录信息
        router.push('/admin/manage');
      } else {
        alert(res.data.message || "登录失败！")
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-100">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

const AdminIndex = (props) => {
  return (<Login />)
}


export default AdminIndex;