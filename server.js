const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// 托管当前目录下的静态文件 (如 index.html)
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`服务已启动，监听端口 ${PORT}`);
});