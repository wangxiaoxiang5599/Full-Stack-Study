// user.js

// 模拟异步获取用户数据
export const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Kamis",
        age: 33,
        city: "Hamilton",
        skills: ["Java", "React", "DeFi"]
      });
    }, 800); // 模拟网络延迟
  });
};
