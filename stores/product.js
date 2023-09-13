import {defineStore} from "pinia"
import ProductService from "~/utils/ProductService";

export const useProductStore = defineStore('product', {
    state: () => ({
        product: { product_options_attributes: [{ image: { media: null, order: null } }] },
        products: []
    }),
    getters: {
        getProduct(state) {
            return state.product
        },
        resetProduct(state) {
            state.product = { product_options_attributes: [{ image: { media: null, order: null } }] }
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
                })
                .catch((error) => {
                    console.log('error caught:', error)
                })
        },
        createProduct() {
            ProductService.createProduct(this.product)
                .then(async (createdProduct) => {
                    for (let i = 0; i < createdProduct.product_options_attributes.length; i++) {
                        let productOptionId = createdProduct.product_options_attributes[i].id
                        this.assignImagesToProductOption(this.product.product_options_attributes[i].image, productOptionId)
                    }
                    navigateTo('/')
                })
                .catch((err) => {
                    console.log(err)
                })
        }, updateProduct() {
            ProductService.updateProduct(this.product)
                .then(() => {
                    navigateTo('/')
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        assignImagesToProductOption(image, productOptionId) {
            ProductService.assignMediaToProductOption(image, productOptionId).then(r => {
            })
        }
    }
})