import React, { useState } from 'react';

const AdminPage: React.FC = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleAddArticle = () => {
    // 处理新增文章逻辑
    console.log('新增文章:', title, content);
  };

  const handleEditArticle = () => {
    // 处理修改文章逻辑
    console.log('修改文章:', title, content);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-500">
      <h1 className="text-4xl font-bold text-white">管理页面</h1>
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 mx-2 text-white bg-pink-700 rounded" onClick={handleAddArticle}>
          新增文章
        </button>
        <button className="px-4 py-2 mx-2 text-white bg-pink-700 rounded" onClick={handleEditArticle}>
          管理文章
        </button>
      </div>
    </div>
  );
};

export default AdminPage;