import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Sex from '#models/auth/sex'

export default class extends BaseSeeder {
  async run() {
    await Sex.updateOrCreateMany('id', [
      { id: 1, name: 'Masculino' },
      { id: 2, name: 'Femenino' },
      { id: 3, name: 'Otro' },
      { id: 4, name: 'Prefiero no decir' }
    ])
  }
}