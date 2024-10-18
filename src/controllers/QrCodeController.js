const QrCodeService = require('../services/QrCodeService')
const { formatDate, getTimezone } = require('../utils/formatDate')

async function generateLink (req, res, next) {
  const { link = '' } = req.body
  if (!link) {
    res.status(500).send('Link is missing')
    return
  }

  req.svg = await QrCodeService.drawSVG(link)
  next()
}

async function generateVCard (req, res, next) {
  const { firstName = '', lastName = '', fullName = '', company = '', title = '', phone = '', email = '', link = '' } = req.body
  if (!fullName) {
    res.status(500).send('Full name is missing')
    return
  }

  if (!phone) {
    res.status(500).send('Phone is missing')
    return
  }

  const code = QrCodeService.generateVCard({ firstName, lastName, fullName, company, title, phone, email, link })

  req.svg = await QrCodeService.drawSVG(code)
  next()
}

async function generateSms (req, res, next) {
  const { phone = '', message = '' } = req.body
  if (!phone) {
    res.status(500).send('Phone number is missing')
    return
  }

  if (!message) {
    res.status(500).send('Message body is missing')
    return
  }

  const code = QrCodeService.generateSms({ phone, message })
  req.svg = await QrCodeService.drawSVG(code)
  next()
}

async function generateCall (req, res, next) {
  const { phone = '' } = req.body
  if (!phone) {
    res.status(500).send('Phone is missing')
    return
  }

  const code = QrCodeService.generatePhoneCall(phone)
  req.svg = await QrCodeService.drawSVG(code)
  next()
}

async function generateVCalendar (req, res, next) {
  const { title = '', startDate = '', endDate = '', location = '', description = '', url = '' } = req.body

  if (!title) {
    res.status(500).send('Title is missing')
  }

  const startDateFormatted = formatDate(startDate)
  const endDateFormatter = formatDate(endDate)

  if (!startDateFormatted && !endDateFormatter) {
    res.status(500).send('Date is missing')
  }

  const timezone = getTimezone()

  if (!timezone) {
    res.status(500).send('Timezone was not found')
  }

  const code = QrCodeService.generateVCalendar({ title, description, startDate: startDateFormatted, endDate: endDateFormatter, timezone, location, url })

  req.svg = await QrCodeService.drawSVG(code)
  next()
}

async function generateWifi (req, res, next) {
  const { ssid = '', password = '', encryption = 'WPA', hidden = false } = req.body
  if (!ssid) {
    res.status(500).send('SSID is missing')
    return
  }

  const code = QrCodeService.generateWifi({ ssid, password, encryption, hidden })

  req.svg = await QrCodeService.drawSVG(code)
  next()
}

const QrCodeController = {
  generateLink,
  generateVCard,
  generateSms,
  generateCall,
  generateVCalendar,
  generateWifi
}

module.exports = QrCodeController
