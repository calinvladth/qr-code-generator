const express = require('express')
const QrCodeController = require('../controllers/QrCodeController')

const router = express.Router()

router.post('/link', QrCodeController.generateLink)
router.post('/vcard', QrCodeController.generateVCard)
router.post('/vcalendar', QrCodeController.generateVCalendar)
router.post('/call', QrCodeController.generateCall)
router.post('/sms', QrCodeController.generateSms)
router.post('/wifi', QrCodeController.generateWifi)

module.exports = router
