import vine from '@vinejs/vine'


export const LoginValidator = vine.compile(vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6),
}))

export const AccountValidator = vine.compile(
    vine.object({
        email: vine.string().email(),
        password: vine.string().minLength(6),
        age: vine.number().positive().withoutDecimals().min(18),
        fullName: vine.string().minLength(1).trim(),
        sexId: vine.number().positive().withoutDecimals(),
        rolesIds: vine.array(vine.number().positive().withoutDecimals()).minLength(1)
    })
)