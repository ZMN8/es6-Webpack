const FOO_KEY = Symbol.for('foo');

function A() {
  this.foo = 'hello';
}

if (!global[FOO_KEY]) {
  global[FOO_KEY] = new A();
}
console.log( global[FOO_KEY]) ;
global[FOO_KEY]="as";

console.log( global[FOO_KEY]) ;