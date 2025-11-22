import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/buisness/product/category'

export default class extends BaseSeeder {
  async run() {
    // Categorías principales (categoryId debe ser null, no 0)
    const tecnologia = await Category.firstOrCreate(
      { name: 'Tecnología' },
      { name: 'Tecnología', categoryId: null }
    )
    const alimentos = await Category.firstOrCreate(
      { name: 'Alimentos' },
      { name: 'Alimentos', categoryId: null }
    )
    const ropa = await Category.firstOrCreate(
      { name: 'Ropa' },
      { name: 'Ropa', categoryId: null }
    )
    const hogar = await Category.firstOrCreate(
      { name: 'Hogar' },
      { name: 'Hogar', categoryId: null }
    )
    const deportes = await Category.firstOrCreate(
      { name: 'Deportes' },
      { name: 'Deportes', categoryId: null }
    )
    const belleza = await Category.firstOrCreate(
      { name: 'Belleza' },
      { name: 'Belleza', categoryId: null }
    )

    // Subcategorías de Tecnología
    await Category.updateOrCreateMany('name', [
      { name: 'Computadoras', categoryId: tecnologia.id },
      { name: 'Programación', categoryId: tecnologia.id },
      { name: 'Celulares', categoryId: tecnologia.id },
      { name: 'Tablets', categoryId: tecnologia.id },
      { name: 'Accesorios Tecnología', categoryId: tecnologia.id }
    ])

    // Subcategorías de Alimentos
    await Category.updateOrCreateMany('name', [
      { name: 'Bebidas', categoryId: alimentos.id },
      { name: 'Carnes', categoryId: alimentos.id },
      { name: 'Frutas y Verduras', categoryId: alimentos.id },
      { name: 'Panadería', categoryId: alimentos.id }
    ])

    // Subcategorías de Ropa
    await Category.updateOrCreateMany('name', [
      { name: 'Hombre', categoryId: ropa.id },
      { name: 'Mujer', categoryId: ropa.id },
      { name: 'Niños', categoryId: ropa.id },
      { name: 'Zapatos', categoryId: ropa.id }
    ])

    // Subcategorías de Hogar
    await Category.updateOrCreateMany('name', [
      { name: 'Muebles', categoryId: hogar.id },
      { name: 'Decoración', categoryId: hogar.id },
      { name: 'Cocina', categoryId: hogar.id },
      { name: 'Jardín', categoryId: hogar.id }
    ])

    // Subcategorías de Deportes
    await Category.updateOrCreateMany('name', [
      { name: 'Fitness', categoryId: deportes.id },
      { name: 'Fútbol', categoryId: deportes.id },
      { name: 'Basketball', categoryId: deportes.id },
      { name: 'Natación', categoryId: deportes.id }
    ])

    // Subcategorías de Belleza
    await Category.updateOrCreateMany('name', [
      { name: 'Maquillaje', categoryId: belleza.id },
      { name: 'Cuidado de la piel', categoryId: belleza.id },
      { name: 'Perfumes', categoryId: belleza.id },
      { name: 'Cuidado del cabello', categoryId: belleza.id }
    ])
  }
}