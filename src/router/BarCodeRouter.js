const express = require('express')
const handleSVGMiddleware = require('../middleware/handleSvgMiddleware')

const router = express.Router()
const BarCodeController = require('../controllers/BarCodeController')

router.post('/generate', BarCodeController.generateBarcode, handleSVGMiddleware)

module.exports = router
