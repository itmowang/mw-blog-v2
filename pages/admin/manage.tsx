import { useRouter } from 'next/router';
import React, { useState } from 'react';

const AdminPage: React.FC = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter(); 
  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleAddArticle = () => {
    // 处理新增文章逻辑
    // 跳转
    router.push('/admin/edit?isedit=add');
  };

  const handleListTo = () => {
    // 处理文章列表逻辑
    // 跳转
    // router.push('/admin/edit?edit=isedit&id=1');
    router.push('/admin/list');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-300">
      <h1 className="text-4xl font-bold text-white">管理中心</h1>
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 mx-2 text-white bg-sky-500 rounded transition ease-in-out delay-150  hover:bg-sky-400" onClick={handleAddArticle}>
          新增文章
        </button>
        <button className="px-4 py-2 mx-2 text-white bg-sky-500 rounded transition ease-in-out delay-150 hover:bg-sky-400" onClick={handleListTo}>
          管理文章
        </button>
      </div>
    </div>
  );
};

export default AdminPage;