export default function Home() {
  return (
    <div>
      <div className="container">
        <img src="/profile.png" alt="プロフィール画像" className="profile-img" />
        <h1>りえるのいろいろ</h1>
        <p className="bio">作ってきたサイトとか</p>

        <div className="link-list">
          <a href="https://twitter.com/nameko_simakaze" className="link-item">Twitter (X)</a>
          <a href="https://rielu.uniproject.jp" className="link-item featured">プロフィールサイト</a>
          <a href="https://qiita.com/aki-akatuki-namonakiheimin" className="link-item">qiita</a>
          <a href="https://rielurandom.uniproject.jp" className="link-item featured">ランダム数値ジェネレータ</a>
          <a href="https://github.com/penti-nameko" className="link-item">Github</a>
          <a href="https://uniproject.jp" className="link-item featured">Uniproject</a>
        </div>

        <footer>
          &copy; 2026 rielu All rights reserved.
        </footer>
      </div>

      <style jsx>{`
        /* 全体のスタイル設定 */
        div {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          background-color: #f8f9fa;
          color: #333;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
          padding: 40px 20px;
        }

        .container {
          width: 100%;
          max-width: 480px;
          text-align: center;
        }

        /* プロフィール部分 */
        .profile-img {
          width: 200px;
          height: auto;
          border-radius: 50%;
          margin-bottom: 16px;
          object-fit: cover;
        }

        h1 {
          font-size: 1.25rem;
          margin-bottom: 8px;
        }

        .bio {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 32px;
        }

        /* リンクボタンのスタイル */
        .link-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .link-item {
          display: block;
          padding: 16px;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          text-decoration: none;
          color: #333;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        /* ホバー時の動き（PC用） */
        .link-item:hover {
          background-color: #333;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* 独自の強調リンク用 */
        .featured {
          background-color: #f5deb3;
          color: white;
          border: none;
        }

        .featured:hover {
          background-color: #0056b3;
        }

        footer {
          margin-top: 48px;
          font-size: 0.8rem;
          color: #aaa;
        }
      `}</style>
    </div>
  );
}
