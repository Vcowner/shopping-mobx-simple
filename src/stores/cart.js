import { action, computed, observable } from 'mobx'

class CartStore {
    constructor (rootStore) {
        this.rootStore = rootStore
    }

    @observable items = []

    @action.bound addToCart (product) {
        // 判断购物车中是否有改商品
        const isHave = this.items.find(cartItem => cartItem.id === product.id) 
        if(isHave) {
            isHave.quantity++
        } else {
            this.items.push({
                id: product.id,
                quantity: 1
            })
        }
        console.log(isHave)
        // 商品库存-1
        this.rootStore.productsStore.decrementInentory(product)
    }

    @action.bound checkout (products) {
        // 备份购物车数据
        const saveProds = [...products]
        // 清空购物车
        this.setItems([])
        // 发起结算请求
    }

    @action.bound setItems (items) {
        this.items = items
    }

    @computed get cartProduct () {
        const { productsStore }  = this.rootStore
        return this.items.map(cartItem => {
            const prod = productsStore.all.find(prodItem => prodItem.id === cartItem)
            return {
                id: prod.id,
                title: prod.title,
                price: prod.price,
                quantity: cartItem.quantity
            }
        })
    }

    @computed get totalPrice () {
        return this.cartProduct.reduce((total, prod) => {
            return total + prod.price * prod.quantity
        }, 0)
    }
}

export default CartStore