
import layer from './components/layer/layer.js'
import './css/reset.css'

var s1 = Symbol.for('foo');


class MyClass {
  [Symbol.hasInstance](foo) {
    return 0;
  }
}

console.log([1, 2, 3] instanceof new MyClass()) // true
