import User from '#models/auth/user'
import { LoginValidator } from '#validators/auth/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {

    async login({ request, response }: HttpContext) {
        const userInfo = await request.validateUsing(LoginValidator)
        const usuario = await User.verifyCredentials(userInfo.email, userInfo.password)
        const token = await User.accessTokens.create(usuario)

        return response.status(200).json(token)
    }
}