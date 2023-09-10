import {defineStore} from "pinia"
import ProductService from "~/utils/ProductService";

export const useProductStore = defineStore('product', {
    state: () => ({
        product: {},
        products: []
    }),
    getters: {
        getProducts(state) {
            return state.products
        }
    },
    actions: {
        setProducts() {
            ProductService.getProducts()
                .then((data) => {
                    this.products = data
                    console.log(data)
                })
                .catch((error) => {
                    console.log('error caught:', error)
                })
        },
        createProduct() {
            ProductService.createProduct(this.product)
                .then(async (res) => {
                    console.log(res)
                    await navigateTo('/')
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
})