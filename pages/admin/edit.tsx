import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { useRouter } from 'next/router';

const CreatePage: React.FC = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [cateId, setCateId] = useState('');
  // 获取url内参数
  const router = useRouter();
  // 请求接口获取分类数据
  const [categories, setCategories] = useState([]);
  // 获取url内参数  
  const onLoad = async () => {
    const res = await fetch('/api/appliction/getCategory');
    const result = await res.json();
    setCategories(result.data);
  };

  useEffect(() => {
    onLoad();
  }, []);
  
  const { isedit, id } = router.query;


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

  const handleCreate = async () => {
    // 处理创建逻辑
    const res = await fetch('/api/post/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        content: content,
        cateId: cateId,
      }),
    });
    console.log(res);
    
  };

  return (
    <div className="flex flex-col min-h-screen items-center bg-pink-500 p-6">
      <h1 className="text-4xl font-bold text-white">{isedit == 'add' ? '创建文章' : "修改文章"}</h1>
      <div className="mt-8 w-1/2">
        <input
          type="text"
          placeholder="标题"
          value={title}
          onChange={handleTitleChange}
          className="px-4 py-2 text-gray-800 bg-white rounded w-full"
        />
        {/* 选择分类 */}
        <div className="mt-4">
          <select className="px-4 py-2 text-gray-800 bg-white rounded w-full" 
          onChange={(e) => {
            setCateId(e.target.value);
          }}
          >
            <option value="">请选择分类</option>
            {
              categories.map((item, index) => {
                return <option key={index} value={item.id}>{item.name}</option>
              }
              )
            }
          </select>
        </div>

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