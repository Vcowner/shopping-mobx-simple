//模拟接口
const _products = [
    {"id": 1, "title": 'iPad', "price": 500.01, "inventory": 2},
    {"id": 2, "title": '华为', "price": 400.01, "inventory": 2},
    {"id": 3, "title": '小米', "price": 300.01, "inventory": 2},
]

export const getAllProducts = (callback) =>{
    setTimeout(function (){
        callback(_products)
    },100)
}