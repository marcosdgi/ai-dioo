import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Role from '#models/auth/role'

export default class extends BaseSeeder {
  async run() {
    await Role.updateOrCreateMany('id', [
      { id: 1, name: 'Admin' },
      { id: 2, name: 'Dueño' },
      { id: 3, name: 'Cliente' },
      { id: 4, name: 'Socio' },
      { id: 5, name: 'Consultor' },
      { id: 6, name: 'Vendedor' }
    ])
  }
}