//可索引接口

//ts  定义数组的方式


//可索引接口   对对象的约束
interface UserArr{
    [index:number]: string
}

var arr:UserArr = ['aa', 'ccc']

console.log(arr[0])


//可索引接口  对对象的约束

interface UserObj {
    [index:string]: string
}

var obj:UserObj = {name: '4545'}



//类 类型接口   对类的约束 呵呵  抽象类有点像
 interface Animal {
     name: string;
     eat(str:string):void;
 } 

 class Dog implements Animal {
     name: string;
     constructor(name:string){
         this.name = name;
     }
     eat(){
         console.log(this.name)
     }
 }

 var d = new Dog('小黑')
 d.eat()
