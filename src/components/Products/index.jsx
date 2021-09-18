import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('productsStore', 'cartStore')
@observer
class Products extends Component {

    componentDidMount () {
        this.props.productsStore.getAllProducts()
    }

    render() {
        const { productsStore, cartStore } = this.props
        console.log(productsStore.all)
        return (
            <div>
                <h2>Products</h2>
                <ul>
                    {
                        productsStore.all.map(item => (
                            <li key={item.id}>
                                {item.title} - {item.price} * {item.inventory}
                                <button
                                    disabled={!productsStore.all.length}
                                    onClick={() => cartStore.addToCart(item)}
                                >
                                    {item.inventory ?  'Add to Cart' : 'Sold out'}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Products
