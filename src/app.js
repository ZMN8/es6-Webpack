
import layer from './components/layer/layer.js'
import './css/reset.css'

let map=new Map();
for(let i =0;i<100;i++){
  map.set(Symbol('zmn'),{
    sex:'women',
    age:18,
    i:"soga"+i
  })
}
console.log('layerhahahSQW',...map,map.get(Symbol('zmn')))
