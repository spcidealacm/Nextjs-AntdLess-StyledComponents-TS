import ip from 'ip'

export const address = ip.address()
export const port = parseInt(process.env.PORT || '3000', 10)