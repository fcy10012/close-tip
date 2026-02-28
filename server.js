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
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(145deg, #d2e0f5 0%, #a6c1e6 100%);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 1rem;
    }

    .card {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(8px);
      border-radius: 32px;
      box-shadow: 0 20px 40px rgba(0, 30, 60, 0.15);
      padding: 2.5rem 2rem;
      max-width: 420px;
      width: 100%;
      text-align: center;
    }

    .icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
    }

    svg {
      width: 40px;
      height: 40px;
      stroke: #2b4f8c;
      stroke-width: 1.8;
      fill: none;
    }

    h1 {
      font-size: 2.2rem;
      font-weight: 500;
      color: #1d3b6f;
      margin-bottom: 8px;
    }

    .reopen {
      font-size: 1.2rem;
      color: #1d3b6f;
      background: rgba(255, 255, 255, 0.6);
      display: inline-block;
      padding: 0.3rem 1.2rem;
      border-radius: 40px;
      margin: 12px 0 20px;
    }

    .data-note {
      background: #e9f0fa;
      border-radius: 24px;
      padding: 0.9rem;
      font-size: 1.1rem;
      color: #1d3b6f;
      border: 1px solid rgba(255, 255, 255, 0.8);
    }

    @media (max-width: 480px) {
      .card { padding: 2rem 1.2rem; }
      h1 { font-size: 1.8rem; }
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">
      <svg viewBox="0 0 24 24">
        <path d="M4 4h16v16H4z" stroke="currentColor" />
        <path d="M8 4v4h8V4" stroke="currentColor" />
        <circle cx="12" cy="14" r="2" stroke="currentColor" />
        <path d="M6 18h12" stroke="currentColor" />
      </svg>
    </div>
    <h1>本站点已经关闭</h1>
    <div class="reopen">6月份将会重新开启</div>
    <div class="data-note">用户数据已经保留</div>
  </div>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`服务已启动，监听端口 ${PORT}`);
});
