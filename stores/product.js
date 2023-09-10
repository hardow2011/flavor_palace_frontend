import {defineStore} from "pinia"
import ProductService from "~/utils/ProductService";

export const useProductStore = defineStore('product', {
    state: () => ({
        product: { product_options_attributes: [ {} ] },
        products: []
    }),
    getters: {
        getProduct(state) {
          return state.product
        },
        resetProduct(state) {
            state.product = { product_options_attributes: [ {} ] }
            return state.product
        },
    },
    actions: {
        setProductByPermalink(permalink) {
            ProductService.getProductByPermalink(permalink)
                .then((data) => {
                this.product = data
            }).catch((error) => {
                console.log(error)
            })
        },
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