

// this指向
// 1 作为 对象方法调用
// 2 作为普通函数调用
// 构造器调用
// Function.prototype.call | Function.prototype.apply
//JavaScript 的 this 总是指向一个对象，而具体指向􏷊个对象是在
//运行时基于函数的执行环境动态绑定的，而非函数被声明时的环境

// var obj = {
//   name2: 'test',
//   getName(){
//     return this.name2
//   }
// }
// console.log(obj.getName())
// var getName2 = obj.getName
// console.log(getName2())

// var myClass = function() {
//   this.name = 'sven'
// }
// let testMy = new myClass()
// console.log(testMy.name)

// var myClass2 = function() {
//   this.name = 'sven'
//   return {
//     name: 'lucy'
//   }
// }
// let testMy2 = new myClass2()
// console.log(testMy2.name)

// var myClass3 = function() {
//   this.name = 'black'
//   return 12
// }
// let testMy3 = new myClass3()
// console.log(testMy3.name)


// var obj1 = {
//   name: 'svn',
//   getName(){
//     return this.name
//   }
// }
// var obj2 = {
//   name: 'git'
// }
// obj1.getName.call(obj2)

// Function.prototype.bind = function() {
//   let self = this
//    // this 就是 function(a,b,c) {
//   //   console.log(a,b,c)
//   //   console.log(b.name)
//   // }
//   // arguments 为 obj
//   let context = [].shift.call(arguments)
//   let args = [].slice.call(arguments)
//   return function () {
//     return self.apply(context, [].concat.call(args, [].slice.call(arguments)))    
//   }
// }
// var obj = {
//   name: 'sven'
// }
// var fun = function(a,b,c) {
//   console.log(a,b,c)
//   console.log(this.name)
//   console.log(this, 'this', arguments)
// }.bind(obj)
// fun(1,2,3,4)

// 柯里化
// 一个 currying 的函数首先先会接受一些参数，接受了这些参数之后， 该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数数在函数形成的闭包中被保存起来。
//待到函数被真正需要求值的时候，之前传入的所有参数数都会被一次性用于求值。

// var cost = (function () {
//   var money = 0
//   return function () {
//     for (let i = 0; i < arguments.length; i++) {
//       money += arguments[i]
//     }
//     return money
//   }
// })()

// var curring = function (fn) {
//   var args = []
//   return function () {
//     if (arguments.length === 0) {
//       return fn.apply(null, args)
//     } else {
//       args.push(...arguments)
//     }
//   }
// }
// let t = curring(cost)
// t(100)
// t(200)
// console.log(t())


var curry = function (fn, len, ...args) {
  return function (...params) {
    let _args = [...args, ...params]
    if (_args.length >= len) {
      return fn.apply(this, _args)
    } else {
      return curry.call(this, fn, len, ..._args)
    }
  }
}
var _curry = function (fn, len = fn.length) {
  return curry.call(this, fn, len)
}
let _fn = _curry(function (a, b, c, d, e) {
  console.log(a, b, c, d, e)
});
_fn(1, 2, 3, 4, 5);
_fn(1)(2)(3, 4, 5);   // print: 1,2,3,4,5
_fn(1, 2)(3, 4)(5);   // print: 1,2,3,4,5
_fn(1)(2)(3)(4)(5); // print: 1,2,3,4,5


// cost(100)
// console.log(curry(cost))

// var mult = function(){
//   var a = 1
//   for(var i=0,l=arguments.length;i<l;i++) {
//     a = a * arguments[i]
//   }
//   return a
// }
// var plus = function(){
//   var a = 1
//   for(var i=0,l=arguments.length;i<l;i++) {
//     a = a + arguments[i]
//   }
//   return a
// }

// var crateProxyFactory = (function(fn){
//   var cash = {}
//   return function(){
//     var args = Array.prototype.join.call(arguments, ',')
//     if(args in cash) {
//       return cash[args]
//     }
//     return cash[args] = fn.apply(this, arguments)
//   }
// })()
// var proxyMulti = crateProxyFactory(mult)
// proxyMulti(1,2,3,4)
// var proxyPlus = crateProxyFactory(plus)
// proxyPlus(1,2,3,4)


// var Iterator = function(obj){
//   var current = 0
//   var next = function(){
//     current+= 1
//   }
//   var isDown = function(){
//     current >= obj.length
//   }
//   var getCurrent = function(){
//     return obj[current]
//   }
//   return {
//     next,
//     isDown,
//     getCurrent
//   }
// }
// var compare = function(iterator1, iterator2){
//   while(!iterator1.isDown() && !iterator2.isDown()) {
//     if (iterator1.getCurrent() !== iterator2.getCurrent()) {
//       throw new Error('iterator1 和 iterator2 不相等')
//     }
//     iterator1.next()
//     iterator2.next()
//   }
// }

// compare(Iterator([1,2,3]), Iterator([1,2,3]))


// header 头部 nav 导航，消息列表
// var Event = (function () {
//   var clientList = {},
//     listen,
//     trigged,
//     remove;

//   listen = function (key, fn) {
//     if (!clientList[key]) {
//       clientList[key] = []
//     }
//     clientList[key].push(fn)
//   }
//   trigged = function () {
//     var key = Array.prototype.shift.call(arguments),
//       fns = clientList[key];
//     if (!fns || fns.length === 0) {
//       return false
//     }
//     for (let i = 0, fn; fn = fns[i++];) {
//       fn.apply(this, arguments)
//     }
//   }
//   remove = function (key, fn) {
//     var fns = clientList[key]
//     if (!fns) {
//       return false
//     }
//     if (!fn) {
//       fns && (fns.length = 0)
//     } else {
//       for (var i = fns.length; i >= 0; i--) {
//         var _fn = fns[i]
//         if (_fn === fn) {
//           fns.splice(i, 1)
//         }
//       }
//     }
//     console.log(clientList)
//   }
//   return {
//     listen,
//     trigged,
//     remove
//   }
// })()
// const a = function(price){
//   console.log(price, '909090')
// }

// Event.listen('squareMeter88', a)
// Event.listen('squareMeter88', function(price){
//   console.log('test')
// })
// Event.trigged('squareMeter88', 20000)
// Event.remove('squareMeter88', a)


var menuBar = {
  refresh: function(){
    console.log('刷新菜单目录')
  }
}
var setCommand = function(button, fn){
  button.onclick = function(){
    fn()
  }
}
var RefreshMenuBarCommand = function(receiver){
  return function(){
    receiver.refresh()
  }
}
var refreshMenubarCommand = RefreshMenuBarCommand(menuBar)
setCommand('button1', refreshMenubarCommand)