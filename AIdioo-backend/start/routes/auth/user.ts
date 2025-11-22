import router from "@adonisjs/core/services/router";

const UserController = () => import('#controllers/auth/users_controller');

router.group(() => {
    router.post('login', [UserController, 'login'])
}).prefix('api/v1/user')