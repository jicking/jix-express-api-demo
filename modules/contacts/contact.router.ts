import express, { Request, Response } from 'express'
import { Contact } from './contact.models'

const router = express.Router()
const baseApiUrl = '/api/contacts'
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

/* GET contact list. */
router.get('/api/contacts', async (req: Request, res: Response) => {
	// #swagger.tags = ['Contacts']
	res.send(contacts)
})

router.post('/api/contacts', async (req: Request, res: Response) => {
	// #swagger.tags = ['Contacts']
	res.status(201).send(contacts[0])
})

export default router
