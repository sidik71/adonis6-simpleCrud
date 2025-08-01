import { HttpContext } from '@adonisjs/core/http'
import Accounting from '#models/accounting'

export default class AccountingsController {
  async index({ view }: HttpContext) {
    const accountings = await Accounting.query().orderBy('date', 'desc')
    return view.render('accountings/index', { accountings })
  }

  async create({ view }: HttpContext) {
    return view.render('accountings/create')
  }

  async store({ request, response }: HttpContext) {
    const data = request.only([
      'name', 'type', 'amount', 'category',
      'date', 'payment_method', 'description', 'reference_number'
    ])
    await Accounting.create(data)
    return response.redirect('/accountings')
  }

  async edit({ params, view }: HttpContext) {
    const accounting = await Accounting.findOrFail(params.id)
    return view.render('accountings/edit', { accounting })
  }

  async update({ params, request, response }: HttpContext) {
    const accounting = await Accounting.findOrFail(params.id)
    const data = request.only([
      'name', 'type', 'amount', 'category',
      'date', 'payment_method', 'description', 'reference_number'
    ])
    accounting.merge(data)
    await accounting.save()
    return response.redirect('/accountings')
  }

  async destroy({ params, response }: HttpContext) {
    const accounting = await Accounting.findOrFail(params.id)
    await accounting.delete()
    return response.redirect('/accountings')
  }
}
