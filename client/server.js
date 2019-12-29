const fastify = require('fastify')()
const path = require('path')
const fastifyStatic = require('fastify-static')

fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'build')
})

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 5000)

    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
