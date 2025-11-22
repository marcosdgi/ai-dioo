import router from "@adonisjs/core/services/router";

const IAController = () => import('#controllers/ai/ai_controller')

router.group(() => {
    router.get('test', [IAController, 'testConnection'])
    router.post('chat', [IAController, 'chats'])
}).prefix('api/v1/ia')