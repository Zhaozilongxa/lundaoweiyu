// 导入 node-cron 模块
const cron = require('node-cron');

// 假设你要每天执行一次的任务
const scheduledTask = () => {
  console.log('每天定时任务触发: ' + new Date().toLocaleString());
  // 在这里可以执行你想要的功能
  // 比如：数据库操作、发邮件、数据同步等
};

// 定时任务：每天 12:00 触发
cron.schedule('0 12 * * *', scheduledTask);

// 开启服务
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`应用已启动，监听端口 ${port}`);
});
