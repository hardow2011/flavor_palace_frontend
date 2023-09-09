export default {
    async getProducts() {
        const { data, error } = useFetch('http://localhost:3001/products')
        return { data, error }
    }
}