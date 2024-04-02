import express, { Express, Request, Response, Application } from 'express'
import dotenv from 'dotenv'

//Read .env file
dotenv.config()

const app: Application = express()
const port = process.env.APP_PORT || 3000

app.get('/', (req: Request, res: Response) => {
	res.send('Jix Express API Demo')
})

app.listen(port, () => {
	console.log(`Server: http://localhost:${port}`)
})
