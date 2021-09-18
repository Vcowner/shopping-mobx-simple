import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('cartStore')
@observer
class Cart extends Component {
    render() {
        const { cartStore } = this.props
        return (
            <div>
                <h1>
                   cart
                </h1>
                <ul>
                    {
                        cartStore.cartProduct.map(item => {
                            <li key={item.id}>
                                {item.title} - {item.price} * {item.quantity}
                            </li>
                        })
                    }
                </ul>
                <p>Total: {cartStore.totalPrice}</p>
                <p>
                    <button onClick={() => cartStore.checkout(cartStore.cartProduct)} disabled={!cartStore.items.length}>Checkout</button>
                </p>
            </div>
        )
    }
}

export default Cart
