import express, { Express, Request, Response, Application } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

import { contactRouter } from './modules/contacts'

// Read .env file
dotenv.config()

const app: Application = express()
const port = process.env.APP_PORT || 3000

// Middlewares
// app.use(express.static('public'))
app.use(express.json())
app.use(morgan('tiny'))

// API Endpoints
app.get('/', (req: Request, res: Response) => {
	res.send('Jix Express API Demo')
})
app.use('/api/contacts', contactRouter)

app.listen(port, () => {
	console.log(`Server: http://localhost:${port}`)
})
