console.log(10)
//函数类型接口    对方法传入的参数 以及返回值进行约束


interface encrypt{
    (key: string, value:string):string
}


var md5:encrypt = function(key:string, value:string):string{
    return key+value
}


console.log(md5('name', 'sss'))