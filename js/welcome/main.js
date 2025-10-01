// main.js
import { fetchUser } from './user.js';

// 箭头函数 + async/await 处理异步
const init = async () => { // async其实就是一个promise的语法糖
  // 1️⃣ 等待用户数据
  const user = await fetchUser(); // await会等待fetchUser这个promise resolve之后才会继续往下执行 实际上就是把后续逻辑加入微任务队列

  // 2️⃣ 解构赋值
  const { name, age, city, skills } = user;

  // 3️⃣ 展开运算符：复制对象并新增字段
  const updatedUser = { ...user, country: "New Zealand" };
  console.log("扩展后的用户对象：", updatedUser);

  // 4️⃣ 模板字符串：生成 HTML
  const html = `
    <div class="card">
      <h2>Hello, ${name} 👋</h2>
      <p>年龄：${age}</p>
      <p>城市：${city}</p>
      <p>技能：${skills.join(", ")}</p>
    </div>
  `;

  // 5️⃣ 渲染到页面
  document.getElementById('app').innerHTML = html;
};

// 启动
init();
