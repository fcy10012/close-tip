const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>网站关闭提示</title>
      <style>
        html, body { height:100%; margin:0; padding:0; }
        body {
          min-height:100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(120deg,#eef2f3 0%, #8EC5FC 100%);
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
        .container {
          background:rgba(255,255,255,0.85);
          box-shadow:0 2px 20px rgba(100,150,200,0.13);
          border-radius:16px;
          padding:2em 2em 1.3em 2em;
          max-width:360px;
          width:90vw;
          text-align:center;
        }
        h1 {
          color:#3766bc;
          font-size:1.8em;
          margin:0 0 16px;
        }
        p {
          color:#333;
          font-size:1.18em;
          margin:0;
        }
        @media (max-width:500px) {
          h1 {font-size:1.26em;}
          .container {padding:1.2em 0.3em 1em 0.3em;}
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>本站点已经关闭</h1>
        <p>6月份将会重新开启</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`服务已启动，监听端口 ${PORT}`);
});
