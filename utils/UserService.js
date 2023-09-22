export default {
    async authenticateUser(userEmail) {
        return await $fetch(`${useRuntimeConfig().public.apiURL}/authentication/create`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: {
                'user': {
                    'email': userEmail
                },
            }
        })
    },
    async createUserSession(loginToken) {
        return useAsyncData(() => $fetch(`${useRuntimeConfig().public.apiURL}/sessions/create?login_token=${loginToken}`, {
            method: 'POST'
        }));
    }
}