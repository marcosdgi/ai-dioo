import router from "@adonisjs/core/services/router";

const IAController = () => import('#controllers/ai/ai_controller')
const ia = router.group(() => {
    router.get('test/', [IAController, 'testConnection'])
    router.post('chat/', [IAController, 'chats'])
})

export default ia;