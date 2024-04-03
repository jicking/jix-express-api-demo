import express, { Response, Application } from 'express'
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
app.get('/', (res: Response) => {
	// #swagger.ignore = true
	res.redirect('/docs')
})
app.use(contactRouter)

// Swagger/OpenAPI
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./static/swagger.json')
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
	console.log(`Server: http://localhost:${port}`)
})
