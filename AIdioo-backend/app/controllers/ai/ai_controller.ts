import type { HttpContext } from '@adonisjs/core/http'
import IAService from '../../service/ia/ia_service.js'

export default class AisController {
    private iaService = new IAService()

    async testConnection({ response }: HttpContext) {
        const responseService = await this.iaService.testConnection()
        return response.ok(responseService)
    }
    
    async chats({ response }: HttpContext) {
        const responseService = await this.iaService.chats()
        return response.ok(responseService)
    }

}