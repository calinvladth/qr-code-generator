const QrCodeService = require('../services/QrCodeService')
const { formatDate, getTimezone } = require('../utils/formatDate')

async function generateLink (req, res) {
  const { link = '' } = req.body
  if (!link) {
    res.status(500).send('Link is missing')
    return
  }

  const svg = await QrCodeService.drawSVG(link)
  if (!svg) {
    res.status(500).send('Something went wrong')
    return
  }

  res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Length': svg.length })
  res.end(svg)
}

async function generateVCard (req, res) {
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

  const svg = await QrCodeService.drawSVG(code)
  if (!svg) {
    res.status(500).send('Something went wrong')
    return
  }

  res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Length': svg.length })
  res.end(svg)
}

async function generateSms (req, res) {
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
  const svg = await QrCodeService.drawSVG(code)
  if (!svg) {
    res.status(500).send('Something went wrong')
    return
  }

  res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Length': svg.length })
  res.end(svg)
}

async function generateCall (req, res) {
  const { phone = '' } = req.body
  if (!phone) {
    res.status(500).send('Phone is missing')
    return
  }

  const code = QrCodeService.generatePhoneCall(phone)
  const svg = await QrCodeService.drawSVG(code)
  if (!svg) {
    res.status(500).send('Something went wrong')
    return
  }

  res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Length': svg.length })
  res.end(svg)
}

async function generateVCalendar (req, res) {
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

  const svg = await QrCodeService.drawSVG(code)
  if (!svg) {
    res.status(500).send('Something went wrong')
  }

  res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Length': svg.length })
  res.end(svg)
}

async function generateWifi (req, res) {
  const { ssid = '', password = '', encryption = 'WPA', hidden = false } = req.body
  if (!ssid) {
    res.status(500).send('SSID is missing')
    return
  }

  const code = QrCodeService.generateWifi({ ssid, password, encryption, hidden })

  const svg = await QrCodeService.drawSVG(code)
  if (!svg) {
    res.status(500).send('Something went wrong')
    return
  }

  res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Length': svg.length })
  res.end(svg)
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
