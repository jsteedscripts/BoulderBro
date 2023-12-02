const express = require('express')
const Send = require('../models/sendModel')
const {
    getSends,
    getSend,
    createSend,
    deleteSend,
    updateSend
} = require('../controllers/sendController')
const router = express.Router()

// get all sends
router.get('/', getSends)

// get single send
router.get('/:id', getSend)

// post new send
router.post('/', createSend)

// delete single send
router.delete('/:id', deleteSend)

// update single send
router.patch('/:id', updateSend)

module.exports = router