import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Map, List, fromJS } from 'immutable'



const state = {
  name: 'QF',
  courses: ['a', 'b', 'c']
}


// 1. 关于对象的操作 Map
const imState = Map({
  name: 'QF',
  courses: ['a', 'b', 'c']
})

console.log(state.name, imState.get('name'))
// immutable 对象修改数据（数据发生改变）后会生成一个新对象，要用一个新参数接收
const newImState = imState.set('name', 'czx')
console.log(imState.get('name'), newImState.get('name'))



// 2. 关于数组的操作 List
const list = [1, 2]

const imList = List([1, 2])
const newImList = imList.push(3)

console.log(imList.get(0), newImList.get(2))



// 3. 关于复杂对象操作 fromJS
const fromJSState = fromJS(state)
console.log(fromJSState.get('courses').get(0))
console.log(fromJSState.getIn(['courses', 0]))

const newfromJSState = fromJSState.setIn(['courses', 0], 'A')
console.log(newfromJSState.getIn(['courses', 0]))











ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
