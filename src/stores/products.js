import { action, observable } from 'mobx'
import * as shop from '../api/shop'

class ProductsStore {
    constructor (rootStore) {
        this.rootStore = rootStore
    }

    @observable all = []

    @action.bound getAllProducts () {
        shop.getAllProducts (products => {
            this.setAll(products)
        })
    }

    @action.bound setAll (products) {
        this.all = products
    }

    @action.bound decrementInentory (product) {
        const isHave = this.all.find(item => item.id === product.id) 
        isHave.inventory--
    }
}

export default ProductsStore