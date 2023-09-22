import {defineStore} from "pinia";
import UserService from "~/utils/UserService";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            email: ''
        }
    }),
    actions: {
        authenticateUser() {
            UserService.authenticateUser(this.user.email).then((res) => {

            }).catch((err) => {

            })
        },
        createUserSession(login_token) {
            UserService.createUserSession(login_token).then((res) => {
                // auth_token res.data.value.auth_token
                // TODO: save locally somehow
            }).catch((error) => {
                console.log(error)
            })
        }
    }
})