import express, { Request, Response } from 'express'

const router = express.Router()

const contacts = [
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
	res.send(contacts)
})

// router.post('/', async (req: Request, res: Response) => {
// 	res.status(201).send('created contact')
// })

export default router
