const express = require('express')
const { formatDate, getTimezone } = require('./utils/formatDate')

const { qrCodeService } = require('./services/QrCodeService')

const app = express()

const port = 3000

app.use(express.json())

app.post('/link', async (req, res) => {
  const { link = '' } = req.body
  if (!link) {
    res.status(500).send('Link is missing')
    return
  }

  const svg = await qrCodeService.generateSVG(link)
  if (!svg) {
    res.status(500).send('Something went wrong')
    return
  }

  res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Length': svg.length })
  res.end(svg)
})

app.post('/vcard', async (req, res) => {
  const { firstName = '', lastName = '', fullName = '', company = '', title = '', phone = '', email = '', link = '' } = req.body
  if (!fullName) {
    res.status(500).send('Full name is missing')
    return
  }

  if (!phone) {
    res.status(500).send('Phone is missing')
    return
  }

  const code = qrCodeService.generateVCard({ firstName, lastName, fullName, company, title, phone, email, link })

  const svg = await qrCodeService.generateSVG(code)
  if (!svg) {
    res.status(500).send('Something went wrong')
    return
  }

  res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Length': svg.length })
  res.end(svg)
})

app.post('/sms', async (req, res) => {
  const { phone = '', message = '' } = req.body
  if (!phone) {
    res.status(500).send('Phone number is missing')
    return
  }

  if (!message) {
    res.status(500).send('Message body is missing')
    return
  }

  const code = qrCodeService.generateSms({ phone, message })
  const svg = await qrCodeService.generateSVG(code)
  if (!svg) {
    res.status(500).send('Something went wrong')
    return
  }

  res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Length': svg.length })
  res.end(svg)
})

app.post('/call', async (req, res) => {
  const { phone = '' } = req.body
  if (!phone) {
    res.status(500).send('Phone is missing')
    return
  }

  const code = qrCodeService.generatePhoneCall(phone)
  const svg = await qrCodeService.generateSVG(code)
  if (!svg) {
    res.status(500).send('Something went wrong')
    return
  }

  res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Length': svg.length })
  res.end(svg)
})

app.post('/vcalendar', async (req, res) => {
  // date format: DD.MM.YYYY-HH:MM
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

  const code = qrCodeService.generateVCalendar({ title, description, startDate: startDateFormatted, endDate: endDateFormatter, timezone, location, url })

  const svg = await qrCodeService.generateSVG(code)
  if (!svg) {
    res.status(500).send('Something went wrong')
  }

  res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Length': svg.length })
  res.end(svg)
})

app.post('/wifi', async (req, res) => {
  const { ssid = '', password = '', encryption = 'WPA', hidden = false } = req.body
  if (!ssid) {
    res.status(500).send('SSID is missing')
    return
  }

  const code = qrCodeService.generateWifi({ ssid, password, encryption, hidden })

  const svg = await qrCodeService.generateSVG(code)
  if (!svg) {
    res.status(500).send('Something went wrong')
    return
  }

  res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Length': svg.length })
  res.end(svg)
})

app.listen(3000, () => {
  console.log(`Server started on port ${port}`)
})
