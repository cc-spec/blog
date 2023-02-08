/**
 * 深拷贝
 * 1、不是对象直接返回 
 * 2、是对象，开始递归
 * 3、考虑数组
 * 4、循环引用
 *  4.1 创建一个map保存当前对象(target)和克隆对象(res)的映射关系
 *  4.2 检查map中有没有当前对象
 *  4.3 有 直接返回
 *  4.4 没 当前对象为key，克隆对象为value，保存
 * 5、循环性能 while性能最优
 * 6、其他引用类型
 *  6.1 判断引用类型是否为可遍历类型
 *  6.2 是 遍历
 *  6.3 否 直接用构造函数和原始数据创建一个新对象
 * **/

// 循环
function forEach(array, callbackFn) {
  let index = -1
  const length = array.length
  while(++index < length) {
    callbackFn(array[index], index)
  }
}

// 引用类型判断
function isObject(target) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}

// 获取数据类型
function getType(target) {
  return Object.prototype.toString.call(target)
}

// 初始化类型
function initType(target) {
  const Ctor = target.constructor
  return new Ctor()
}

// 数据类型tag
// 可遍历
const objectTag = '[object Object]'
const arrayTag = '[object Array]'
const setTag = '[object Set]'
const mapTag = '[object Map]'
const argsTag = '[object Arguments]'
// 不可遍历
const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const numberTag = '[object Number]'
const regexpTag = '[object RegExp]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'

const deepTypes = [objectTag, arrayTag, setTag, mapTag, argsTag]

// 克隆symbol
function cloneSymbol(target) {
  return Object(Symbol.prototype.valueOf.call(target));
}

// 克隆正则
function cloneReg(target) {
  const reFlags = /\w*$/;
  const result = new target.constructor(target.source, reFlags.exec(target));
  result.lastIndex = target.lastIndex;
  return result;
}

// 克隆不可遍历的类型
function cloneOther(target, type) {
  const Ctor = target.constructor;
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(target);
    case regexpTag:
      return cloneReg(targe);
    case symbolTag:
      return cloneSymbol(targe);
    default:
      return null;
  }
}

function deepCopy(target, map = new WeakMap()) {
  // 基本类型直接返回
  if (!isObject(target)) {
    return target
  }
  const type = getType(target)
  // 如果可遍历获取构造函数
  let res
  if (deepTypes.includes(type)) {
    res = initType(target)
  } else {
    return cloneOther(target, type)
  }

  // 处理循环引用
  if (map.get(target)) {
    return map.get(target)
  }
  map.set(target, res)

  // 克隆可遍历类型
  // set
  if (type === setTag) {
    target.forEach(value => {
      res.add(deepCopy(value))
    })
    return res
  }
  // map
  if (type === mapTag) {
    target.forEach((value, key) => {
      res.set(key, deepCopy(value))
    })
    return res
  }
  // array || object
  const keys = type === arrayTag ? undefined : Object.keys(target) // 如果是数组直接传
  forEach(keys || target, (value, index) => {
    if (keys) {
      key = value
    }
    res[key] = deepCopy(target[key], map)
  })
  return res
}
const map = new Map();
map.set('key', 'value');
map.set('ConardLi', 'code秘密花园');

const set = new Set();
set.add('ConardLi');
set.add('code秘密花园');
const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8],
  empty: null,
  map,
  set,
};
console.log(deepCopy(target));

