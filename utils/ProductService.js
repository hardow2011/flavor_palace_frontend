export default {
    async getProducts() {
        const products = await $fetch(`${useRuntimeConfig().public.apiURL}/products`).catch((error) => error.data)
        return products
    },
    async createProduct(product) {
        return await $fetch(`${useRuntimeConfig().public.apiURL}/products`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: {
                'product': product
            }
        })
    },
    async assignMediaToProductOption(media, productOptionId) {
        return await $fetch(`${useRuntimeConfig().public.apiURL}/images/${productOptionId}`, {
            method: 'POST',
            body: media
        })
    },
    async updateProduct(product) {
        return await $fetch(`${useRuntimeConfig().public.apiURL}/products/${product.id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: {
                'product': product
            }
        })
    },
    getProductByPermalink(permalink) {
        const product = $fetch(`${useRuntimeConfig().public.apiURL}/products/${permalink}`).catch((error) => error.data)
        return product
    },
    async deleteProduct(product) {
        return await $fetch(`${useRuntimeConfig().public.apiURL}/products/${product.id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
        })
    }
}