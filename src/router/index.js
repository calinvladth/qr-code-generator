const express = require('express')
const QrCodeRouter = require('./QrCodeRouter')
const BarCodeRouter = require('./BarCodeRouter')

const router = express.Router()

router.use('/qrcode', QrCodeRouter)
router.use('/barcode', BarCodeRouter)

module.exports = router
