import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const CreatePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handlePreview = () => {
    console.log('预览标题:', title);
    console.log('预览内容:', content);
  };

  const handleCreate = () => {
    // 处理创建逻辑
    console.log('创建文章:', title, content);
    
  };

  return (
    <div className="flex flex-col min-h-screen items-center bg-pink-500 p-6">
      <h1 className="text-4xl font-bold text-white">创建页面</h1>
      <div className="mt-8 w-1/2">
        <input
          type="text"
          placeholder="标题"
          value={title}
          onChange={handleTitleChange}
          className="px-4 py-2 text-gray-800 bg-white rounded w-full"
        />
        <div className='bg-white min-h-full pb-12 mt-4 '>
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          style={{ height: '300px' }}
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'image'],
              ['clean'],
            ],
          }}
        />
        </div>
        
        <button className="px-4 py-2 mt-4 text-white bg-pink-700 rounded" onClick={handlePreview}>
          预览
        </button>
        <button className="px-4 py-2 mt-4 text-white bg-pink-700 rounded" onClick={handleCreate}>
          创建
        </button>
      </div>
    </div>
  );
};

export default CreatePage;