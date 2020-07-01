import React, { Component } from 'react'
// connect 方法执行之后是一个高阶组件
import { connect } from 'react-redux'
// 导入 actionCreators
import { increment, decrement } from '../../actions/cart'

class CartList extends Component {
    render() {
        console.log(this.props)
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>商品名称</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cartList.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={
                                            // 通过 connect 注入的 actionCreator，自动会将生成的 action dispatch 出去。
                                            this.props.decrement.bind(this, item.id)
                                        }>-</button>
                                        <span>{item.amount}</span>
                                        <button onClick={
                                            this.props.increment.bind(this, item.id)
                                        }>+</button>
                                    </td>
                                    <td></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

// mapStateToProps，这里的state实际上就是store.getState()的值
const mapState = (state) => {
    // 这里 return 了什么，在组件里就可以通过 this.props 来获取
    return {
        cartList: state.cart
    }
}

// mapDispatchToProps
// const mapDispatch = (dispatch) => {
//     return {
//         add: (id) => dispatch(increment(id)),
//         reduce: (id) => dispatch(decrement(id))
//     }
// }

// connect 函数的作用可以理解为分发store上的state和dispatch方法，到当前组件的props中。
// 可以通过定义传入的参数来选择需要的 state 或者 dispatch 方法
// connect 方法有四个参数，常用的就是前面两个：
// 第一个参数是 mapStateToProps，作用就是从 store 里把 state 注入到当前组件中的 props 上
// 第二个参数是 mapDispatchToProps，这个的主要作用是把 action 生成的方法（actionCreator）注入到当前组件中的 props 上。一般来说也没必要这么用。直接第二个参数传递一个对象，这里面的对象就是 actionCreators， 只要传入了 actionCreators, 在组件内就可以通过 this.props.actionCreator 来调用，这样的话，在调用之后，那个 actionCreator 就会自动帮你把内部的 action disptch 出去。
// export default connect(mapState, mapDispatch)(CartList)
export default connect(mapState, { increment, decrement })(CartList)