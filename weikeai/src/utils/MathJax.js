let isMathjaxConfig = false; // 用于标识是否配置

const initMathjaxConfig = () => {
  if (!window.MathJax) {
    return;
  }
  window.MathJax.Hub.Config({
    showProcessingMessages: false, // 关闭js加载过程信息
    messageStyle: "none", // 不显示信息
    jax: ["input/TeX", "output/HTML-CSS"],
    tex2jax: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ], // 行内公式选择符
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ], // 段内公式选择符
      skipTags: ["script", "noscript", "style", "textarea", "pre", "code", "a"] // 避开某些标签
    },
    "HTML-CSS": {
      availableFonts: ["STIX", "TeX"], // 可选字体
      showMathMenu: false // 关闭右击菜单显示
    }
  });
  isMathjaxConfig = true; // 配置完成，改为true
};

const MathQueue = function (elementId) {
  if (!window.MathJax) {
    return;
  }
  window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, document.getElementById(elementId)]);
};

// 修改为默认导出一个返回 Promise 的函数
export default function initMathJax() {
  return new Promise((resolve, reject) => {
    if (window.MathJax) {
      resolve({
        isMathjaxConfig,
        initMathjaxConfig,
        MathQueue
      });
    } else {
      reject(new Error('MathJax is not loaded'));
    }
  });
}