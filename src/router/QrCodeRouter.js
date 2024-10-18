const express = require('express')
const QrCodeController = require('../controllers/QrCodeController')
const handleSvgMiddleware = require('../middleware/handleSvgMiddleware')

const router = express.Router()

router.post('/link', QrCodeController.generateLink, handleSvgMiddleware)
router.post('/vcard', QrCodeController.generateVCard, handleSvgMiddleware)
router.post('/vcalendar', QrCodeController.generateVCalendar, handleSvgMiddleware)
router.post('/call', QrCodeController.generateCall, handleSvgMiddleware)
router.post('/sms', QrCodeController.generateSms, handleSvgMiddleware)
router.post('/wifi', QrCodeController.generateWifi, handleSvgMiddleware)

module.exports = router
