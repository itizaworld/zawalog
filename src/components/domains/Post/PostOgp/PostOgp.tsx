import React, { VFC } from 'react';

type Props = {
  title: string;
};

export const PostOgp: VFC<Props> = ({ title }) => {
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
    html,
    body {
      margin: 0;
      padding: 0;
    }
    .wrapper {
      width: 1200px;
      height: 630px;
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      background-image: ${`url(${process.env.NEXT_PUBLIC_ROOT_URL}/assets/images/ogp.png)`};
      background-size: cover;
      background-position: center center;
      font-family: 'Noto Sans JP', sans-serif;
    }
    .teamInfo {
      position: absolute;
      top: 40px;
      left: 80px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .teamIcon {
      position: relative;
      overflow: hidden;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      z-index: 1;
      margin-right: 4px;
      border: 2px solid #6684F7;
    }
    .teamIcon > img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .teamName {
      font-size: 40px;
      font-weight: bold;
    }
    .title {
      font-size: 64px;
      line-height: 1.2;
      padding: 10px 80px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      word-break: break-all;
      color: #333;
    }
  `;

  return (
    <html>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <body>
        <div className="wrapper">
          <div className="title">{title}</div>
        </div>
      </body>
    </html>
  );
};
