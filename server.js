const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('<h1>本站点已经关闭</h1><p>6月份将会重新开启</p>');
});

app.listen(PORT, () => {
  console.log(`服务已启动，监听端口 ${PORT}`);
});