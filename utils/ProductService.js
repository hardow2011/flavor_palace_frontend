export default {
    async getProducts() {
        const products = await $fetch('http://localhost:3000/products').catch((error) => error.data)
        return products
    },
    async createProduct(product) {
        return await $fetch('http://localhost:3000/products', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: {
                'product': product
            }
        })
    }
}