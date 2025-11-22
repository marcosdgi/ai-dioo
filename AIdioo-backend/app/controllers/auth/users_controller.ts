import User from '#models/auth/user'
import { AccountValidator, LoginValidator } from '#validators/auth/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {

    async login({ request, response }: HttpContext) {
        const userInfo = await request.validateUsing(LoginValidator)
        const user = await User.verifyCredentials(userInfo.email, userInfo.password)
        const token = await User.accessTokens.create(user)

        return response.status(200).json(token)
    }

    async loadLoggedUser({ params, response }: HttpContext) {
        const user = await User.query()
            .where('id', params.userId)
            .preload('industry', industry => {
                industry.preload('mainCategory')
                industry.preload('partners')
                industry.preload('sucursals')
            })
            .preload('roles')
            .preload('conversations', conversation => {
                conversation.preload('messages')
            })
            .preload('sex')
            .firstOrFail()
        return response.ok(user)
    }


    async createAccount({ request, response }: HttpContext) {
        const { rolesIds, ...accountInfo } = await request.validateUsing(AccountValidator)
        const user = await User.create(accountInfo)
        await user.related('roles').sync(rolesIds)
        await user.load('sex')
        await user.load('industry')
        await user.load('roles')
        return response.ok(user)
    }
}