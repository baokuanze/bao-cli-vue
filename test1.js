// class School {
//   name: string;
//   uid: string;
//   constructor(name: string) {
//     this.name = name
//   }
// }
// type Person<T> = T extends Man ? T : Man
// const p: Person<Man> = {
//   name: "小李",
//   age: 10
// }
//?.nam
// const me: Person = { name: 'gzx', age: 16 };
// type P = typeof me;  // { name: string, age: number | undefined }
// const you: typeof me = { name: 'mabaoguo', age: 69 }  // 可以通过编译
// var num = 12345.6789;
// console.log(num, 'kkkk');

// var a = 1_12_1212
// console.log(a)
// const deps = {
//   '采购部':[1,2,3],
//   '人事部':[5,8,12],
//   '行政部':[5,14,79],
//   '运输部':[3,64,105],
// }
// let member = Object.values(deps).flat(Infinity);

// var obj = {name:12};
// const name2 = obj?.name;
// console.log(member, 'kkkk', name2)


// const myFunc = ({x,y,z}) => {
//   console.log(x,y,z)
// }
// myFunc({x:10,y:10})




var objectPoolFactory = function (createObjFn) {
  var toolTipPool = []
  return {
    create: function () {
      let obj = toolTipPool.length === 0 ? createObjFn.apply(this, arguments) : toolTipPool.shift()
      return obj
    },
    recover: function (toolTipDow) {
      toolTipPool.push(toolTipDow)
    }
  }
}


Function.prototype.before = function (beforeFn) {
  var _self = this
  return function () {
    beforeFn.apply(this, arguments)
    return _self.apply(this, arguments)
  }
}

var test = function () {
  console.log('test')
}
test.before(function () {
  console.log('before')
})()

Function.prototype.after = function (afterFn) {
  let _self = this;
  return function () {
    let ret = _self.apply(this, arguments)
    afterFn.apply(this, arguments)
    return ret
  }
}
test.after(function () {
  console.log('after')
}).after(function () {
  console.log('after2')
})

var ajax = function (type, url, param) {
  console.log(param); // 􏹞􏽒 ajax 􏲌􏲍􏱫􏳏􏳐􏶤
};
var getToken = function () { return 'Token'; }
ajax = ajax.before(function (type, url, param) {
  param.Token = getToken();
})

// var offLightState = function(light) {
//   this.light = light
// }
// offLightState.prototype.buttonWasPressed = function(){
//   this.light.setState(this.light.weakLightState)
// }
// var Light = function(){
//   this.offLightState = new offLightState(this)
// }
// Light.prototype.init = function(){
//   this.currState = this.offLightState;
// }
// Light.prototype.setState = function(newState){
//   this.current = newState
// }
// var light = new Light()
// light.init() 

// 委托
var delegate = function (client, delegation) {
  return {
    buttonWasPressed: function () {
      return delegation.buttonWasPressed.apply(client, arguments)
    }
  }
}
var FSM = {
  off: {
    buttonWasPressed() {
      this.currentState = this.onState
    }
  },
  on: {
    buttonWasPressed() {
      this.currentState = this.offState
    }
  }
}
var Light = function () {
  this.offState = delegate(this, FSM.off)
  this.onState = delegate(this, FSM.on)
  this.currentState = this.offState
  this.bottom = null
}
Light.prototype.init = function () {
  var button = document.createElement('bottom')
  var self = this;
  this.bottom.onClick = function () {
    self.currentState.buttonWasPressed()
  }
}
var light = new Light()
light.init()



var googleMap = {
  show: function () { }
}
var baiduMap = {
  display: function () { }
}
var renderMap = function (map) {
  if (map.show instanceof Function) map.show()
}
var baiduAdapter = {
  show: function () {
    return baiduMap.display()
  }
}
renderMap(googleMap)
renderMap(baiduAdapter)


