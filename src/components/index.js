// 在 components 下的根目录上的 index.js，负责导出所有组件
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import Like from './Like'

export {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
}



// 也可以如下方式导出
// export { default as TodoHeader } from './TodoHeader'
// export { default as TodoInput } from './TodoInput'
// export { default as TodoList } from './TodoList'