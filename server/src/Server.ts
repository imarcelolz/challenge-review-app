import fastify from 'fastify'

import { CategoriesController } from './controllers/CategoryController'
import { ReviewsController } from './controllers/ReviewsController'
import { ThemesController } from './controllers/ThemesController'
import { FileProvider } from './lib/FileProvider'
import { Category, Review, Model, Theme } from './Models'
import { ProviderFactory } from './lib/ProviderFactory'

const app = fastify({ logger: true })

const getProvider = new ProviderFactory(true).create

app.get('/', async (request, reply) => {
  reply.send("I'm Here!")
})

app.get('/api/categories', async (request, reply) => {
  const provider = getProvider<Category>('Category')
  const response = new CategoriesController(provider, request).index()

  reply.send(response)
})

app.post('/api/categories', async (request, reply) => {
  const provider = getProvider<Category>('Category')
  const response = new CategoriesController(provider, request).create()

  reply.send(response)
})

app.get('/api/reviews', async (request, reply) => {
  const provider = getProvider<Review>('Review')
  const response = new ReviewsController(provider, request).index()

  reply.send(response)
})

app.post('/api/reviews', async (request, reply) => {
  const provider = getProvider<Review>('Review')
  const response = new ReviewsController(provider, request).create()

  reply.send(response)
})

app.get('/api/themes', async (request, reply) => {
  const provider = getProvider<Theme>('Theme')
  const response = new ThemesController(provider, request).index()

  reply.send(response)
})

app.post('/api/themes', async (request, reply) => {
  const provider = getProvider<Theme>('Theme')
  const response = new ThemesController(provider, request).create()

  reply.send(response)
})

const start = async () => {
  try {
    const port = process.env.PORT || '3000'
    await app.listen(port)

    app.log.info(`server listening on ${port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
