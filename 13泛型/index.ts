console.log('1')

//要求传入参数和返回参数要一致



function getData<T>(value:T):T{
    return value
}

getData<number>(123)


//泛型  类
class 