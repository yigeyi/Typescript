//泛型接口


interface ConfigFn{
    <T>(value:T):T
}

var getData:ConfigFn  = function<T>(value:T):T{
    return value
}