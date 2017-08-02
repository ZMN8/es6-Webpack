const FOO_KEY = Symbol.for('foo');

function A() {
  this.foo = 'hello';
}


var s1 = Symbol.for('foo');


class MyClass {
  [Symbol.hasInstance](foo) {
    return 0;
  }
}

console.log([1, 2, 3] instanceof new MyClass()) // true
