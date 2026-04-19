import React from 'react';
import Head from 'next/head';

const LinkTree = () => {
  const links = [
    { name: 'Twitter (X)', url: 'https://twitter.com/nameko_simakaze', featured: false },
    { name: 'プロフィールサイト', url: 'https://rielu.uniproject.jp', featured: true },
    { name: 'qiita', url: 'https://qiita.com/aki-akatuki-namonakiheimin', featured: false },
    { name: 'ランダム数値ジェネレータ', url: 'https://rielurandom.uniproject.jp', featured: true },
    { name: 'Github', url: 'https://github.com/penti-nameko', featured: false },
    { name: 'Uniproject', url: 'https://uniproject.jp', featured: true },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#333] flex justify-center items-start py-10 px-5 font-sans">
      <Head>
        <title>りえるのリンクまとめ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="w-full max-w-[480px] text-center">
        {/* プロフィール部分 */}
        <div className="flex justify-center mb-4">
          <img
            src="profile.png"
            alt="profile"
            className="w-[200px] h-auto rounded-full object-cover"
          />
        </div>
        
        <h1 className="text-[1.25rem] font-bold mb-2">りえるのいろいろ</h1>
        <p className="text-[0.9rem] text-[#666] mb-8">作ってきたサイトとか</p>

        {/* リンクボタンのリスト */}
        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                block p-4 rounded-xl font-bold transition-all duration-300 shadow-sm border
                ${link.featured 
                  ? 'bg-[#f5deb3] text-white border-none hover:bg-[#0056b3] hover:-translate-y-0.5 hover:shadow-lg' 
                  : 'bg-white border-[#e0e0e0] text-[#333] hover:bg-[#333] hover:text-white hover:-translate-y-0.5 hover:shadow-lg'
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </div>

        <footer className="mt-12 text-[0.8rem] text-[#aaa]">
          &copy; 2026 rielu All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default LinkTree;
