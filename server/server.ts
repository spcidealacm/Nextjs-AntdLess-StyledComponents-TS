import ip from 'ip'
import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

const ip_address = ip.address();
const port = parseInt(process.env.PORT || '3000', 10)
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