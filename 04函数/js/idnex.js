//匿名函数  es5
function run() {
    return 'run';
}
var fun2 = function () {
    return 'run2';
};
function run3() {
    return 'run3';
}
var fun4 = function () {
    return 123;
};
//ts中定义方法传参,返回string
function getInfo(name) {
    return 'name';
}
getInfo('caiyijun');
function run5() {
    alert(1212);
}
//可选参数 用问号?。  可选参数必须放在参数的最后面
function getData(name, age) {
    return 'name';
}
//默认参数
function getData1(name = '122') {
    alert(1);
}
//剩余参数,三点运算符
function sum(...res) {
    var sum = 0;
    for (let i = 0; i < res.length; i++) {
        sum += res[i];
    }
    return sum;
}
function sum1(a, ...res) {
    var sum = a;
    for (let i = 0; i < res.length; i++) {
        sum += res[i];
    }
    return sum;
}
function getInfo001(str) {
    if (typeof str === 'string') {
        return '我叫' + str;
    }
    else {
        return '我的年龄是' + str;
    }
}
// 最后一个方法都要写any
// 箭头函数
setTimeout(() => {
    alert(1212);
}, 100);
setTimeout(function () {
    console.log(1212);
}, 100);
