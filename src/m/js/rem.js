// 动态设置html的fontSize的数值
var fontSize = window.screen.width / 10 + "px";
// 1rem = 37.5px;
console.log(window.screen.width);
document.getElementsByTagName("html")[0].style.fontSize = fontSize;