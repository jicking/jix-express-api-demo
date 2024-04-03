import express, { Request, Response } from 'express'
import { Contact } from './contact.models'

const router = express.Router()
const contacts: Contact[] = [
	{
		id: 'test123',
		name: 'tobi',
		isDisabled: true,
	},
	{
		id: 'test1234',
		name: 'obito',
		isDisabled: false,
	},
]

router.get('/api/contacts', async (req: Request, res: Response) => {
	/*
		#swagger.tags = ['Contacts']
		#swagger.parameters['activeOnly'] = {
			in: 'query',
			type: 'bool'
		}
		#swagger.responses[200] = {
			content: {
                "application/json": {
                    schema: { $ref: "#/definitions/contactArray" },
                }
            }
        }
    */
	res.send(contacts)
})

router.get('/api/contacts/:id', async (req: Request, res: Response) => {
	/*
		#swagger.tags = ['Contacts']
		#swagger.parameters['id'] = { required: true, in: 'path' }
		#swagger.responses[200] = {
			content: {
                "application/json": {
                    schema: { $ref: "#/definitions/contact" },
                }
            }
        }
    */
	const targetId = req.params['id']
	const result = contacts.find(({ id }) => id === targetId)
	if (!result) {
		res.sendStatus(404)
		return
	}
	res.send(result)
})

router.post('/api/contacts', async (req: Request, res: Response) => {
	/*
		#swagger.tags = ['Contacts']
		#swagger.requestBody = {
            required: true,
			content: {
                "application/json": {
                    schema: { $ref: "#/definitions/contactInput" },
                }
            }
        }
		#swagger.responses[201] = {
			content: {
                "application/json": {
                    schema: { $ref: "#/definitions/contact" },
                }
            }
        }
    */
	res.status(201).send(contacts[0])
})

router.put('/api/contacts/:id', async (req: Request, res: Response) => {
	/*
		#swagger.tags = ['Contacts']
		#swagger.parameters['id'] = { required: true, in: 'path' }
		#swagger.requestBody = {
            required: true,
			content: {
                "application/json": {
                    schema: { $ref: "#/definitions/contactInput" },
                }
            }
        }
		#swagger.responses[200] = {
			content: {
                "application/json": {
                    schema: { $ref: "#/definitions/contact" },
                }
            }
        }
    */
	res.status(200).send(contacts[0])
})

router.delete('/api/contacts/:id', async (req: Request, res: Response) => {
	/*
		#swagger.tags = ['Contacts']
		#swagger.parameters['id'] = { required: true, in: 'path' }
    */
	res.sendStatus(200)
})

export default router
