import { address, port as the_port } from 'utils'
import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

const ip_address = address
const port = the_port
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  }).listen(port)

  // tslint:disable-next-line:no-console
  console.log(
    `> Server listening at http://${ip_address}:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})