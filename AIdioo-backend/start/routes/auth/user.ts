import router from "@adonisjs/core/services/router";

const UserController = () => import('#controllers/auth/users_controller');
const user = router.group(() => {
    router.post('/login', [UserController, 'login'])
})

export default user;