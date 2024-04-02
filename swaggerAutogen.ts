const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' })

const doc = {
	info: {
		version: '0.1.0',
		title: 'Jix Express API Demo',
		description: 'A simple Express API Vertical Slice demo',
	},
	host: 'localhost:3000',
}

const outputFile = './static/swagger.json'
const routes = ['./modules/**/*.router.ts']

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc)
