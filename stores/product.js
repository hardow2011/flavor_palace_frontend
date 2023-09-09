import {defineStore} from "pinia"
import ProductService from "~/utils/ProductService";

export const useProductStore = defineStore('product', {
    state: () => ({
        product: null,
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
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
})