const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
res.send('Rent')
})
router.get('/:id', (req, res)=> {
    res.send(req.params.id)
 })
router.post('/:id', (req, res)=> {
req.params.id
})
router.patch('/:id', (req, res)=> {
})
router.delete('/:id', (req, res)=> {
})

module.exports = router